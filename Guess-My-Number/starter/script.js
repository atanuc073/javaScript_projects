'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent="Correct number";
document.querySelector(".score").textContent=15;
document.querySelector(".number").textContent=10;
document.querySelector(".guess").value=13;
console.log(document.querySelector(".guess").value);
*/

let secretNumber= Math.trunc(Math.random()*20)+1;
let attempt_left =6;
let highScore=0;


document.querySelector(".check").addEventListener('click',function(){
    const guess= Number (document.querySelector(".guess").value );
    console.log(guess,typeof guess);
    document.querySelector('.message').textContent="your selected Number is "+String(guess);
    // when no input
    if(!guess){
        document.querySelector('.message').textContent="Please select a Number";
    }
    // when wins
    else if(guess === secretNumber) {
        document.querySelector('.message').textContent="😃 this is the Correct number";
        document.querySelector("body").style.backgroundColor="green";
        document.querySelector(".number").style.width="30rem";
        document.querySelector('.number').textContent=secretNumber;
        if(attempt_left>highScore){
            highScore=attempt_left;
            document.querySelector(".highscore").textContent=highScore;
        }
        
    }
    // when number too high
    else if(guess>secretNumber){
        if(attempt_left<=0){

            document.querySelector('.message').textContent="Game Over";
            document.querySelector("body").style.backgroundColor="red";
        }
        else{
            document.querySelector('.message').textContent="⚠️ Too high";
            attempt_left--;
            document.querySelector(".score").textContent=attempt_left;
            document.querySelector("body").style.backgroundColor="brown";
        }
    }
    // when Number too Low
    else if(guess<secretNumber){
        if(attempt_left<=0){
            document.querySelector('.message').textContent="Game Over";
            document.querySelector("body").style.backgroundColor="red";
        }
        else{
            document.querySelector('.message').textContent="⚠️ Too Low";
            attempt_left--;
            document.querySelector(".score").textContent=attempt_left;
            document.querySelector("body").style.backgroundColor="brown";
        }
    }

})

document.querySelector(".again").addEventListener("click",function(){
    secretNumber= Math.trunc(Math.random()*20)+1;
    document.querySelector(".message").textContent="Start guessing...";
    attempt_left=6;
    document.querySelector(".score").textContent=6;
    document.querySelector(".guess").value="";
    document.querySelector("body").style.backgroundColor="#222";
    document.querySelector(".number").textContent="?";
    document.querySelector(".number").style.width="15rem";


})