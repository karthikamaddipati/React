function isMonotonic(nums) {
    let isIncreasing = true;
    let isDecreasing = true;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        isIncreasing = false;
      }
      if (nums[i] > nums[i - 1]) {
        isDecreasing = false;
      }
      if (!isIncreasing && !isDecreasing) {
        return false;
      }
    }
  
    return true;
  }
  
  // Testing the algorithm with the given example
  const nums = [1, 2, 2, 3];
  console.log(isMonotonic(nums));
  