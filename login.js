document.addEventListener("DOMContentLoaded", function() {
    const rememberMeCheckbox = document.querySelector('input[name="remember"]');
    const usernameInput = document.querySelector('input[name="uname"]');
    const passwordInput = document.querySelector('input[name="psw"]');

    if (localStorage.getItem("rememberMe") === "true") {
        usernameInput.value = localStorage.getItem("username");
        passwordInput.value = localStorage.getItem("password");
        rememberMeCheckbox.checked = true;
    }

    const form = document.querySelector('form');
    form.addEventListener("submit", function(event) {
        //event.preventDefault(); 

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === "" || password === "") {
            alert("Te rog completează toate câmpurile!");
            return;
        }
        if (rememberMeCheckbox.checked) {
            localStorage.setItem("rememberMe", "true");
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
        } else {
            localStorage.removeItem("rememberMe");
            localStorage.removeItem("username");
            localStorage.removeItem("password");
        }
    });

    const cancelButton = document.querySelector('.buton_de_cancel');
    cancelButton.addEventListener("click", function() {
        usernameInput.value = "";
        passwordInput.value = "";
        rememberMeCheckbox.checked = false;
    });

    const passwordLink = document.querySelector('.psw a');
    passwordLink.addEventListener("click", function() {
        alert("Te rugăm să contactezi administratorul pentru recuperarea parolei.");
    });
});
