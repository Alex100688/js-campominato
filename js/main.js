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
    console.log(cpuNumber);
    boxCell.addEventListener('click', function(){
        const numberCpu=document.querySelector(".number-cpu");
        let random=getRndInteger(1, 16);
        numberCpu.innerHTML=(`${"Numeri usciti"} ${random}` )
        console.log(random);
       let i=1;
        userNumber=16;
       while (i<=16) {
       if (random===userNumber) {
        console.log("fine gioco");
       }
        i++
       }
        this.classList.add("number-green");
        this.classList.toggle("number-red")
       
    });
    campoBox.append(boxCell);
}