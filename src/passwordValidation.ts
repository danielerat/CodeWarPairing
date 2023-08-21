/** Write a regex that will validate a password
 * At least six characters long
 * contains a lowercase letter
 * contains an uppercase leter
 * contains a digit
 * only contains alphanumeric characters
 */

function validatePassword(password: string) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

  return regex.test(password);
}

// Valid password
console.log(validatePassword("Password789"));
console.log(validatePassword("SecurePass123"));

// Invalid password
console.log(validatePassword("dkg*("));
console.log(validatePassword("123345667766"));
