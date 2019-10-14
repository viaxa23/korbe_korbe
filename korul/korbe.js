"use strict";

let mozgat = function() {}
let pos = 0;
let elem_1 = document.getElementById("animate1");
let elem_2 = document.getElementById("animate2");
let elem_3 = document.getElementById("animate3");
let elem_4 = document.getElementById("animate4");

function myStop(){
    window.clearInterval(mozgat);
}

function myMove(){


mozgat = window.setInterval(frame, 2);

function frame(){
    if (pos < 350) {
        pos++;
        lefttop(-1; 0; 350);
        elem_1.style.top = `${pos}px`;
        elem_2.style.left = `${350 - pos}px`;
        elem_3.style.left = `${pos}px`;
        elem_4.style.top = `${350 - pos}px`;
    } else if(pos < 700) {
        pos++;
        lefttop()
        elem_1.style.left = `${pos - 350}px`;   
        elem_2.style.top = `${pos - 350}px`;   
        elem_3.style.top = `${700 - pos}px`;   
        elem_4.style.left = `${700 - pos}px`;   
      }
     else if(pos < 1050) {
        pos++;
        topleft(1, 1050, 700);
        elem_1.style.top = `${1050 - pos}px`;   
        elem_2.style.left = `${pos - 700}px`;   
        elem_3.style.left = `${1050 - pos}px`;   
        elem_4.style.top = `${pos - 700}px`;   
      }
     else if(pos < 1400) {
        pos++;
        lefttop(1, 1400, 1050);
        elem_1.style.left = `${1400 - pos}px`;   
        elem_2.style.top = `${1400 - pos}px`;   
        elem_3.style.top = `${pos - 1050}px`;   
        elem_4.style.left = `${pos - 1050}px`;   
      }
      else {
          window.clearInterval(mozgat);
      }
}

}



function topleft(elojel, a, b) {
    elem_1.style.top = `${elojel(a - ertek)}px`;   
    elem_2.style.left = `${elojel(a - ertek)}px`;   
    elem_3.style.top = `${elojel(ertek - b)}px`;   
    elem_4.style.left = `${elojel(ertek - b)}px`;
}

function lefttop(elojel, a, b){
    elem_1.style.left = `${elojel(a - ertek)}px`;   
    elem_2.style.top = `${elojel(ertek - b)}px`;   
    elem_3.style.left = `${elojel(ertek - b)}px`;   
    elem_4.style.top = `${elojel(a - ertek)}px`;
}
