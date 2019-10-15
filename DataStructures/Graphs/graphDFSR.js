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
      DFS (Depth First Search) Pseudocode (recursive)
      +++++++++++++++++++++++
      .The function should accept a starting node
      .Create a list to store the end result, to be returned at the very end 
      .Create an object to store visited vertices
      .Create a helper function which accepts a vertex
        .The helper funciton should return early if the vertex is empty
        .The helper function should place the vertex it accepts into the visited object and push that he vertex into the result array.
        .Loop over all the vlaues in the adjacencyList for that vertex
        .If any of those values have not been visited, recursively invoke the helper funciton with that vertex
      .Invoke the helper function with the starting vertex 
      .Return the result array 
    */
  DFSR(v) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    function dfs(ver) {
      if (!ver) return null;
      visited[ver] = true;
      result.push(ver);
      adjacencyList[ver].forEach(neighbor => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    }
    dfs(v);
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

console.log(g.DFSR('A'));
