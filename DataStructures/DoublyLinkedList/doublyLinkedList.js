/*
    Node
    -val
    -next
    -prev
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/*
    DoublyLinkedList
    -head
    -tail
    -length
*/

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  /*
    Pushing pseudocode
    +++++++++++++++++++++++
    .Create a new node with the value passed to the function
    .If the head property is null set the head and tail to be the newly created node
    .If not, set the next property on the tail to be that node
    .Set the previous property on hte newly created node to be the tail
    .Set the tail to be the newly created node 
    .Increment the length
    .Return the DoublyLinkedList
*/
  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  /*
    Popping pseudocode
    +++++++++++++++++++++++
    .If there is no head, return undefined 
    .Store the current tail in a variable 
    .If the length is 1, set the head and tail to be null 
    .Update the tail to be the previous Node. 
    .Set the newTail's next to null
    .Decrement the length 
    .Return the value removed 
  */
  pop() {
    if (!this.head) return undefined;
    let poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
}

let list = new DoublyLinkedList();
list.push(99);
list.push(100);
list.push('LAST ITEM');
list.pop();
console.log(list);
