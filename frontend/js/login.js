const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("loginButton");

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    loginButton.disabled = true;

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    try {

        const response = await fetch("/api/patients/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();

        if (!response.ok) {

            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: data.message
            });

            return;
        }

        Swal.fire({
            icon: "success",
            title: "Welcome!",
            text: data.message,
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            window.location.href = "patient_dashboard.html";
        });

    } catch (error) {

        Swal.fire({
            icon: "error",
            title: "Server Error",
            text: "Unable to connect to the server."
        });

        console.error(error);

    } finally {

        loginButton.disabled = false;

    }
});