var alphabet = [
    'a', 'b', 'c',
    'd', 'e', 'f',
    'g', 'h', 'i',
    'j', 'k', 'l',
    'm', 'n', 'o',
    'p', 'q', 'r',
    's', 't', 'u',
    'v', 'w', 'x',
    'y', 'z'
];
var letterChoice;
var wins=0, losses=0, guesses=10;

var badGuess=[];

//chooses the letter from random point in array
function letterPick(){
    return letterChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
};
letterPick();
console.log(letterChoice);



document.onkeydown = function(event) {
   // var guessHistory = badGuess.join(' ,');
    
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    if (userGuess === letterChoice){
        wins++;
        alert("You're truly a psychic")
        letterPick();
        console.log(letterChoice);

        document.getElementById("wins").innerHTML = "Wins: " + wins; //updates wins
    } 
    else if ( guesses == 0){
        losses++;
        guesses=10;  
        alert("You Lost");
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        
    } else {
        guesses--;
        badGuess.push(userGuess);
        document.getElementById("guessLeft").innerHTML = "Remaining Guesses: " + guesses;
        document.getElementById("guesses").innerHTML = "Your Guess's: " + badGuess

    }

};

window.onload = function () {
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("losses").innerHTML = "Losses: " + losses;
    document.getElementById("guesses").innerHTML = "Your Guess's: " + badGuess;
    document.getElementById("guessLeft").innerHTML = "guessLeft: " + guesses;
}