const validateChangePassword = (old_password, new_password, repassword) => {
  const validations = [
    validatePassword(old_password, "Old password"),
    validatePassword(new_password, "New password"),
    validatePassword(repassword, "Confirmation password"),
    validatePasswordConfirmation(new_password, repassword),
  ];

  const index = validations.findIndex((validation) => validation !== null);
  return index == -1 ? null : validations[index];
};
