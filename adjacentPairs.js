// Given an array of integers, find the pair of adjacent elements that has the largest product  
// and return that product.

// Example

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.

// 7 and 3 produce the largest product.

// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] array.integer inputArray

// An array of integers containing at least two elements.

// Guaranteed constraints:
// 2 ≤ inputArray.length ≤ 10,
// -1000 ≤ inputArray[i] ≤ 1000.

// [output] integer

// The largest product of adjacent elements.

function maxAdjacentProduct(nums) {
    // Check if the array has at least two elements
    if (nums.length < 2) {
        return null; // There are no adjacent elements
    }

    let maxProduct = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < nums.length - 1; i++) {
        const currentProduct = nums[i] * nums[i + 1];
        maxProduct = Math.max(maxProduct, currentProduct);
    }

    return maxProduct;
}

// Example usage:
const array = [3, -5, 1, -2, 8, -1];
const result = maxAdjacentProduct(array);
console.log("Maximum adjacent product:", result);