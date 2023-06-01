function findMissingRanges(nums, lower, upper) {
    const result = [];
    let start = lower;
  
    for (let num of nums) {
      if (num === start) {
        start++;
      } else if (num > start) {
        result.push([start, num - 1]);
        start = num + 1;
      }
    }
  
    if (start <= upper) {
      result.push([start, upper]);
    }
  
    return result;
  }
  
  // Testing the algorithm with the given example
  const nums = [0, 1, 3, 50, 75];
  const lower = 0;
  const upper = 99;
  console.log(findMissingRanges(nums, lower, upper));
  