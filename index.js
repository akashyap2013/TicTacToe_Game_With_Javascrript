
import { GAME } from "./module/variables.js";
import { Profile, setHoverEffect } from "./module/helper.js";

// Game Buttons
GAME.startBtn.addEventListener("click", startGame);

Profile()


/** Start Game */
function startGame(){
    setHoverEffect();
   GAME.startWindow.classList.add("hide");
}

