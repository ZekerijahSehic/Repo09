// Only change code below this line 
function comparisonToEqual(a) {
    if (a < 5) {
        console.log("Less then 5");
    }  
    if (a < 10) {
        console.log("Less then 10");
    } 
    if (a >= 10 && a < 20) {
        console.log("10 or over");
    }
    if (a > 20) {
        console.log("More then 20");
    }
}

comparisonToEqual(0);
comparisonToEqual(5);
comparisonToEqual(17);
comparisonToEqual(21);
// Only change code above this line 
module.exports = comparisonToEqual;