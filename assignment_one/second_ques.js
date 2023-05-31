function removeElement(nums, val) {
    let k = 0; // Number of elements not equal to val
    
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== val) {
        // If the current element is not equal to val, move it to the beginning of the array
        nums[k] = nums[i];
        k++;
      }
    }
    
    return k; // Return the number of elements not equal to val
  }
  
  // Example usage
//   const nums = [3, 2, 2, 3,5,5,5,6,7];
//   const val = 5;
const nums = [3, 2, 2, 3];
const val = 3;
  
  const k = removeElement(nums, val);
  console.log(k); // Output: 2
  console.log(nums); // Output: [2, 2, *, *]
  