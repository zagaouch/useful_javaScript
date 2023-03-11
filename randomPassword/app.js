// JavaScript file (app.js)
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const specialChars = '!@#$%^&*()_+-={}[]\\|:;"\'<>,.?/';

function generatePassword() {
  // Get user input values
  const length = parseInt(document.getElementById('length').value);
  const lowercase = document.getElementById('lowercase').checked;
  const uppercase = document.getElementById('uppercase').checked;
  const numbers = document.getElementById('numbers').checked;
  const special = document.getElementById('special').checked;

  // Build character set based on user input
  let chars = '';
  if (lowercase) {
    chars += lowercaseChars;
  }
  if (uppercase) {
    chars += uppercaseChars;
  }
  if (numbers) {
    chars += numberChars;
  }
  if (special) {
    chars += specialChars;
  }

  // Generate random password using character set
  let password = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    password += chars[index];
  }

  // Set generated password in textarea
  document.getElementById('password').value = password;
}
