function containsDuplicate(nums) {
    const set = new Set();
  
    for (let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) {
        return true; // Duplicate found, return true
      } else {
        set.add(nums[i]); // Add the number to the set
      }
    }
  
    return false; // No duplicates found, return false
  }
  
  // Example usage
  const nums = [1, 2, 3, 1];
  const hasDuplicate = containsDuplicate(nums);
  console.log(hasDuplicate); // Output: true
  