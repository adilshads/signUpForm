// Import jsdom-global to simulate the DOM environment
import 'jsdom-global/register';

// Assuming you have a function called `checkPasswordMatch` that checks if passwords match
function checkPasswordMatch(user_password, confirm_password) {
  return user_password === confirm_password;
}

// Jest unit test
test('Passwords should match', () => {
  const passwordInput = document.createElement('input');
  const confirmPasswordInput = document.createElement('input');

  passwordInput.value = 'Password123!';
  confirmPasswordInput.value = 'Password123!';

  expect(checkPasswordMatch(passwordInput.value, confirmPasswordInput.value)).toBe(true);
});

test('Passwords should not match', () => {
  const passwordInput = document.createElement('input');
  const confirmPasswordInput = document.createElement('input');

  passwordInput.value = 'Password123!';
  confirmPasswordInput.value = 'DifferentPassword123!';

  expect(checkPasswordMatch(passwordInput.value, confirmPasswordInput.value)).toBe(false);
});
