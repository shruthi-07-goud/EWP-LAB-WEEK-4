function validateForm() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;

    let terms = document.getElementById("terms").checked;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert("Please enter a valid email.");
        return false;
    }

    if (phone.length != 10 || isNaN(phone)) {
        alert("Phone number must contain exactly 10 digits.");
        return false;
    }

    if (password.length < 8) {
        alert("Password must contain at least 8 characters.");
        return false;
    }

    if (!terms) {
        alert("Please accept the Terms and Conditions.");
        return false;
    }

    alert("Registration Successful!");
    return true;
}
