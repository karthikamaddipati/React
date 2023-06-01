function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      // If the length of changed is odd, it can't be a doubled array
      return [];
    }
  
    const countMap = new Map();
    const original = [];
  
    // Count the occurrences of each element in changed
    for (const num of changed) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
  
    // Iterate over the changed array and check for the original elements
    for (const num of changed) {
      const doubled = num * 2;
  
      if (countMap.get(num) === 0) {
        // If the count is already zero, skip to the next element
        continue;
      }
  
      if (!countMap.has(doubled) || countMap.get(doubled) === 0) {
        // If the doubled value doesn't exist in the count map or its count is already zero, return an empty array
        return [];
      }
  
      // Add the original element to the result array
      original.push(num);
  
      // Decrement the counts for num and doubled
      countMap.set(num, countMap.get(num) - 1);
      countMap.set(doubled, countMap.get(doubled) - 1);
    }
  
    return original;
  }
  
  // Example usage:
  const changed = [1, 3, 4, 2, 6, 8];
  const result = findOriginalArray(changed);
  console.log(result); // Output: [1, 3, 4]
  