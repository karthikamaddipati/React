function maxCount(m, n, ops) {
    let minRow = m;
    let minCol = n;
  
    for (const [ai, bi] of ops) {
      minRow = Math.min(minRow, ai);
      minCol = Math.min(minCol, bi);
    }
  
    return minRow * minCol;
  }
  
  // Testing the algorithm with the given example
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  console.log(maxCount(m, n, ops));
  