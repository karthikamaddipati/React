function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let closestSum = Infinity;
  
    for (let i = 0; i < n - 2; i++) {
      let left = i + 1;
      let right = n - 1;
  
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];
        if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
          closestSum = sum;
        }
  
        if (sum > target) {
          right--;
        } else {
          left++;
        }
      }
    }
  
    return closestSum;
  }
  
  // Testing the algorithm with the given example
  const nums = [-1, 2, 1, -4];
  const target = 1;
  console.log(threeSumClosest(nums, target));
  