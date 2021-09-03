"use strict";

/* let iterator;
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
    console.log("loop");
    iterator++;

    if (iterator < bar) {
       
        document.querySelector("#bar_id").appendChild(bar);
        setTimeout(loop, 300);
    }
} */



const barModel = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 31, 30, 29, 28, 27, 26, 25, 24];
let iteratorForCustomers = 0;

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

  loop();
  
function loop() {
  
    iteratorForCustomers++;
  let queueSize = getNumberOfCustomers();
  barModel.unshift(queueSize);
  setTimeout(loop, 1000);

  displaybarModel();
}

function displaybarModel() {

  for (let i = 0; i < 40; i++) {
    let queueHeight = barModel[i] * 10 + "px";
    document.querySelector(`.bar${40 - i}`).setAttribute("style", `height: ${queueHeight};`);
  }
}
