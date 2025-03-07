document.addEventListener("DOMContentLoaded", function () {
    const constellations = document.querySelectorAll(".constellation");
    const infoBox = document.getElementById("info-box");
    const toggleButton = document.getElementById("toggle-mode");
    const datePicker = document.getElementById("date-picker");

    // Show constellation info
    constellations.forEach(star => {
        star.addEventListener("click", function () {
            const name = this.getAttribute("data-name");
            const description = this.getAttribute("data-description");
            infoBox.textContent = `${name}: ${description}`;
            infoBox.style.display = "block";
            setTimeout(() => { infoBox.style.display = "none"; }, 3000);
        });
    });

    // Toggle day/night mode
    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("day-mode");
    });

    // Date picker event (just changes sky slightly for now)
    datePicker.addEventListener("input", function () {
        const date = this.value;
        alert(`Displaying sky for ${date} (Feature in progress!)`);
    });
});

