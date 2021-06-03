import Game from "./game.js";


let ctx = document.getElementById("gameScreen").getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
ctx.fillStyle = "#0f0";

let game = new Game(GAME_WIDTH, GAME_HEIGHT);
game.start()



let lastTime = 0;

function gameLoop(timestamp) {
    let dT = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.refresh(dT,ctx)

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop)
