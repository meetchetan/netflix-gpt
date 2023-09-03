export const checkvalidData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    const isNamevaild = /(.*[a-z]){3}/.test(name)
  if (!isEmailValid) return "Email ID is not valid!";
  if (!isPasswordValid) return "Password is not valid!";
  if (!isNamevaild) return "Name must have at least 3 characters";

  return null;
};
