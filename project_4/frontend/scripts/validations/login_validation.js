const validateLogin = (username, password) => {
  const validations = [validateUsername(username), validatePassword(password)];

  const index = validations.findIndex((validation) => validation !== null);
  return index == -1 ? null : validations[index];
};
