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
