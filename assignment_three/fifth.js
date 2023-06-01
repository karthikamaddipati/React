function plusOne(digits) {
    const n = digits.length;
  
    for (let i = n - 1; i >= 0; i--) {
      if (digits[i] < 9) {
        digits[i]++;
        return digits;
      } else {
        digits[i] = 0;
      }
    }
  
    // If we reach here, it means all digits are 9
    digits.unshift(1);
    return digits;
  }
  
  // Testing the algorithm with the given example
  const digits = [1, 2, 3];
  console.log(plusOne(digits));
  