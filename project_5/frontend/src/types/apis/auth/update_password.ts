type updatePasswordRequestType = {
  old_password: string;
  new_password: string;
};

type updatePasswordResponseType = {
  status: "error" | "success";
  text: string;
};

export type { updatePasswordRequestType, updatePasswordResponseType };
