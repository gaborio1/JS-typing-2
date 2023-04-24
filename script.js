// IMPORT WORDS ARRAYS
// import common100 from './words.js';
import {
    common100,
    common200,
    jsReserved,
    bigrams,
    trigrams,
    quadrigrams,
    jsObjPropMeth,
    punctMarks,
    topRow,
    bottomRow,
    homeRow,
    keyLevelsArray,
    sentences,
    numbers,
} from "./words.js";

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 ELEMENT VARIABLES 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const card = document.getElementById("card--main"); // CARD CONTAINED WITHIN SCENE

const container = document.getElementById("container");
const controlsContainer = document.getElementById("controls-container");
const statsContainerLeft = document.getElementById("stats-container__left");
const statsContainerRight = document.getElementById("stats-container__rigth");
const colourCodeContainer = document.getElementById("colour-code-container");

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰   CONTROL PANEL   🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// DIFFICULTY
const difficultyRadios = document.getElementsByClassName("difficulty-radio");
// LINE LENGTH SLIDER
const slider = document.getElementById("length");
const lengthDisplaySpan = document.getElementById("length-display-span");
const sliderWrap = document.getElementById("slider-wrap");
// TOGGLES
const punctuationToggle = document.getElementById("punctuation-toggle");
const punctuationToggleBeginner = document.getElementById(
    "punctuation-toggle__beginner"
);
const capitalToggle = document.getElementById("capital-toggle");
const capitalToggleBeginner = document.getElementById(
    "capital-toggle__beginner"
);
const numbersToggle = document.getElementById("numbers-toggle");
const enterToggle = document.getElementById("enter-toggle");
const enterToggleBeginner = document.getElementById("enter-toggle__beginner");
const soundToggle = document.getElementById("sound-toggle");
const colourThemeElements = document.getElementsByClassName("colour-theme");
const themeToggle = document.getElementById("theme-toggle");
const timerToggle = document.getElementById("timer-toggle");
// ELEMENTS THAT FADE WHILE TIMER IS ON
const fadeWithTimerElements =
    document.getElementsByClassName("fadeout-with-timer");
// FLIP BUTTON (APP/INFO)
const flipButtons = document.getElementsByClassName("flip-button--main");
// CONTROL PANEL INPUTS/TOGGLE BUTTONS THAT ARE DISABLED DURING TIMER
const disabledDuringTimer = document.getElementsByClassName(
    "disabled-during-timer"
);
const instructionsContainer = document.getElementById("instructions-container");

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰   BEGINNER CONTROL PANEL   🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// ALL LEVEL BUTTONS
const levelButtons = document.getElementsByClassName("btn--level");
// INDIVIDUAL LEVEL BUTTONS
const level_1 = document.getElementById("level-1");
const level_2 = document.getElementById("level-2");
const level_3 = document.getElementById("level-3");
const level_4 = document.getElementById("level-4");
const level_5 = document.getElementById("level-5");
const level_6 = document.getElementById("level-6");
const level_7 = document.getElementById("level-7");
const level_8 = document.getElementById("level-8");
const level_9 = document.getElementById("level-9");
// LEVEL BUTTON STATE BOOLEANS
let level_1_On = false;
let level_2_On = false;
let level_3_On = false;
let level_4_On = false;
let level_5_On = false;
let level_6_On = false;
let level_7_On = false;
let level_8_On = false;
let level_9_On = false;

const beginnerShowButton = document.getElementById(
    "beginner-control-show-button"
);
const beginnerHideButton = document.getElementById(
    "beginner-control-hide-button"
);

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰   TEXT FIELDS   🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// WRAP CONTAINING BOTH TEXT FIELDS
const textFieldsWrap = document.getElementById("text-fields-wrap");

const textSpanContainerActive = document.getElementById("text-span-active");
const textSpanContainerNextParagraph =
    document.getElementById("text-span-next-p");
const textInput = document.getElementById("input");
const startButton = document.getElementById("btn--start");
const refreshIcon = document.getElementById("refresh-icon");

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰   STATS / KEYBOARD   🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// SPEEDOMETER DISPLAY SPAN
const speedSpan = document.getElementById("speed-span");
// GREEN / RED COUNTER SPANS
const greenCounterSpan = document.getElementById("green-counter-span");
const redCounterSpan = document.getElementById("red-counter-span");
const orangeCounterSpan = document.getElementById("orange-counter-span");
const keystrokesSpan = document.getElementById("keystrokes-span");
const accuracySpan = document.getElementById("accuracy-span");
// KEYBOARD
const keyboard = document.getElementById("keyboard");
const letterKeys = document.getElementsByClassName("key--tracked");
const messageDiv = document.getElementById("message-div");
const capsLockKey = document.getElementById("capslock-key");

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 LOGIC VARIABLES 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// TRACK START CLICKS
let startButtonCounter = 0;
// DEFAULT COMMON 100 WORDS
let targetArray = [...common100];
// DEFAULT LINE LENGTH
let sequenceLength = 30;
// DEFAULT HARD CODED ARRAY LENGTH (NUMBER OF LINES GENERATED WITH START BUTTON)
const wordsArrLength = 20;
// ARRAY OF WORDARRAYS (LINES)
let wordArrays = [];
// STRING BASED ON CURRENT LINE
let stringWords = "";
// STRINGWORDS NEXT
let stringWordsNext = "";
// CURRENT TYPED KEY
let typedKey = "";

// CURSOR TRACKERS
let lineIdx = 0;
let wordIdx = 0;
let strIdx = 0;
let charIdx = 0;

// DEFAULT CONTROL SETTINGS
let punctuationOn = false;
let capitalOn = false;
let numbersOn = false;
let enterOn = false;
let timerOn = false;
let timerRunning = false;
let soundOn = true;

// TOTAL KEYSTROKES
let keyStrokeCounter = 0;
// TEST: COUNT ALL COMPLETED WORDS (BOTH CORRECT AND INCORRECT)
let wordCounter = 0;
let greenCounter = 0;
let redCounter = 0;
let orangeCounter = 0;
let accuracy = 0;

// NON EXISTING (NULL VALUE) SPANS BEYOND END OF LINE SPACE
let nullValueSpanCounter = 0;
// TRACK CONSECUTIVE WRONG KEYS
let consecutiveErrorCounter = 0;
// DEFAULT MAX NUMBER OF CONSECUTIVE ERRORS
let maxMistakes = 20;
// TRACK SPACE-ON-WORDS(SKIPPED WORDS)
let skippedWordsCounter = 0;
// DEFAULT MAX NUMBER OF SKIPPED WORDS ALLOWED
const maxSkippedWords = 6;
// TRACK PROBLEM KEYS (NO DUPLICATES IN SET)
let problemKeysSet = new Set();
const problemKeySpans = document.getElementsByClassName("problem-key-span");
const probKeyWordsArr = [];
let tempProbWordsArr = []; // WORDS THAT CONTAIN BROBLEM KEYS FROM PREVIOUS SESSION
// BEGINNER STATUS
let beginnerOn = false;
// COLOUR THEME
let darkThemeOn = false;

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 FUNCTIONS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// CURSOR POSITION
const nextChar = () => {
    charIdx += 1;
    strIdx += 1;
};

const prevChar = () => {
    charIdx -= 1;
    strIdx -= 1;
};

const nextWord = () => {
    wordIdx += 1;
    charIdx = 0;
};

const nextLine = () => {
    // console.log("END OF LINE");
    lineIdx += 1;
    wordIdx = 0;
    charIdx = 0;
    strIdx = 0;
    // DISPLAY MESSAGE WHEN BOTH TEXT FIELDS HAVE BEEN CLEARED
    if (lineIdx === wordArrays.length) {
        console.log("END OF TEXT");
        messageDiv.textContent = `CONGRATULATIONS! ${wordArrays.length} LINES TYPED!`;
    }
};

// CLEAR INPUT FIELD
const clearTextInput = () => {
    textInput.value = "";
    // AFTER WORD IS COMPLETED CLEAR PLACEHOLDER TOO, ITS HARDCODED IN HTML
    textInput.placeholder = "";
};

// TEXT INPUT PLACEHOLDER
const placeholderClickStart = () => {
    textInput.placeholder = "                 Click Start ➡";
};

// PICK RANDOM ELEMENT FROM ARRAY (USED WITH TARGET ARRAY AND PUNCTUATION MARKS ARRAY)
const getRandomFromArr = (arr) => {
    const randIdx = Math.floor(Math.random() * arr.length);
    return arr[randIdx];
};

// GENERATE RANDOM NUMBER FOR RANDOM BEGINNER WORD LENGTHS
const getRandomIdxLessThanNum = (num) => {
    return Math.floor(Math.random() * num);
};

// TOGGLE BUTTON STYLE (ON / OFF)
const toggleButtonStyle = (element) => {
    if (element.classList.contains("toggle-on")) {
        element.classList.remove("toggle-on");
        element.classList.add("toggle-off");
        element.innerText = "Off";
    } else {
        element.classList.remove("toggle-off");
        element.classList.add("toggle-on");
        element.innerText = "On";
    }
};

// TOGGLE BOOLEAN BUTTON STATE BASED ON CLASS ONLY IF BEGINNER LEVEL IS NOT SELECTED
const toggleButtonState = (element) => {
    // console.log(element);
    // if (!beginnerOn) {
    if (element.classList.contains("toggle-on")) {
        switch (element) {
            case punctuationToggle:
                punctuationOn = true;
                break;
            case punctuationToggleBeginner:
                punctuationOn = true;
                break;
            case capitalToggle:
                capitalOn = true;
                break;
            case capitalToggleBeginner:
                capitalOn = true;
                break;
            case numbersToggle:
                numbersOn = true;
                console.log("NUMBERS ON");
                break;
            case soundToggle:
                soundOn = true;
                break;
            case timerToggle:
                timerOn = true;
                break;
            case enterToggle:
                enterOn = true;
                break;
            case enterToggleBeginner:
                enterOn = true;
                break;
            case themeToggle:
                darkThemeOn = true;
        }
    } else {
        switch (element) {
            case punctuationToggle:
                punctuationOn = false;
                break;
            case punctuationToggleBeginner:
                punctuationOn = false;
                break;
            case capitalToggle:
                capitalOn = false;
                break;
            case capitalToggleBeginner:
                capitalOn = false;
                break;
            case numbersToggle:
                numbersOn = false;
                console.log("NUMBERS OFF");
                break;
            case soundToggle:
                soundOn = false;
                break;
            case timerToggle:
                timerOn = false;
                break;
            case enterToggle:
                enterOn = false;
                break;
            case enterToggleBeginner:
                enterOn = false;
                break;
            case themeToggle:
                darkThemeOn = false;
        }
    }
    // }
};

// UPPERCASE FIRST LETTER IN WORD
const capitaliseWord = (str) => {
    const lettersArr = str.split("");
    lettersArr[0] = lettersArr[0].toUpperCase();
    return lettersArr.join("");
};

// GET CURRENT LENGTH OF WORDS STRINGED TOGETHER INCLUDING SPACES IN BETWEEN WHEN BUILDING WORDSARRAY
// THIS IS TO DETERMINE LINE LENGTH FOR CUSTOM SETTINGS
const getStrLength = (arr) => {
    let length = 0;
    arr.forEach((word) => {
        length += word.length;
    });
    return length;
};

// EXTRACTING WORDS AND WORDS WITH PUNCT MARKS FROM STRING (sentences[])
const extractWords = (arr) => {
    let extractedWords = [];
    arr.forEach((sentence) => {
        let foundWords = sentence.split(" ");
        extractedWords.push(foundWords);
    });
    return extractedWords;
};

// THIS IS TO TRANSFORM CAPITALISED WORDS INTO LOWERCASE (BEGINNER - TOP ROW WORDS ARRAY)
const lowerCaseArrElements = (arr) => {
    let updatedArray = [];
    arr.forEach((word) => {
        updatedArray.push(word.toLowerCase());
    });
    return updatedArray;
};

