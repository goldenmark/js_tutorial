function emailParts(email) {
  let emailProcessed = email.toLowerCase();
  let emailParts = email.split("@");
  return Array.from(emailParts);
}
