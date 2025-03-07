document.addEventListener("DOMContentLoaded", function () {
    const width = window.innerWidth;
    const height = window.innerHeight * 0.8;

    const sky = d3.select("#sky")
        .attr("width", width)
        .attr("height", height);

    const datePicker = document.getElementById("date-picker");
    const toggleButton = document.getElementById("toggle-mode");

    let isDay = false;

    // Generate random stars (500+)
    const stars = Array.from({ length: 500 }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        name: `Star ${Math.floor(Math.random() * 1000)}`,
        description: "A distant star in the universe."
    }));

    // Render stars
    function renderSky() {
        sky.selectAll("*").remove();

        if (isDay) {
            // Draw Sun in the center for daytime
            sky.append("circle")
                .attr("cx", width / 2)
                .attr("cy", height / 2)
                .attr("r", 50)
                .attr("fill", "yellow");
        } else {
            // Draw stars at night
            sky.selectAll(".star")
                .data(stars)
                .enter()
                .append("circle")
                .attr("class", "star")
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("r", d => d.radius)
                .attr("fill", "white")
                .on("click", (event, d) => {
                    alert(`${d.name}: ${d.description}`);
                });
        }
    }

    // Toggle day/night mode
    toggleButton.addEventListener("click", function () {
        isDay = !isDay;
        document.body.classList.toggle("day-mode");
        renderSky();
    });

    // Change sky based on date
    datePicker.addEventListener("input", function () {
        const date = this.value;
        alert(`Showing sky for ${date} (Feature in progress!)`);
    });

    renderSky();
});
