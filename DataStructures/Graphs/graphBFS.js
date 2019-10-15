// Building an undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  /*
      Add Vertex Pseudocode 
      +++++++++++++++++++++++
      .Write a method called addVertex, which accepts a name of a vertex 
      .It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array 
    */
  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  /*
      Add an Edge Pseudocode
      +++++++++++++++++++++++
      .This function should accept two vertices, we can call them v1, v2
      .The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
      .The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
    */
  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2])
      this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  /*
      Removing an Edge Pseudocode
      +++++++++++++++++++++++
      .This function should accept two vertices, we'll call them v1 and v2
      .The function should reassign the key of v1 to be an array that does not contain v2
      .The funciton should reassign the key of v2 to be an array that does not contain v1
    */
  removeEdge(v1, v2) {
    if (
      this.adjacencyList[v1].includes(v2) &&
      this.adjacencyList[v2].includes(v1)
    )
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
  }
  /*
      Removing a Vertex Pseudocode
      +++++++++++++++++++++++
      .The funciton should accept a vertex to remove
      .The function should loop as long as there are any other vertices in the adjacency list for that vertex
      .Inside the loop, call our removeEdge funciton with the vertex we are removing and any values in the adjacency list for the at vertex 
      .Delete the key in the adjacency list for that vertex
    */
  removeVertex(v) {
    if (this.adjacencyList[v])
      while (this.adjacencyList[v].length) {
        const adjacentVertex = this.adjacencyList[v].pop();
        this.removeEdge(v, adjacentVertex);
      }
    delete this.adjacencyList[v];
  }
  /*
    Breadth First Pseudocode
    +++++++++++++++++++++++
    .This function should accept a starting vertex
    .Create a queue (you can use an array) and place the starting vertex in it
    .Create an array to store the nodes visited
    .Mark the starting vertex as visited 
    .Loop as long as there is anything in the queue
    .Remove the first vertex from the queue and push it inot the array that stores nodes visited
    .Loop over each vertex in the adjacency list for the vertex you are visiting.
    .If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
    .Once you have finished looping, return the array of visited nodes
   */
  BFS(v) {
    const queue = [v];
    const result = [];
    const visited = {};
    let currentV;
    visited[v] = true;

    while (queue.length) {
      currentV = queue.shift();
      result.push(currentV);

      this.adjacencyList[currentV].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

let g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

/*
              A
            /   \
           B     C
           |     |
           D --- E
            \   /
              F
  */

console.log(g.BFS('A'));
