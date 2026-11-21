type loginRequestType = {
  username: string;
  password: string;
};

type loginResponseType = {
  status: "error" | "success";
  text?: string;
};

export type { loginRequestType, loginResponseType };
