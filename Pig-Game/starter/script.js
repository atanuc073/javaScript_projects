'use strict';
// Selecting Elements
const player0El=document.querySelector(".player--0");
const player1El=document.querySelector(".player--1");
const score0El=document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El= document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const diceEl = document.querySelector(".dice");
const diceNew=document.querySelector(".btn--new");
const diceRoll=document.querySelector(".btn--roll");
const diceHold=document.querySelector(".btn--hold");
const  btnNew = document.querySelector(".btn--new");


let scoreArr,playing,currentScore,activeplayer;
//Initial Conditions
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add("hidden");
//starting Conditions
const init = function(){
    scoreArr=[0,0]
    playing=true
    currentScore=0;
    activeplayer=0;

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

};
init();

//Rolling Dice
diceRoll.addEventListener("click",function(){
    if(playing){
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
            player0El.classList.toggle("player--active");
            player1El.classList.toggle("player--active");
            currentScore=0;
            document.getElementById(`current--${activeplayer}`).textContent=0;
            activeplayer= activeplayer === 0 ? 1 : 0;
            

        }
    }


})

diceHold.addEventListener("click",function(){
    if(playing){
        scoreArr[activeplayer]+=currentScore;
        currentScore=0;
        if(scoreArr[activeplayer]<100){
            document.querySelector(`#score--${activeplayer}`).textContent=scoreArr[activeplayer];
            player0El.classList.toggle("player--active");
            player1El.classList.toggle("player--active");
            document.getElementById(`current--${activeplayer}`).textContent=0;
            activeplayer= activeplayer === 0 ? 1 : 0;
        }
        else{
            playing=false
            document.querySelector(`#score--${activeplayer}`).textContent=100
            document.querySelector(`.player--${activeplayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activeplayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');

        }
    }
})

btnNew.addEventListener('click',init);
