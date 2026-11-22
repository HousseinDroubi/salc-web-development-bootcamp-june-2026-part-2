import { useState } from "react";
import AuthNavigate from "../components/AuthNavigate";
import Box from "../components/Box";
import Button from "../components/Button";
import Message from "../components/Message";
import TextField from "../components/TextField";
import Title from "../components/Title";
import type { messageProps } from "../types/components/message";
import type { loginDto } from "../validations/requests/auth/validate_login";
import loginAccountValidator from "../validations/requests/auth/validate_login";
import type { loginResponseType } from "../types/apis/auth/login";
import { loginApi } from "../utils/apis/auth/login_apis";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<messageProps>({
    status: null,
    text: "",
  });

  const login = async () => {
    const data: loginDto = {
      username,
      password,
    };
    const validation = loginAccountValidator.safeParse(data);
    if (validation.error) {
      setMessage({
        status: "error",
        text: validation.error?.issues[0].message || "Something went wrong",
      });
      return;
    }

    const result: loginResponseType = await loginApi({
      username: username,
      password: password,
    });
    if (result.status == "success") {
      setUsername("");
      setPassword("");
      navigate("/todos");
      return;
    }
    setMessage({
      status: result.status,
      text: result.text || "Something went wrong",
    });
  };

  return (
    <article className="flex f-d-c j-c-c a-i-c m-h-100vh">
      <main className="flex f-d-c j-c-c a-i-c">
        <Title title="Login" />
        <Box>
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
          <Button title="Login" onClick={login} />
          <AuthNavigate
            to="sign_up"
            text="Don't have an account? Create account"
          />
          <Message status={message.status} text={message.text} />
        </Box>
      </main>
    </article>
  );
};
export default Login;
