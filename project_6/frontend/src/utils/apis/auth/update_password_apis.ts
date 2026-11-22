import axios from "axios";
import type { updateProfileResponseType } from "../../../types/apis/auth/update_profile";
import { AUTH_URL } from "../../constants";
import type { updatePasswordRequestType } from "../../../types/apis/auth/update_password";

const updatePasswordApi = async ({
  old_password,
  new_password,
}: updatePasswordRequestType): Promise<updateProfileResponseType> => {
  try {
    const url = `${AUTH_URL}/update_password`;
    const body = {
      old_password,
      new_password,
    };

    await axios.put(url, body, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return {
      status: "success",
      text: "Password updated",
    };
  } catch (error: any) {
    const error_status_response = error.response?.status;
    if (
      error_status_response == 401 ||
      error_status_response == 404 ||
      error_status_response == 500
    ) {
      return {
        status: "error",
        text: error.response.data.message,
      };
    }
    return {
      status: "error",
      text: error.message,
    };
  }
};

export { updatePasswordApi };
