type UserJwtPayloadType = {
  id: string;
};

type UserType = UserJwtPayloadType & {
  username: string;
  password: string;
  added_at: Date;
};

export type { UserType, UserJwtPayloadType };
