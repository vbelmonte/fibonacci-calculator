const fibonacci = function(member) {
    console.log(member);
    if (member <= 0) {
        console.log("Error! Please enter a number that is greater than 0.");
        return "Error! Please enter a number that is greater than 0.";
    }

    else if (isNaN(member)) {
        console.log("Error! Please enter a valid number.");
        return "Error! Please enter a valid number.";
    }

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


let getNumber = document.querySelector("#get-number");
let getSequence = document.querySelector("#get-sequence");
let reset = document.querySelector("#reset");
let output = document.querySelector(".output");
let resultOutput = "";
/*let input = document.querySelector("input");*/

function getNthNumber() {
    let input = document.querySelector("input").value;
    let result = calculate(input);
    if (isNaN(result)) {
        //print out error
        printOutResultsSingle(result);
    }
    else {
        printOutResultsSingle(result, input);
    }
}

function getSequenceToNthNumber() {
    clearResultOutput();
    let result = undefined;
    let input = document.querySelector("input").value;
    for (let i = 1; i <= input; i++) {
        result = calculate(i);
        if (isNaN(result)) {
            //print out error
            printOutResultsSequence(result);
            break;
        }
        else {
            printOutResultsSequence(result, i);
        }
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
        output.textContent = "F" + nth + ": " + result;
    }
}

function printOutResultsSequence(result, nth = undefined) {
    if (nth == undefined) {
        output.textContent = result;
    }
    else {
        let textOutput = "F" + nth + ": " + result + "<br>";
        resultOutput = resultOutput + textOutput;
        output.innerHTML = resultOutput;
    }
}

getNumber.addEventListener("click", getNthNumber);
getSequence.addEventListener("click", getSequenceToNthNumber);
reset.addEventListener("click", clearOutput);