function findDistanceValue(arr1, arr2, d) {
    let distance = 0;
  
    for (let num1 of arr1) {
      let isValid = true;
  
      for (let num2 of arr2) {
        if (Math.abs(num1 - num2) <= d) {
          isValid = false;
          break;
        }
      }
  
      if (isValid) {
        distance++;
      }
    }
  
    return distance;
  }
  
  // Example usage:
  const arr1 = [4, 5, 8];
  const arr2 = [10, 9, 1, 8];
  const d = 2;
  const result = findDistanceValue(arr1, arr2, d);
  console.log(result); // Output: 2
  