const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const isEmailValid = (email) => {
  return email.toLowerCase().match(EMAIL_REGEX);
};
