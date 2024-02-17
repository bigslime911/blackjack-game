let firstCard = 10;
let secondCard = 12;
let sum = firstCard + secondCard ;
let hasBlackJack = false;
let isAlive = true;
let message = '';




function startEl(){
    if (sum <= 20){
        message = "Do yo ant to draw a new card?";
    } else if (sum === 21){
        message = "woohoo, You've Blackjack.";
        hasBlackJack = true;
    } else {
        message = "You're out of the game.";
        isAlive = false;
    }
    
    document.getElementById("message-el").textContent = message;
    document.getElementById("card-el").textContent = `Cards: ${firstCard} ${secondCard}`;
    document.getElementById("sum-el").textContent = `Sum: ${sum}`;
    
    
}

function newCard(){
    document.querySelector("body").textContent= "Drawing a new card from the deck"
}