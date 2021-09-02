"use strict";

let iterator;
const queueSize = getNumberOfCostumers();

function getNumberOfCostumers(){
    return Math.floor(Math.random()*32);
}

bar();

function bar() {

for (let i = 0; i <= 32; i += queueSize){
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${i}px`;
    document.querySelector("#bar_id").appendChild(bar);
 }

 loop()

}

function loop() {
    iterator++;

    if (iterator < bar) {
       
        document.querySelector("#bar_id").appendChild(bar);
        setTimeout(loop, 300);
    }
}
