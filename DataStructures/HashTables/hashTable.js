class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  /*
      Set Psuedocode 
    +++++++++++++++++++++++
  .Accepts a key and a value
  .Hashes the key
  .Stores teh key-value pair in the hash table array via separate chaining.
  */
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  /*
      Get Psuedocode 
    +++++++++++++++++++++++
  .Accepts a key and a value
  .Hashes the key
  .Retrieves the key-value pair in the hash table.
  .If the key isn't found, returns undefined 
  */
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  /*
      Keys Psuedocode 
    +++++++++++++++++++++++
  .Loops through the hash table array and returns an array of keys in the table.
  */
  keys() {
    {
      let keysArr = [];
      for (let i = 0; i < this.keyMap.length; i++) {
        if (this.keyMap[i]) {
          for (let j = 0; j < this.keyMap[i].length; j++) {
            if (!keysArr.includes(this.keyMap[i][j][0])) {
              keysArr.push(this.keyMap[i][j][0]);
            }
          }
        }
      }
      return keysArr;
    }
  }
  /*
      Values Psuedocode 
    +++++++++++++++++++++++
  .Loops through the hash table array and returns an array of values in the table. 
  */
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable(17);
ht.set('maroon', '#800000');
ht.set('yellow', '#FFFF00');
ht.set('olive', '#808000');
ht.set('salmon', '#FA8072');
ht.set('lightcoral', '#F08080');
ht.set('mediumvioletred', '#C71585');
ht.set('plum', '#DDA0DD');
console.log(ht.keys());
