function plusOne(digits) {
    const n = digits.length;
  
    // Start from the rightmost digit
    for (let i = n - 1; i >= 0; i--) {
      if (digits[i] !== 9) {
        // If the digit is not 9, increment it and return the updated array
        digits[i]++;
        return digits;
      } else {
        // If the digit is 9, set it to 0 and continue to the next digit
        digits[i] = 0;
      }
    }
  
    // If all digits were 9, we have a carry to the leftmost digit
    digits.unshift(1);
  
    return digits;
  }
  
  // Example usage
  const digits = [1, 2, 3];
  
  const result = plusOne(digits);
  console.log(result); // Output: [1, 2, 4]
  