"use strict";

const queueSize = getNumberOfCostumers();

function getNumberOfCostumers(){
    return Math.floor(Math.random()*32);
}

for (let i = 0; i <= 40; i += queueSize){
    let bar = document.createElement("div");
    bar.style.height = `${i}px`;
    bar.querySelector("#bar_id").appendChild(bar);
 }