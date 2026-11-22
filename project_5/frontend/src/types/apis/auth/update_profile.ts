type updateProfileRequestType = {
  username: string;
};

type updateProfileResponseType = {
  status: "error" | "success";
  text: string;
  new_username?: string;
};

export type { updateProfileRequestType, updateProfileResponseType };
