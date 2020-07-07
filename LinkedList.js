class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(value) {
    let temp = new Node(value);
    if (this.head === null) {
      this.head = temp;
      this.length++;
    } else {
      let ptr = this.head;
      while (ptr.next != null) {
        ptr = ptr.next;
      }
      ptr.next = temp;
      this.length++;
    }
  }

  insertBetween(value, position) {
    try {
      if (position > this.length) {
        throw new Error('Invalid position');
      } else {
        let temp = new Node(value);
        let ptr = this.head;
        for (let i = 0; i < position - 1; i++) {
          ptr = ptr.next;
        }
        temp.next = ptr.next;
        ptr.next = temp;
        this.length++;
      }
    } catch (exception) {
      console.error(exception);
    }
  }
}


let ll = new LinkedList();
ll.insert(2);
ll.insert(6);
ll.insertBetween(8, 1);
console.log(ll);