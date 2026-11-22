import { useState } from "react";
import AuthNavigate from "../components/AuthNavigate";
import Box from "../components/Box";
import Button from "../components/Button";
import Message from "../components/Message";
import TextField from "../components/TextField";
import Title from "../components/Title";
import type { messageProps } from "../types/components/message";
import type { createAccountDto } from "../validations/requests/auth/validate_create_accout";
import CreateAccountValidator from "../validations/requests/auth/validate_create_accout";
import { signUpApi } from "../utils/apis/auth/sign_up_apis";
import type { signUpResponseType } from "../types/apis/auth/sign_up";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmation, setConfirmationPassword] = useState<string>("");
  const [message, setMessage] = useState<messageProps>({
    status: null,
    text: "",
  });

  const signUp = async () => {
    const data: createAccountDto = {
      username,
      password,
      confirmationPassword: confirmation,
    };
    const validation = CreateAccountValidator.safeParse(data);
    if (validation.error) {
      setMessage({
        status: "error",
        text: validation.error?.issues[0].message || "Something went wrong",
      });
      return;
    }

    const result: signUpResponseType = await signUpApi({
      username: username,
      password: password,
    });
    if (result.status == "success") {
      setMessage({
        status: result.status,
        text: result.text,
      });
      setUsername("");
      setPassword("");
      setConfirmationPassword("");
      return;
    }
    setMessage({
      status: result.status,
      text: result.text,
    });
  };

  return (
    <article className="flex f-d-c j-c-c a-i-c m-h-100vh">
      <main className="flex f-d-c j-c-c a-i-c">
        <Title title="Sign Up" />
        <Box height="400px">
          <TextField
            placeholder="Enter your username"
            setText={setUsername}
            value={username}
          />
          <TextField
            placeholder="Enter your password"
            type="password"
            setText={setPassword}
            value={password}
          />
          <TextField
            placeholder="Re-enter your password"
            type="password"
            setText={setConfirmationPassword}
            value={confirmation}
          />
          <Button title="Sign Up" onClick={signUp} />
          <AuthNavigate to="/" text="Already have an account? Login now" />
          <Message status={message.status} text={message.text} />
        </Box>
      </main>
    </article>
  );
};
export default Login;
