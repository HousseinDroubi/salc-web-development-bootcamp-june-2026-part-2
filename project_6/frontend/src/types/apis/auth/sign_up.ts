type signUpRequestType = {
  username: string;
  password: string;
};

type signUpResponseType = {
  status: "error" | "success";
  text: string;
};

export type { signUpRequestType, signUpResponseType };
