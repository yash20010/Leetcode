// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

// Constraints:

// 1 <= n <= 45

function memoFactorial() {
  let memo = [1]
  return function factorial(n) {
    if (!memo[n]) {
      memo[n] = n * factorial(n - 1)
    }
    return memo[n]
  }
}

const factorialHelper = new memoFactorial()

function climbStairs(n) {
  let ways = 1
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    ways +=
      factorialHelper(n - i) / factorialHelper(i) / factorialHelper(n - i - i)
  }
  return ways
}

// function memoFibonacci() {
//   let memo = [0, 1, 2]
//   return function fibonacci(n) {
//     if (!memo[n]) {
//       memo[n] = fibonacci(n - 1) + fibonacci(n - 2)
//     }
//     return memo[n]
//   }
// }

// const climbHelper = new memoFibonacci()

// function climbStairs(n) {
//   return climbHelper(n)
// }

console.log(climbStairs(2))
console.log(climbStairs(3))
console.log(climbStairs(4))
