function transpose(matrix) {
    const transpose = [];
  
    for (let j = 0; j < matrix[0].length; j++) {
      const row = [];
  
      for (let i = 0; i < matrix.length; i++) {
        row.push(matrix[i][j]);
      }
  
      transpose.push(row);
    }
  
    return transpose;
  }
  
  // Testing the algorithm with the given example
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(transpose(matrix));
  