const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = JSON.parse(localStorage.getItem(email));

    if(user && user.password === password){

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    }else{

        alert("Invalid Email or Password");

    }

});