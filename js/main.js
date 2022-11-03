"use strict";
const buttonPlay=document.querySelector(".btn-play");
buttonPlay.addEventListener('click', function(){
    window.location.reload();
})

const campoBox=document.querySelector(".campo-box");
for (let i = 1; i <=100; i++) {
    const boxCell=document.createElement("div");
    boxCell.innerHTML=i;
    boxCell.classList.add("cell-box");
    boxCell.addEventListener('click', function(){
        this.classList.add("number-green");
        this.classList.toggle("number-red")
       
    });
    campoBox.append(boxCell);
}