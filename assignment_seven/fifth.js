function reverseStr(s, k) {
    const arr = s.split('');
  
    for (let i = 0; i < arr.length; i += 2 * k) {
      let start = i;
      let end = Math.min(i + k - 1, arr.length - 1);
  
      while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
      }
    }
  
    return arr.join('');
  }
  
  // Example usage:
  const s = "abcdefg";
  const k = 2;
  const result = reverseStr(s, k);
  console.log(result);
  