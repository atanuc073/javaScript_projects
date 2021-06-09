'use strict';
// Selecting Elements
const score0El=document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El= document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const diceNew=document.querySelector(".btn--new");
const diceRoll=document.querySelector(".btn--roll");
const diceHold=document.querySelector(".btn--hold");

let currentScore=0;
let activeplayer=0;
const scoreArr=[0,0];
//Initial Conditions
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add("hidden");

//Rolling Dice
diceRoll.addEventListener("click",function(){
    // generate random number between 1-6
    const dice=Math.trunc(Math.random()*6)+1;
    // display dice
    diceEl.src=`dice-${dice}.png`;
    diceEl.classList.remove("hidden");

    // check if dice==1 then change to other player
    if(dice !==1){
        currentScore+=dice;

        document.getElementById(`current--${activeplayer}`).textContent=currentScore;



    }else{
        currentScore=0
        activeplayer= activeplayer === 0 ? 1 : 0;

    }


})
