# 🎲 Minimax Algorithm

This implementation demonstrates the **Minimax algorithm** — a decision rule used in two-player zero-sum games to find the optimal move by minimizing the possible loss in the worst-case scenario.

---

## 🚀 About This Algorithm

Minimax is a **recursive strategy** that simulates all possible moves in a game tree, assuming both players play optimally:

- **Maximizing** player tries to **maximize** the score.  
- **Minimizing** player tries to **minimize** the score.  

It evaluates the game tree from the current node down to **terminal states (leaf nodes with numeric scores)** and selects the move that guarantees the best outcome under perfect play.

✅ Commonly used in games like:
- 🎮 Tic-Tac-Toe
- ♟️ Chess
- 🕹️ Checkers

---

## 🧠 How the Algorithm Works

1. Start at the **root node**, representing the current game state.
2. If the node is a **terminal node**, return its numeric value.
3. Otherwise, recursively evaluate the left and right child nodes.
4. If it's the **maximizing player's** turn, return the **maximum** of the child nodes' values.
5. If it's the **minimizing player's** turn, return the **minimum** of the child nodes' values.
6. Propagate the chosen value up the tree until the **root node**'s best move is determined.

---

## 🪜 Step-by-Step Breakdown

1. Check if the current node is terminal → If yes, return its value.  
2. Recursively apply Minimax to left and right children.  
3. If it's the **maximizing** player's turn → Return `max(left, right)`  
4. If it's the **minimizing** player's turn → Return `min(left, right)`  
5. Repeat until the **root node** receives the optimal value.

---

## 🖼️ Input & Output

### 📥 Input Graph Structure

 <img width="340" height="450" alt="min-max" src="https://github.com/user-attachments/assets/0dfca451-7d60-41b9-b165-b4686d34673d" />

- Minimax Algorithm – Optimal Decision Making in Adversarial Games

Each internal node represents a **game state** with two possible moves (children).  
Leaf nodes contain **numeric scores** representing the game outcome from the **maximizing player's** perspective.

### 📤 Output Example

```
Best value for the root: 3
```

The best achievable value for the **maximizing player** starting at node `'A'` is **3**, assuming both players play optimally.

---

## 🌍 Applications of Minimax

- 🎮 Turn-based games like Tic-Tac-Toe, Chess, and Checkers  
- 🤖 AI opponents in competitive environments  
- 🔍 Decision making under adversarial conditions  
- 🕹️ Game tree exploration and evaluation

---

## ⏱️ Time & Space Complexity

| Type             | Complexity                            |
|------------------|----------------------------------------|
| Time Complexity  | O(b^d) (b = branching factor, d = depth) |
| Space Complexity | O(d) for recursion stack               |

Where:  
- `b` = average number of children per node  
- `d` = maximum depth of the game tree

---

> This project showcases the fundamental principle of adversarial decision-making using the Minimax strategy.
