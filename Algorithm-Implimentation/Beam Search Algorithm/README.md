
# 🔦 Beam Search Algorithm for Informed Graph Traversal

This project implements the **Beam Search** algorithm — a heuristic-based search strategy that balances **breadth-first search (BFS)** and **greedy best-first search**, allowing efficient traversal through large graphs by exploring only the most promising options at each level.

---

## 🚀 About This Algorithm

Beam Search is designed for situations where the **search space is too large** to explore completely.  
Instead of evaluating all nodes at each level, it only keeps the **top-k best candidates** (based on heuristics), significantly improving speed and memory usage.

✅ Combines the structure of BFS with the focus of Greedy Search  
✅ Limits node expansion using a predefined beam width  
✅ Trades off completeness and optimality for efficiency

---

## 🧠 How Beam Search Works

- Begins at the start node  
- Evaluates all immediate neighbors  
- Selects the top `k` neighbors with the **lowest heuristic values**  
- Explores only those `k` nodes at the next level  
- Repeats the process until:
  - The goal node is found, or
  - The graph is exhausted

> 🔁 **Important**: Nodes outside the top-`k` are pruned permanently, meaning the algorithm may **miss the optimal path**.

---

## 🪜 Step-by-Step Execution

1. Initialize open list with the start node and its heuristic.
2. While open list is not empty:
   - Pick and expand the top-`k` nodes with best heuristic values.
   - Add their neighbors (if unvisited) to the open list.
   - Prune the open list to retain only the best `k` nodes.
3. Repeat until the goal is reached.
4. Return the visited path leading to the goal.

---

## 🖼️ Input & Output

📥 **Input**: A graph with heuristic values and a defined beam width.

📤 **Output**:

```text
✅ Debug Trace (Open List Evolution):
Current open list: [(10, 'B'), (25, 'D'), (35, 'C')]
Current open list: [(19, 'E'), (25, 'D'), (35, 'C')]
Current open list: [(10, 'H'), (25, 'D'), (35, 'C')]
Current open list: [(0, 'G'), (25, 'D'), (35, 'C')]

✅ Final Path:
Optimal Solution Path: A → B → E → H → G
```

---

## 🌍 Applications of Beam Search

- 🤖 Speech Recognition (e.g., decoding best phoneme sequence)  
- ✨ Natural Language Processing (e.g., translation, parsing)  
- 🔎 Autocomplete & Predictive Typing  
- 🎮 Game AI (rapid path prediction)  
- 🧠 Heuristic Search in large or infinite graphs

---

## ⏱️ Time & Space Complexity

| Type   | Complexity                                  |
|--------|---------------------------------------------|
| ⏳ Time   | O(b^k) — `b`: branching factor, `k`: depth |
| 💾 Space  | O(b) — stores only top-`k` nodes per level |

> ⚠️ **Trade-off**:  
> Beam Search is **faster** and **more memory-efficient**, but may **miss the globally optimal path** due to aggressive pruning.

---

## 👨‍💻 Author

<img width="826" height="378" alt="beam-search" src="https://github.com/user-attachments/assets/5af6672d-627d-458c-914e-10819555305d" />



