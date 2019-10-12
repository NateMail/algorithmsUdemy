class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12];
  }
  /*
    Insert Pseudocode 
.Push the value inot the values property on the heap 
.Bubble Up:
    .Create a variable called index which is the length of the values property - 1
    .Create a variable called parentIndex which is the floor of (index - 1)/ 2
    .Keep looping as long as the values element at the parentIndex is less than the values element at teh child index 
        .Swap the value of the values element at teh parentIndex with the value of the element property at teh child index
        .Set the index to be the parentIndex, and start over!
        
*/
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(1);
heap.insert(45);
heap.insert(199);
console.log(heap);
