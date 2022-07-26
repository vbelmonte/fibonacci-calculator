const fibonacci = function(member) {
    if (member <= 0 || isNaN(member)) {
        console.log("Error! Please enter a number that is greater than 0");
        return "Error! Please enter a number that is greater than 0";
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
    let result = calculate();
    printOutResults(result);
}

function calculate() {
    let result = document.querySelector("input").value;
    return fibonacci(result);
}

function printOutResults(result) {
    output.textContent = result;
}

getNumber.addEventListener("click", getNthNumber);
/*getSequence.addEventListener("click", helloWorldGetSequence);
reset.addEventListener("click", helloWorldReset);*/