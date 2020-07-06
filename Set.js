let s = new Set();
s.add(2);
s.add(4);
s.add(2);
s.add(6);
s.add(8);

//printing all the elements of set
s.forEach(function(el) {
  console.log(el);
})

console.log('---------------------------');
//check if elements present in set or not
let ans = s.has(2);
console.log(ans);
ans = s.has(12);
console.log(ans);

console.log('---------------------------');
//to find total no of element in set
let size = s.size;
console.log(size);

console.log('---------------------------');
//to delete an element from Set
let isdeleted =  s.delete(2);
console.log(isdeleted);
s.forEach(function(el) {
  console.log(el);
})