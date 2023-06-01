function singleNumber(nums) {
    let result = 0;
    for (let num of nums) {
      result ^= num;
    }
    return result;
  }
  
  // Testing the algorithm with the given example
  const nums = [2, 2, 1];
  console.log(singleNumber(nums));
  