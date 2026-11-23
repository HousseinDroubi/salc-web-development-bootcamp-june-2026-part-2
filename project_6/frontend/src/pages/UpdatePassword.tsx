import { useEffect, useState } from "react";
import Box from "../components/Box";
import Button from "../components/Button";
import Message from "../components/Message";
import TextField from "../components/TextField";
import Title from "../components/Title";
import type { messageProps } from "../types/components/message";
import type { updatePasswordDto } from "../validations/requests/auth/validate_update_password";
import updatePasswordValidator from "../validations/requests/auth/validate_update_password";
import type { updatePasswordResponseType } from "../types/apis/auth/update_password";
import { updatePasswordApi } from "../utils/apis/auth/update_password_apis";
import { updateCurrentPage } from "../redux/features/current_page/current_page_slice";
import { useAppDispatch } from "../redux/store/hooks";

const UpdatePassword = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateCurrentPage("update_password"));
  }, []);

  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");
  const [message, setMessage] = useState<messageProps>({
    status: null,
    text: "",
  });

  const updatePassword = async () => {
    const data: updatePasswordDto = {
      old_password: oldPassword,
      new_password: newPassword,
      confirmation_password: confirmationPassword,
    };
    const validation = updatePasswordValidator.safeParse(data);
    if (validation.error) {
      setMessage({
        status: "error",
        text: validation.error?.issues[0].message || "Something went wrong",
      });
      return;
    }
    const result: updatePasswordResponseType = await updatePasswordApi({
      old_password: oldPassword,
      new_password: newPassword,
    });

    if (result.status == "success") {
      setMessage({
        status: "success",
        text: result.text,
      });
      return;
    }
    setMessage({
      status: result.status,
      text: result.text || "Something went wrong",
    });
  };

  return (
    <article className="flex justify-center items-center min-h-screen">
      <main className="flex flex-col content-center items-center">
        <Title title="Update Profile" />
        <Box height="320px">
          <TextField
            type="password"
            placeholder="Enter your old password"
            setText={setOldPassword}
            value={oldPassword}
          />
          <TextField
            type="password"
            placeholder="Enter your new password"
            setText={setNewPassword}
            value={newPassword}
          />
          <TextField
            type="password"
            placeholder="Re-enter your new password"
            setText={setConfirmationPassword}
            value={confirmationPassword}
          />
          <Button title="Update Password" onClick={updatePassword} />
          <Message status={message.status} text={message.text} />
        </Box>
      </main>
    </article>
  );
};
export default UpdatePassword;
