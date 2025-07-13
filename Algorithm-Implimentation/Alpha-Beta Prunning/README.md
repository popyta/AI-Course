# ♟️ Alpha-Beta Pruning Algorithm in Game Trees

This project implements the **Alpha-Beta Pruning** algorithm — a powerful optimization applied to the **Minimax** algorithm. It prunes branches in the game tree that do not affect the final decision, greatly improving efficiency **without sacrificing optimality**.

---

## 🚀 About This Algorithm

**Alpha-Beta Pruning** is a **depth-first search** technique used in **two-player zero-sum games** like chess, tic-tac-toe, and checkers. It enhances the Minimax algorithm by skipping over irrelevant branches — drastically reducing the number of nodes evaluated.

- ✅ **Minimax** guarantees an **optimal strategy**.
- ✅ **Alpha-Beta Pruning** improves performance by avoiding **unnecessary computation**.

---

## 🧠 How Alpha-Beta Pruning Works

The algorithm recursively explores the game tree by alternating between:

- **Maximizing Player** → tries to **maximize** the score.
- **Minimizing Player** → tries to **minimize** the score.

### 🔑 Key Parameters

| Parameter | Role                                               |
|----------|----------------------------------------------------|
| 🔺 `alpha` | Best maximum score the **maximizer** can guarantee |
| 🔻 `beta`  | Best minimum score the **minimizer** can guarantee |

### 🔒 Pruning Condition

> If at any point `beta ≤ alpha`, the current branch is **pruned** — further exploration is stopped as it can’t affect the final decision.

---

## 🪜 Step-by-Step Algorithm Flow

1. Start from the **root node** (e.g., Game State `A`).
2. Recursively evaluate child nodes, alternating between max and min logic.
3. Update `alpha` and `beta` as better scores are found.
4. **Prune** branches where `beta ≤ alpha` to save computation.
5. Return the **optimal value** for the root after evaluating relevant branches.

---

## 🖼️ Input & Output

- 📥 **Input**: A game tree with evaluation scores at terminal (leaf) nodes.
  
  <img width="366" height="596" alt="alpha-beta" src="https://github.com/user-attachments/assets/01a6bde4-cef9-444b-90e4-72b28256c44c" />

- 📤 **Output**:
- 
---

## 🌍 Applications of Alpha-Beta Pruning

- ♟️ **Chess Engines** (e.g., Stockfish, Deep Blue)
- 🃏 **Board Games** (e.g., Tic-Tac-Toe, Checkers)
- 🤖 **Two-Player AI Agents**
- 🎮 **Game AI Optimization**
- 🔬 **Game Theory & Strategy Simulations**

---

## ⏱️ Time & Space Complexity

| Type        | Complexity                                |
|-------------|--------------------------------------------|
| ⏳ Time      | `O(b^(m/2))` — where `b = branching factor`, `m = depth` |
| 💾 Space     | `O(m)` — proportional to maximum tree depth         |

> 🎯 **Efficiency Boost**:  
> Alpha-Beta pruning allows searching **twice as deep** as Minimax alone — using the **same computation** power.

--


