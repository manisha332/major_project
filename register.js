const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;

    const user = {
        name,
        email,
        password,
        phone
    };

    localStorage.setItem(email, JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href = "login.html";

});