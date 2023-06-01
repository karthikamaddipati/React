function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    
    for (let i = 0; i < flowerbed.length; i++) {
      if (
        flowerbed[i] === 0 &&
        (i === 0 || flowerbed[i - 1] === 0) &&
        (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
      ) {
        flowerbed[i] = 1;
        count++;
      }
      
      if (count >= n) {
        return true;
      }
    }
    
    return count >= n;
  }
  
  // Testing the algorithm with the given example
  const flowerbed = [1, 0, 0, 0, 1];
  const n = 1;
  console.log(canPlaceFlowers(flowerbed, n));
  