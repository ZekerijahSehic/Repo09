// Only change code below this line 
function logicOrder(num) {
    if( num < 50 ){
        console.log("Less then 50");
    } else if ( num < 100 ) {
        console.log("Less then 100");
    } else {
        console.log("Greater then or equal to 100");
    }
    
}

logicOrder(28);
logicOrder(60);
logicOrder(110);

// Only change code above this line 
module.exports = logicOrder;
