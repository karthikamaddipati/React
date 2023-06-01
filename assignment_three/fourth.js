function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return left;
  }
  
  // Testing the algorithm with the given example
  const nums = [1, 3, 5, 6];
  const target = 5;
  console.log(searchInsert(nums, target));
  