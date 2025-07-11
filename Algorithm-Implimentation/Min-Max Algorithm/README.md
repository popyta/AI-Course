🎲 Minimax Algorithm
This project implements the Minimax Algorithm — a fundamental decision-making technique used in two-player zero-sum games. It helps determine the optimal move by minimizing the possible loss in a worst-case scenario, assuming both players play perfectly.

🚀 About This Algorithm
Minimax is a recursive game-tree-based strategy where:

🔹 The Maximizing player aims to maximize the score.
🔹 The Minimizing player aims to minimize the score.

The algorithm explores all possible moves down to terminal game states (leaf nodes), evaluates their outcomes, and backtracks to choose the best possible decision from the root.

✅ Commonly used in:

🎮 Tic-Tac-Toe

♟️ Chess

🕹️ Checkers

🧠 How the Algorithm Works
Start from the root node, representing the current game state.

If the node is a terminal node, return its numeric value.

Recursively evaluate all child nodes.

At each step:

Maximizer chooses the maximum of the children’s values.

Minimizer chooses the minimum of the children’s values.

The best value is propagated up to the root, representing the optimal move.

🪜 Step-by-Step Breakdown
text
Copy
Edit
1. Check if the current node is a terminal node:
       → If yes, return its value.
2. Recursively apply Minimax to all children.
3. If it's the Maximizing player's turn:
       → Return max(left, right, ...)
4. If it's the Minimizing player's turn:
       → Return min(left, right, ...)
5. Repeat this until the root node receives the optimal value.
🖼️ Input & Output
📥 Input: Game Tree

<img width="340" height="450" alt="min-max" src="https://github.com/user-attachments/assets/3e0101f3-128b-4041-8262-75ca0b7129fe" />

       
Best value for the root: 3
✅ The algorithm determines that the best achievable outcome for the maximizing player starting at node A is 3, assuming optimal play from both sides.
