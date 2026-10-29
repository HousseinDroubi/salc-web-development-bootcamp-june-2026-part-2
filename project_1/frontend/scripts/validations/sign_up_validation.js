const validateSignUp = (username, password, repassword) => {
  const validations = [
    validateUsername(username),
    validatePassword(password),
    validatePassword(repassword, "Confirmation password"),
    validatePasswordConfirmation(password, repassword),
  ];

  const index = validations.findIndex((validation) => validation !== null);
  return index == -1 ? null : validations[index];
};
