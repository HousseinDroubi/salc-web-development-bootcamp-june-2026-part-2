import axios from "axios";
import type {
  updateProfileRequestType,
  updateProfileResponseType,
} from "../../../types/apis/auth/update_profile";
import { AUTH_URL } from "../../constants";
import { setUsernameCookie } from "../../cookies";

const updateProfileApi = async ({
  username,
}: updateProfileRequestType): Promise<updateProfileResponseType> => {
  try {
    const url = `${AUTH_URL}/update_profile`;
    const body = {
      username,
    };

    const response = await axios.put(url, body, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status == 200) {
      setUsernameCookie(response.data.new_username);
    }

    return {
      status: "success",
      text: "Username changed",
      new_username: response.data.new_username,
    };
  } catch (error: any) {
    if (error.response?.status == 403) {
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

export { updateProfileApi };
