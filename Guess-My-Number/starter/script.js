'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent="Correct number";
document.querySelector(".score").textContent=15;
document.querySelector(".number").textContent=10;
document.querySelector(".guess").value=13;
console.log(document.querySelector(".guess").value);
*/

const secretNumber= Math.trunc(Math.random()*20)+1;
let attempt_left =6;
document.querySelector('.number').textContent=secretNumber;
document.querySelector(".check").addEventListener('click',function(){
    const guess= Number (document.querySelector(".guess").value );
    console.log(guess,typeof guess);
    document.querySelector('.message').textContent="your selected Number is "+String(guess);

    if(!guess){
        document.querySelector('.message').textContent="Please select a Number";
    }
    else if(guess === secretNumber) {
        document.querySelector('.message').textContent="😃 this is the Correct number";
        
    }
    else if(guess>secretNumber){
        if(attempt_left<=0){

            document.querySelector('.message').textContent="Game Over";
        }
        else{
            document.querySelector('.message').textContent="⚠️ Too high";
            attempt_left--;
            document.querySelector(".score").textContent=attempt_left;
        }
    }
    else if(guess<secretNumber){
        if(attempt_left<=0){
            document.querySelector('.message').textContent="Game Over";
        }
        else{
            document.querySelector('.message').textContent="⚠️ Too Low";
            attempt_left--;
            document.querySelector(".score").textContent=attempt_left;
        }
    }

})