import axios from "axios";
import type {
  signUpRequestType,
  signUpResponseType,
} from "../../../types/apis/auth/sign_up";
import { AUTH_URL } from "../../constants";

const signUpApi = async ({
  username,
  password,
}: signUpRequestType): Promise<signUpResponseType> => {
  try {
    const url = `${AUTH_URL}/create_account`;
    const body: signUpRequestType = {
      username,
      password,
    };

    const response = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return {
      status: "success",
      text: response.data.message,
    };
  } catch (error: any) {
    if ((error as any).response?.status == 403) {
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

export { signUpApi };
