const board = document.getElementById("chessboard");

let boardState = [
  "♜","♞","♝","♛","♚","♝","♞","♜",
  "♟","♟","♟","♟","♟","♟","♟","♟",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "","","","","","","","",
  "♙","♙","♙","♙","♙","♙","♙","♙",
  "♖","♘","♗","♕","♔","♗","♘","♖",
];

let selected = null;
let currentTurn = "white";  // white goes first

function isWhite(piece) {
  return ["♙", "♖", "♘", "♗", "♕", "♔"].includes(piece);
}
function isBlack(piece) {
  return ["♟", "♜", "♞", "♝", "♛", "♚"].includes(piece);
}

function validMove(from, to) {
  return validMoveOnBoard(boardState, from, to) && (
    (currentTurn === "white" && isWhite(boardState[from])) ||
    (currentTurn === "black" && isBlack(boardState[from]))
  );
}

function validMoveOnBoard(board, from, to) {
  const piece = board[from];
  const target = board[to];
  const fromRow = Math.floor(from / 8);
  const fromCol = from % 8;
  const toRow = Math.floor(to / 8);
  const toCol = to % 8;
  const rowDiff = toRow - fromRow;
  const colDiff = toCol - fromCol;

  if (piece === "") return false;

  // Cannot capture own piece
  if (target !== "") {
    if (isWhite(piece) && isWhite(target)) return false;
    if (isBlack(piece) && isBlack(target)) return false;
  }

  // Pawn moves (simple)
  if (piece === "♙") {
    if (colDiff === 0 && rowDiff === -1 && target === "") return true;
    if (colDiff === 0 && rowDiff === -2 && fromRow === 6 && board[from - 8] === "" && target === "") return true;
    if (Math.abs(colDiff) === 1 && rowDiff === -1 && target !== "" && isBlack(target)) return true;
    return false;
  }
  if (piece === "♟") {
    if (colDiff === 0 && rowDiff === 1 && target === "") return true;
    if (colDiff === 0 && rowDiff === 2 && fromRow === 1 && board[from + 8] === "" && target === "") return true;
    if (Math.abs(colDiff) === 1 && rowDiff === 1 && target !== "" && isWhite(target)) return true;
    return false;
  }

  // Rook moves
  if (piece.toLowerCase() === "♖".toLowerCase()) {
    if (rowDiff === 0 || colDiff === 0) {
      if (clearPathOnBoard(board, from, to)) return true;
    }
    return false;
  }

  // Knight moves
  if (piece.toLowerCase() === "♘".toLowerCase()) {
    if ((Math.abs(rowDiff) === 2 && Math.abs(colDiff) === 1) || (Math.abs(rowDiff) === 1 && Math.abs(colDiff) === 2)) {
      return true;
    }
    return false;
  }

  // Bishop moves
  if (piece.toLowerCase() === "♗".toLowerCase()) {
    if (Math.abs(rowDiff) === Math.abs(colDiff)) {
      if (clearPathOnBoard(board, from, to)) return true;
    }
    return false;
  }

  // Queen moves
  if (piece.toLowerCase() === "♕".toLowerCase()) {
    if (rowDiff === 0 || colDiff === 0 || Math.abs(rowDiff) === Math.abs(colDiff)) {
      if (clearPathOnBoard(board, from, to)) return true;
    }
    return false;
  }

  // King moves
  if (piece.toLowerCase() === "♔".toLowerCase()) {
    if (Math.abs(rowDiff) <= 1 && Math.abs(colDiff) <= 1) {
      return true;
    }
    return false;
  }

  return false;
}

function clearPathOnBoard(board, from, to) {
  const fromRow = Math.floor(from / 8);
  const fromCol = from % 8;
  const toRow = Math.floor(to / 8);
  const toCol = to % 8;
  const rowStep = toRow > fromRow ? 1 : toRow < fromRow ? -1 : 0;
  const colStep = toCol > fromCol ? 1 : toCol < fromCol ? -1 : 0;

  let currentRow = fromRow + rowStep;
  let currentCol = fromCol + colStep;

  while (currentRow !== toRow || currentCol !== toCol) {
    const index = currentRow * 8 + currentCol;
    if (board[index] !== "") return false;
    currentRow += rowStep;
    currentCol += colStep;
  }
  return true;
}

