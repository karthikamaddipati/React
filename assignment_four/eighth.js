function shuffleArray(nums, n) {
    const result = [];
    let i = 0;
    let j = n;
  
    while (i < n && j < 2 * n) {
      result.push(nums[i++]);
      result.push(nums[j++]);
    }
  
    return result;
  }
  
  // Example usage:
  const nums = [2, 5, 1, 3, 4, 7];
  const n = 3;
  const result = shuffleArray(nums, n);
  console.log(result); // Output: [2, 3, 5, 4, 1, 7]
  