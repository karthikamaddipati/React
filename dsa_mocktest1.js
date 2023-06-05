function moveZeroes(nums) {
    let lastNonZeroIndex = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
        nums[lastNonZeroIndex] = nums[i];
        lastNonZeroIndex++;
      }
    }
  
    for (let i = lastNonZeroIndex; i < nums.length; i++) {
      nums[i] = 0;
    }
  
    return nums;
  }
  
  // Example usage:
  const nums1 = [0, 1, 0, 3, 12];
  console.log(moveZeroes(nums1));  // Output: [1, 3, 12, 0, 0]
  
  const nums2 = [0];
  console.log(moveZeroes(nums2));  // Output: [0]
  