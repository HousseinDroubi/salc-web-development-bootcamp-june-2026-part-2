const validateUsername = (
  username,
  message = "Username must be between 3 and 10 characters",
) => {
  if (username.length < 3 || username.length > 10) {
    return message;
  }
  return null;
};

const validatePassword = (password, type = "Password") => {
  if (password.length < 5 || password.length > 10) {
    return `${type} must be between 5 and 10`;
  }

  return null;
};

const validatePasswordConfirmation = (
  password,
  repassword,
  message = "Password didn't match",
) => {
  if (password !== repassword) {
    return message;
  }
  return null;
};

const validateTodoTitle = (
  title,
  message = "Todo title must be between 10 and 50",
) => {
  if (title.length < 10 || title.length > 50) {
    return message;
  }

  return null;
};
