function findErrorNums(nums) {
    const set = new Set();
    let duplicate;
    let missing;
  
    // Find the duplicate and missing numbers
    for (const num of nums) {
      if (set.has(num)) {
        duplicate = num;
      } else {
        set.add(num);
      }
    }
  
    // Find the missing number by checking for each number from 1 to n
    for (let i = 1; i <= nums.length; i++) {
      if (!set.has(i)) {
        missing = i;
        break;
      }
    }
  
    return [duplicate, missing];
  }
  
  // Example usage
  const nums = [1, 2, 2, 4];
  const result = findErrorNums(nums);
  console.log(result); // Output: [2, 3]
  