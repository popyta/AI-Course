🔍 A Search Algorithm in AND-OR Graphs*
This project implements the A Search Algorithm* to find the optimal path in a graph that includes both AND and OR relationships between nodes. The algorithm intelligently uses heuristics to efficiently guide the search towards the goal node.

🚀 About This Algorithm
The A (A-star)* algorithm is one of the most widely used techniques in AI and graph search problems for finding the shortest or least-cost path.
This specific implementation extends A* to handle AND-OR graphs, where:

OR nodes allow choosing any one of the children.

AND nodes require all child nodes to be processed.

🧠 How A Algorithm Works*
A* is a best-first search algorithm that uses the formula:

Copy
Edit
f(n) = g(n) + h(n)
Where:

g(n) = Actual cost from the start node to the current node

h(n) = Heuristic estimate of the cost from the current node to the goal

f(n) = Total estimated cost of the cheapest solution through node n

🪜 Step-by-Step Working
Start from the initial node (e.g., A).

Place it in a priority queue (min-heap) based on f(n) values.

While the queue is not empty:

Remove the node with the lowest f(n).

If it's a goal node, return the path.

For each child node:

Compute g(n) and f(n).

If a better path is found, update and enqueue the child.

📌 Special Case: AND-OR Relationships
OR Node: Choose any one child.
Example: A → B or A → C or A → D

AND Node: All children must be included in the path.
Example: B → E and B → F (both E and F must be solved)

Note: This version assumes OR-only semantics. Handling full AND semantics would require recursive aggregation and cost combination logic.

🖼️ Input & Output
📥 Input:
 <img width="443" height="800" alt="a-star" src="https://github.com/user-attachments/assets/096b293a-0b98-4674-9204-f65255ae49c6" />



🌍 Real-World Applications of A*
🗺️ GPS & Navigation (e.g., Google Maps)

🎮 Game AI Pathfinding

🧠 Robot Motion Planning

🧩 Puzzle Solvers (e.g., 8-puzzle, maze solving)

🤖 Decision Trees & Strategic Planning

⏱️ Time & Space Complexity
Type	Complexity
⏳ Time	O(E) (E = edges)
🧠 Space	O(V) (V = nodes)
