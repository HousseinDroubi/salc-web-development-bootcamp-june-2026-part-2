import { useEffect, useState } from "react";
import Box from "../components/Box";
import Button from "../components/Button";
import Message from "../components/Message";
import TextField from "../components/TextField";
import Title from "../components/Title";
import type { messageProps } from "../types/components/message";
import type { updateProfileDto } from "../validations/requests/auth/validate_update_profile";
import updateProfileValidator from "../validations/requests/auth/validate_update_profile";
import { updateProfileApi } from "../utils/apis/auth/update_profile_apis";
import type { updateProfileResponseType } from "../types/apis/auth/update_profile";
import { getUsernameFromCookie } from "../utils/cookies";
import { useAppDispatch } from "../redux/store/hooks";
import { updateCurrentPage } from "../redux/features/current_page/current_page_slice";

const UpdateProfile = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(updateCurrentPage("update_profile"));
  }, []);

  const [username, setUsername] = useState<string>("");
  const [message, setMessage] = useState<messageProps>({
    status: null,
    text: "",
  });

  const updateProfile = async () => {
    const data: updateProfileDto = {
      username,
    };
    const validation = updateProfileValidator.safeParse(data);
    if (validation.error) {
      setMessage({
        status: "error",
        text: validation.error?.issues[0].message || "Something went wrong",
      });
      return;
    }

    const result: updateProfileResponseType = await updateProfileApi({
      username: username,
    });

    if (result.status == "success") {
      setUsername(result.new_username!);
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

  useEffect(() => {
    setUsername(getUsernameFromCookie());
  }, []);

  return (
    <article className="flex f-d-c j-c-c a-i-c m-h-100vh">
      <main className="flex f-d-c j-c-c a-i-c">
        <Title title="Update Profile" />
        <Box height="200px">
          <TextField
            placeholder="Enter your username"
            setText={setUsername}
            value={username}
          />
          <Button title="Update Password" onClick={updateProfile} />
          <Message status={message.status} text={message.text} />
        </Box>
      </main>
    </article>
  );
};
export default UpdateProfile;
