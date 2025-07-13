# 🔍 A* Search Algorithm in AND-OR Graphs

This project implements the **A\*** (A-star) Search Algorithm to find the optimal path in a graph that includes both **AND** and **OR** relationships between nodes. The algorithm uses **heuristics** to intelligently guide the search toward the goal node in an efficient way.

---

## 🚀 About This Algorithm

The **A\*** algorithm is one of the most widely used techniques in Artificial Intelligence and graph search problems. It is designed to find the **shortest** or **least-cost** path from a start node to a goal node. 

In this project, the algorithm is **extended to support AND-OR graphs**, where:

- **OR nodes** allow choosing any **one** of the children.
- **AND nodes** require **all** child nodes to be processed and included in the solution path.

---

## 🧠 How A* Algorithm Works

The algorithm uses the evaluation function:
f(n) = g(n) + h(n)


Where:

- `g(n)` = Actual cost from the **start node** to the **current node**
- `h(n)` = Heuristic estimate of the cost from the **current node** to the **goal**
- `f(n)` = Total estimated cost of the **cheapest** solution through node `n`

---

## 🪜 Step-by-Step Working

1. Start from the **initial node** (e.g., `A`).
2. Place it in a **priority queue** (min-heap) based on `f(n)` values.
3. While the queue is **not empty**:
   - Remove the node with the **lowest f(n)**.
   - If it is a **goal node**, return the path.
   - For each child node:
     - Compute `g(n)` and `f(n)`
     - If a better path is found, update and enqueue the child

---

## 📌 Special Case: AND-OR Relationships

- **OR Node**: Choose **any one** child  
  Example: `A → B` **or** `A → C` **or** `A → D`

- **AND Node**: All children **must** be included  
  Example: `B → E` **and** `B → F` (Both `E` and `F` must be solved)

> ⚠️ Note: This version primarily supports **OR** relationships. Full **AND semantics** would require recursive aggregation and cost combination logic.

---

## 🖼️ Input & Output
<img width="443" height="800" alt="a-star" src="https://github.com/user-attachments/assets/096b293a-0b98-4674-9204-f65255ae49c6" />

- 📥 **Input**: Representation of an AND-OR graph, start node, goal node(s), and heuristic values.
- 📤 **Output**: Optimal path (or tree) from the start node to the goal node(s) considering the graph semantics.

---

## 🌍 Real-World Applications of A*

- 🗺️ **GPS & Navigation Systems** (e.g., Google Maps)
- 🎮 **Game AI Pathfinding**
- 🤖 **Robot Motion Planning**
- 🧩 **Puzzle Solvers** (e.g., 8-puzzle, maze-solving)
- 📊 **Decision Trees & Strategic Planning**

---

## ⏱️ Time & Space Complexity

| Type        | Complexity       |
|-------------|------------------|
| ⏳ Time      | O(E) — where E = number of edges |
| 🧠 Space     | O(V) — where V = number of vertices |

---















