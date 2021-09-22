// Only change code below this line 
function myDoWhile() {
    
    var myNumbers = "";
    var i = -1;
    
    do {
        i++;
        if ( i != 9) {
            myNumbers += i + ", ";
        } else {
            myNumbers += i;
        }
    } while (i < 9);
    console.log(myNumbers);
}

myDoWhile();
// Only change code above this line 

module.exports = myDoWhile;