# ⚡ Greedy Best-First Search Algorithm for Heuristic Pathfinding

This project implements the **Greedy Best-First Search (GBFS)** algorithm — a heuristic-driven search strategy that always expands the node that appears to be **closest to the goal**, based solely on **heuristic estimates**. It offers fast results, especially in **large graphs**, although it doesn’t guarantee the optimal path.

---

## 🚀 About This Algorithm

Greedy Best-First Search explores a graph by always selecting the node with the **lowest heuristic cost `h(n)`** — meaning it believes that node is closest to the goal.

* ✅ Uses only heuristic values (`h(n)`), **ignoring actual path cost** (`g(n)`)
* ⚡ Fast and **memory-efficient** for large search spaces
* ❌ May miss the optimal path, unlike A\*

---

## 🧠 How the Algorithm Works

1. Start from the **initial node**.
2. Select the neighbor with the **lowest heuristic estimate** to the goal.
3. Add this node to a **priority queue** (min-heap).
4. Repeat until the **goal node** is found or all nodes are explored.

> 📌 Greedy Best-First focuses on **local best choices** — it does not consider the full path cost.

---

## 🪜 Steps

1. Add the **start node** to the open list (priority queue) with its heuristic value.
2. While the open list is not empty:

   * Pop the node with the **lowest heuristic**.
   * If it's the **goal**, stop.
   * Otherwise, expand its **neighbors** and push them into the open list.
3. Return the **path traversed**.

> ⚠️ The path found is not necessarily the **shortest**, but is chosen based on the **lowest `h(n)`** at each step.

---

## 🖼️ Input & Output

### 📥 Input Graph Structure

* Nodes and edges
* Heuristic value `h(n)` for each node

### 📤 Output Path

```bash
Traversal Path (based on heuristic preference):
A → B → E → H → G
```

> 📝 This is not guaranteed to be optimal — it's based on **heuristic preference**, not actual cost.

### 📸 Graph Visualization:

Add a diagram like:

```
A
|\
B C D
|    \
E     F
|\
H I
 \
  G (Goal)
```

Or insert an image using:

`
<img width="826" height="378" alt="best-first-search" src="https://github.com/user-attachments/assets/444b3ea0-6242-41d8-9b9f-eed2d266a620" />

```

---

## 🌍 Applications of Greedy Best-First Search

* 🧠 **AI Pathfinding in Games**
* 📱 **Route Planning & Navigation Systems**
* 🤖 **Robotics** (e.g., obstacle avoidance)
* 🧬 **Protein Folding Simulations**
* 📝 **Autocomplete & Word Suggestion Systems**

---

## ⏱️ Time & Space Complexity

| Type         | Complexity                                            |
| ------------ | ----------------------------------------------------- |
| ⏳ **Time**   | `O(bm)` — `b` = branching factor, `m` = depth         |
| 💾 **Space** | `O(bm)` — similar to BFS, may be lower due to pruning |

> ❌ **Not complete**, ❌ **Not optimal** — can overlook shorter paths if they don’t look good heuristically.

---


