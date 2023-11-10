// email validation helper 
export function validateEmail(email) {
  console.log('test')
  const re =
  /.+@.+\..+/;
  return re.test(String(email).toLowerCase());
}
