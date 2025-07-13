# 🔄 Bidirectional Breadth-First Search (BFS) Algorithm

This project implements the **Bidirectional BFS** algorithm — a powerful search technique that simultaneously searches **forward from the source** and **backward from the goal**, aiming to **meet in the middle** and reduce the overall search space.

---

## 🚀 About This Algorithm

Bidirectional BFS speeds up traditional BFS by launching two **simultaneous searches**:

* One from the **start node**
* One from the **goal node**

✅ Drastically reduces **time complexity** compared to classic BFS
✅ Efficient for **large graphs** with long paths
✅ Best suited for **undirected or reversible graphs**

---

## 🧠 How the Algorithm Works

1. Two **search frontiers** are maintained:

   * One from the **source node**
   * One from the **goal node**

2. Each frontier proceeds in a **BFS manner**, level by level.

3. The algorithm **halts** when a node is **visited by both** searches.

---

## 🪜 Steps

1. Initialize two queues:

   * `forward_queue` ← from the **start node**
   * `backward_queue` ← from the **goal node**

2. While both queues are not empty:

   * Expand the next level from `forward_queue`, marking nodes visited.
   * Expand the next level from `backward_queue`, marking nodes visited.
   * If any node is found in **both visited sets**, a **meeting point** is detected.

3. Trace the final path using **parent maps** from both directions.

---

## 🖼️ Input & Output

### 📥 Input Graph Structure

<img width="1038" height="350" alt="bidirectional-search" src="https://github.com/user-attachments/assets/d656030b-b07d-4075-98d8-dae460d8d0a9" />


### 📤 Output Path

```bash
Path from S to G: ['S', '1', '4', '6', '7', '8', '9', '11', 'G']
```

> 🔎 The actual path may vary depending on traversal order — all returned paths are **valid and shortest**.

### 📸 Graph Visualization:

Include a diagram that shows both search directions:

```md
![Bidirectional BFS](assets/bidirectional-bfs-graph.png)
```

---

## 🌍 Applications of Bidirectional Search

* 📍 **GPS Navigation** & Route Optimization
* 🔎 **Social Network Path Tracing** (e.g., LinkedIn mutual connections)
* 🧩 **Puzzle Solvers** (e.g., 8-puzzle, Rubik’s cube)
* 🤖 **AI Agents** in Gaming & Robotics
* 💾 **Network Routing Protocols**

---

## ⏱️ Time & Space Complexity

| Type         | Complexity                                                       |
| ------------ | ---------------------------------------------------------------- |
| ⏳ **Time**   | `O(b^(d/2))` — Half the depth explored from both sides           |
| 💾 **Space** | `O(b^(d/2))` — Due to storing visited nodes from both directions |

> ✅ Bidirectional BFS is **complete** and **optimal** when used on **undirected** or **bidirectional** graphs.

---

