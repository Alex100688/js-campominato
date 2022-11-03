"use strict";
//function//
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
const buttonPlay=document.querySelector(".btn-play");
buttonPlay.addEventListener('click', function(){
    window.location.reload();
})
const campoBox=document.querySelector(".campo-box");
for (let i = 1; i <=100; i++) {
    const boxCell=document.createElement("div");
    boxCell.innerHTML=i;
    boxCell.classList.add("cell-box");
    const cpuNumber=document.querySelector(".cpu-number");
    const cpuRandom=getRndInteger(1, 16);
    cpuNumber.innerHTM=cpuRandom;
    console.log(cpuRandom, cpuNumber);
    boxCell.addEventListener('click', function(){
        
       
    });
    campoBox.append(boxCell);
}