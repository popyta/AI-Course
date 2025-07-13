const boardSize = 8;
const colorsCount = 6; // number of candy colors
let board = [];
let selectedCell = null;
const gameBoard = document.getElementById('gameBoard');
const resetBtn = document.getElementById('resetBtn');

function createBoard() {
  board = [];
  for(let i=0; i < boardSize*boardSize; i++){
    board.push(getRandomColor());
  }
  renderBoard();
  if(checkMatches().length > 0){
    removeMatches(checkMatches());
  }
}

function getRandomColor(){
  return Math.floor(Math.random() * colorsCount);
}

function renderBoard(){
  gameBoard.innerHTML = '';
  for(let i=0; i < board.length; i++){
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.classList.add('color-' + board[i]);
    cell.dataset.index = i;
    cell.addEventListener('click', () => onCellClick(i));
    if(i === selectedCell) {
      cell.classList.add('selected');
    }
    gameBoard.appendChild(cell);
  }
}

function onCellClick(index){
  if(selectedCell === null){
    selectedCell = index;
    renderBoard();
  } else {
    if(areAdjacent(selectedCell, index)){
      swapCells(selectedCell, index);
      if(checkMatches().length > 0){
        removeMatches(checkMatches());
        setTimeout(() => {
          aiMove();
        }, 1000);
      } else {
        swapCells(selectedCell, index);
      }
    }
    selectedCell = null;
    renderBoard();
  }
}

function areAdjacent(i1, i2){
  const r1 = Math.floor(i1/boardSize);
  const c1 = i1 % boardSize;
  const r2 = Math.floor(i2/boardSize);
  const c2 = i2 % boardSize;

  return (r1 === r2 && Math.abs(c1 - c2) === 1) || (c1 === c2 && Math.abs(r1 - r2) ===1);
}

function swapCells(i1, i2){
  [board[i1], board[i2]] = [board[i2], board[i1]];
  renderBoard();
}

function checkMatches(){
  let matches = [];
  const visited = new Set();

  // Check horizontal matches
  for(let r=0; r<boardSize; r++){
    for(let c=0; c < boardSize - 2; c++){
      const idx = r*boardSize + c;
      const color = board[idx];
      if(color === board[idx+1] && color === board[idx+2]){
        for(let k=0; k<3; k++){
          visited.add(idx+k);
        }
      }
    }
  }

  // Check vertical matches
  for(let c=0; c<boardSize; c++){
    for(let r=0; r < boardSize - 2; r++){
      const idx = r*boardSize + c;
      const color = board[idx];
      if(color === board[idx+boardSize] && color === board[idx+boardSize*2]){
        for(let k=0; k<3; k++){
          visited.add(idx + k*boardSize);
        }
      }
    }
  }

  matches = Array.from(visited);
  return matches;
}

function removeMatches(matches){
  if(matches.length === 0) return;
  for(const idx of matches){
    board[idx] = null;
  }
  renderBoard();

  setTimeout(() => {
    collapseBoard();
  }, 300);
}

function collapseBoard(){
  for(let c=0; c < boardSize; c++){
    let emptySpots = 0;
    for(let r=boardSize-1; r >= 0; r--){
      const idx = r*boardSize + c;
      if(board[idx] === null){
        emptySpots++;
      } else if(emptySpots > 0){
        board[idx + emptySpots*boardSize] = board[idx];
        board[idx] = null;
      }
    }
    for(let r=0; r < emptySpots; r++){
      board[r*boardSize + c] = getRandomColor();
    }
  }
  renderBoard();

  const newMatches = checkMatches();
  if(newMatches.length > 0){
    setTimeout(() => removeMatches(newMatches), 400);
  }
}

// AI Logic

function getPossibleMoves(){
  let possibleMoves = [];
  for(let i=0; i < board.length; i++){
    const neighbors = getAdjacentIndices(i);
    for(const n of neighbors){
      swapCellsInArray(board, i, n);
      const matches = checkMatches();
      swapCellsInArray(board, i, n); // revert swap
      if(matches.length > 0){
        possibleMoves.push({from: i, to: n, matchesCount: matches.length});
      }
    }
  }
  return possibleMoves;
}

function getAdjacentIndices(i){
  const adj = [];
  const r = Math.floor(i/boardSize);
  const c = i % boardSize;
  if(r > 0) adj.push(i - boardSize);
  if(r < boardSize - 1) adj.push(i + boardSize);
  if(c > 0) adj.push(i - 1);
  if(c < boardSize -1) adj.push(i + 1);
  return adj;
}

function swapCellsInArray(arr, i1, i2){
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

function findBestAIMove(){
  const possibleMoves = getPossibleMoves();
  if(possibleMoves.length === 0) return null;
  possibleMoves.sort((a,b) => b.matchesCount - a.matchesCount);
  return possibleMoves[0];
}

function aiMove(){
  const move = findBestAIMove();
  if(move){
    swapCells(move.from, move.to);
    removeMatches(checkMatches());
    setTimeout(() => {
      if(findBestAIMove()){
        aiMove();
      }
    }, 800);
  } else {
    console.log("AI has no moves!");
  }
}

resetBtn.addEventListener('click', () => {
  createBoard();
});

createBoard();
