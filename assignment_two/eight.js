function minimumDifference(nums, k) {
    let minNum = Infinity;
    let maxNum = -Infinity;
  
    for (const num of nums) {
      if (num < minNum) {
        minNum = num;
      }
      if (num > maxNum) {
        maxNum = num;
      }
    }
  
    const initialScore = maxNum - minNum;
    
    if (initialScore === 0) {
      return 0;
    }
    
    for (const num of nums) {
      const newMin = num - k;
      const newMax = num + k;
      minNum = Math.min(minNum, newMin);
      maxNum = Math.max(maxNum, newMax);
    }
  
    const updatedScore = maxNum - minNum;
  
    return Math.min(initialScore, updatedScore);
  }
  
  // Testing the algorithm with the given example
  const nums = [1];
  const k = 0;
  console.log(minimumDifference(nums, k));
  