function createBoard() {
  board.innerHTML = "";
  for (let i = 0; i < 64; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.classList.add((Math.floor(i / 8) + i) % 2 === 0 ? "white" : "black");
    square.setAttribute("data-index", i);
    square.textContent = boardState[i];

    if (selected === i) {
      square.classList.add("selected");
    }

    square.addEventListener("click", () => {
      if (currentTurn !== "white") return; // ইউজার শুধু হোয়াইট খেলবে

      if (selected === null) {
        if (boardState[i] !== "" && isWhite(boardState[i])) {
          selected = i;
          createBoard();
        }
      } else {
        if (validMove(selected, i)) {
          boardState[i] = boardState[selected];
          boardState[selected] = "";
          selected = null;
          currentTurn = "black";  // AI এর পালা
          createBoard();

          // AI চালাও
          setTimeout(() => {
            const aiMove = findBestMove();
            if (aiMove) {
              boardState[aiMove.to] = boardState[aiMove.from];
              boardState[aiMove.from] = "";
              currentTurn = "white";
              createBoard();
            }
          }, 300);
        } else {
          selected = null;
          createBoard();
        }
      }
    });

    board.appendChild(square);
  }
}

// MiniMax AI কোড

const pieceValue = {
  "♙": 10, "♖": 50, "♘": 30, "♗": 30, "♕": 90, "♔": 900,
  "♟": -10, "♜": -50, "♞": -30, "♝": -30, "♛": -90, "♚": -900,
};

function evaluateBoard(board) {
  let score = 0;
  for (let i = 0; i < 64; i++) {
    const p = board[i];
    if (p !== "") {
      score += pieceValue[p] || 0;
    }
  }
  return score;
}

function getAllValidMoves(board, isWhiteTurn) {
  let moves = [];
  for (let i = 0; i < 64; i++) {
    const piece = board[i];
    if (piece === "") continue;
    if (isWhiteTurn && !isWhite(piece)) continue;
    if (!isWhiteTurn && !isBlack(piece)) continue;

    for (let j = 0; j < 64; j++) {
      if (validMoveOnBoard(board, i, j)) {
        moves.push({from: i, to: j});
      }
    }
  }
  return moves;
}

function miniMax(board, depth, isMaximizingPlayer) {
  if (depth === 0) {
    return evaluateBoard(board);
  }

  const moves = getAllValidMoves(board, isMaximizingPlayer);
  if (moves.length === 0) {
    return isMaximizingPlayer ? -9999 : 9999;
  }

  if (isMaximizingPlayer) {
    let maxEval = -Infinity;
    for (const move of moves) {
      const newBoard = board.slice();
      newBoard[move.to] = newBoard[move.from];
      newBoard[move.from] = "";
      const evalScore = miniMax(newBoard, depth - 1, false);
      if (evalScore > maxEval) {
        maxEval = evalScore;
      }
    }
    return maxEval;
  } else {
    let minEval = Infinity;
    for (const move of moves) {
      const newBoard = board.slice();
      newBoard[move.to] = newBoard[move.from];
      newBoard[move.from] = "";
      const evalScore = miniMax(newBoard, depth - 1, true);
      if (evalScore < minEval) {
        minEval = evalScore;
      }
    }
    return minEval;
  }
}

function findBestMove() {
  const moves = getAllValidMoves(boardState, false); // AI = ব্ল্যাক
  let bestScore = Infinity;
  let bestMove = null;

  for (const move of moves) {
    const newBoard = boardState.slice();
    newBoard[move.to] = newBoard[move.from];
    newBoard[move.from] = "";
    const score = miniMax(newBoard, 3, true); // ডিপথ 3, ইউজারের পালা (হোয়াইট) ম্যাক্সিমাইজার
    if (score < bestScore) {
      bestScore = score;
      bestMove = move;
    }
  }
  return bestMove;
}

createBoard();
