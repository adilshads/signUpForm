// Checks to make sure passwords match 

function checkPasswordMatch() {
    let user_password = document.getElementById
    ("user_password").value;
    let confirm_password = document.getElementById
    ("confirm_password").value;
    console.log(user_password,confirm_password);
    let message = document.getElementById
    ("message");

    if (user_password.length != 0) {
        if(user_password == confirm_password) {
            message.textContent = "Passwords Match!";
            message.style.backgroundColor = "00FF00";
        } else {
            message.textContent = "Paswords Do Not Match";
            message.style.backgroundColor = "FF0000";
        }
    } else {
        alert("Password fields must be filled.")
        message.textContent = "";
    }
}

// Checks to make sure that the terms and conditions button is clicked before allowing box to be checked.
const termsLink = document.getElementById('terms_link');
const agreeTermsCheckbox = document.getElementById('agree_terms_checkbox');

termsLink.addEventListener('click', function() {
  agreeTermsCheckbox.disabled = false;
});

// Checks to make sure terms and conditions box is checked before clicking "Create Account"
const submitButton = document.getElementById('submit_button');

agreeTermsCheckbox.addEventListener('change', function() {
  submitButton.disabled = !agreeTermsCheckbox.checked;
});


// Checks to make sure privacy policy is clicked before allowing box to be checked 

const privacyLink = document.getElementById('privacy_link');
const agreePrivacyCheckbox = document.getElementById('agree_privacy_checkbox');

privacyLink.addEventListener('click', function() {
  agreePrivacyCheckbox.disabled = false;
});


// Checks to make sure terms and conditions privacy policy is clicked before allowing "Create Account" to be pressed
const termsCheckbox = document.getElementById('agree_terms_checkbox');
const privacyCheckbox = document.getElementById('agree_privacy_checkbox');

termsCheckbox.addEventListener('change', updateSubmitButtonState);
privacyCheckbox.addEventListener('change', updateSubmitButtonState);

function updateSubmitButtonState() {
  submitButton.disabled = !(termsCheckbox.checked && privacyCheckbox.checked);
}


// Client Side Sanitization for emails

function validateForm() {
  var emailInput = document.getElementById('user_email');
  var email = emailInput.value.trim();

  // Remove leading and trailing spaces
  emailInput.value = email;

  // Validate the email format using a regular expression
  var emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  return true; // Submit the form if all checks pass
}

// Password Strength Meter


const passwordInput = document.getElementById('user_password');
const passwordStrengthMeter = document.getElementById('password-strength-meter');

passwordInput.addEventListener('input', function() {
  const password = passwordInput.value;
  const strength = calculatePasswordStrength(password);
  updatePasswordStrengthMeter(strength);
});

function calculatePasswordStrength(password) {
    
  let strength = 0;

  if (password.length >= 8) {
    strength += 20; // Increment strength for meeting minimum length requirement
  }
  if (/[a-z]/.test(password)) {
    strength += 20; // Increment strength for including lowercase letters
  }
  if (/[A-Z]/.test(password)) {
    strength += 20; // Increment strength for including uppercase letters
  }
  if (/\d/.test(password)) {
    strength += 20; // Increment strength for including numbers
  }
  if (/\W/.test(password)) {
    strength += 20; // Increment strength for including special characters
  }
  return strength;
}

function updatePasswordStrengthMeter(strength) {
  passwordStrengthMeter.style.width = strength + '%';

  if (strength < 40) {
    passwordStrengthMeter.style.backgroundColor = 'red';
    passwordStrengthMeter.textContent = 'Weak';
  } else if (strength < 70) {
    passwordStrengthMeter.style.backgroundColor = 'orange';
    passwordStrengthMeter.textContent = 'Medium';
  } else {
    passwordStrengthMeter.style.backgroundColor = 'green';
    passwordStrengthMeter.textContent = 'Strong';
  }
}


// Show Password or Hide Password 

const passwordToggleCheckbox = document.getElementById('password_toggle');

passwordToggleCheckbox.addEventListener('change', function() {
  if (passwordToggleCheckbox.checked) {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});
