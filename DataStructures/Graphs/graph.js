// Building an undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  /*
    Add Vertex Psuedocode 
    +++++++++++++++++++++++
    .Write a method called addVertex, which accepts a name of a vertex 
    .It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array 
  */
  addVertex(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }

  /*
    Add an Edge Psuedocode
    +++++++++++++++++++++++
    .This function should accept two vertices, we can call them vertex1, vertex2
    .The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
    .The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
  */
  addEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2])
      this.adjacencyList[v1].push(v2);
    if (this.adjacencyList[v2] && this.adjacencyList[v1])
      this.adjacencyList[v2].push(v1);
  }
}

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Aspen', 'Dallas');
console.log(g);
