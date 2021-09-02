"use strict";

const queueSize = getNumberOfCostumers();

function getNumberOfCostumers(){
    return Math.floor(Math.random()*32);
}



for (let i = 0; i <= 32; i += queueSize){
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${i}px`;
    document.querySelector("#bar_id").appendChild(bar);
 }