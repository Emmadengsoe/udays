"use strict";

//lydikoner
function play(mp3_fil) {

    if (mp3_fil.paused) {
        mp3_fil.play();
    } else {
        mp3_fil.pause();
    }
}

//hovedprogram

const lydfil = new Audio("christian.hvorformmd.mp3");

document.getElementById("spil").addEventListener("click", function () {
    play(lydfil);
});



const lydfil2 = new Audio("pernille.fedest.mp3");

document.getElementById("spil2").addEventListener("click", function () {
    play(lydfil2);
});




const lydfil3 = new Audio("tine.sociale.mp3");

document.getElementById("spil3").addEventListener("click", function () {
    play(lydfil3);
});
