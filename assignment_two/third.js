function findLHS(nums) {
    const frequency = {};
    let maxLen = 0;
  
    for (const num of nums) {
      frequency[num] = (frequency[num] || 0) + 1;
    }
  
    for (const num of nums) {
      if (frequency[num + 1]) {
        maxLen = Math.max(maxLen, frequency[num] + frequency[num + 1]);
      }
    }
  
    return maxLen;
  }
  
  // Testing the algorithm with the given example
  const nums = [1, 3, 2, 2, 5, 2, 3, 7];
  console.log(findLHS(nums));
  