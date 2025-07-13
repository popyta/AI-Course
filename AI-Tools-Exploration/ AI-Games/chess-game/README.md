# ♟️ Chess Game (with Minimax AI)

This is a simple **chess game** built using **HTML**, **CSS**, and **JavaScript**, where the player plays as **White** and the AI (Black) responds using the **Minimax algorithm** with a depth of 3.

---

## 🚀 Features

- 👤 Human vs AI (AI plays Black)
- ♟️ Complete Chessboard (8x8)
- ✅ Legal move validation
- 🧠 AI uses Minimax algorithm to evaluate best move
- 🎨 Colored chessboard with hover and selection effects

---

## 📁 Project Structure

```
chess-game/
├── index.html      # HTML layout of the board
├── style.css       # Stylish board layout and pieces
├── script.js       # Game logic + Minimax AI
└── README.md       # Game documentation
```

---

## 🧠 AI Logic (Minimax)

- The AI evaluates each move using a scoring system based on piece values:
  - ♙/♟ = ±10, ♖/♜ = ±50, ♘/♞ = ±30, ♗/♝ = ±30, ♕/♛ = ±90, ♔/♚ = ±900
- Depth-limited Minimax is used to recursively simulate future moves and pick the best one.

```js
function miniMax(board, depth, isMaximizingPlayer) {
  // Recursive score-based search
}
```

---

## 🎮 How to Play
![Screenshot 2025-07-13 235846](https://github.com/user-attachments/assets/2c069347-6cd1-498b-99b5-6d0c82ac6299)


1. Open `index.html` in any browser.
2. You play as **White**. Click a piece, then a destination square to move.
3. The AI (Black) will respond after your move.
4. Move legality and AI logic is built-in.

---

## 🎨 Design & Styling

- Colorful squares: Blue & Pink theme
- Red outline for selected square
- Smooth hover effects
- Responsive and eye-friendly board layout

---

## ✨ Technologies Used

- HTML5  
- CSS3 Grid  
- Vanilla JavaScript  
- Minimax Algorithm  

---

## 🛠️ Possible Future Improvements

- Add move history and undo
- Add check/checkmate detection
- Add castling, en passant, pawn promotion
- Timer and multiplayer mode

---

## 👩‍💻 Author

**Popy Talukdar**  
🎓 B.Sc. in CSE, North East University Bangladesh  
📧 Email: your-email@example.com  

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
