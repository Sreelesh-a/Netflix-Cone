export const checkLoginValid = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return <p className="text-xs">Email ID is not valid</p>;
  if (!isPasswordValid)
    return (
      <p className="text-xs">
        The password should have at least one digit, <br /> one lowercase
        letter, one uppercase letter, and be
        <br /> at least 8 characters long.
      </p>
    );

  return null;
};
