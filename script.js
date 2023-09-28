let incorrectGuess = [];
let correctLetters = [];
let theWord = randomWords();
let theWordArray = [];
let winCounter = 0;
const numGuesses = 6;
let counter = numGuesses;
for (const letter of theWord){
    theWordArray.push(letter);
}

setUp();

function setUp() {
    updatePuzzle();
    document.getElementById('guess').addEventListener("keypress", addGuess);
    document.getElementById("counter").textContent = "Guesses left: " + counter;
}

function displayGuessedLetters() {
    let letterGuess = "";
    let resume = true;
    let i = 0;
    while (resume) {
        letterGuess += incorrectGuess[i] + ' ';
        i++;
        if (i === incorrectGuess.length) {
        resume = false; };
    }
    document.getElementById("guessedLetters").textContent = letterGuess;
}

function addGuess(e) {
    if (e.charCode === 13) {
        let guess = document.getElementById('guess').value;
        if (guess.length > 1) {
            if (guess === theWord) {
                updatePuzzle()
                solvedPuzzle(true)
            } else {
                alert("That's not quite right.");
                decrementCounter();
            }
        } else {
            if (!incorrectGuess.includes(guess) && !correctLetters.includes(guess)) {
                if (!theWordArray.includes(guess)) {
                    incorrectGuess.push(guess);
                    displayGuessedLetters();
                    decrementCounter();
                } else {
                    correctLetters.push(guess);
                    updatePuzzle();
                    console.log("Win Counter: ", winCounter)
                    console.log("Word Length: ", theWord.length)
                    if (winCounter === theWord.length) {
                        updatePuzzle()
                        solvedPuzzle(true)
                    }
                }
            } else {
                alert("You already guessed that letter!")
            }
        }
        document.getElementById("guess").value="";
    }
}

function randomWords() {
    let words = ['stuff', 'sugar', 'sweet', 'happy', 'money', 'cat', 'make', "abandoned","able","absolute","adorable","adventurous","academic","acceptable","acclaimed","accomplished",
    "accurate","aching","acidic","acrobatic","active","actual","adept","admirable","admired","adolescent",
    "adorable","adored","advanced","afraid","affectionate","aged","aggravating","aggressive","agile","agitated",
    "agonizing","agreeable","ajar","alarmed","alarming","alert","alienated","alive","all","altruistic","amazing",
    "ambitious","ample","amused","amusing","anchored","ancient","angelic","angry","anguished","animated","annual",
    "another","antique","anxious","any","apprehensive","appropriate","apt","arctic","arid","aromatic","artistic",
    "ashamed","assured","astonishing","athletic","attached","attentive","attractive","austere","authentic",
    "authorized","automatic","avaricious","average","aware","awesome","awful","awkward","babyish","bad","back",
    "baggy","bare","barren","basic","beautiful","belated","beloved","beneficial","better","best","bewitched","big",
    "bighearted","biodegradable","bitesized","bitter","black"];
    let index = Math.floor(Math.random() * words.length);
    return words[index];
}


function updatePuzzle() {
    let puzzle = "";
    winCounter = 0;
    for (let i = 0; i < theWord.length; i++) {
        let letter = theWord[i];
        if (correctLetters.includes(letter)){
            puzzle += letter + " ";
            winCounter++;
        }
        else {
            puzzle += "__ ";
        }
    }
    document.getElementById('word').textContent = puzzle;
}

function decrementCounter() {
    counter--;
    let counterDiv = document.getElementById("counter");
    document.getElementById("counter").textContent = "Guesses left: " + counter;
    if(counter === Math.round(numGuesses * .75)){
        counterDiv.classList.remove("green");
        counterDiv.classList.add("orange");
    } else if(counter === Math.round(numGuesses * .5)) {
        counterDiv.classList.remove("orange");
        counterDiv.classList.add("yellow");
    } else if (counter === 0) {
        counterDiv.classList.remove("yellow");
        counterDiv.classList.add("red");
        solvedPuzzle(false)
    }
}

function solvedPuzzle(didWin) {
    correctLetters = theWordArray;
    document.getElementById('guess').disabled = true;
    if (didWin) {
        alert("You have won! Congratulations");
    } else {
        alert("You are a massive loser! The word was " + theWord);
    }
}

console.log(theWord);
