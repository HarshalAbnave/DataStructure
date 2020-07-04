class hashtable {
  constructor(value) {
    this.data = new Array(value);

  }

  _hashkey(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) %
        this.data.length;
    }
    return hash;
  }

  add(key, value) {
    let address = this._hashkey(key);
    let temp = [key, value];
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push(temp);
  }

  contains(key) {
    let address = this._hashkey(key);
    if(!this.data[address]) {
      return `does not contains any key with ${key}`;
    } else {
      let temp = this.data[address];
      for(let i = 0; i < temp.length; i++) {
        if(temp[i][0] === key) {
          return temp[i][1];
        }
      }
    }
  }
}

let hash = new hashtable(50);
hash.add("harshal", 25);
hash.add("harshall", 26);
console.log( hash.contains("harshall"));