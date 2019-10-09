// push and pop array methods are a stack structure
// Or we can use shift and unshift for an array
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  /*
    Pushing pseudocode 
    +++++++++++++++++++++++
    .The funciton should accept a value
    .Create a new node with that value
    .If there is a at least one node, create a variable that stores the current first property on the stack 
    .Reset the first property to be the newly created node
    .Set the next property on the node to be the previously created variable
    .Increment the size of the stack by 1
  */
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  /*
  Pop pseudocode 
  +++++++++++++++++++++++
  .If there are no nodes in the stack, return null;
  .Create a temporary variable to store the first property on the stack 
  .If there is only 1 node, set the first and last property to be null
  .If there is more than one node, set the first property to be the next property on the current first
  .Decrement the size by 1
  .Return the value of the node removed 
  */
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack();
stack.push('hello');
stack.push('world');
stack.push('!');
console.log(stack);
stack.pop();
console.log(stack);
