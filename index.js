
import { GAME } from "./module/variables.js";
import { Profile, setHoverEffect, markCell } from "./module/helper.js";

// Game Buttons
GAME.startBtn.addEventListener("click", startGame);

Profile()


/** Start Game */
function startGame(){
    setHoverEffect();

    // iterate over cells and add click event
    GAME.blockElements.forEach(cell => {
        cell.addEventListener('click', handleClick, { once: true })
    })

   GAME.startWindow.classList.add("hide");
}

// handler onclick function of the cell
function handleClick(e){
    const cell = e.target;
    const currentClass = GAME.turn ? GAME.Y_CLASS : GAME.X_CLASS;
    markCell(cell, currentClass);
}

