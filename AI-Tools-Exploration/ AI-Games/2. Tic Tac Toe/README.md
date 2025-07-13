# 🎮 Tic Tac Toe (with AI using DFS/BFS)

This is a simple browser-based Tic Tac Toe game implemented using **HTML**, **CSS**, and **JavaScript**. It features a basic AI opponent that plays as `O` using either **Depth-First Search (DFS)** or **Breadth-First Search (BFS)** to decide its moves.

---

## 🚀 Features

- 👤 Human vs AI gameplay  
- 🧠 AI move decision using DFS or BFS  
- 📱 Responsive 3x3 grid board  
- 🔁 Restart game functionality  
- 🎨 Clean and interactive UI with hover and color feedback  

---

## 📁 Project Structure

```
tic-tac-toe/
├── index.html        # Main HTML file
├── style.css         # Styling for the game
├── script.js         # Game logic and AI implementation
└── README.md         # Project description and usage
```

---

## 🧠 How the AI Works

- The AI plays as **Player O**.
- By default, it uses **DFS (Depth-First Search)** to find the first available move.
- To switch to **BFS (Breadth-First Search)**, update the `script.js` file:

```js
// Inside aiMove() function:
// const moveIndex = findAIMoveDFS();
const moveIndex = findAIMoveBFS(); // Uncomment this to enable BFS
```

---

## 🖥️ How to Run

1. Clone or download this repository.
2. Open `index.html` in any modern browser.
3. Play the game against the AI!

---

## ✨ Technologies Used

- HTML5  
- CSS3 (Grid Layout)  
- JavaScript (DOM Manipulation, DFS/BFS Search)  

---

## 📸 Preview

![Screenshot 2025-07-13 235538](https://github.com/user-attachments/assets/259ee7d8-f972-4005-a93a-153db4c8bebe)


---

## 🛠️ Future Improvements

- Add difficulty levels for AI  
- Implement Minimax or Alpha-Beta Pruning  
- Add score tracking  
- Make the layout fully mobile responsive  

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 👩‍💻 Author

**Popy Talukdar**  
🎓 B.Sc. in CSE, North East University Bangladesh  
📧 Email: your-email@example.com  
📘 Project: Tic Tac Toe with AI (DFS/BFS)
