// Only change code below this line 
function checkSign(num) {
    return (num > 0) ? console.log("positive") : (num < 0) ? console.log("negative") : console.log("zero"); 
}

checkSign(10);
checkSign(-12);
checkSign(0);
// Only change code above this line 
module.exports = checkSign;