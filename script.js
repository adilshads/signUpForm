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

