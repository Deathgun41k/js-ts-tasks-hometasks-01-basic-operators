/**
 * Given number n (-1000000 <= n <= 1000000). Create a function that counts sum of all digits
 * @param {number} n - number
 * @returns {number}
 */
module.exports.digitsSum = function digitsSum(n) {
  n = Math.sqrt(n ** 2); 
  let sum = 0;

  while (n > 0) {
      sum += n % 10; 
      n = Math.floor(n / 10); 
  }

  return sum;
};
