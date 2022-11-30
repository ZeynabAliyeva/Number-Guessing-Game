const msg1 = document.querySelector("#msg1");
const msg2 = document.querySelector("#msg2");
const msg3 = document.querySelector("#msg3");
const result = Math.floor(Math.random()*10) - 1;

let no_of_guesses = 0;
let guesses_num = [];

function play(){
    let user_guess = document.querySelector("#guess").value;
    if(user_guess < 1 || user_guess > 15){
        alert("Enter number between 1 to 15");
    }else{
        guesses_num.push(user_guess);
        no_of_guesses = no_of_guesses + 1;
        if(user_guess < result){
            msg1.textContent = "Your Guess Is Low";
            msg2.textContent = "Number Of Guesses : " + no_of_guesses;
            msg3.textContent = "Guesses Numbers Are : " + guesses_num;
        }else if(user_guess > result){
            msg1.textContent = "Your Guess Is High";
            msg2.textContent = "Number Of Guesses : " + no_of_guesses;
            msg3.textContent = "Guesses Numbers Are : " + guesses_num;
        }
        else if(user_guess == result){
            msg1.textContent = "You Won";
            msg2.textContent = "The Number is : " + result;
            msg3.textContent = "You Guesses : " + no_of_guesses + "Guesses";
        }
    }
}