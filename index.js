const fibonacci = function(member) {
    if (member < 0) {
        return "OOPS";
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