function arrangeCoins(n) {
    let count = 0;
    let row = 1;
  
    while (n >= row) {
      n -= row;
      row++;
      count++;
    }
  
    return count;
  }
  
  // Example usage:
  const n = 5;
  const result = arrangeCoins(n);
  console.log(result); // Output: 2
  