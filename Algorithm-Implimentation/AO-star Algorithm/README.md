# 🌐 AO* Search Algorithm in AND-OR Graphs

This project implements the **AO\*** (And-Or Star) algorithm — a powerful, **heuristic-driven search algorithm** designed specifically for **AND-OR graphs**. It efficiently finds the **optimal solution path** by combining path costs with heuristic estimates, intelligently handling both **AND** and **OR** node relationships.

---

## 🚀 About This Algorithm

The **AO\*** algorithm is a **best-first search** strategy built for **complex problem spaces** represented using **AND-OR graphs**, where:

- 🔄 **OR Nodes** represent **alternative paths** (choose any one child).
- 🔗 **AND Nodes** represent **combined subproblems** (all children must be solved).

Unlike traditional A\*, AO\*:
- Updates its **heuristics dynamically**,
- Builds a **solution graph**, and
- **Prunes unpromising paths** to avoid unnecessary exploration.

---

## 🧠 How AO* Works

1. **Start** from the root node.
2. **Evaluate** child nodes depending on whether the current node is an AND or OR node:
   - **OR Node** → Select the child with the **lowest combined cost**:  
     `f(n) = g(n) + h(n)`
   - **AND Node** → Aggregate the **total cost of all children + their heuristics**.
3. **Update** the heuristic value of the current node based on the selected child paths.
4. **Recursively apply AO\*** to selected children:
   - For OR → Continue with the **best child**.
   - For AND → **Expand all children**.
5. **Maintain a solution graph** that records the current best-known path.
6. **Terminate** when the goal state(s) are reached with **minimal total cost**.

---

## 🪜 Step-by-Step Execution

1. Initialize at the **start node** (e.g., `A`)
2. Evaluate children based on **AND/OR structure**
3. Select optimal child(ren) based on cost
4. Update **heuristic values** for parent nodes
5. Recurse through the selected path(s)
6. Build and update the **solution graph**
7. Stop when the **optimal path** to goal/terminal nodes is found

---

## 📌 AND-OR Semantics

| Node Type | Meaning                         | Example                           |
|-----------|----------------------------------|-----------------------------------|
| 🔄 OR     | Choose **one** child             | A → B **or** A → C                |
| 🔗 AND    | Solve **all** children together  | B → D **and** E (must solve both) |

---

## 🖼️ Input & Output

- 📥 **Input**: AND-OR graph structure with heuristic values.
- 📤 **Output**: Optimal **solution graph** and **total cost**.

Example Output:
A
└─ C
├─ G
├─ H
└─ I



📸 **Solution Graph Visualization**  
<img width="420" height="800" alt="ao-star" src="https://github.com/user-attachments/assets/f42f0407-1dfd-4bcd-9f68-2185df9b817b" />

---

## 🌍 Applications of AO\*

- 🗺️ **Navigation Systems**  
  Route planning with combined and alternative paths.

- 🤖 **AI Planning & Decision Making**  
  Useful in goal trees with decomposable subgoals.

- 🧩 **Puzzle Solvers**  
  Solving structured problems like 8-puzzle or game trees.

- 🎮 **Game AI**  
  For planning multi-step logic or behavior trees.

---

## ⏱️ Time & Space Complexity

| Type        | Complexity                                      |
|-------------|-------------------------------------------------|
| ⏳ Time      | **Exponential** in worst-case (due to branching) |
| 💾 Space     | **Proportional** to graph depth and width        |

> ⚠️ **Note**: AO\* uses **heuristics and pruning** to reduce both time and space compared to brute-force approaches in practical applications.

---







