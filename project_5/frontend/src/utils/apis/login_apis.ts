import axios from "axios";
import type {
  loginRequestType,
  loginResponseType,
} from "../../types/apis/login";
import { AUTH_URL } from "../constants";
import { setUsernameCookie } from "../cookies";

const loginApi = async ({
  username,
  password,
}: loginRequestType): Promise<loginResponseType> => {
  try {
    const url = `${AUTH_URL}/login`;
    const body = {
      username,
      password,
    };

    const response = await axios.post(url, body, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });

    setUsernameCookie(response.data.username);
    return {
      status: "success",
      text: "",
    };
  } catch (error: any) {
    if (error.response?.status == 401) {
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

export { loginApi };
