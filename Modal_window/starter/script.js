'use strict';
const modal=document.querySelector(".modal");
const overlay=document.querySelector(".overlay");
const btnCloseModal=document.querySelector(".close-modal");
const btnOpenModal=document.querySelectorAll(".show-modal");
console.log(btnCloseModal);
// for(let i=0; i < btnOpenModal.length;i++)
//     console.log(btnOpenModal[i].textContent);
btnOpenModal.forEach(element => {console.log(element.textContent)});