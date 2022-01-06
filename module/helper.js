
import { GAME } from "./variables.js";

/** All the helper functions */

/** use to set selected user on start game screen */
export function Profile(){
    GAME.selectedProfile.forEach(img => {
       img.addEventListener("click", e => {
           let target = e.target.dataset.id;
           removeImgSelection(GAME.selectedProfile);
           document.querySelector(`[data-id='${target}']`).classList.add("selected");

        //    swap values if user selecte second profile
        if (target == 'x2' || target == 'y2'){
            GAME.X_CLASS = "x2",
            GAME.Y_CLASS = "y2";
        }

        // set turns
        GAME.turn = target == 'y' || target == 'y2' ? true : false;

       });
    });
}


function removeImgSelection(img){
    [].forEach.call(img, function(el){
        el.classList.remove("selected");
    })
}