document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (username === "dhiva" && password === "12345") {
                alert("Login successful!");
                localStorage.setItem("loggedInUser", username); // Store login state
                window.location.href = "index.html";
            } else {
                alert("Invalid username or password!");
            }
        });
    }

    // Redirect logged-in users away from login page
    if (localStorage.getItem("loggedInUser")) {
        if (window.location.pathname.includes("login.html")) {
            window.location.href = "index.html";
        }
    }
});
