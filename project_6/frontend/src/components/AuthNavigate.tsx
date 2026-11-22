import type { authNavigateProps } from "../types/components/auth_navigate";
import { Link } from "react-router";

const AuthNavigate = ({ to, text }: authNavigateProps) => {
  return (
    <>
      <Link to={to} className="self-end">
        {text}
      </Link>
    </>
  );
};

export default AuthNavigate;
