type jwt_payload = {
  id: number;
  username: string;
};

type user = jwt_payload & {
  password: string;
};

export type { user, jwt_payload };
