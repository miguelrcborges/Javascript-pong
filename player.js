export default class Player {
  constructor(game, player) {
    this.game = game

    this.width = 15;
    this.height = 100;

    let startWidth;

    if (player === 1) {
      startWidth = 5;
    } else {
      startWidth = this.game.gameWidth - this.width - 5;
    }

    this.position = {
      x: startWidth,
      y: this.game.gameHeight / 2 - this.height / 2
    };


    this.speed = 0;
    this.maxspeed = 25;


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

    this.position.y += this.speed / dT;

    if (this.position.y < 5) {
      this.position.y = 5;

    } else if (this.position.y + this.height > this.game.gameHeight - 5) {
        this.position.y = this.game.gameHeight - 5 - this.height;
    }
  
  }
}
