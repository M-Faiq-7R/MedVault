const registerForm = document.getElementById("registerForm");
const submitButton = registerForm.querySelector("button[type='submit']");

registerForm.addEventListener("submit", async (event) => {

    event.preventDefault();

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();

    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const cnic = document.getElementById("cnic").value.trim();

    const gender = document.getElementById("gender").value;
    const dateOfBirth = document.getElementById("dateOfBirth").value;

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const fullName = `${firstName} ${lastName}`;

    // Client-side validation
    if (password !== confirmPassword) {
        await Swal.fire({
            icon: "error",
            title: "Passwords do not match"
        });
        return;
    }

    submitButton.disabled = true;
    submitButton.textContent = "Creating Account...";

    try {

        const response = await fetch("/api/patients/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fullName,
                email,
                password,
                phone,
                cnic,
                gender,
                dateOfBirth
            })
        });

        const data = await response.json();

        if (response.ok) {

            await Swal.fire({
                icon: "success",
                title: "Registration Successful",
                text: data.message,
                confirmButtonText: "Continue"
            });

            registerForm.reset();

            window.location.href = "patient_login.html";
            return;

        }

        await Swal.fire({
            icon: "error",
            title: "Registration Failed",
            text: data.message
        });

    } catch (error) {

        console.error(error);

        await Swal.fire({
            icon: "error",
            title: "Something went wrong",
            text: "Please try again later."
        });

    }

    // Only reaches here if we're staying on this page
    submitButton.disabled = false;
    submitButton.textContent = "Create Account";

});