// ADD SPACE TO WORDS
const addSpaceToWords = (arr) => {
    let updatedArray = [];
    for (let i = 0; i < arr.length; i += 1) {
        updatedArray.push(arr[i] + " ");
    }
    return updatedArray;
};

// BUILD STRING BY ADDING RANDOM WORDS ONE BY ONE UNTIL LENGTH IS REACHED
// POPULATE wordArrays WITH ARRAYS OF WORDS (wordsArr), ONE FOR EACH TEXT LINE
const buildWordArrays = (numOfLines) => {
    // console.log(document.getElementById("sentences").checked);
    // console.log("BUILD TARGET ARRAY", targetArray);
    // console.log("TARGET ARRAY FROM BUILDARRAYS:", targetArray);

    // !IMPORTANT: SENTENCES RADIO SHOULD BE DISABLED WHEN SHOWING BEGINNER LEVEL OTHERWISE IF SENTENCES WAS THE LAST RADIO SELECTED IN ADVANCED, IN THIS FUNCTION THE else BLOCK WILL RUN AND GENERATE SENTENCES IN BEGINNER
    // SENTENCES RADIO DISABLED IN: beginnerShowButton.addEventListener("click", function () {}
    if (document.getElementById("sentences").checked === false) {
        for (let i = 0; i < numOfLines; i += 1) {
            let arr = [];
            // ALLOW EXTRA SPACE FOR ENTER KEY AT THE END OF LINE
            if (enterOn && sequenceLength > 44) {
                sequenceLength = 44;
            }

            while (true) {
                if (getStrLength(arr) >= sequenceLength) break;

                let currWord = getRandomFromArr(targetArray); // GET RANDOM WORD
                if (punctuationOn) {
                    currWord += getRandomFromArr(punctMarks); // CONCAT RANDOM PUNCT MARK
                }
                if (capitalOn) {
                    currWord = capitaliseWord(currWord); // MAKE FIRST CHAR UPPERCASE
                }
                currWord += " ";

                arr.push(currWord);
            }

            // REPLACE TRAILING SPACE WITH ENTER SIGN ON LAST WORD OF ARRAY
            if (enterOn) {
                arr[arr.length - 1] =
                    arr[arr.length - 1].substring(
                        0,
                        arr[arr.length - 1].length - 1
                    ) + "⏎";
            }

            wordArrays.push(arr);
        }
    } else {
        // SENTENCES DIFFICULTY LEVEL

        // CONVERT ARRAY OF STRINGS (sentences) TO ARRAY OF ARRAY OF WORDS
        for (let i = 0; i < numOfLines; i += 1) {
            wordArrays.push(
                addSpaceToWords(getRandomFromArr(extractWords(sentences)))
            );
        }
    }
};

// CLEAR INDEX TRACKERS
const clearIdxTrackers = () => {
    charIdx = 0;
    wordIdx = 0;
    lineIdx = 0;
    strIdx = 0;
};

// CLEAR WORDARRAYS AND STRINGWORDS
const clearArrAndString = () => {
    wordArrays = [];
    stringWords = "";
};

const clearTextFields = () => {
    textSpanContainerActive.innerHTML = "";
    textSpanContainerNextParagraph.innerHTML = "";
};

// CLEAR TEXT FIELDS ACTIVE / NEXT, INPUT, AND INITIALISE WORDARRAYS
const clearDataAndDisplay = () => {
    clearTextFields();
    clearTextInput();
    clearIdxTrackers();
    clearArrAndString();
};

const calcAccuracy = () => {
    return (100 / (greenCounter + redCounter)) * greenCounter;
};

const resetAccuracyCounters = () => {
    greenCounter = 0;
    redCounter = 0;
    accuracy = 0;
};

const resetAccuracyDisplays = () => {
    greenCounterSpan.textContent = "0";
    redCounterSpan.textContent = "0";
    orangeCounterSpan.textContent = "0";
    accuracySpan.textContent = "0";
};

// REMOVE ALL COLOUR CLASSES FROM ACCURACY
const resetAccSpanColours = () => {
    accuracySpan.classList.remove(
        "green",
        "light-green",
        "yellow-green",
        "yellow",
        "gold",
        "orange",
        "orange-red",
        "red"
    );
};

// ADD COLOUR CLASS BASED ON CURRENT ACC VALUE
const colourAccuracySpan = () => {
    if (accuracy <= 87) {
        accuracySpan.classList.add("red");
    } else if (accuracy > 87 && accuracy <= 89) {
        accuracySpan.classList.add("orange-red");
    } else if (accuracy > 89 && accuracy <= 91) {
        accuracySpan.classList.add("orange");
    } else if (accuracy > 91 && accuracy <= 93) {
        accuracySpan.classList.add("gold");
    } else if (accuracy > 93 && accuracy <= 95) {
        accuracySpan.classList.add("yellow");
    } else if (accuracy > 95 && accuracy <= 97) {
        accuracySpan.classList.add("yellow-green");
    } else if (accuracy > 97 && accuracy < 100) {
        accuracySpan.classList.add("light-green");
    } else {
        accuracySpan.classList.add("green"); // 100%
    }
};

const playSound = (soundFile, volume) => {
    const sound = new Howl({
        src: [`sounds/${soundFile}`],
        volume: volume,
    });
    sound.play();
};

//  DETECT CAPSLOCK CHANGE
// SOURCE: https://www.educative.io/answers/how-to-detect-the-caps-lock-status-in-javascript
// The browser treats caps lock on as keydown and caps lock off as keyup, so we need to bind both keydown and keyup to detect a change in caps lock.
const capsLockWarningsOn = () => {
    capsLockKey.style.background = "red";
    capsLockKey.classList.add("blink");
    messageDiv.textContent = "CAPSLOCK IS ON";
};

const capsLockWarningsOff = () => {
    capsLockKey.style.background = "none";
    capsLockKey.classList.remove("blink");
    messageDiv.textContent = "";
};

const doc = document.getElementById("container");
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let capslockOnGlobal = false;
const testCapsLock = (event) => {
    if (event.code === "CapsLock") {
        let isCapsLockOn = event.getModifierState("CapsLock");
        if (isCapsLockOn) {
            console.log("Caps Lock turned on");
            capsLockWarningsOn();
            capslockOnGlobal = true;
        } else {
            console.log("Caps Lock turned off");
            capsLockWarningsOff();
            capslockOnGlobal = false;
        }
    }
    return capslockOnGlobal;
};
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// !!! 2 SEPARATE LISTENERS FOR "UP" AND "DOWN" !!!
doc.addEventListener("keyup", testCapsLock);
doc.addEventListener("keydown", testCapsLock);

const disableSentenceModifiers = () => {
    punctuationToggle.disabled = true;
    capitalToggle.disabled = true;
    // numbersToggle.disabled = true;
    enterToggle.disabled = true;
    slider.disabled = true;
};

const enableSentenceModifiers = () => {
    punctuationToggle.disabled = false;
    capitalToggle.disabled = false;
    // numbersToggle.disabled = false;
    enterToggle.disabled = false;
    slider.disabled = false;
};

const disableNumbers = () => {
    numbersOn = false;
    numbersToggle.disabled = true;
    numbersToggle.classList.remove("toggle-on");
    numbersToggle.classList.add("toggle-off");
    numbersToggle.textContent = "Off";
};

