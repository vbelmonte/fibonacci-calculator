let getNumber = document.querySelector("#get-number");
let getSequence = document.querySelector("#get-sequence");
let reset = document.querySelector("#reset");
let output = document.querySelector(".output");
let resultOutput = "";
/*let input = document.querySelector("input");*/


const fibonacci = function(member) {
    /*console.log(member);
    if (member <= 0) {
        console.log("Error! Please enter a number that is greater than 0.");
        return "Error! Please enter a number that is greater than 0.";
    }

    else if (isNaN(member)) {
        console.log("Error! Please enter a valid number.");
        return "Error! Please enter a valid number.";
    }*/

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


function getNthNumber() {
    let input = document.querySelector("input").value;
    let result = calculate(input);
    /*if (isNaN(result)) {
        //print out error
        printOutResultsSingle(result);
    }
    else {
        printOutResultsSingle(result, input);
    }*/
    if (inputChecker(input) == false) {
        printOutError(inputErrorMessage(input));
    }
    else {
        /*console.log("This is a valid number!");*/
        let result = calculate(input);
        printOutResultsSingle(result, input);
    }
}


function getSequenceToNthNumber() {
    clearResultOutput();
    let result = undefined;
    let input = document.querySelector("input").value;
    /*for (let i = 1; i <= input; i++) {
        result = calculate(i);
        if (isNaN(result)) {
            //print out error
            printOutResultsSequence(result);
            break;
        }
        else {
            printOutResultsSequence(result, i);
        }
    }*/
    if (inputChecker(input) == false) {
        console.log(inputErrorMessage(input));
    }
    else {
        console.log("This is a valid number!");
    }
}


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


function calculate(entry) {
    return fibonacci(entry);
}


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


function inputChecker(input) {
    if (isNaN(input)) {
        return false;
    }
    else if (input == "") {
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
    else if (input <= 0) {
        return "Error! Please enter a number that is greater than 0.";
    }
}



/************************************
  
BUTTON FUNCTIONS

************************************/

getNumber.addEventListener("click", getNthNumber);
getSequence.addEventListener("click", getSequenceToNthNumber);
reset.addEventListener("click", clearOutput);