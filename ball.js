export default class Ball {

    constructor(game) {

        this.game = game;

        this.image = document.getElementById("ball");
        this.radius = 15;

        this.position = {
            x: this.game.gameWidth/2 - this.radius/2,
            y: this.game.gameHeight/2 - this.radius/2,
        };


        this.speed = {x: 10, y: 10}

    }


    draw(ctx) {

        ctx.drawImage(this.image, this.position.x, this.position.y, this.radius, this.radius);
    }

    update(dT) {

        this.position.x += this.speed.x / dT

        this.position.y += this.speed.y / dT


        if (this.position.y + this.radius > this.game.gameHeight || this.position.y < 0) {

            this.speed.y = -this.speed.y;
        }

        if (
            (
                this.position.x <= this.game.playerOne.position.x + this.game.playerOne.width &&
                this.position.y >= this.game.playerOne.position.y &&
                this.position.y + this.radius <= this.game.playerOne.position.y + this.game.playerOne.height
            ) ||

            (
                this.position.x >= this.game.playerTwo.position.x &&
                this.position.y >= this.game.playerTwo.position.y &&
                this.position.y + this.radius <= this.game.playerTwo.position.y + this.game.playerTwo.height
            )
        ) {
            this.speed.x = -this.speed.x;
        } else if (this.position.x < 0 || this.position.x + this.radius > this.game.gameWidth) {
            this.position = {x: this.game.gameWidth/2 - this.radius/2, y: this.game.gameHeight/2 - this.radius/2};
        }
    }
}