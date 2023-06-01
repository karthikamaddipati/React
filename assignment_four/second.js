function findDistinctIntegers(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    const notInNums2 = [];
    const notInNums1 = [];
  
    for (const num of nums1) {
      if (!set2.has(num)) {
        notInNums2.push(num);
      }
    }
  
    for (const num of nums2) {
      if (!set1.has(num)) {
        notInNums1.push(num);
      }
    }
  
    return [notInNums1, notInNums2];
  }
  
  // Testing the algorithm with the given example
  const nums1 = [1, 2, 3];
  const nums2 = [2, 4, 6];
  console.log(findDistinctIntegers(nums1, nums2));
  