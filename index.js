let getNumber = document.querySelector("#get-number");
let getSequence = document.querySelector("#get-sequence");
let reset = document.querySelector("#reset");
let output = document.querySelector(".output");
let resultOutput = "";


/************************************
  
CALCULATIONS AND OTHER FUNCTIONS

************************************/

const fibonacci = function(member) {
    let i = 1;
    let base = 0;
    let nextNumber = 1;
    let numberHolder;
    while (i < member) {
        numberHolder = nextNumber;
        nextNumber = base + nextNumber;
        base = numberHolder;
        i++;
    }
    return nextNumber;
};


function calculate(entry) {
    return fibonacci(entry);
}



/************************************
  
CASE CHECKERS

************************************/

function inputChecker(input) {
    if (isNaN(input)) {
        return false;
    }
    else if (input == "") {
        return false;
    }
    else if (Number.isInteger(parseFloat(input)) == false) {
        return false;
    }
    else if (input <= 0) {
        return false;
    }
    else {
        return true;
    }
}

function inputErrorMessage(input) {
    if (isNaN(input)) {
        return "Error! Please enter a valid number.";
    }
    else if (input == "") {
        return "Input is empty";
    }
    else if (Number.isInteger(parseFloat(input)) == false) {
        return "Error! Please enter a valid number.";
    }
    else if (input <= 0) {
        return "Error! Please enter a number that is greater than 0.";
    }
}

function checkInputNumberLimit(input) {
    if (input <= 100) {
        return true;
    }
}

function inputNumberLimitMessage(input) {
    if (input > 100) {
        return "Please enter a number that is less than or equal to 100.";
    }
}




/************************************
  
CLEAR

************************************/

function clearOutput() {
    clearText();
    clearInput();
    clearResultOutput();
}


function clearText() {
    output.textContent = "";
}


function clearInput() {
    document.querySelector("input").value = "";
}


function clearResultOutput() {
    resultOutput = "";
    output.innerHTML = resultOutput;
}




/************************************
  
PRINTERS

************************************/

function printOutResultsSingle(result, nth = undefined) {
    if (nth == undefined) {
        output.textContent = result;
    }
    else {
        output.innerHTML = "F<sub>" + nth + "</sub>: " + result;
    }
}


function printOutResultsSequence(result, nth = undefined) {
    if (nth == undefined) {
        output.textContent = result;
    }
    else {
        let textOutput = "F<sub>" + nth + "</sub>: " + result + "<br>";
        resultOutput = resultOutput + textOutput;
        output.innerHTML = resultOutput;
    }
}

function printOutError(input) {
    output.textContent = input;
}




/************************************
  
BUTTON FUNCTIONS

************************************/

function getNthNumber() {
    let input = document.querySelector("input").value;
    if (inputChecker(input) == false) {
        printOutError(inputErrorMessage(input));
    }
    else {
        if (checkInputNumberLimit(input)) {
            let result = calculate(input);
            printOutResultsSingle(result, input);
        }
        else {
            printOutError(inputNumberLimitMessage(input));
        }
    }
}


function getSequenceToNthNumber() {
    clearResultOutput();
    let result = undefined;
    let input = document.querySelector("input").value;
    if (inputChecker(input) == false) {
        printOutError(inputErrorMessage(input));
    }
    else {
        if (checkInputNumberLimit(input)) {
            for (let i = 1; i <= input; i++) {
                result = calculate(i);
                printOutResultsSequence(result, i);
            }
        }
        else {
            printOutError(inputNumberLimitMessage(input));
        }
    }
}


getNumber.addEventListener("click", getNthNumber);
getSequence.addEventListener("click", getSequenceToNthNumber);
reset.addEventListener("click", clearOutput);