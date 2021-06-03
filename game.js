import InputHandler from "./input.js";
import Player from "./player.js";
import Ball from "./ball.js";


export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;

        this.gameHeight = gameHeight

    }

    start() {
        this.playerOne = new Player(this.gameWidth, this.gameHeight, 1);
        this.playerTwo = new Player(this.gameWidth, this.gameHeight, 2);
        this.ball = new Ball(this.gameWidth, this.gameHeight);
        new InputHandler(this.playerOne, this.playerTwo);

    }

    refresh(dT, ctx) {
        this.playerOne.update(dT);
        this.playerTwo.update(dT);
        this.ball.update(dT)
        this.playerOne.draw(ctx);
        this.playerTwo.draw(ctx);
        this.ball.draw(ctx);
    }
}