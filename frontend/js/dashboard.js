async function loadPatientData() {
    try {
        const response = await fetch("/api/patients/me");

        if (response.status === 401) {
            window.location.href = "patient_login.html";
            return;
        }

        if (!response.ok) {
            throw new Error("Failed to load patient data.");
        }

        const patient = await response.json();

        document.getElementById("patientName").textContent = patient.fullName;
        document.getElementById("welcomeName").textContent = `${patient.fullName} 👋`;

        const initials = patient.fullName
            .split(" ")
            .map(name => name[0])
            .join("")
            .toUpperCase();

        document.getElementById("patientAvatar").textContent = initials;

    } catch (error) {
        console.error(error);

        Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Unable to load your dashboard."
        });
    }
}


const logoutBtn = document.querySelector(".logout");

logoutBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    try {
        const response = await fetch("/api/patients/logout", {
            method: "POST"
        });

        if (!response.ok) {
            throw new Error("Logout failed.");
        }

        window.location.href = "patient_login.html";

    } catch (error) {
        console.error(error);

        Swal.fire({
            icon: "error",
            title: "Logout Failed",
            text: "Please try again."
        });
    }
});

loadPatientData();

