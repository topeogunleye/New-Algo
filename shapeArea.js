// shape of a polygon
function shapeArea(n) {
    return Math.pow(n, 2) + Math.pow(n - 1, 2);
}

// Example usage:
let result = shapeArea(3);
console.log(result); // Output: 13
