document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let fullName = document.getElementById("fullname").value.trim();
    let email = document.getElementById("email").value.trim();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirm-password").value.trim();

    if (fullName === "" || email === "" || username === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Registration Successful!");
    window.location.href = "login.html"; // Redirect to login page
});
function togglePassword(inputId, eyeId) {
    let passwordField = document.getElementById(inputId);
    let eyeIcon = document.getElementById(eyeId);

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.src = "eye-icon.png"; // Change to open-eye icon
    } else {
        passwordField.type = "password";
        eyeIcon.src = "eye-closed-icon.png"; // Change to closed-eye icon
    }
}

