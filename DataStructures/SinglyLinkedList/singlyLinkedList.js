class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  /*
    . This function should accept a value.
    . Create a new node using the value passed to the function
    . If there is no head property on the list, set the head and tail to be the newly created node.
    . Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node 
    . Increment the length by one
    . Return linked list  
*/
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  /*
  . If there are no nodes in the list, return undefinded.
  . Loop through the list until you reach the tail.
  . Set the next property of the 2nd to the last node to be null.
  . Decrement the length of the list by 1
  . Return the value of the node removed. 
  */
  pop() {
    if (!this.head || !this.tail) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  /*
    . If there are no nodes, return undefined
    . Store the current head property in a variable 
    . Set the head property to be the current head's next property
    . Decrement the length by 1
    . return the value of the node removed 
    */
  shift() {
    if (!this.head) return undefined;
    const startingHead = this.head;
    this.head = startingHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return startingHead;
  }

  /*
    . This function should accept a value
    . Create a new node using the value passed to the function 
    . If there is no head property on the list, set the head and tail to be the newly created node
    . Otherwise set the newly created node's next property to be the current head property on the list 
    . Set the head property on the list to be the newly created node 
    . Increment the length of the list by 1
    . Return the linked list 
  */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  /*
    . This function should accept an index
    . If the index is less than zero or greater than or equal to the length of the list, return null
    . Loop through the list until your reach the index and return the node at that specific index 
  */
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      current = current.next;
      count++;
    }
    return current;
  }

  /*
    . This function should accept a index and value
    . Use your get function to find the specific node.
    . If the node is not found, return false
    . If the node is found, set the value of theat node to be the value passed to the function and return true
  */
  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  /*
    . If the index is less than zero or greater than the length, return false.
    . If the index is the smae as the length, push a new node to the end of the list 
    . If the index is 0, unshift a new node to the start of the list 
    . Otherwise, using the get method, access the node at teh index -1
    . Set the next property on that node to be the new node 
    . Set the next property on the new node to be the previous next
    . Increment the length 
  */
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    let newNode = new Node(value);
    let prev = this.get(index - 1);
    const temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  /*
    . If the index is less than zero or greater than or equal to the length, return undefinded
    . If the index is the same as the length - 1, pop
    . If the index is 0, shift
    . Otherwise, using the get method, access the node at the index -1
    . Set the next property on that node to be the next of the next node
    . Decrement the length 
    Return the value of the node removed
  */
  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  /*
    IN PLACE
    . Swap the head and tail
    . Create a variable called next
    . Create a variable called prev
    . Create a variable called node and initialize it to the head property
    . Loop through the list
    . Set the next to be the next property on whatever node it's on 
    . Set the next property on the node to be whaterver prev is
    . Set the prev to be the value of the node variable
    . Set the node variable to be the value of the next variable 
  */
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

/*  
    Method    | Time Complexity             |
=============================================
    Insertion |  O(1)                       |
    Removal   |  It depends... O(1) or O(N) |
    Searching |  O(N)                       |
    Access    |  O(N)                       |
*/

let list = new SinglyLinkedList();
list.push('hello');
list.push('world');
list.push('woot');
list.pop();
list.shift();
list.unshift('Hey');
list.push('wow');
list.insert(2, 'NEW');
list.insert(4, 'LAST');
console.log(list.reverse());
