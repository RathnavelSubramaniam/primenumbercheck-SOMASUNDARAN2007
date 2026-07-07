/**
 * Checks if a given number is prime.
 * 
 * @param {number} n - The number to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
// const n=parsInt();
const n = parseInt(process.arvg[2]);
function isprime(num) {
    if (num <=1) return false;
    for (let i =2; i < num; i++) {
        if (num % i ===0) {
            return false;
        }
    }
    return true;
}
if (isprime (n) ) {
    console.log("Prime Number");
}
else {
    console.lo("Not Prine Number");    
}


module.exports = isprime;
