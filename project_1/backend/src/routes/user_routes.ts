import { Router } from "express";
import UserController from "../controllers/user_controller.js";
import loginAndCreateAccountMiddleware from "../middlewares/auth/login_and_create_account_middleware.js";
import updateProfileMiddleware from "../middlewares/auth/update_profile_middleware.js";
import tokenMiddleware from "../middlewares/auth/token_middleware.js";
import updatePasswordMiddleware from "../middlewares/auth/update_password_middleware.js";

const router = Router();

router.post(
  "/create_account",
  loginAndCreateAccountMiddleware,
  UserController.createAccount,
);

router.post("/login", loginAndCreateAccountMiddleware, UserController.login);

router.put(
  "/update_profile",
  tokenMiddleware,
  updateProfileMiddleware,
  UserController.updateProfile,
);

router.put(
  "/update_password",
  tokenMiddleware,
  updatePasswordMiddleware,
  UserController.updatePassword,
);
export default router;
