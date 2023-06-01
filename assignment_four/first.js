function findCommonElements(arr1, arr2, arr3) {
    let ptr1 = 0;
    let ptr2 = 0;
    let ptr3 = 0;
    const result = [];
  
    while (ptr1 < arr1.length && ptr2 < arr2.length && ptr3 < arr3.length) {
      if (arr1[ptr1] === arr2[ptr2] && arr2[ptr2] === arr3[ptr3]) {
        result.push(arr1[ptr1]);
        ptr1++;
        ptr2++;
        ptr3++;
      } else {
        const minValue = Math.min(arr1[ptr1], arr2[ptr2], arr3[ptr3]);
        if (arr1[ptr1] === minValue) {
          ptr1++;
        }
        if (arr2[ptr2] === minValue) {
          ptr2++;
        }
        if (arr3[ptr3] === minValue) {
          ptr3++;
        }
      }
    }
  
    return result;
  }
  
  // Testing the algorithm with the given example
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 5, 7, 9];
  const arr3 = [1, 3, 4, 5, 8];
  console.log(findCommonElements(arr1, arr2, arr3));
  