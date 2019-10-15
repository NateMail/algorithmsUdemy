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
    Removing an Edge Psuedocode
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
    Removing a Vertex Psuedocode
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
}

let g = new Graph();
g.addVertex('Dallas');
g.addVertex('Tokyo');
g.addVertex('Aspen');
g.addVertex('Boston');
g.addEdge('Dallas', 'Tokyo');
g.addEdge('Aspen', 'Dallas');
g.addEdge('Boston', 'Dallas');
g.addEdge('Aspen', 'Tokyo');
console.log(g);
g.removeEdge('Dallas', 'Tokyo');
g.removeVertex('Boston');
console.log(g);
