function arrangeCoins(n) {
    let left = 1;
    let right = n;
  
    while (left <= right) {
      const midpoint = Math.floor((left + right) / 2);
      const sum = (midpoint * (midpoint + 1)) / 2;
  
      if (sum > n) {
        right = midpoint - 1;
      } else {
        left = midpoint + 1;
      }
    }
  
    return right;
  }
  
  // Testing the algorithm with the given example
  const n = 5;
  console.log(arrangeCoins(n));
  