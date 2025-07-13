const board = document.getElementById('board');
const statusText = document.getElementById('status');

let currentPlayer = 'X'; // Human
let gameActive = true;
let cells = Array(9).fill(null);

function createBoard() {
  board.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = i;
    cell.addEventListener('click', cellClicked);
    board.appendChild(cell);
  }
}

function cellClicked(e) {
  if (!gameActive || currentPlayer !== 'X') return;

  const index = e.target.dataset.index;
  if (cells[index]) return;

  makeMove(index, currentPlayer);

  if (gameActive) {
    currentPlayer = 'O';
    statusText.textContent = `Player ${currentPlayer}'s turn (AI thinking...)`;
    setTimeout(aiMove, 500);
  }
}

function makeMove(index, player) {
  cells[index] = player;
  const cellDiv = board.querySelector(`[data-index='${index}']`);
  cellDiv.textContent = player;
  cellDiv.classList.add(player.toLowerCase());

  if (checkWinner()) {
    statusText.textContent = `Player ${player} wins!`;
    gameActive = false;
  } else if (cells.every(cell => cell)) {
    statusText.textContent = "It's a draw!";
    gameActive = false;
  } else {
    statusText.textContent = `Player ${player}'s turn`;
  }
}

function aiMove() {
  // AI uses DFS or BFS to find first empty cell and moves there
  const moveIndex = findAIMoveDFS();
  // const moveIndex = findAIMoveBFS(); // Uncomment to use BFS instead

  if (moveIndex !== -1) {
    makeMove(moveIndex, 'O');
    if (gameActive) {
      currentPlayer = 'X';
      statusText.textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

// DFS-based search for first empty cell
function findAIMoveDFS() {
  const stack = [];
  const visited = new Set();

  stack.push(0);

  while (stack.length) {
    const node = stack.pop();
    if (visited.has(node)) continue;
    visited.add(node);

    if (!cells[node]) {
      return node;
    }

    getNeighbors(node).forEach(n => {
      if (!visited.has(n)) stack.push(n);
    });
  }

  return -1;
}

// BFS-based search for first empty cell
function findAIMoveBFS() {
  const queue = [];
  const visited = new Set();

  queue.push(0);

  while (queue.length) {
    const node = queue.shift();
    if (visited.has(node)) continue;
    visited.add(node);

    if (!cells[node]) {
      return node;
    }

    getNeighbors(node).forEach(n => {
      if (!visited.has(n)) queue.push(n);
    });
  }

  return -1;
}

// Get neighbors (up, down, left, right) in 3x3 grid
function getNeighbors(index) {
  const neighbors = [];
  const row = Math.floor(index / 3);
  const col = index % 3;

  if (row > 0) neighbors.push((row - 1) * 3 + col);
  if (row < 2) neighbors.push((row + 1) * 3 + col);
  if (col > 0) neighbors.push(row * 3 + (col - 1));
  if (col < 2) neighbors.push(row * 3 + (col + 1));

  return neighbors;
}

function checkWinner() {
  const winCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  return winCombos.some(combo => {
    const [a, b, c] = combo;
    return cells[a] && cells[a] === cells[b] && cells[a] === cells[c];
  });
}

function restartGame() {
  currentPlayer = 'X';
  gameActive = true;
  cells = Array(9).fill(null);
  statusText.textContent = `Player ${currentPlayer}'s turn`;
  createBoard();
}

createBoard();
