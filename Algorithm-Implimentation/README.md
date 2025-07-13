⚡ Greedy Best-First Search Algorithm for Heuristic Pathfinding
This project implements the Greedy Best-First Search (GBFS) algorithm — a heuristic-driven search technique that always expands the node that appears closest to the goal, based solely on heuristic estimates. It is fast, lightweight, and particularly useful for navigating large graphs where speed is prioritized over guaranteed optimality.

🚀 About This Algorithm
Greedy Best-First Search uses only the heuristic function h(n) to decide which node to explore next:

✅ Selects the node that seems closest to the goal

⚡ Faster than many traditional algorithms like BFS or Dijkstra

❌ Does not guarantee the shortest or optimal path

🧠 Ideal for problems where approximate solutions are acceptable

It "greedily" chooses what looks best at each step — not always the best overall.

🧠 How GBFS Works
Start at the initial node.

Add it to a priority queue (min-heap) based on h(n).

While the queue is not empty:

Remove the node with the lowest heuristic.

If it is the goal, stop.

Otherwise, expand its neighbors and push them into the queue.

Continue until the goal is reached or the search space is exhausted.

🚫 GBFS ignores the actual cost from the start (g(n)), unlike A*.

🪜 Step-by-Step Execution
Initialize: Open list ← Start node with heuristic

While open list is not empty:

Select node with lowest h(n)

If it's the goal, return the path

Expand the node's neighbors

Add neighbors to the open list with their heuristic

Return the traversed path (may not be optimal)

🖼️ Input & Output
📥 Input:
A graph with:


 <img width="826" height="378" alt="best-first-search" src="https://github.com/user-attachments/assets/6c2e18dc-2c41-4dfb-8191-70557bd20fd5" />


📤 Output:
✅ Traversal Path (Based on heuristic, not actual cost):

css
Copy
Edit
A → B → E → H → G
⚠️ This is not guaranteed to be the shortest path — just the one chosen by the algorithm’s greedy nature.

🌍 Applications of Greedy Best-First Search
🧠 AI Pathfinding (e.g., in games)

📱 Navigation Systems (fast approximate routes)

🤖 Robot Motion Planning (quick obstacle avoidance)

🧬 Protein Folding Simulations

✍️ Autocomplete & Predictive Text

⏱️ Time & Space Complexity
Type	Complexity
⏳ Time	O(bm) — b = branching factor, m = depth
💾 Space	O(bm) — typically lower than BFS due to pruning

⚠️ Limitations:

❌ Not complete (may miss the goal in infinite graphs)

❌ Not optimal (can ignore shorter paths)