// SET DIFFICULTY LEVEL BASED ON RADIOS STATE
/*
THESE ARE DUPLICATES:
numbersOn = false;
numbersToggle.classList.remove("toggle-on");
numbersToggle.classList.add("toggle-off");
numbersToggle.textContent = "Off";
*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const setDifficultyLevel = () => {
    for (let i = 0, length = difficultyRadios.length; i < length; i++) {
        if (difficultyRadios[i].checked) {
            if (difficultyRadios[i].value === "easy") {
                targetArray = [...common100];
                maxMistakes = 20;
                enableSentenceModifiers();
                disableNumbers();

                // FADE WRAP DIV WHEN SLIDER IS DISABLED (0.3)
                sliderWrap.classList.remove("transparent-disabled");
            } else if (difficultyRadios[i].value === "medium") {
                targetArray = [...common200, ...common100];
                maxMistakes = 16;
                enableSentenceModifiers();
                sliderWrap.classList.remove("transparent-disabled");
                disableNumbers();
            } else if (difficultyRadios[i].value === "hard") {
                // CONSTRUCT TARGET ARRAY BASED ON NUMBERS TOGGLE STATE
                if (numbersOn) {
                    targetArray = [...jsReserved, ...jsObjPropMeth, ...numbers];
                } else {
                    targetArray = [...jsReserved, ...jsObjPropMeth];
                }

                maxMistakes = 12;
                enableSentenceModifiers();
                sliderWrap.classList.remove("transparent-disabled");
                numbersToggle.disabled = false;
                // SENTENCES
            } else {
                disableSentenceModifiers();
                sliderWrap.classList.add("transparent-disabled");
                disableNumbers();
            }
            break;
        }
    }
};
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 START BUTTON FUNCTIONS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// FIND PROBLEM KEY WORDS IN CURRENT TARGET ARRAY / UPDATE TARGET ARRAY WITH PROBLEM WORDS ONLY
const findAndApplyProblemKeyWords = () => {
    if (problemKeysSet.size > 0) {
        problemKeysSet.forEach((key) => {
            common100.forEach((word) => {
                if (word.indexOf(key) > -1) {
                    tempProbWordsArr.push(word);
                }
            });
        });
        targetArray = [...tempProbWordsArr]; // UPDATE TARGET ARRAY WITH FILTERED WORDS ARRAY
    } else {
        // FIND WHICH LEVEL IS SELECTED AND UPDATE TARGET ARRAY ACCORDINGLY
        if (!beginnerOn) {
            setDifficultyLevel();
        }
    }
};

// (event) WILL DESABLE START BUTTON !!!
const handleCapslockChange = () => {
    if (event.getModifierState("CapsLock")) {
        // console.log("CAPSLOCK IS ON! - START BUTTON");
        capsLockWarningsOn();
    } else {
        capsLockWarningsOff();
    }
};

// REMOVE RED BACKGROUND FROM PROBLEM KEYS
const removeProblemKeyHighlight = () => {
    for (let i = 0; i < letterKeys.length; i += 1) {
        letterKeys[i].classList.remove("red-background");
    }
};

// MAKE EACH CHARACTER OF THE STRING A span AND APPEND AS A CHILD ELEMENT TO ITS CONTAINER
// CREATE SPANS FROM wordArrays' ARRAY OF WORDS, JOIN ELEMENS TO ONE STRING WITH SPACES AND THEN SPLIT
// wordArrays[lineIdx] WILL BE INCREMENTED IN EVETLISTENER
const createSpans = (lineIdx, location) => {
    for (const [idx, char] of wordArrays[lineIdx] // ACCESSING IDX IN FOR OF LOOP
        // console.log(idx, char);
        .join("")
        .split("")
        .entries()) {
        const span = document.createElement("span"); // CREATE ELEMENT
        // SET TEXT CONTENT / CLASS / ID
        span.innerText = char;
        span.className = "active-txt-span";
        // ADD ACTIVE CLASS TO ENTER TO FOR STYLING PURPOSES
        if (char === "⏎") {
            span.className = "active-txt-span active-txt-span--enter";
        }

        // ASSINGN DIFFERENT ID BASED ON LOCATION
        span.id =
            location === textSpanContainerActive
                ? `span-${idx}`
                : `span--next-${idx}`;

        location.appendChild(span); // APPEND TO PARENT DIV
    }
};

// KEY EVENT START LOGS
const logKeyEventStart = () => {
    console.log(
        "🟩---EVENT START: ",
        event.key,
        " ---",
        "line idx: ",
        lineIdx,
        "word idx: ",
        wordIdx,
        "/",
        wordArrays[lineIdx].length - 1,
        "char idx: ",
        charIdx,
        "/",
        wordArrays[lineIdx][wordIdx].length - 1,
        "string idx: ",
        strIdx,
        "/",
        stringWords.length - 1
    );
};

// KEY EVENT END LOGS
const logKeyEventEnd = () => {
    console.log(
        "---------------------EVENT END---",
        "line idx: ",
        lineIdx,
        "word idx: ",
        wordIdx,
        "/",
        wordArrays[lineIdx].length - 1,
        "char idx: ",
        charIdx,
        "/",
        wordArrays[lineIdx][wordIdx].length - 1,
        "string idx: ",
        strIdx,
        "/",
        stringWords.length - 1
    );
};

// BACKSPACE
const handleBackspace = () => {
    // console.log("BACKSPACE");

    orangeCounter += 1;
    prevChar();

    if (nullValueSpanCounter > 0) {
        nullValueSpanCounter -= 1;
        // console.log("NULL COUNTER DECREMENTED:", nullValueSpanCounter);
        messageDiv.textContent = `${nullValueSpanCounter} ERROR(S) INTO NEXT LINE!`;
    }
    if (nullValueSpanCounter === 0) {
        nullValueSpanCounter = 0;
        // console.log("NULL COUNTER RESET TO 0", nullValueSpanCounter);
        messageDiv.textContent = "";

        // REMOVE RED HIGHLIGHT FROM END OF LINE SPACE WHEN ALL BEYOND THE LINE ERRORS
        // HIGHLIGHT ADDED IN WRONG KEY: if (typedKey !== "Enter") BLOCK
        const charSpans = document.querySelectorAll(".active-txt-span");
        const endOfLineSpace = charSpans[stringWords.length - 1];
        endOfLineSpace.classList.remove("red-border", "red-background");
    }

    // DISPLAY END OF LINE SPACE WHEN USER CORRECTED ALL ERRORS BEYOND END OF LINE
    if (strIdx === stringWords.length - 1 && lastWordRedCounter < 1) {
        messageDiv.textContent = "END OF LINE SPACE";
        setTimeout(() => {
            messageDiv.textContent = "";
        }, 200);
        // CHECK LAST WORD FOR ERRORS WHEN USER REACHED LAST SPACE AFTER CORRECTING BEYOND THE LINE ERRORS
        // 1. GET LENGTH OF LAST WORD
        let lastWord = wordArrays[lineIdx][wordIdx];
        // console.log("LAST WORD/LENGTH", lastWord, lastWord.length);
        // LOOP BACKWARDS FROM CURRENT(SPACE) - 1 FOR LASTWORD.LENGTH-1 TIMES (EXCLUDE SPACE)
        // AND CHECK FOR RED CLASS, IF FOUND DISPLAY "MORE ERRORS TO CORRECT"

        const charSpans = document.querySelectorAll(".active-txt-span");
        let lastWordRedCounter = 0;

        for (
            let i = strIdx;
            i > stringWords.length - 1 - lastWord.length - 1;
            i -= 1
        ) {
            // console.log(charSpans[i]);
            if (charSpans[i].classList.contains("red")) {
                lastWordRedCounter += 1;
            }
        }
        // console.log("LAST WORD RED COUNTER:", lastWordRedCounter);
        // AFTER LAST SPACE MESSAGE, LET USER KNOW IF THERE'S ANY ERRORS LEFT IN LAST WORD
        if (lastWordRedCounter > 0) {
            setTimeout(() => {
                // messageDiv.textContent = `END OF LINE SPACE, ${lastWordRedCounter} MORE ERRORS`;
                messageDiv.textContent = `${lastWordRedCounter} MORE ERROR(S) IN LAST WORD`;
            }, 210);
        }
    }

    const currentCharacter = document.getElementById(`span-${strIdx}`);

    // ADD ORANGE BORDER TO BACKSPACE'D SPACE  !!! HAVE TO CHECK TEXTCONTENT !!!
    if (currentCharacter.innerText === " ") {
        currentCharacter.classList.add("orange-border");
    }

    if (strIdx === stringWords.length - 1) {
        currentCharacter.classList.add("orange-border");
    }

    currentCharacter.classList.add("orange", "background", "black-border");
    currentCharacter.classList.remove("red", "green");

    const nextCharacter = document.getElementById(`span-${strIdx + 1}`);
    nextCharacter.classList.remove("background", "black-border", "red-border");
};

//🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CORRECT KEY 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

//  WORD[0] - WORD[LENGTH-1], ALL CHARACTERS IN WORD EXCLUDING TRAILING SPACE

const correctKeyNotLastSpace = () => {
    // console.log("<<<<<  NOT LAST CHARACER >>>>>");
    let nextCharacter = document.getElementById(`span-${strIdx + 1}`);
    nextCharacter.classList.add("background", "black-border");
    let currentCharacter = document.getElementById(`span-${strIdx}`);
    currentCharacter.classList.add("green");
    currentCharacter.classList.remove(
        "red",
        "orange",
        "background",
        "black-border",
        // !!! THIS WONT WORK !!! (BECAUSE ITS THE LAST CHAR IN WORD)
        "red-border"
    );

    nextChar();
};

// WORD[LENGTH-1], TRAILING SPACE ALL WORDS EXCEPT LAST WORD
const correctSpaceNotLastWord = () => {
    if (wordIdx < wordArrays[lineIdx].length - 1) {
        // console.log("<<<<< LAST CHARACER !!! >>>>>");
        let nextCharacter = document.getElementById(`span-${strIdx + 1}`);
        // REMOVE RED BORDER FROM SPACE IF CORRECTED
        let currentCharacter = document.getElementById(`span-${strIdx}`);
        currentCharacter.classList.remove("red-border", "orange-border");
        // MOVE CURSOR FORWARD
        nextCharacter.classList.add("background", "black-border");
        strIdx += 1;
    }
};

// END OF LINE SPACE
const correctEndOfLineSpace = () => {
    // 1. HAVE TO COUNT COLOURS IN LAST WORD BEFORE NEXTLINE() TO BE ABLE TO CHECK CURRENT LINE SPANS
    countSpanColoursInLastWord();
    nextLine();
    clearTextInput();
    wordCounter += 1;
    textSpanContainerActive.innerHTML = ""; // DELETE SPANS FROM ACTIVE DIV
    createSpans(lineIdx, textSpanContainerActive); // APPEND SPANS CREATED FROM NEXT LINE
    // ADD CURSOR TO FIRST CHAR IN LINE
    const firstCharacter = document.getElementById("span-0");
    firstCharacter.classList.add("background", "black-border");

    stringWords = wordArrays[lineIdx].join(""); // UPDATE STRWORDS
    // DELETE CONTENT / APPEND NEXT LINE TO TEXTSPAN NEXT DIV
    textSpanContainerNextParagraph.innerHTML = "";
    // APPEND TEXT AS SPANS !!!
    createSpans(lineIdx + 1, textSpanContainerNextParagraph);
    messageDiv.textContent = "";
};

// ALL OTHER SPACES
const correctSpaceNotEndOfLine = () => {
    // console.log("ERROR, THIS FUNCTION SHOULD NOT RUN AT END OF LINE");

    // ONLY GET PREVIOUS CHAR IF ITS NOT FIRST CHAR AS IT WILL BE NULL
    // CONDITION WILL INTRODUCE ANOTHER BUG, ALL KEYS WILL GO RED
    // if (strIdx > 0) {
    let currentCharacter = document.getElementById(`span-${strIdx - 1}`);
    currentCharacter.classList.remove("background", "black-border");
    // }

    messageDiv.textContent = "";

    nextWord();
    clearTextInput();
};

// COUNT COLOUR SPANS IN LAST WORD WHEN TRAILING SPACE IS TYPED CORRECTLY

const countSpanColours = () => {
    let lastWordLength = wordArrays[lineIdx][wordIdx - 1].length;
    const charSpans = document.querySelectorAll(".active-txt-span");
    // START LOOP BACKWARDS AND COUNT SPANS WITH GREEN CLASS
    for (let i = strIdx - 2; i >= strIdx - lastWordLength; i -= 1) {
        // PRINT LAST WORD SPANS WITHOUT TRAILING SPACE
        // console.log(charSpans[i]);

        if (charSpans[i].classList.contains("green")) {
            greenCounter += 1;
        }
        if (charSpans[i].classList.contains("red")) {
            redCounter += 1;
        }
        if (charSpans[i].classList.contains("orange")) {
            orangeCounter += 1;
        }
    }

    // console.log("<<< green:", greenCounter, "red:", redCounter, "orange", orangeCouner);
};

// THIS FUNCTION HAS TO RUN IN correctEndOfLineSpace() BEFORE nextline()
// IT ONLY COUNTS COLOURS IN LAST WORD IN LINE
const countSpanColoursInLastWord = () => {
    let currentWordLength = wordArrays[lineIdx][wordIdx].length;
    const charSpans = document.querySelectorAll(".active-txt-span");
    // START LOOP BACKWARDS AND COUNT SPANS WITH GREEN CLASS
    // WE ARE STILL ON CURRENT WORD VS LAST WORD IN countSpanColours() ABOVE
    for (let i = strIdx - 1; i >= strIdx - currentWordLength + 1; i -= 1) {
        // PRINT LAST WORD SPANS WITHOUT TRAILING SPACE
        // console.log(charSpans[i]);

        if (charSpans[i].classList.contains("green")) {
            greenCounter += 1;
        }
        if (charSpans[i].classList.contains("red")) {
            redCounter += 1;
        }
        if (charSpans[i].classList.contains("orange")) {
            orangeCounter += 1;
        }
    }
};

// DISPLAY COLOUR COUNTER VALUES
const displayColourCounterValues = () => {
    greenCounterSpan.textContent = greenCounter;
    redCounterSpan.textContent = redCounter;
    orangeCounterSpan.textContent = orangeCounter;
};

// HIGHLIGHT PROBLEM KEYS ON KEYBOARD
const highlightProblemKeys = () => {
    problemKeysSet.forEach((key) => {
        // !!! WITHOUT THIS CONDITION CURSOR WILL NOT MOVE FORWARD INTO NEXT WORD, IT WILL STAY ON SPACE !!!
        if (key !== undefined) {
            for (let i = 0; i < letterKeys.length; i += 1) {
                if (letterKeys[i].innerText === key.toUpperCase()) {
                    letterKeys[i].classList.add("red-background");
                }
            }
        }
    });
};

// SPACE ON WORD - FIND NEXT SPACE IN STRING AND SET INDEX TO NEXT WORD AFTER SPACE
const findNextWordIndex = () => {
    let nextWordIdx;
    for (let i = strIdx; i < stringWords.length; i += 1) {
        if (stringWords[i] === " ") {
            nextWordIdx = i + 1;

            let currentCharacter = document.getElementById(`span-${strIdx}`);
            currentCharacter.classList.add("red-border");
            break;
        }
    }

    return nextWordIdx;
};

// SPACE ON LAST WORD
const spaceOnLastWord = () => {
    // ONLY RUN FUNCTION IF ALL NULL VALUE SPANS (BEYOND END OF LINE ERRORS) HAVE BEEN CORRECTED
    if (nullValueSpanCounter < 1) {
        // THIS IS NOT WORKING
        // console.log("<<<<< SPACE ON LAST WORD, NEW LINE! >>>>>");

        // RESET WRONGCOUNTER
        consecutiveErrorCounter = 0;
        nextLine();

        textSpanContainerActive.innerHTML = ""; // DELETE SPANS FROM ACTIVE DIV
        createSpans(lineIdx, textSpanContainerActive); // APPEND SPANS CREATED FROM NEXT LINE
        // ADD CURSOR TO FIRST CHAR IN LINE
        const firstCharacter = document.getElementById("span-0");
        firstCharacter.classList.add("background", "black-border");

        stringWords = wordArrays[lineIdx].join(""); // UPDATE STRWORDS

        textSpanContainerNextParagraph.innerHTML = ""; // DELETE CONTENT
        createSpans(lineIdx + 1, textSpanContainerNextParagraph);
    }
};

// SPACE ON WORD
// APPLY BACKGROUND TO NEXT CHAR AND REMOVE BACKGROUND FROM CURRENT
// ON ALL CHARACTERS BUT LAST
const spaceOnWord = () => {
    let currentCharacter = document.getElementById(`span-${strIdx - 1}`);

    // RESET WRONGCOUNTER
    consecutiveErrorCounter = 0;

    // console.log("SRTING IDX:", strIdx);
    // LOOP OVER SPANS UP TO CURRENT-1 (EXCLUDING SPACE) AND REMOVE BLACK-BORDER
    const charSpans = document.querySelectorAll(".active-txt-span");
    // console.log(charSpans);
    for (let i = 0; i < strIdx - 1; i += 1) {
        // console.log(charSpans[i]);
        charSpans[i].classList.remove("black-border", "background");
    }

    console.log("<<<<< UNCAUGHT TYPE ERROR spaceOnWord()>>>>>");
    // ERROR: script.js:720 Uncaught TypeError: Cannot read properties of null (reading 'classList') at correctSpaceNotEndOfLine (script.js:720:22)
    // WITHOUT CURRENTCHARACTER AFTER NEXTLINE() IN NEW LINE RIGHT KEY WILL NOT BE RECOGNISED (WILL GO RED)
    currentCharacter.classList.remove("background", "black-border");
    const nextCharacter = document.getElementById(`span-${strIdx}`);
    nextCharacter.classList.add("background", "black-border");
    nextWord();
};

// END MESSEAGE SEQUENCE (MESSAGES - RELOAD)
const reloadSequence = () => {
    textInput.readOnly = true;

    // DISABLE ALL CONTROLS AND START BUTTON DURING SEQUENCE (ADVANCED MODE)
    for (let i = 0; i < disabledDuringTimer.length; i += 1) {
        disabledDuringTimer[i].disabled = true;
    }

    // THIS HAS TO STAY INSIDE KEY EVENTS AS handleKeyEvent WILL BE NOT RECOGNISED
    // document.removeEventListener("keydown", handleKeyEvent);
    sliderWrap.classList.add("transparent-disabled");
    textInput.value = "     ❌   Don't play silly games!  ❌";

    setTimeout(function () {
        textInput.value = "         ⬅️   Correct mistakes!   ⬅️";
    }, 1500);

    setTimeout(function () {
        // textInput.value = "     ☠️   YOU ARE TERMINATED!  ☠️";
        textInput.value = "      ☠️   You are terminated!  ☠️";

        if (soundOn) {
            playSound("mixkit-distant-war-explosions-1696.wav", 0.9);
        }
    }, 3000);

    setTimeout(function () {
        location.reload();
    }, 5000);
};

const displayConsecErrors = () => {
    messageDiv.innerText = `${consecutiveErrorCounter} CONSECUTIVE ERRORS!`;
};

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 ALWAYS CENTER APP VERTICALLY 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// SOURCE: https://stackoverflow.com/questions/15615552/get-div-height-with-plain-javascript

// APP CONTAINER HEIGHT
const appHeight = document.getElementById("container").clientHeight;
// console.log("CONTAINER HEIGHT", appHeight);
// GET WINDOW HEIGHT
let viewportHeight = window.innerHeight;
// INITIALISE MARGIN TOP
let marginTop = 0;

// CALC MARGIN TOP
const calcMarginTop = () => {
    return (viewportHeight - appHeight) / 2;
};

// SET MARGIN TOP IF APP HEIGHT IS SMALLER THAN WINDOW HEIGHT
const setMarginTop = function () {
    viewportHeight = window.innerHeight;
    // console.log(viewportHeight);
    if (viewportHeight > appHeight) {
        marginTop = calcMarginTop();
        // console.log("MARGIN TOP:", marginTop);
        // BOTH CARD SIDES
        container.style.marginTop = `${marginTop}px`;
        instructionsContainer.style.marginTop = `${marginTop}px`;
    }
};

// COUNT AND DISPLAY REDS IN CURRENT WORD WHEN REACHING TRAILING SPACE
const countErrorsInCurrentWord = () => {
    const charSpans = document.querySelectorAll(".active-txt-span");
    let currentRedCounter = 0;
    if (charIdx === wordArrays[lineIdx][wordIdx].length - 2) {
        // console.log(
        //     " CURSOR ON SPACE CHECK WORD FOR RED CLASS NOW - ",
        //     wordArrays[lineIdx][wordIdx]
        // );
        // START LOOP BACKWARDS FROM STRIDX FOR CURR LEN ITERATIONS AND COUNT REDS
        // ASSIGN IT TO LOCAL VARIBALE "CURRENTREDCOUNTER" AND DISPLAY IT IN MESSAGE
        for (
            let i = strIdx;
            i > strIdx - wordArrays[lineIdx][wordIdx].length + 1;
            i -= 1
        ) {
            if (charSpans[i].classList.contains("red")) {
                currentRedCounter += 1;
                // console.log("RED CLASS");
                messageDiv.textContent = `${currentRedCounter} ERROR(S) IN WORD!`;
                setTimeout(() => {
                    messageDiv.textContent = "";
                }, 200);
            }
        }
        // console.log("CURRENT REDS:", currentRedCounter);
    }
};

// LISTENER EVENTS
window.addEventListener("resize", setMarginTop);
window.addEventListener("load", setMarginTop);

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 PAGE LOAD 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

startButton.classList.add("apply--active");
textInput.disabled = true;

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 START BUTTON 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

startButton.addEventListener("click", (event) => {
    // ++++++++++++++++++++++++++++++++++++++++++++++++++
    // if (numbersOn) {
    //     console.log("numbers on");
    //     console.log(targetArray);
    //     console.log(targetArray);
    //     numbers.forEach((numStr) => {
    //         targetArray.push(numStr);
    //     });
    // }
    // console.log(targetArray);
    // ++++++++++++++++++++++++++++++++++++++++++++++++++

    // RESET WRONG COUNTER
    consecutiveErrorCounter = 0;
    // RESET ORANGE COUNTER
    orangeCounter = 0;

    startButtonCounter += 1; // TRACK NUMBER OF START BUTTON CLICKS

    if (beginnerOn) {
        timerOn = false;
    }

    textInput.disabled = false;

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 DETECT CAPSLOCK 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    handleCapslockChange();

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 PROBLEM KEYS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    // !!! THIS CONDITION IS NOT WORKING PROPERLY !!!
    // HAVE TO CLEAR PROB KEYS SET WITH HIDE BEGINNER BUTTON
    if (!beginnerOn) {
        // IF THERE IS ANY PROBLEM KEY,  FILL tempProbWordsArr WITH WORDS THAT CONTAIN PROBLEM KEYS
        findAndApplyProblemKeyWords();
        problemKeysSet.clear(); // RESET PROBLEM KEYS SET AFTER PROBLEM KEYS HAVE BEEN USED FOR NEW SET OF WORDS

        tempProbWordsArr = []; // RESET TEMPORARY ARRAY
        // targetArray = [...common100];
        removeProblemKeyHighlight();
    }
    problemKeysSet.clear();
    removeProblemKeyHighlight();
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CONTROL PANEL 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    // DISABLED
    // disableApplyButtons();

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 STATISTICS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    resetAccSpanColours(); // RESET ACCURACY COUNTER COLOUR

    wordCounter = 0;

    // RESET ACCURACY COUNTERS / DISPLAYS , KEYSTROKE COUNTER
    speedSpan.textContent = 0;
    resetAccuracyCounters();
    resetAccuracyDisplays();
    keyStrokeCounter = 0;
    keystrokesSpan.textContent = 0;

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 INPUT ROW 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    textInput.readOnly = false; // ALLOW USER INPUT TO BE TYPED
    // SET CURSOR TO INPUT BOX  AT FIRST CHAR IF TEXT-ALIGN IS DISABLED IN CSS
    // SETS CURSOR AT FIRST CHAR IF TEXT-ALIGN IS DISABLED IN CSS
    // txtInput.setSelectionRange(0, 0);
    textInput.focus();

    // ADD LISTENER TO INPUT FOR TIMER IF 1 MIN TIMER IS SELECTED

    // !!! IF TIMERON IS SET TO FALSE AT 0 SECONDS THIS WILL NOT RUN !!!
    // !!! TIMERON IS INDEPENDENT FROM CONTROL SETTING (BUTTON STATUS) !!!

    // INSTEAD OF TIMERON, CHECK IS BUTTON IS ACTIVE AND IF IT IS, SET TIMERON TO TRUE
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    if (timerOn && !beginnerOn && !capslockOnGlobal) {
        textInput.addEventListener("keydown", startCountdown);
        // console.log("EVENT LISTENER ADDED TO TEXT INPUT FOR TIMER");
    } else {
        textInput.removeEventListener("keydown", startCountdown);
        // console.log("EVENT LISTENER REMOVED FROM TEXT INPUT FOR TIMER");
    }
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    // REMOVE HIGHLIGHT START BUTTON
    startButton.classList.remove("apply--active");
    // CHANGE PLACEHOLDER TO "START TYPING"
    textInput.placeholder = "Start typing or customise text";
    clearIdxTrackers();

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 TEXT FIELDS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    textSpanContainerActive.classList.remove("totalFadeOut"); // SHOW NEXT LINE
    textSpanContainerNextParagraph.classList.remove("totalFadeOut"); // SHOW NEXT LINE
    clearTextFields(); // CLEAR ALL STRING DATA FROM TEXT FIELDS AND EMPTY ARRAYS
    buildWordArrays(wordsArrLength);

    // CREATE TEXT STRING FROM RANDOM WORDS UP TO sequenceLength IN LENGTH
    // CREATE STRING OF WORDS WITH SPACES
    stringWords = wordArrays[lineIdx].join("");
    // console.log("STRINGWORDS:", stringWords);

    // POPULATE ACTIVE TEXT CONTAINER WITH SPANS
    createSpans(lineIdx, textSpanContainerActive);
    // INITIALISE TEXTSPANCONTAINER NEXT
    createSpans(lineIdx + 1, textSpanContainerNextParagraph);

    // ADD CURSOR TO FIRST CHARACTER WHEN PAGE LOADS
    const firstCharacter = document.getElementById("span-0");
    firstCharacter.classList.add("background", "black-border");

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 KEY EVENTS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    const handleKeyEvent = (event) => {
        // const typedKey = event.key;
        typedKey = event.key;
        // console.log("EVENT: KEYDOWN", event.key);
        // console.log("WRONG COUNTER KEY EVENTS", consecutiveErrorCounter);

        // TRACK TYPED KEY ON KEYBOARD IN REAL TIME (100MS FLASH)
        const enterKey = document.getElementById("key--enter");
        for (let i = 0; i < letterKeys.length; i += 1) {
            if (typedKey.toUpperCase() === letterKeys[i].innerText) {
                // CLASS COLOUR: rgba(0, 128, 0, 0.304)
                letterKeys[i].classList.add("green-background__keyboard");

                setTimeout(function () {
                    letterKeys[i].classList.remove(
                        "green-background__keyboard"
                    );
                }, 100);
            }
        }

        // ENTER KEY IS HANDLED SEPARATELY AS ITS TEXT CONTENT IS "RETURN" VS "ENTER" !
        if (typedKey === "Enter") {
            enterKey.classList.add("green-background__keyboard");
            setTimeout(function () {
                enterKey.classList.remove("green-background__keyboard");
            }, 100);
        }

        // MORE THAN 5 MISTAKES: GOODBYE MESSAGE SEQUENCE
        if (consecutiveErrorCounter >= maxMistakes) {
            displayConsecErrors();
            reloadSequence();
            textInput.removeEventListener("keydown", handleKeyEvent);
        }

        //NOT USED
        // console.log("event.code:", event.code)

        // ONLY KEEP TRACK OF KEYSTROKES WHILE CLOCK IS RUNNING (NOW DISABLED, KEYSTROKES ARE ALWAYS COUNTED)
        // if (timerOn) {
        // if (timerRunning) {
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        // !!! THIS IS NOT RUNNING !!! DETECT CAPSLOCK CHANGE HERE !!!
        if (typedKey !== "CapsLock") {
            keyStrokeCounter += 1;
        }
        // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


        keystrokesSpan.textContent = keyStrokeCounter;
        // }

        // logKeyEventStart();

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 ENTER 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

        // if (typedKey === "Enter") {
        //     console.log("ENTER");
        // }

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 SHIFT 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

        // if (typedKey === "Shift") {
        //     console.log("SHIFT");
        // }

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 BACKSPACE 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

        if (typedKey === "Backspace" && charIdx > 0) {
            handleBackspace();
        }

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CORRECT KEY 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

        if (typedKey === wordArrays[lineIdx][wordIdx][charIdx]) {
            // console.log(
            //     "CORRECT KEY!",
            //     "typed:",
            //     typedKey,
            //     "actual:",
            //     wordArrays[lineIdx][wordIdx][charIdx]
            // );

            if (soundOn) {
                playSound("mixkit-single-key-press-in-a-laptop-2541.wav", 1);
            }

            countErrorsInCurrentWord();

            consecutiveErrorCounter = 0;

            //  WORD[0] - WORD[LENGTH-1], ALL CHARACTERS IN WORD EXCLUDING TRAILING SPACE
            if (charIdx < wordArrays[lineIdx][wordIdx].length - 1) {
                correctKeyNotLastSpace();
            }

            // WORD[LENGTH-1], TRAILING SPACE ALL WORDS EXCEPT LAST WORD
            else if (charIdx === wordArrays[lineIdx][wordIdx].length - 1) {
                correctSpaceNotLastWord();
            }

            // REMOVE CURSOR FROM SPACE
            if (typedKey === " ") {
                // console.log("CORRECT KEY - SPACE");

                // RESEET SKIPPED WORDS COUNTER
                skippedWordsCounter = 0;

                // END OF LINE SPACE
                if (strIdx === stringWords.length - 1) {
                    // console.log("ENTER SPAN, SPACE TYPED");
                    correctEndOfLineSpace();
                }

                // ONLY ACCESS CURRENTCHAR IF IT IS NOT END OF LINE (IF STATEMENT DOESNT WORK FOR CLASSLIST REMOVE, STILL GET TYPE ERROR )
                // !!! ERROR: Uncaught TypeError: Cannot read properties of null (reading 'classList')at HTMLDocument.handleKeyEvent (script.js:680:33)

                if (strIdx < stringWords.length - 1) {
                    correctSpaceNotEndOfLine();
                }

                // COUNT COLOUR SPANS IN LAST WORD WHEN TRAILING SPACE IS TYPED CORRECTLY
                countSpanColours();

                wordCounter += 1;

                // CALC AND DISPLAY ACCURACY  accuracy = (100 / (greenCounter + redCounter)) * greenCounter;
                accuracy = calcAccuracy();
                resetAccSpanColours();
                colourAccuracySpan();
                accuracySpan.textContent = `${Math.floor(accuracy)}`;
            }
        }

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 WRONG KEY OR SHIFT FOR CAPITAL LETTERS 🀰🀰🀰🀰🀰🀰🀰🀰🀰
        else if (
            typedKey !== wordArrays[lineIdx][wordIdx][charIdx] &&
            typedKey !== " " &&
            typedKey !== "Shift" &&
            typedKey !== "Backspace" &&
            typedKey !== "CapsLock"
        ) {
            // console.log(
            //     "WRONG KEY!",
            //     "typed:",
            //     typedKey,
            //     "actual:",
            //     wordArrays[lineIdx][wordIdx][charIdx]
            // );

            consecutiveErrorCounter += 1;

            if (strIdx >= stringWords.length - 1) {
                // console.log("GONE BEYOND END OF LINE");
                nullValueSpanCounter += 1;
                // console.log("NULL COUNTER:", nullValueSpanCounter);
            }

            if (typedKey !== "Enter") {
                if (nullValueSpanCounter > 0) {
                    messageDiv.textContent = `${nullValueSpanCounter} ERROR(S) INTO NEXT LINE!`;

                    // HIGHLIGHT END OF LINE SPACE UNTIL CONSECUTIVE ERRORS ARE MADE (AND KEEP IT HIGHLIGHTED UNTIL ALL ERRORS ARE CORRECTED IN handleBackspace())
                    const charSpans =
                        document.querySelectorAll(".active-txt-span");
                    const endOfLineSpace = charSpans[stringWords.length - 1];
                    endOfLineSpace.classList.add(
                        "red-border",
                        "red-background"
                    );
                } else {
                    messageDiv.textContent = "WRONG KEY!";
                }

                // ERROR ON LAST SPACE
                if (
                    strIdx === stringWords.length - 1 ||
                    wordArrays[lineIdx][wordIdx][charIdx] === undefined
                ) {
                    // console.log("WRONG KEY ON LAST SPACE");
                    // console.log("STR IDX:", strIdx);
                    // nullValueSpanCounter += 1;
                    // console.log("NULL COUNTER:", nullValueSpanCounter);
                }

                setTimeout(() => {
                    messageDiv.textContent = "";
                }, 200);
                if (consecutiveErrorCounter === 0) {
                    messageDiv.textContent = "";
                }
            }

            if (consecutiveErrorCounter > 4) {
                textFieldsWrap.classList.add("red-border--thick");
                setTimeout(() => {
                    // messageDiv.textContent = "";
                    textFieldsWrap.classList.remove("red-border--thick");
                }, 200);
            }

            if (consecutiveErrorCounter > 9) {
                textFieldsWrap.classList.add("red-background");
                setTimeout(() => {
                    // messageDiv.textContent = "";
                    textFieldsWrap.classList.remove("red-background");
                }, 200);
            }

            if (typedKey === "Enter" && enterOn) {
                if (strIdx === stringWords.length - 1) {
                    if (soundOn) {
                        playSound(
                            "mixkit-single-key-press-in-a-laptop-2541.wav",
                            1
                        );
                    }

                    consecutiveErrorCounter = 0;

                    //  WORD[0] - WORD[LENGTH-1], ALL CHARACTERS IN WORD EXCLUDING TRAILING SPACE
                    if (charIdx < wordArrays[lineIdx][wordIdx].length - 1) {
                        correctKeyNotLastSpace();
                    }

                    // WORD[LENGTH-1], TRAILING SPACE ALL WORDS EXCEPT LAST WORD
                    else if (
                        charIdx ===
                        wordArrays[lineIdx][wordIdx].length - 1
                    ) {
                        correctSpaceNotLastWord();
                    }

                    if (strIdx === stringWords.length - 1) {
                        correctEndOfLineSpace();
                    }

                    // ONLY ACCESS CURRENTCHAR IF IT IS NOT END OF LINE (IF STATEMENT DOESNT WORK FOR CLASSLIST REMOVE, STILL GET TYPE ERROR )
                    // !!! ERROR: Uncaught TypeError: Cannot read properties of null (reading 'classList')at HTMLDocument.handleKeyEvent (script.js:680:33)

                    if (strIdx < stringWords.length - 1) {
                        correctSpaceNotEndOfLine();
                    }

                    // COUNT COLOUR SPANS IN LAST WORD WHEN TRAILING SPACE IS TYPED CORRECTLY
                    countSpanColours();

                    wordCounter += 1;

                    // CALC AND DISPLAY ACCURACY  accuracy = (100 / (greenCounter + redCounter)) * greenCounter;
                    accuracy = calcAccuracy();
                    resetAccSpanColours();
                    colourAccuracySpan();
                    accuracySpan.textContent = `${Math.floor(accuracy)}`;
                }
            }

            // UPDATE PROBLEM KEY SET
            if (
                wordArrays[lineIdx][wordIdx][charIdx] !== " " && // SPACE
                wordArrays[lineIdx][wordIdx][charIdx] !== undefined // CHARACTER IN NEXT WORD (WORD IDX HAS NOT BEEN INCREMENTED)
            ) {
                problemKeysSet.add(wordArrays[lineIdx][wordIdx][charIdx]);
            }

            // IF PROBLEMKEYS SET HAS LENGTH LOOP OVER problemKeysSet AND FIND CORRESPONDING problem-key-span FOR EACH ELEMENT
            if (problemKeysSet.size > 0) {
                highlightProblemKeys();
            }

            if (soundOn) {
                playSound("mixkit-message-pop-alert-2354.mp3", 0.25);
            }

            let currentCharacter = document.getElementById(`span-${strIdx}`);
            let nextCharacter = document.getElementById(`span-${strIdx + 1}`);

            if (nextCharacter !== null) {
                currentCharacter.classList.add("red");
            }

            countErrorsInCurrentWord();

            // ONLY ACCESS NEXT CHAR IF IT IS NOT THE END OF LINE SPACE
            if (strIdx < stringWords.length - 1) {
                nextCharacter.classList.add("background", "black-border");
            }

            if (nextCharacter !== null) {
                currentCharacter.classList.remove("background", "black-border");
            }

            if (stringWords[strIdx] === " ") {
                currentCharacter.classList.add("red-border");
                currentCharacter.classList.remove("orange-border");
                // HIGHLIGHT LAST SPACE IF WRONG KEY WAS TYPED ON IT
                if (strIdx === stringWords.length - 1) {
                    currentCharacter.classList.add("red-background");
                    currentCharacter.classList.add("red-border");
                    setTimeout(() => {
                        currentCharacter.classList.remove(
                            "red-background",
                            "red-border"
                        );
                    }, 200);
                }
            }

            nextChar();
        }

        // 🀰🀰🀰🀰🀰🀰🀰🀰🀰 SPACE ON WORD (WRONG CHAR AND SPACE) 🀰🀰🀰🀰🀰🀰🀰🀰🀰
        else if (
            typedKey !== wordArrays[lineIdx][wordIdx][charIdx] &&
            typedKey === " "
        ) {
            if (soundOn) {
                playSound("mixkit-message-pop-alert-2354.mp3", 0.25);
            }

            messageDiv.textContent = "SPACE ON WORD!";
            textFieldsWrap.classList.add("red-border--thick");
            setTimeout(() => {
                messageDiv.textContent = "";
                textFieldsWrap.classList.remove("red-border--thick");
            }, 200);

            // ERROR: THIS NOT WORKING? LOOK INTO THIS !!!
            redCounter += wordArrays[lineIdx][wordIdx].length; // INCREMENT RED COUNTER WITH WORD'S LENGTH

            accuracy = calcAccuracy(); // CALC ACCURACY AGAIN
            colourAccuracySpan(); // AND UPDATE COUNTER
            accuracySpan.textContent = `${Math.floor(accuracy)}%`;

            // JUMP IDX TO THE NEXT WORD IN STRING
            if (charIdx < wordArrays[lineIdx][wordIdx].length) {
                // SKIP TO NEXT WORD IN STRING (FIND NEXT SPACE IN STRING AND SET INDEX TO NEXT WORD AFTER SPACE)
                strIdx = findNextWordIndex(); // UPDATE STRIDX WITH RETURN VALUE OF findNextWordIndex
                clearTextInput();
            }

            // HANDLE CONSECUTIVE SKOPPED WORDS (CURRENTLY MAX=5)
            skippedWordsCounter += 1;
            if (skippedWordsCounter >= maxSkippedWords) {
                reloadSequence();
                textInput.removeEventListener("keydown", handleKeyEvent);
            }

            // ======= SPACE ON LAST WORD (WRONG CHAR AND SPACE) ==========
            if (wordIdx === wordArrays[lineIdx].length - 1) {
                spaceOnLastWord();
            }

            // APPLY BACKGROUND TO NEXT CHAR AND REMOVE BACKGROUND FROM CURRENT
            // ON ALL CHARACTERS BUT LAST
            if (strIdx < stringWords.length) {
                spaceOnWord();
            }
        }

        // logKeyEventEnd();

        // MORE THAN 20/16/12 MISTAKES: GOODBYE MESSAGE SEQUENCE
        if (consecutiveErrorCounter >= maxMistakes) {
            displayConsecErrors();
            reloadSequence();
            textInput.removeEventListener("keydown", handleKeyEvent);
        }
        displayColourCounterValues();
    };

    // ADD HANDLEKEYEVENT FOR KEYUP EVENT ONLY ONCE, REMOVE IT IF START IS CLICKED AGAIN, SEE IF BLOCK BELOW
    // document.addEventListener("keydown", handleKeyEvent);
    textInput.addEventListener("keydown", handleKeyEvent);

    // CHANGE START BUTTON'S INNER TEXT TO: "NEW"
    if (startButtonCounter > 0) {
        startButton.innerText = "🔄 New";
    }

    // IF START BUTTON CLICKED AGAIN, RESET EVERYTHING AND GENERATE NEW DATA
    if (startButtonCounter > 1) {
        // REMOVE LISTENER
        textInput.removeEventListener("keydown", handleKeyEvent);
        // console.log("EVENT LISTENER REMOVED FROM DOCUMENT FOR KEYUP");

        // RESET
        clearTextFields();
        clearTextInput();
        clearIdxTrackers();
        clearArrAndString();
        // INITIALISE
        buildWordArrays(wordsArrLength);
        createSpans(lineIdx, textSpanContainerActive);

        stringWords = wordArrays[lineIdx].join("");

        createSpans(lineIdx + 1, textSpanContainerNextParagraph);
        textInput.placeholder = "Start typing or customise text";

        // TEMP FIX, TRY REMOVING COMPLETED LINES FROM DOM
        // ADD CURSOR TO FIRST SPAN AFTER RE-GENERATING TEXT
        // FIND ALL ACTIVE SPANS, SINGLE OUT FIRST THAT HAS NO OTHER CLASS AND ADD CURSOR TO IT
        const activeSpans = document.getElementsByClassName("active-txt-span");

        // ADD CURSOR TO FIRST SPAN WHEN RE-GENERATING TEXT
        for (let i = 0; i < activeSpans.length; i += 1) {
            if (
                !activeSpans[i].classList.contains("background") &&
                !activeSpans[i].classList.contains("red") &&
                !activeSpans[i].classList.contains("green") &&
                !activeSpans[i].classList.contains("orange") &&
                activeSpans[i].textContent !== " "
            ) {
                // console.log("SPAN FOUND", activeSpans[i]);
                activeSpans[i].classList.add("background", "black-border");
                break;
            }
        }
    }
});

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CONTROL PANEL 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const enableStartButton = () => {
    startButton.classList.add("apply--active");
    startButton.disabled = false;
    startButton.innerText = "Start";
};

const disableStartButton = () => {
    startButton.classList.remove("apply--active");
    startButton.disabled = true;
};

const disableBeginnerToggles = () => {
    for (let i = 0; i < beginnerToggles.length; i += 1) {
        beginnerToggles[i].disabled = true;
    }
};

const displaySelectionWarning = () => {
    messageDiv.textContent = "SELECT LEVEL, GRAMS OR ROWS";
};

const clearMessageDiv = () => {
    messageDiv.textContent = "";
};

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 DIFFICULTY 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

for (let i = 0, length = difficultyRadios.length; i < length; i++) {
    difficultyRadios[i].addEventListener("click", function () {
        // console.log(this);
        // console.log(targetArray);
        setDifficultyLevel();
        enableStartButton();
    });
}

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 BEGINNER GRAMS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const disableRowsControls = () => {
    for (let i = 0, length = rowRadios.length; i < length; i++) {
        rowRadios[i].checked = false;
    }
};

const disableGramsControls = () => {
    for (let i = 0, length = gramRadios.length; i < length; i++) {
        gramRadios[i].checked = false;
    }
};

const gramRadios = document.getElementsByClassName("gram-radio");
const beginnerToggles = document.getElementsByClassName(
    "btn--toggle__beginner"
);

for (let i = 0; i < gramRadios.length; i++) {
    gramRadios[i].addEventListener("click", function () {
        enableStartButton();

        // DISABLE ROWS
        disableRowsControls();
        // DISABLE LEVELS AND LEVELS APPLY
        for (let i = 0; i < levelButtons.length; i += 1) {
            levelButtons[i].classList.remove("apply--active", "toggle-on");
        }

        // ENABLE BEGINNER TOGGLES (PUNCTUATION, CAPITAL AND ENTER)
        for (let i = 0; i < beginnerToggles.length; i += 1) {
            beginnerToggles[i].disabled = false;
        }

        if (gramRadios[i].value === "2") {
            targetArray = [...bigrams];
        } else if (gramRadios[i].value === "3") {
            targetArray = [...trigrams];
        } else {
            targetArray = [...quadrigrams]; // "4"
        }

        clearMessageDiv();
        clearDataAndDisplay();
        placeholderClickStart();
    });
}

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 BEGINNER ROWS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const rowRadios = document.getElementsByClassName("row-radio");

for (let i = 0, length = rowRadios.length; i < length; i++) {
    rowRadios[i].addEventListener("click", function () {
        enableStartButton();

        // DISABLE GRAMS
        disableGramsControls();
        // DISABLE LEVELS AND LEVELS APPLY
        for (let i = 0; i < levelButtons.length; i += 1) {
            levelButtons[i].classList.remove("apply--active", "toggle-on");
        }

        // ENABLE BEGINNER TOGGLES (PUNCTUATION, CAPITAL AND ENTER)
        for (let i = 0; i < beginnerToggles.length; i += 1) {
            beginnerToggles[i].disabled = false;
        }

        if (rowRadios[i].value === "top") {
            // targetArray = [...topRow];
            targetArray = [...lowerCaseArrElements(topRow)];
        } else if (rowRadios[i].value === "home") {
            targetArray = [...homeRow];
        } else {
            targetArray = [...bottomRow]; // "bottom"
        }

        clearMessageDiv();
        clearDataAndDisplay();
        placeholderClickStart();
    });
}

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 LINE LENGTH 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

slider.onchange = function (event) {
    lengthDisplaySpan.textContent = slider.value;
    sequenceLength = slider.value;
    enableStartButton();
    clearDataAndDisplay();
};

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 PUNCTUATION 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const handlePunctuationToggle = () => {
    toggleButtonStyle(punctuationToggle);
    toggleButtonState(punctuationToggle);
    clearDataAndDisplay();
    placeholderClickStart();
};

punctuationToggle.addEventListener("click", handlePunctuationToggle);

const handlePunctuationToggleBeginner = () => {
    toggleButtonStyle(punctuationToggleBeginner);
    toggleButtonState(punctuationToggleBeginner);
    clearDataAndDisplay();
    placeholderClickStart();
};

punctuationToggleBeginner.addEventListener(
    "click",
    handlePunctuationToggleBeginner
);

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CAPITAL 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const handleCapitalToggle = () => {
    toggleButtonStyle(capitalToggle);
    toggleButtonState(capitalToggle);
    clearDataAndDisplay();
    placeholderClickStart();
};

capitalToggle.addEventListener("click", handleCapitalToggle);

// BEGINNER LEVEL

const handleCapitalToggleBeginner = () => {
    toggleButtonStyle(capitalToggleBeginner);
    toggleButtonState(capitalToggleBeginner);
    clearDataAndDisplay();
    placeholderClickStart();
};

capitalToggleBeginner.addEventListener("click", handleCapitalToggleBeginner);

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 NUMBERS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const handleNumbersToggle = () => {
    toggleButtonStyle(numbersToggle);
    toggleButtonState(numbersToggle);
    clearDataAndDisplay();
    placeholderClickStart();
    console.log(numbersOn);
};

numbersToggle.addEventListener("click", handleNumbersToggle);
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 ENTER 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const handleEnterToggle = () => {
    toggleButtonStyle(enterToggle);
    toggleButtonState(enterToggle);
    clearDataAndDisplay();
    placeholderClickStart();
};

enterToggle.addEventListener("click", handleEnterToggle);

// BEGINNER LEVEL

const handleEnterToggleBeginner = () => {
    toggleButtonStyle(enterToggleBeginner);
    toggleButtonState(enterToggleBeginner);
    clearDataAndDisplay();
    placeholderClickStart();
};

enterToggleBeginner.addEventListener("click", handleEnterToggleBeginner);

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 TIMER 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// ONE TIME LISTENER FOR TIMER SETTIMEOUT
const countdown = () => {
    for (let i = 0; i < fadeWithTimerElements.length; i += 1) {
        fadeWithTimerElements[i].classList.remove("fadeIn");
        fadeWithTimerElements[i].classList.add("fadeOut");
    }
    document.querySelector(".body").classList.add("timer-style__body");
    container.classList.add("timer-style__container");
    messageDiv.classList.add("timer-style__message-div");

    let seconds = 60;
    // seconds = 5;
    const tick = () => {
        const counter = document.getElementById("counter-div");
        seconds -= 1;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        // counter.innerHTML = seconds;
        if (seconds > 0) {
            setTimeout(tick, 1000);
            timerRunning = true;
            // console.log("TIMER ON:", timerOn);
        }

        let finalSpeed = 0;

        // CALCULATE CURRENT AVE SPEED EVERY SECOND
        if (Number.isInteger(seconds / 1)) {
            let currentSpeed = (60 / (60 - seconds)) * wordCounter;
            // speedSpan.innerText = currentSpeed.toFixed(1);
            speedSpan.innerText = Math.floor(currentSpeed); // ROUND DOWN SPEED TO NEAREST INTEGER
            finalSpeed = currentSpeed;
        }

        // FADE IN CONTROLS AT 2 SECOND MARK
        if (seconds === 2) {
            for (let i = 0; i < fadeWithTimerElements.length; i += 1) {
                fadeWithTimerElements[i].classList.add("fadeIn");
                fadeWithTimerElements[i].classList.remove("fadeOut");
            }
        }

        // if (seconds === 1) {
        //     textSpanContainerNextParagraph.classList.add("totalFadeOut");
        //     textSpanContainerActive.classList.add("totalFadeOut");
        // }

        if (seconds === 0) {
            // console.log("times up");
            timerRunning = false;

            textInput.value = "                 Try Again ➡"; // SET INPUT VALUE
            // textInput.readOnly = true; // DISABLE TXT INPUT
            textInput.disabled = true; // DISABLE TXT INPUT
            speedSpan.innerText = finalSpeed;
            startButton.disabled = false;
            startButton.classList.add("apply--active");
            startButton.innerText = "Start";
            // CLEAR TEXT AFTER 1750 SECONDS, SYNC CLEARTEXFIELDS WITH ANIMATION DURATION (FADE OUT 1500 AND THEN CLEAR)
            setTimeout(clearTextFields, 1750);

            textSpanContainerNextParagraph.classList.add("totalFadeOut");
            textSpanContainerActive.classList.add("totalFadeOut");

            document
                .querySelector(".body")
                .classList.remove("timer-style__body");
            container.classList.remove("timer-style__container");
            messageDiv.classList.remove("timer-style__message-div");

            textInput.removeEventListener("keydown", startCountdown);
            const totalKeystrokes = keyStrokeCounter;
            keystrokesSpan.textContent = totalKeystrokes;
            // ENABLE CONTROL INPUTS/TOGGLES
            for (let i = 0; i < disabledDuringTimer.length; i += 1) {
                disabledDuringTimer[i].disabled = false;
            }
        }
    };

    tick();
};

const handleTimerToggle = () => {
    toggleButtonStyle(timerToggle);
    toggleButtonState(timerToggle);
    clearDataAndDisplay();
    placeholderClickStart();
};

timerToggle.addEventListener("click", handleTimerToggle);

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 SOUND 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰
// SOURCE: https://mixkit.co/free-sound-effects/click/

const handleSoundToggle = () => {
    toggleButtonStyle(soundToggle);
    toggleButtonState(soundToggle);
    textInput.focus();

    // ADD FOCUS TO INPUT !!!
};

soundToggle.addEventListener("click", handleSoundToggle);

// ONE OFF FUNCTION RUNS ON FIRST KEYPRESS
const startCountdown = () => {
    countdown();
    textInput.removeEventListener("keydown", startCountdown);
    // console.log("EVENT LISTENER REMOVED FROM TEXT INPUT FOR TIMER");

    // DISABLE CONTROL INPUTS/TOGGLES
    for (let i = 0; i < disabledDuringTimer.length; i += 1) {
        disabledDuringTimer[i].disabled = true;
    }
};

// FLIP APP/INFO
//SOURCE: https://codepen.io/desandro/pen/LmWoWe

for (let i = 0; i < flipButtons.length; i += 1) {
    flipButtons[i].addEventListener("click", function () {
        // console.log("CARD FLIPPED");
        card.classList.toggle("flipped");
        instructionsContainer.scrollTop = 0;
        // NOT WORKING:
        // instructionsContainer.scrollIntoView();
        if (!card.classList.contains("flipped")) {
            textInput.focus();
        }
    });
}

const controlFlipButtons = document.getElementsByClassName(
    "flip-button--controls"
);

const controlsCard = document.getElementById("card--controls");

for (let i = 0; i < controlFlipButtons.length; i += 1) {
    controlFlipButtons[i].addEventListener("click", function () {
        controlsCard.classList.toggle("flipped");
    });
}

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 COLOUR THEME 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

const handleThemeToggle = () => {
    toggleButtonStyle(themeToggle);
    toggleButtonState(themeToggle);
    for (let i = 0; i < colourThemeElements.length; i += 1) {
        if (darkThemeOn) {
            colourThemeElements[i].classList.add("dark-theme");
        } else {
            colourThemeElements[i].classList.remove("dark-theme");
        }
    }
    textInput.focus();
};

themeToggle.addEventListener("click", handleThemeToggle);

// 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 BEGINNER CONTROLS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

// ARRAY FOR THE CURRENTLY SELECTED KEYS
let selectedBeginerKeys = [];

// ARRAY FOR RANDOMLY GENERATED WORDS
let randomKeyWordsArray = [];

// CHOOSE SELECTION TYPE (RANDOM (ONE AT A TIME) OR INCLUSIVE (UP TO SELECTED))
// INCLUSIVE UP TO SELECTION IS NOW DEFAULT
let inclusiveSelected = true;

const selectInclusiveToggle = document.getElementById(
    "btn--toggle__selection-type"
);
selectInclusiveToggle.addEventListener("click", function () {
    // RESET ALL BUTTONS (REMOVE CONTROL-APPLY-ACTIVE AND TOGGLE ON CLASSES)
    for (let i = 0; i < levelButtons.length; i += 1) {
        levelButtons[i].classList.remove("toggle-on", "apply--active");
    }

    disableStartButton();
    clearDataAndDisplay();
    disableBeginnerToggles();
    // DISABLE RADIOS
    disableGramsControls();
    disableRowsControls();

    selectInclusiveToggle.classList.toggle("toggle-on");
    if (selectInclusiveToggle.classList.contains("toggle-on")) {
        inclusiveSelected = false;
        selectInclusiveToggle.innerText = "Random";
    } else {
        inclusiveSelected = true;
        selectInclusiveToggle.innerText = "Through";
    }

    displaySelectionWarning();
});

// TOGGLE LEVEL BUTTON STYLE, CLASSES ARE NOW USED TO STYLE
const toggleLevelButtonStyle = (element) => {
    if (element.classList.contains("toggle-on")) {
        element.classList.remove("toggle-on");
        element.classList.add("toggle-off");
        element.classList.remove("apply--active");
    } else {
        element.classList.remove("toggle-off");
        element.classList.add("toggle-on");
        element.classList.add("apply--active");
    }
};

// TOGGLE BOOLEAN BUTTON STATE BASED ON CLASS
// !!! LOOP OVER ALL LEVEL BUTTONS AND PLUG EACH BUTTON INTO THIS FUNCTION WHEN APPLY IS CLICKED BELOW (1504)!!!
const toggleLevelButtonState = (element) => {
    // console.log(element);
    if (element.classList.contains("toggle-on")) {
        switch (element) {
            case level_1:
                level_1_On = true;
                break;
            case level_2:
                level_2_On = true;
                break;
            case level_3:
                level_3_On = true;
                break;
            case level_4:
                level_4_On = true;
                break;
            case level_5:
                level_5_On = true;
                break;
            case level_6:
                level_6_On = true;
                break;
            case level_7:
                level_7_On = true;
                break;
            case level_8:
                level_8_On = true;
                break;
            case level_9:
                level_9_On = true;
        }
    } else {
        switch (element) {
            case level_1:
                level_1_On = false;
                break;
            case level_2:
                level_2_On = false;
                break;
            case level_3:
                level_3_On = false;
                break;
            case level_4:
                level_4_On = false;
                break;
            case level_5:
                level_5_On = false;
                break;
            case level_6:
                level_6_On = false;
                break;
            case level_7:
                level_7_On = false;
                break;
            case level_8:
                level_8_On = false;
                break;
            case level_9:
                level_9_On = false;
        }
    }
};

// console.log("INCLUSIVE SELECTED");
for (let i = 0; i < levelButtons.length; i += 1) {
    // console.log(this);
    // console.log(this.innerText);
    // console.log(this.id);

    // console.log("CLICKED", levelButtons[i], "index:", i);
    levelButtons[i].addEventListener("click", function () {
        // INCLUSIVE SELECTED
        if (inclusiveSelected) {
            // REMOVE CLASSES FIRST
            for (let i = 0; i < levelButtons.length; i += 1) {
                levelButtons[i].classList.remove(
                    "toggle-on",
                    "toggle-off",
                    "apply--active"
                );
            }

            // LOOP THROUGH LEVELBUTTOONS AND ACTIVATE THEM UP TO INDEX OF SELECTED LEVEL
            for (let j = 0; j <= i; j += 1) {
                levelButtons[j].classList.add("apply--active", "toggle-on");
            }

            disableStartButton();
            clearDataAndDisplay();

            // RESET SELECTED BEGINNER KEYS ARRAY, IT WILL BE UPDATED WITH APPLY BUTTON
            selectedBeginerKeys = [];
        }

        // INDIVIDUALLY SELECT (ONE BY ONE, ANY ORDER)
        else {
            disableStartButton();
            clearDataAndDisplay();

            toggleLevelButtonStyle(this);
            // RESET SELECTED BEGINNER KEYS ARRAY, IT WILL BE UPDATED WITH APPLY BUTTON
            selectedBeginerKeys = [];
        }
        // DISABLE RADIOS
        disableGramsControls();
        disableRowsControls();

        // ENABLE BEGINNER TOGGLES (PUNCTUATION, CAPITAL AND ENTER)
        for (let i = 0; i < beginnerToggles.length; i += 1) {
            beginnerToggles[i].disabled = false;
        }

        randomKeyWordsArray = []; // RESET TO AVOID DUPLICATES IF APPLY IS CLICKED AGAIN
        selectedBeginerKeys = []; // RESET TO AVOID DUPLICATES
        enableStartButton();

        // THIS WILL UPDATE LEVEL STATES ARRAY
        for (let i = 0; i < levelButtons.length; i += 1) {
            toggleLevelButtonState(levelButtons[i]);
        }

        // LEVEL BUTTON STATES ARRAY IS USED TO LOOP THROUGH ALL BOOLEANS
        let levelStateArray = [
            level_1_On,
            level_2_On,
            level_3_On,
            level_4_On,
            level_5_On,
            level_6_On,
            level_7_On,
            level_8_On,
            level_9_On,
        ];

        // ONLY ENABLE TOGGLES AND START IF AT LEAST ONE IS SELECTED
        const selectionIsMade = () => {
            let selectionMade = false;
            for (let i = 0; i < levelButtons.length; i += 1) {
                if (levelButtons[i].classList.contains("toggle-on")) {
                    selectionMade = true;
                    break;
                }
            }
            return selectionMade;
        };

        // DISABLE TOGGLES AND START IF NO SELECTION IS MADE
        if (!selectionIsMade()) {
            // console.log("NO SELECTION IS MADE, DISABLE TOGGLES AND START");
            disableStartButton();
            textInput.placeholder = "";
            disableBeginnerToggles();
            displaySelectionWarning();
        } else {
            clearMessageDiv();
            placeholderClickStart();
        }

        // console.log(levelStateArray);

        // UPDATE TARGET ARRAY WITH RANDOM WORDS(RANDOM LENGTH 1-6) MADE FROM SELECTED LEVELS

        // LOOP THROUGH levelStateArray AND IF CURRENT VALUE IS TRUE, CONCAT CORRESPONDING LEVEL KEY ARRAY TO selectedBeginerKeys

        // 1. FIND ALL SELECTED KEYS IN GROUPS
        for (let i = 0; i < levelStateArray.length; i += 1) {
            if (levelStateArray[i]) {
                selectedBeginerKeys = selectedBeginerKeys.concat(
                    keyLevelsArray[i]
                );
            }
        }

        // 2. GENERATE WORDS USING ONLY THOSE SELECTED KEYS
        const generateWords = (numOfWords) => {
            for (let i = 0; i < numOfWords; i += 1) {
                let randomWord = "";
                let length = getRandomIdxLessThanNum(6);
                while (randomWord.length <= length) {
                    randomWord += getRandomFromArr(selectedBeginerKeys);
                }
                randomKeyWordsArray.push(randomWord);
            }
        };

        generateWords(500);

        // 3. UPDATE TARGET ARRAY WITH randomKeyWordsArray
        targetArray = [...randomKeyWordsArray];
    });
}

// SHOW BEGINNER LEVELS
beginnerShowButton.addEventListener("click", function () {
    // !IMPORTANT: UNCHECK ADVANCED/SENTENCES, THIS IS TO PREVENT buildWordArrays() FROM GENERATING SENTENCES IN BEGINNER MODE
    document.getElementById("sentences").checked = false;

    // RESET SLIDER (IN CASE LAST SELECTED LEVEL WAS "SENTENCES" AND IT NEEDS RE-ACTIVATING       )
    slider.disabled = false;
    slider.value = 30;
    lengthDisplaySpan.textContent = slider.value;
    sequenceLength = slider.value;

    // RESET LEVEL BUTTONS, NO PRE-SELECTION OPTION !
    for (let i = 0; i < levelButtons.length; i += 1) {
        levelButtons[i].classList.remove("apply--active", "toggle-on");
    }

    beginnerOn = true;
    timerOn = false;

    // MAKING SURE TIMERON IS FALSE IN BEGINNER AND RESET TO "OFF" FOR ADVANCED
    // if (timerToggle.classList.contains("toggle-on") && beginnerOn) {
    //     timerOn = false;
    // }
    textInput.removeEventListener("keydown", startCountdown);
    setTimeout(() => {
        timerToggle.classList.remove("toggle-on");
        timerToggle.innerText = "Off";
    }, 300);

    // DISABLE BEGINNER TOGGLES (PUNCTUATION, CAPITAL AND ENTER)
    for (let i = 0; i < beginnerToggles.length; i += 1) {
        beginnerToggles[i].disabled = true;
    }

    // RESET ALL MODIFIER TOGGLES TO OFF
    punctuationOn = false;
    punctuationToggleBeginner.classList.remove("toggle-on");
    punctuationToggleBeginner.classList.add("toggle-off");
    punctuationToggleBeginner.innerText = "Off";

    capitalOn = false;
    capitalToggleBeginner.classList.remove("toggle-on");
    capitalToggleBeginner.classList.add("toggle-off");
    capitalToggleBeginner.innerText = "Off";

    // +++++++++++++++++++++++++++++++++++++++++++++++++

    numbersOn = false;
    setTimeout(() => {
        numbersToggle.classList.remove("toggle-on");
        numbersToggle.innerText = "Off";
        numbersToggle.disabled = true;
    }, 300);
    console.log("BEGINNER SHOW / NUMBERSON", numbersOn);

    // +++++++++++++++++++++++++++++++++++++++++++++++++

    enterOn = false;
    enterToggleBeginner.classList.remove("toggle-on");
    enterToggleBeginner.classList.add("toggle-off");
    enterToggleBeginner.innerText = "Off";

    targetArray = [];

    startButton.disabled = true;
    startButton.classList.remove("apply--active");
    textInput.disabled = true;
    clearDataAndDisplay();
    clearArrAndString();

    setTimeout(() => {
        displaySelectionWarning();
    }, 1000);
});

// HIDE BEGINNER LEVELS
beginnerHideButton.addEventListener("click", function () {
    beginnerOn = false;

    // RESTORE / ACTIVATE ADVACED LEVEL CONTROL SETTINGS

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰 DIFFICULTY 🀰🀰🀰🀰🀰🀰🀰🀰🀰

    difficultyRadios[0].checked = true;
    targetArray = [...common100];
    // !!! NOT WORKING WHEN OTHER RADIOS HAVE BEEN SET IN BEGINNER !!!
    // setDifficultyLevel();

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰 PUNCTUATION 🀰🀰🀰🀰🀰🀰🀰🀰🀰

    punctuationOn = punctuationToggle.classList.contains("toggle-on")
        ? true
        : false;

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰 CAPITAL 🀰🀰🀰🀰🀰🀰🀰🀰🀰

    capitalOn = capitalToggle.classList.contains("toggle-on") ? true : false;

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰 NUMBERS 🀰🀰🀰🀰🀰🀰🀰🀰🀰

    // numbersToggle.disabled = true;
    // numbersOn = false;
    console.log("BEGINNER HIDE / NUMBERSON", numbersOn);

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰 ENTER 🀰🀰🀰🀰🀰🀰🀰🀰🀰

    enterOn = enterToggle.classList.contains("toggle-on") ? true : false;

    // if (timerToggle.innerText === "On") {
    if (timerToggle.classList.contains("toggle-on")) {
        timerOn = true;
    }

    // 🀰🀰🀰🀰🀰🀰🀰🀰🀰 SLIDER 🀰🀰🀰🀰🀰🀰🀰🀰🀰
    sliderWrap.classList.remove("transparent-disabled");

    problemKeysSet.clear();

    startButton.disabled = false;

    startButton.classList.add("apply--active");
    textInput.disabled = true;
    clearDataAndDisplay();
    clearArrAndString();

    // DISABLE RADIOS IN BEGINNER CARD
    for (let i = 0, length = gramRadios.length; i < length; i++) {
        gramRadios[i].checked = false;
    }

    for (let i = 0, length = rowRadios.length; i < length; i++) {
        rowRadios[i].checked = false;
    }

    clearMessageDiv();
    placeholderClickStart();
});

// JS NOT IN USE, POSITION IS NOW STICKY IN CSS

// INSTRUCTIONS CONTAINER HOVER : CURSOR TOOLTIP
// SOURCE: https://codepen.io/paulvddool/pen/mROEGa
// const cursorTooltip = document.getElementById("instructions-cursor-tooltip");

// const trackCursor = (e) => {
//     let x = e.clientX;
//     let y = e.clientY;
//     cursorTooltip.style.left = x + "px";
//     cursorTooltip.style.top = y + "px";
// };

// instructionsContainer.addEventListener("mouseover", trackCursor);

/*

 MACBOOK 2/4/23 19:59 

🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰 CHRIS' IDEAS 🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

        MAKE DIFFICULTY LEVEL OPTIONS SIMPLER
            ☑️ EASY
            ☑️ MEDIUM
            ☑️ HARD

            ☑️ EASY: RANDOM 100
            ☑️ MEDIUM: RANDOM 200 OR 500
            HARD: INCLUDE RANDOM SENTENCES

        CHANGE THE NUMBER OF CONSECUTIVE ERRORS ALLOWED
            ☑️ EASY:20
            ☑️ MEDIUM:16
            ☑️ HARD:12

        ☑️ GET RID OF APPLY BUTTONS

        ☑️ USE "HOW TO" INSTEAD OF "INFO"

        SLIDER TOGGLE SWITCES?

🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

CURRENT BRANCH:

🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

BRANCH: numbers-1

    ☑️ HARD DIFF LEVEL TO ENABLE NUMBERS

    ☑️ STYLE TOGGLE
    ☑️ STATE TOGGLE

    ☑️ DISABLE STYLE TOGGLE WITH OTHER LEVELS (COLOUR AND TEXTCONTENT, RED/OFF)
        (DUPLICATE CODE IN setDifficultyLevel())

    ☑️ IMPLEMENT LOGIC

🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

 BRANCH: sentences-1

    ☑️ WRITE FUNCTION THAT EXTRACTS WORDS WITH PUNCTUATION MARKS FROM STRING
        FIND REGEX FOR EXTRACTING WORDS FROM STRING:
        THIS MATCHES WORD WITH PUNCTUATION MARK /\w+[\.?!:]/G
        /\w+(?:'\w+)*|[!?.](?![!?.])/g

🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰🀰

    DUPLICATES:
        charSpans
        endOfLineSpace


    CSS VARIABLES
        CONTAINER HEIGHT
        COLOURS

    RESTORE DIFFICULTY LEVEL SETTING WHEN COMING BACK FROM BEGINNER ? (NOT WORKING)
    TRY RESETTING LEVEL TO COMMON100 - LINE 2317

    ADD COLOUR-THEME CLASS TO EVERY ELEMENT AFFECTED ???

    ACCURACY SPAN COLOUR CODES NOT WORKING WITH NEW SPAN COLOUR (CSS: .accuracy-span.dark-theme)

    
    FEATURES:

        COMPLETE DIFFICULTY LEVEL TARGET ARRAYS
            EASY 100
            MED  200
            HARD 500
            SENTENCES

        ☑️ INCLUDE NUMBERS IN DESCRIPTION

        ADD NUMERIC CHARACTERS
            MEDIUM DIFF LEVEL
            ☑️ HARD DIFF LEVEL

        GREEN WORDS COUNTER
        COMPLETE WORDS COUNTER
        TRACK KEYS TYPED IN REAL TIME ON KEYBOARD?
            ☑️ LETTER KEYS
            ☑️ ENTER
            NUMBERS
       
        ☑️ WRITE AND FORMAT INFO CARD
            ADD MORE CONTENT
        
        RESET TIMER IF START BUTTON IS CLICKED? 
        DISPLAY MESSAGE AS TEXT ELEMENT, NOT PLACEHOLDER OR CONTENT
            ☑️ CAPSLOCK WARNIING
        ☑️ PROBLEM KEYS
        DYNAMICALLY GENERATE NEXT LINE + 1 ?
        SHOW ALL TEXT AS ONE BLOCK ?

        INCLUDE ENTER KEY IN REAL TIME HIGHLIGHT ?
       
            
    PROBLEMS:

        ☑️ STYLE DISABLED "HOW TO" AND "BEGINNER LEVEL" BUTTONS DURING RELOAD SEQUENCE

        ☑️ FADE SLIDER DIV DURING RELOAD SEQUENCE

        ☑️ DISABLE TIMER AND TOGGLE WHEN CLOSING BEGINNER LEVEL

        FIND SOLUTION TO LONG SENTENCES (TEXT FIELD OVERFLOW AT 50+ SPANS)
            SPLIT ARRAY IN TWO?


        AFTER SELECTING SENTENCES ON ADV. LEVEL SELECTORS WONT WORK ON BEGINNER (STILL GETTING SENTENCES)
            REFACTOR buildWordArrays(), NOW IT HAS DUPLICATE CODE
            ☑️ OR MAYBE DE-SELECT "SENTENCES" WHEN SHOWING BEGINNER LEVEL AS GENERATING SENTENCES IS BASED ON ITS RADIO'S STATUS ???!!!

        LOOK INTO SPACE AFTER CONSECUTIVE ERRORS INTO NEXT WORD, WORD IDX ONLY JUMPS ONE WITH SPACE SKIP !!!

        UN-HIGHLIGHT SLIDER RAIL ON HOVER WHEN SLIDER IS DISABLED (SENTENCES LEVEL)
        ☑️ ADD OPACITY: 0.5 TO ENTIRE WRAP DIV ?


        ☑️ RESET ORANGE COUNTER WITH START BUTTON
            !!! TEMPORARY FIX, WRITE FUNCTION resetColourCounters() !!!

        ADD CURSOR TO FIRST CHARACTER WHEN NEW TEXT IS GENERATED BY START
                1. REMOVE ACTIVE SPANS FROM DOM ?
                2. START BUTTON: CHECK IF FIRST SPAN HAS ANY CLASS APART FROM active-text-span IF NOT ADD border/background
                    FIND active-text-spans, AND SELECT THE FIRST THAT HAS NO OTHER CLASS
                    ☑️ if (startButtonCounter > 1)

        CAPSLOCK MUST NOT ACTIVATE TIMER ? ONLY OFF->ON WILL TRIGGER TIMER (DETECT CAPSLOCK CHANGE)

        ☑️ STYLE DISABLED LEVEL SELECTORS AND SELECTION TYPE TOGGLE IN BEGINNER MODE DURING REFRESH SEQUENCE (MUST NOT HIGHLIGHT ON HOVER)


        RESET WRONGCOUNTER WHEN WORD IS SKIPPED BY ENTER ???
            SPACEONLASTWORD
            SPACEONWORD


        IF CONSECUTIVE ERRORS ARE MADE, KEYBOARD WILL ONLY TRACK PROBLEM KEYS IN FIRST WORD!! (NOT AN ACTUAL PROBLEM...)

        ADD FOCUS TO TEXT INPUT DURING SESSION WHEN: (IF SESSION HASN'T STARTED TXT IPUT IS DISABLED SO IT WILL NOT FOCUS BY DEFAULT)
            ☑️ SOUND TOGGLE
            ☑️ THEME TOGGLE
            ☑️ HIDE BEGINNER ?

        ADD FADE IN/OUT ANIMATION TO MESSAGE DIV TEXT?
            ☑️ ADDED 700MS SETTIMEOUT DELAY


        ENTER AND SPACE KEYS TRIGGER CARD FLIP AFTER FLIP BUTTON IS CLICKED (FOCUS???)
               
        END OF LINE ERROR: Uncaught TypeError: Cannot read properties of undefined (reading 'classList')
                at countSpanColours (script.js:721:26)
                at HTMLInputElement.handleKeyEvent (script.js:1092:17)
        END OF LINE ERROR: Uncaught TypeError: Cannot read properties of null (reading 'classList')at correctSpaceNotEndOfLine (script.js:693:22)at HTMLInputElement.handleKeyEvent (script.js:1081:21)
          
        ☑️ RESET TARGET ARRAY AFTER CLEARING PROBLEMKEYSET BECAUSE IT WILL BE IN A FILTERED STATE (findAndApplyProblemKeyWords)
        LOOK INTO PROBLEMKEYWORDS AGAIN (AFTER COMPLETING PROBLEMKEYWORDS WITH NO ERROR, TARGET ARRAY SHOULD UPDATE TO DEFAULT)
        !!! THIS IS A TEMPORARY FIX, HAS TO USE CURRENTLY SELECTED DIFFICULTY ARRAY !!!
        WHEN START BUTTON CLICKED CHECK WHAT THE CURRENT SELECTON IS ON THE RADIOS, USE MATCHING ARRAY FOR TARGET
        (WHEN ONE CLICKED, CHECK IF ANY OTHERS HAVE ACTIVE CLASS, IF YES, DO NOT ACTIVATE START BUTTON)
        REMOVE FADE CLASS FROM RED PANEL WHEN BLUE PANEL IS HIDDEN (THIS IS A BUG, TRY TO FIX TIMER ISSUE)
        HANDLE CONTROL PANEL SETTINGS WHEN SWITCHING PANELS (RESET ALL SETTINGS PROBABLY THE BEST)
            DIFFICULTY
            PUNCTUATION 
            CAPITAL LETTERS
            LINE LENGTH 
            TIMER
            SOUND

        WHEN BEGINNER PANEL COMES ON, CHECK IF ANY LEVELS PRE-SELECTED FROM PREVIOUS SESSION (LINE 1614)
            OR RESET ALL SETTINGS ???
       
        DON'T HIGHLIGT RADIO LABELS AND TOGGLE BUTTONS WHILE TIMER IS ON (WHEN DISABLED)
            ☑️ TOGGLE BUTTONS (:disabled:hover {ORIGINAL FONTWEIGHT})
            ☑️ RADIO LABELS
            SLIDER
      
        NOTES:
            !!! WHEN TIMER HAS ENDED FIRST START BUTTON PRESS WILL GENERATE POBLEM KEY WORDS ONLY, SECOND CLICK WILL USE COMMON100 !!!

       
*/
