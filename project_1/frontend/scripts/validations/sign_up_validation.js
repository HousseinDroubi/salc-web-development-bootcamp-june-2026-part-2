const validateSignUp = (username, password, repassword) => {
  if (username.length < 3 || username.length > 10) {
    return "Username must be between 3 and 10 characters";
  }

  if (password.length < 3 || password.length > 10) {
    return "Password must be between 3 and 10 characters";
  }

  if (repassword.length < 3 || repassword.length > 10) {
    return "Re-Password must be between 3 and 10 characters";
  }

  if (password !== repassword) {
    return "Password didn't match";
  }
  return null;
};
