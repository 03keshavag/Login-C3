document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Please fill in both fields!");
        return;
    }
    else if (username === "KESHAVA" && password === "HERO123") {
        window.location.href = "main.html";
        return;
    }
    else if(username === "Hindushree" && password ==="hello123"){
        window.location.href = "main.html";
        return;
    }

    alert("Incorrect Password or Username");
    // Redirect to dashboard (example)
    // window.location.href = "dashboard.html";
    
});
function togglePassword() {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
function togglePassword() {
    let passwordField = document.getElementById("password");
    let eyeIcon = document.getElementById("eye-icon");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.src = "eye-closed-icon.png"; // Change to "eye-close" icon when visible
    } else {
        passwordField.type = "password";
        eyeIcon.src = "eye-icon.png"; // Change back to "eye-open" icon when hidden
    }
}

