function sortDescending(arr) {
  // Use the Array.sort() method with a compare function
  arr.sort(function(a, b) {
    return b - a;
  });
}

// Example usage:
const numbers = [5, 2, 9, 1, 5, 6];
sortDescending(numbers);
console.log(numbers); // Output: [9, 6, 5, 5, 2, 1]