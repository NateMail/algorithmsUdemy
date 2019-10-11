// Depth First Search Binary Search Tree
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
              Depth First Search POSTORDER
      .Create a variable to store the values of nodes visited
      .Store the root of the BST in a variable called current
      .Write a helper funciton which accepts a node 
        .If the node has a left property, call the helper function with the left property on the node
        .If the node has a right property, call the helper function with the right property on the node 
        .Push the value of the node to the variable that stores the values 
        .Invoke the helper function with the current variable 
      .Return the array of values 
      */
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
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
// should return [3, 8, 6, 20, 15, 10]
console.log(tree.DFSPostOrder());
