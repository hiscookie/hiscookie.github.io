const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 600;
canvas.height = 400;

let player = {
    x: 50,
    y: canvas.height / 2 - 25,
    width: 50,
    height: 50,
    speed: 5
};

let obstacles = [];
let score = 0;
let gameRunning = true;

function createObstacle() {
    let size = Math.random() * 40 + 20;
    let obstacle = {
        x: canvas.width,
        y: Math.random() * (canvas.height - size),
        width: size,
        height: size,
        speed: 3
    };
    obstacles.push(obstacle);
}

function movePlayer(event) {
    if (event.key === "ArrowUp" && player.y > 0) {
        player.y -= player.speed;
    }
    if (event.key === "ArrowDown" && player.y + player.height < canvas.height) {
        player.y += player.speed;
    }
}

function updateGame() {
    if (!gameRunning) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "blue";
    ctx.fillRect(player.x, player.y, player.width, player.height);
    
    obstacles.forEach((obs, index) => {
        obs.x -= obs.speed;
        ctx.fillStyle = "red";
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
        
        if (obs.x + obs.width < 0) {
            obstacles.splice(index, 1);
            score++;
        }
        
        if (
            player.x < obs.x + obs.width &&
            player.x + player.width > obs.x &&
            player.y < obs.y + obs.height &&
            player.y + player.height > obs.y
        ) {
            gameOver();
        }
    });

    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);

    requestAnimationFrame(updateGame);
}

function gameOver() {
    gameRunning = false;
    alert("Game Over! Your Score: " + score);
    document.location.reload();
}

setInterval(createObstacle, 1000);
document.addEventListener("keydown", movePlayer);
updateGame();
