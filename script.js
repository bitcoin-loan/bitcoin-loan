let btcPrice = 40000; // Static price simulation

function showLogin() {
    document.getElementById("loginBox").style.display = "block";
}

function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email && password) {
        localStorage.setItem("user", email);
        localStorage.setItem("btcBalance", 0);
        localStorage.setItem("loan", 0);
        window.location.href = "dashboard.html";
    } else {
        alert("Enter login details");
    }
}

