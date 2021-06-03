import InputHandler from "./input.js";
import Player from "./player.js";

let ctx = document.getElementById("gameScreen").getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let playerOne = new Player(GAME_WIDTH, GAME_HEIGHT, 1);
let playerTwo = new Player(GAME_WIDTH, GAME_HEIGHT, 2);

ctx.fillStyle = "#0f0";
playerOne.draw(ctx);
playerTwo.draw(ctx);

let lastTime = 0;

new InputHandler(playerOne, playerTwo);

function gameLoop(timestamp) {
    let dT = timestamp - lastTime;
    lastTime = timestamp;
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    playerOne.update(dT);
    playerTwo.update(dT);
    playerOne.draw(ctx);
    playerTwo.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop()
