export default class Player {
  constructor(gameWidth, gameHeight, player) {
    this.width = 15;
    this.height = 100;
    this.gameHeight = gameHeight
    let startWidth;

    if (player === 1) {
      startWidth = 5;
    } else {
      startWidth = gameWidth - this.width - 5;
    }

    this.position = {
      x: startWidth,
      y: gameHeight / 2 - this.height / 2
    };


    this.speed = 0;
    this.maxspeed = 5;


  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }


  Up() {
    this.speed = -this.maxspeed;
  }

  Down() {
    this.speed = this.maxspeed;
  }

  
  Stop() {
    this.speed = 0;
  }

  update(dT) {

    if (!dT) return;

    this.position.y += this.speed;

    if (this.position.y < 5) {
      this.position.y = 5;

    } else if (this.position.y + this.height > this.gameHeight - 5) {
        this.position.y = this.gameHeight - 5 - this.height;
    }
  
  }
}
