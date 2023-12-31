// This article couldn’t be complete without a discussion of the Fibonacci challenge, 
// a classic question you’ll surely come across during a job interview or coding practice.

// A Fibonacci sequence is an ordering of numbers where each number is the sum of the preceding two. 
// For example, the first ten numbers of the Fibonacci sequence are: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

// Understanding the challenge

// The Fibonacci challenge goes something like this: write a function that returns the nth entry in 
// the Fibonacci sequence, where n is a number you pass in as argument to the function.

// Example:

// fibonacci(3)  // --> 2
// Reasoning about the challenge
// The Fibonacci challenge involves iterating over the number of times indicated by the function’s 
// argument and returning the entry in the Fibonacci series that you find in that position.

// This way of stating the challenge immediately points to an iterative approach to solve the problem. 
// Alternatively, you could try out a recursive solution, which would certainly impress the interviewer.

const fibonacci = num => {

const result = [0, 1]

for (let i = 2; i < num; i++) {
    // push the sum of the two numbers
    // preceding the position of i in the result array
    // at the end of the result array
    const prevNum1 = result[i - 1];
    const prevNum2 = result[i - 2];
    result.push(prevNum1, prevNum2)
}
// return the last value in the results array
return result[num]
}

fibonacci(3)