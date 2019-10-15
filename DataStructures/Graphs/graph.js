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
}

let g = new Graph();
g.addVertex('hello');

console.log(g);
