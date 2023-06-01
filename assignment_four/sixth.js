function sortedSquares(nums) {
    const n = nums.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;
    let index = n - 1;
  
    while (left <= right) {
      const leftSquare = nums[left] ** 2;
      const rightSquare = nums[right] ** 2;
  
      if (leftSquare >= rightSquare) {
        result[index] = leftSquare;
        left++;
      } else {
        result[index] = rightSquare;
        right--;
      }
  
      index--;
    }
  
    return result.reverse();
  }
  
  // Testing the algorithm with the given example
  const nums = [-4, -1, 0, 3, 10];
  console.log(sortedSquares(nums));
  