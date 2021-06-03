export default class Ball {

    constructor(gameWidth, gameHeight) {

        this.image = document.getElementById("ball");
        this.radius = 15;

        this.position = {
            x: gameWidth/2 - this.radius/2,
            y: gameHeight/2 - this.radius/2,
        };

        this.speed = {x: 2, y: 2}

        this.gameWidth = gameWidth
        this.gameHeight = gameHeight

    }


    draw(ctx) {

        ctx.drawImage(this.image, this.position.x, this.position.y, this.radius, this.radius);
    }

    update(dT) {

        this.position.x += this.speed.x

        this.position.y += this.speed.y

        if (this.position.y + this.radius > this.gameHeight || this.position.y < 0) {

            this.speed.y = -this.speed.y
        }
    }
}