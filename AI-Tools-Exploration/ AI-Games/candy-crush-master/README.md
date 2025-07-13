# 🍬 Candy Crush AI Game

This is a simple web-based **Candy Crush** game developed using **HTML**, **CSS**, and **JavaScript**. It includes a smart AI that detects possible moves and continues playing by matching candies.

---

## 🚀 Features

- 🎮 Interactive 8x8 Candy Crush board
- 👆 Swap adjacent candies
- 🔍 Auto-matching of 3+ same-colored candies (horizontal & vertical)
- 🧠 AI auto-plays using best match-based move
- 🔄 Reset board functionality
- 💡 Smooth animations and color highlights

---

## 📁 Project Structure

```
candy-crush/
├── index.html      # Game layout
├── style.css       # Game styling and animations
├── script.js       # Game logic and AI moves
└── README.md       # Project description
```

---

## 🧠 AI Logic

- AI scans the board and finds all valid moves that result in at least one match.
- Each move is scored based on how many matches it creates.
- The AI performs the best move and continues recursively.

```js
function findBestAIMove() {
  // Returns move with highest number of matches
}
```

---

## 🕹️ How to Play
![Screenshot 2025-07-13 235846](https://github.com/user-attachments/assets/8feac89f-a85d-471e-888e-63ea048d1eba)


1. Open `index.html` in your browser.
2. Click two adjacent cells to swap.
3. Matches of 3+ same colors will vanish, and new candies will drop.
4. Press the "Reset Board" button to restart.

---

## 🎨 Candy Colors

Each candy is represented by a distinct background color:
- 🔴 Red
- 🟡 Yellow
- 🟢 Green
- 🔵 Blue
- 🟣 Purple
- 🟠 Orange

---

## ✨ Technologies Used

- HTML5  
- CSS3 Grid  
- Vanilla JavaScript  
- DOM Manipulation & Animation

---

## 🔮 Future Enhancements

- Add candy types: special bombs or stripes  
- Add timer or score system  
- Add sound effects  
- Make it fully mobile responsive  

---

## 👩‍💻 Author

**Popy Talukdar**  
🎓 B.Sc. in CSE, North East University Bangladesh  
📧 Email: your-email@example.com  

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
