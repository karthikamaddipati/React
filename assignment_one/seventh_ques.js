function moveZeroes(nums) {
    let i = 0; // Pointer for iterating through the array
  
    // Move all nonzero elements to the beginning of the array
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== 0) {
        nums[i] = nums[j];
        i++;
      }
    }
  
    // Fill the remaining elements with zeros
    while (i < nums.length) {
      nums[i] = 0;
      i++;
    }
  }
  
  // Example usage
  const nums = [0, 1, 0, 3, 12];
  moveZeroes(nums);
  console.log(nums); // Output: [1, 3, 12, 0, 0]
  