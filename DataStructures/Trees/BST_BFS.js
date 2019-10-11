// Breadth First Search on a Binary Search Tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  /*
      Insert Pseudocode 
      +++++++++++++++++++++++
      .Create a new node
      .Starting at the root
          .Check if there is a root, if not - the root now becomes the new node!
          .If there is a root, check if the value of thenew node is greater than or less than the value of the root
          .If it is greater
              .Check to see if there is a node to the right 
                  .If there is, move to that node and repeat these steps
                  .If there is not, add the node as the right property
          .If it is less 
              .Check to see if there is a node to the left
                  .If there is, move to that node and repeat these steps
                  .If there is not, add the node as the left property
    */
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  /*
      Find pseudocode
      +++++++++++++++++++++++
      .Starting at the root
          .Check if there is a root, if not - we're done searching!
          .If ther is a root, check if the value of the new node is the value we are looking for. If we found it we are done!
          .If not, check to see if the value is greater than or less than the value of the root
          .If it is greater
              .If there is, move to that node and repeat these steps
              .If there is not, we're done searching!
          .If it is less
              .Check to see if there is a node to the left
                  .If there is, move to that node and repeat these steps
                  .If there is not, we're done searching!
    */
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        // have this return true for true or false version
        found = true;
      }
    }
    // remove this line for true or false version
    if (!found) return false;
    // have this return false for true or false version
    return current;
  }
  /*
          Breadth First Search 
  .Create a queue (this can be an array) and variable to store the values of does visited
  .Place the root node in the queue
  .Loop as long as there is anything in the queue
      .Dequeue a node from the queue and push the value of the node ino the variable that stores the nodes 
      .If there is a left property on the node dequeued - add it to the queue
      .If there is a right property on the node dequeued - add it to the queue
  .Return the variable that strores the values 
  */
  BFS() {
    let data = [];
    let queue = [];
    let node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.BFS());
