// // TicTacToe.js
// import React, { useState } from 'react';

// const TicTacToe = () => {
//   const [currentPlayer, setCurrentPlayer] = useState('X');
//   const [board, setBoard] = useState(Array(9).fill(''));
//   const [winner, setWinner] = useState(null);

//   const handleCellClick = (index) => {
//     if (!board[index] && !winner) {
//       const newBoard = [...board];
//       newBoard[index] = currentPlayer;

//       setBoard(newBoard);
//       setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

//       checkWinner(newBoard);
//     }
//   };

//   const checkWinner = (board) => {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];

//     for (let i = 0; i < lines.length; i++) {
//       const [a, b, c] = lines[i];
//       if (board[a] && board[a] === board[b] && board[a] === board[c]) {
//         setWinner(board[a]);
//         return;
//       }
//     }

//     if (!board.includes('')) {
//       setWinner('Draw');
//     }
//   };

//   return (
//     <div className="board">
//       <h2>Tic-Tac-Toe</h2>
//       <div className="grid">
//         {board.map((cell, index) => (
//           <div
//             key={index}
//             className="cell"
//             onClick={() => handleCellClick(index)}
//           >
//             {cell}
//           </div>
//         ))}
//       </div>
//       {winner && <h3>Winner: {winner}</h3>}
//     </div>
//   );
// };

// export default TicTacToe;
// TicTacToe.js
import React, { useState } from 'react';

const TicTacToe = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [board, setBoard] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState(null);

  const handleCellClick = (index) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;

      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');

      checkWinner(newBoard);
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(''));
    setWinner(null);
    setCurrentPlayer('X');
  };

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (!board.includes('') && !winner) {
      setWinner('Draw');
    }
  };

  const renderCells = () => {
    return board.map((cell, index) => (
      <div
        key={index}
        className="cell"
        onClick={() => handleCellClick(index)}
      >
        {cell}
      </div>
    ));
  };

  return (
    <div className="board">
      <h2>Tic-Tac-Toe</h2>
      <div className="grid">{renderCells()}</div>
      {winner && <h3>Winner: {winner}</h3>}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TicTacToe;

