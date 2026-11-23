import type { authNavigateProps } from "../types/components/auth_navigate";
import { Link } from "react-router";

const AuthNavigate = ({ to, text }: authNavigateProps) => {
  return (
    <>
      <Link
        to={to}
        className="self-end text-blue transition-transform duration-30 ease-linear hover:translate-x hover:text-red max-[465px]:text-[14px]"
      >
        {text}
      </Link>
    </>
  );
};

export default AuthNavigate;
