type jwt_payload = {
  username: string;
};

type user = jwt_payload & {
  password: string;
};

export type { user, jwt_payload };
