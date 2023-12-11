let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
  cell.addEventListener('click', function() {
    if (!cell.textContent) {
      cell.textContent = currentPlayer;
      if (checkWinner()) {
        alert(`${currentPlayer} wins!`);
        resetGame();
      } else if (isBoardFull()) {
        alert("It's a tie!");
        resetGame();
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  });
});

function checkWinner() {
  const winningCombinations = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8], [3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7] // diagonals
  ];

  for (let combo of winningCombinations) {
    if (
      cells[combo[0] - 1].textContent &&
      cells[combo[0] - 1].textContent === cells[combo[1] - 1].textContent &&
      cells[combo[0] - 1].textContent === cells[combo[2] - 1].textContent
    ) {
      return true;
    }
  }

  return false;
}

function isBoardFull() {
  for (let cell of cells) {
    if (cell.textContent === '') {
      return false;
    }
  }
  return true;
}

function resetGame() {
  cells.forEach(cell => {
    cell.textContent = '';
  });
  currentPlayer = 'X';
}
