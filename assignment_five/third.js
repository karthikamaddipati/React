function sortedSquares(nums) {
    const result = [];
  
    for (let num of nums) {
      result.push(num * num);
    }
  
    return result.sort((a, b) => a - b);
  }
  
  // Example usage:
  const nums = [-4, -1, 0, 3, 10];
  const result = sortedSquares(nums);
  console.log(result); // Output: [0, 1, 9, 16, 100]
  