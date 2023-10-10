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
        let guess = document.getElementById('guess').value.toLowerCase();
        console.log(guess.charCode)
        if (guess.charCodeAt(0) >= 97 && guess.charCodeAt(0) <= 122) {
            if (guess.length > 1) {
                if (guess === theWord) {
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
                            solvedPuzzle(true)
                        }
                    }
                } else {
                    alert("You already guessed that letter!")
                }
            }
        } else {
            alert("Whoa there! Letters only ya dummy Try again.")
        }
        document.getElementById("guess").value="";
    }
}

function randomWords() {
    let words = [
        'stuff',
        'sugar',
        'sweet',
        'happy',
        'money',
        'cat',
        'make',
        "abandoned",
        "able",
        "absolute",
        "adorable",
        "adventurous",
        "academic",
        "acceptable",
        "acclaimed",
        "accomplished",
        "accurate",
        "aching",
        "acidic",
        "acrobatic",
        "active",
        "actual",
        "adept",
        "admirable",
        "admired",
        "adolescent",
        "adorable",
        "adored",
        "advanced",
        "afraid",
        "affectionate",
        "aged",
        "aggravating",
        "aggressive",
        "agile",
        "agitated",
        "agonizing",
        "agreeable",
        "ajar",
        "alarmed",
        "alarming",
        "alert",
        "alienated",
        "alive",
        "all",
        "altruistic",
        "amazing",
        "ambitious",
        "ample",
        "amused",
        "amusing",
        "anchored",
        "ancient",
        "angelic",
        "angry",
        "anguished",
        "animated",
        "annual",
        "another",
        "antique",
        "anxious",
        "any",
        "apprehensive",
        "appropriate",
        "apt",
        "arctic",
        "arid",
        "aromatic",
        "artistic",
        "ashamed",
        "assured",
        "astonishing",
        "athletic",
        "attached",
        "attentive",
        "attractive",
        "austere",
        "authentic",
        "authorized",
        "automatic",
        "avaricious",
        "average",
        "aware",
        "awesome",
        "awful",
        "awkward",
        "babyish",
        "bad",
        "back",
        "baggy",
        "bare",
        "barren",
        "basic",
        "beautiful",
        "belated",
        "beloved",
        "beneficial",
        "better",
        "best",
        "bewitched",
        "big",
        "bighearted",
        "biodegradable",
        "bitesized",
        "bitter",
        "black",
        "discolors",
        "whimsicality",
        "logomachy",
        "rightsize",
        "inspective",
        "ukases",
        "tweezers",
        "imponed",
        "rigmarole",
        "palpable",
        "webwork",
        "covariances",
        "tassels",
        "animi",
        "daubiest",
        "livablenesses",
        "motilities",
        "osmometers",
        "guilefulnesses",
        "headachey",
        "cinematheque",
        "fixed",
        "mutase",
        "stylish",
        "pageants",
        "preadolescent",
        "suburbanise",
        "colorimeters",
        "hackee",
        "baptizes",
        "asarums",
        "squishinesses",
        "eduction",
        "vambraces",
        "deviousnesses",
        "tellurites",
        "topkick",
        "dopa",
        "eastings",
        "grumpinesses",
        "northeaster",
        "decayer",
        "langue",
        "gateaus",
        "charka",
        "telephoned",
        "hexades",
        "myocarditises",
        "unworldliness",
        "washy",
        "decontaminators",
        "attracters",
        "carousel",
        "retails",
        "quininas",
        "dillydallying",
        "improvisatori",
        "laminates",
        "shipyard",
        "reconfining",
        "medakas",
        "hum",
        "literatenesses",
        "eyesores",
        "coelenterates",
        "churchmanships",
        "marshalcy",
        "spirems",
        "mameluke",
        "glints",
        "bialies",
        "mittened",
        "recur",
        "naughtily",
        "protrusions",
        "dextro",
        "dibs",
        "cardinality",
        "stodgy",
        "falcons",
        "adapter",
        "matchstick",
        "persist",
        "specifies",
        "coleopterans",
        "resaluting",
        "worklessnesses",
        "hypertexts",
        "shitheads",
        "noninclusion",
        "arugula",
        "bran",
        "sectioning",
        "atticized",
        "wellnesses",
        "astrocytomata",
        "ostracised",
        "nonbodies",
        "cerise",
        "cyberneticians",
        "redeployments",
        "jarsful",
        "apiculture",
        "alizarins",
        "eruditions",
        "octodecillions",
        "neurologies",
        "reverb",
        "destiny",
        "soliloquises",
        "credulously",
        "hepatomata",
        "apsides",
        "airtightness",
        "psychologist",
        "misyoke",
        "boredom",
        "dicier",
        "doublet",
        "expletory",
        "noncounty",
        "overbuilds",
        "pastedown",
        "scimitars",
        "pioneer",
        "presidentially",
        "legrooms",
        "godown",
        "detick",
        "assuage",
        "minimalisms",
        "casernes",
        "benzodiazepine",
        "unassigned",
        "harlequinade",
        "forceless",
        "barman",
        "selenocentric",
        "synaptic",
        "logrolled",
        "unrent",
        "depleted",
        "quagmire",
        "macrame",
        "catching",
        "ligatured",
        "amplify",
        "reddles",
        "unreformed",
        "crittur",
        "spa",
        "massage",
        "joyous",
        "accident",
        "esquire",
        "pig",
        "professional",
        "delusional",
        "delusion"
    ];
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
        counterDiv.classList.add("yellow");
    } else if(counter === Math.round(numGuesses * .5)) {
        counterDiv.classList.remove("yellow");
        counterDiv.classList.add("orange");
    } else if (counter === 0) {
        counterDiv.classList.remove("orange");
        counterDiv.classList.add("red");
        solvedPuzzle(false)
    }
}

function solvedPuzzle(didWin) {
    document.getElementById('word').textContent = theWordArray.join(' ');
    document.getElementById('guess').disabled = true;
    if (didWin) {
        alert("You have won! Congratulations! The word was " + theWord + "!");
        
    } else {
        alert("You are a massive loser! The word was " + theWord);
    }
}
console.log(theWord);
 