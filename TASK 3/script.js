let count = 0;

document.getElementById("loginForm").onsubmit = function(e) {
    e.preventDefault();

    let email = email.value;
    let pass = password.value;

    if (!email.includes("@") || pass.length < 6 || !pass.includes("#")) {
        count++;
        errorMessage.innerHTML = "Invalid Email or Password!";
        wrongCount.innerHTML = "Wrong Count: " + count;
    } else {
        errorMessage.innerHTML = "Login Successful!";
        wrongCount.innerHTML = "";
    }
};