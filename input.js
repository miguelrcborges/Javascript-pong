export default class InputHandler {

    constructor(playerOne, playerTwo) {

        document.addEventListener('keydown', (event) => {

            switch(event.keyCode) {

                case 38:
                    playerTwo.Up();
                    break;

                case 40:
                    playerTwo.Down();
                    break;
                
                case 87:
                    playerOne.Up();
                    break;

                case 83:
                    playerOne.Down();
                    break;
            }

        });

        document.addEventListener('keyup', (event) => {

            switch(event.keyCode) {

                case 38:
                    if (playerTwo.speed < 0) playerTwo.Stop();
                    break;

                case 40:
                    if (playerTwo.speed > 0) playerTwo.Stop();
                    break;
                
                case 87:
                    if (playerOne.speed < 0) playerOne.Stop();
                    break;

                case 83:
                    if (playerOne.speed > 0) playerOne.Stop();
                    break;
            }

        });
    }
}