document.getElementById("magicButton").addEventListener("click", function() {
    document.body.style.backgroundColor = getRandomColor();
    document.getElementById("content").innerHTML = "<p>Something magical just happened!</p>";
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
