Graphs
This project implements the AO* (And-Or Star) algorithm — a powerful, heuristic-driven search algorithm designed specifically for AND-OR graphs. It efficiently finds the optimal solution path by evaluating and combining heuristic and path costs, intelligently handling both AND and OR node relationships.

🚀 About This Algorithm
The AO* algorithm is a best-first search strategy tailored for complex problem spaces represented by AND-OR graphs, where:

🔄 OR Nodes denote alternative paths (choose any one child).

🔗 AND Nodes denote combined subproblems (all children must be solved).

Unlike traditional A*, AO* updates its heuristics dynamically, builds a solution graph, and prunes unpromising paths — leading to smarter and faster solutions in complex domains.

🧠 How AO* Works
Starts from the root node.

Evaluates child nodes depending on whether the current node is AND or OR:

OR Node → Selects the single child with the lowest combined cost:
f(n) = g(n) + h(n)

AND Node → Aggregates the total cost of all children + their heuristics.

Updates the heuristic cost of the current node based on newly discovered paths.

Recursively applies AO* to child nodes:

For OR, proceeds with the best child.

For AND, processes all children.

Maintains a solution graph that records the current best path to the goal.

Continues until the goal state(s) are reached with minimal total cost.
🪜 Step-by-Step Execution
Initialize at the start node (e.g., A)

Evaluate its children (AND/OR structure)

Select the optimal child or children (based on cost)

Update the heuristic values for parent nodes

Recurse through selected paths

Build and update the solution graph

Terminate when an optimal path to terminal nodes is found

📌 AND-OR Semantics
| Node Type | Meaning                         | Example                           |
| --------- | ------------------------------- | --------------------------------- |
| 🔄 OR     | Choose **one** child            | A → B or A → C                    |
| 🔗 AND    | Solve **all** children together | B → D **and** E (must solve both) |
🖼️ Input & Output
📥 Input:
📤 Output:

                 <img width="420" height="800" alt="ao-star" src="https://github.com/user-attachments/assets/f42f0407-1dfd-4bcd-9f68-2185df9b817b" />

Optimal Solution Graph:

css
Copy
Edit
A
  └─ C
       ├─ G
       ├─ H
       └─ I
Optimal Cost from A: 3

🌍 Applications of AO*
🗺️ Navigation Systems
Route planning involving combined and alternative paths.

🤖 AI Planning & Decision Making
For hierarchical tasks with decomposable subgoals.

🧩 Puzzle Solvers
Solving structured problems like the 8-puzzle using decision decomposition.

🎮 Game AI
Building AND-OR trees for enemy behavior or multi-step logic in games.

⏱️ Time & Space Complexity
Type	Complexity
⏳ Time	Exponential (worst-case)
💾 Space	Proportional to graph depth and width

Note: AO* uses heuristics and graph pruning to significantly reduce both time and space in practical cases compared to brute-force approaches.


