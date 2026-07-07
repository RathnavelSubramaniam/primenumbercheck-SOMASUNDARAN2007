/**
 * Checks if a given number is prime.
 * 
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
// const n=parsInt();
const n = parseInt(process.arvg[2]);
function isPrime(num) {
    if (num <=1) return false;
    for (let i =2; i < num; i++) {
        if (num % i ===0) {
            return false;
        }
    }
    return true;
}
if (isPrime (n) ) {
    console.log("Prime Number");
}
else {
    console.log("Not Prine Number");    
}


module.exports = isPrime;
