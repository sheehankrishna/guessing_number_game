console.log('hi there!');

let min = 0;
let max = 1000;
let ourGuess = 500
let guessCount = 0;

let answerTag = document.getElementById('myanswer');
let mymessageTag = document.getElementById('mymessage');

// answerTag.innerText = ourGuess;



function handleTooHigh() {
    guessCount = guessCount + 1;
    max = ourGuess;
    ourGuess = Math.floor((ourGuess - min) / 2) + min;
    console.log("newGuess=", min, ourGuess, max);

    answerTag.innerText = ourGuess;
}
function handleTooLow() {
    guessCount = guessCount + 1;
    min = ourGuess;
    ourGuess = Math.floor((max - ourGuess) / 2) + ourGuess;
    console.log("newGuess=", min, ourGuess, max);

    answerTag.innerText = ourGuess;
}
function handleCorrect() {
    mymessageTag.innerText = "Yay! Nice number! We got this number in " + guessCount + " guesses!";
}
function handleResetGame() {
    min = 0;
    max = 1000;
    ourGuess = 500;
    guessCount = 0;
    answerTag.innerText = "";
    mymessageTag.innerText = '';

}
function handleStartGame() {
    answerTag.innerText = ourGuess;

}