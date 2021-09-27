// Only change code below this line 
function function1() {
    var evenNumbers = "";
    for(i = 0; i <= 8; i+=2) {
        if ( i != 8) {
            evenNumbers += i + ", ";
        } else {
            evenNumbers += i;
        }
    }
    return evenNumbers;
}

function function2() {
    var evenInverseNumbers = "";
    for(i = 8; i >= 0; i-=2) {
        if ( i != 0) {
            evenInverseNumbers += i + ", ";
        } else {
            evenInverseNumbers += i;
        }
    }
    return evenInverseNumbers; 
}

console.log(function1());
console.log(function2());
// Only change code above this line 
module.exports = {
    function1,
    function2
};