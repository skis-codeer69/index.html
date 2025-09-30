const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let rider = { x: 200, y: 200, size: 20 };

document.addEventListener("keydown", move);

function move(e) {
  if (e.key === "ArrowUp") rider.y -= 20;
  if (e.key === "ArrowDown") rider.y += 20;
  if (e.key === "ArrowLeft") rider.x -= 20;
  if (e.key === "ArrowRight") rider.x += 20;
  draw();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "brown";
  ctx.fillRect(rider.x, rider.y, rider.size, rider.size);
}

draw();
