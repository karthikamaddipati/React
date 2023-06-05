function firstUniqChar(s) {
    const charCounts = {};
  
    // Populate charCounts with character counts
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      charCounts[char] = (charCounts[char] || 0) + 1;
    }
  
    // Find the index of the first non-repeating character
    for (let i = 0; i < s.length; i++) {
      if (charCounts[s[i]] === 1) {
        return i;
      }
    }
  
    return -1;
  }
  
  // Example usage:
  console.log(firstUniqChar("leetcode"));      // Output: 0
  console.log(firstUniqChar("loveleetcode"));  // Output: 2
  console.log(firstUniqChar("aabb"));          // Output: -1
  