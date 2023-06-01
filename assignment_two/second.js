function maxCandies(candyType) {
    const uniqueCandies = new Set();
    const maxAllowedCandies = candyType.length / 2;
    
    for (const candy of candyType) {
      uniqueCandies.add(candy);
      
      if (uniqueCandies.size >= maxAllowedCandies) {
        break;
      }
    }
    
    return Math.min(uniqueCandies.size, maxAllowedCandies);
  }
  
  // Testing the algorithm with the given example
  const candyType = [1, 1, 2, 2, 3, 3];
  console.log(maxCandies(candyType));
  