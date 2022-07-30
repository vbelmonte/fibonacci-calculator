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
/*let input = document.querySelector("input");*/

function getNthNumber() {
    let input = document.querySelector("input").value;
    let result = calculate(input);
    if (isNaN(result)) {
        //print out error
        printOutResults(result);
    }
    else {
        printOutResults(result, input);
    }
}

function getSequenceToNthNumber() {
    let result = undefined;
    let input = document.querySelector("input").value;
    for (let i = 1; i <= input; i++) {
        
    }
}

function clearOutput() {
    clearText();
    clearInput();
}

function clearText() {
    output.textContent = "";
}

function clearInput() {
    document.querySelector("input").value = "";
}

function calculate(entry) {
    return fibonacci(entry);
}

function printOutResults(result, entry = undefined) {
    if (entry == undefined) {
        output.textContent = result;
    }
    else {
        output.textContent = "F" + entry + ": " + result;
    }
}

getNumber.addEventListener("click", getNthNumber);
getSequence.addEventListener("click", getSequenceToNthNumber);
reset.addEventListener("click", clearOutput);
/*getSequence.addEventListener("click", helloWorldGetSequence);
reset.addEventListener("click", helloWorldReset);*/