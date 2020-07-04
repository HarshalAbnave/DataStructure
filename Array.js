class MyArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

//O(1)
  push(value) {
    this.data[this.length] = value;
    this.length++;
  }

//O(1)
  pop() {
    delete this.data[this.length-1];
    this.length--;
  }

  //O(n)
  Delete(index) {
    let elementToDelete = this.data[index];
    this._deletePosition(index);
    return elementToDelete;
  }


  _deletePosition(index) {
    for(let i = index; i < this.length -1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length -1];
    this.length--;
  }

  //O(n)
  printArray() {
    let str = '';
    for(let i = 0; i < this.length; i++) {
      str += this.data[i] + ' ';
    }
    console.log(str);
  }
}

let array = new MyArray();
array.push(2);
array.push(4);
array.push(6);
array.push(8);
array.push(10);
console.log(array);
console.log(array.Delete(3));
console.log(array);
array.printArray();