
import { GAME } from "./module/variables.js";
import { Profile, endGame, setHoverEffect, markCell, swapTurns } from "./module/helper.js";
import { checkWin, WIN_COMBINATIONS } from './module/win.js';

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

    /** check winner */
    let flag = checkWin(currentClass, GAME.blockElements).filter((win, index) => {
       if (win){
        
        // add green background to the winner 
        WIN_COMBINATIONS[index].map(i => {
            GAME.blockElements[i].classList.add('win');
        })

        // set the winner
        GAME.winner = GAME.blockElements[WIN_COMBINATIONS[index][0]].cloneNode(true);
        return win !== false;
       }
    });
    
    //  check for win or draw
    if (flag.length){
        endGame(false, GAME.winEl, GAME.drawEl);
        GAME.winnerImg.append(GAME.winner);
    }else{
        console.log("draw");
    }


    GAME.turn = swapTurns(GAME.turn);
    setHoverEffect();
}

