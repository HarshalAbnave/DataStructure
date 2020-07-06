let m = new Map();

//adding elements in the Map
m.set('apple', 10);
m.set('orange', 20);
m.set('banana', 6);
m.set('grapes', 20);
m.set('mango', 60);

//display all the elements of Map
m.forEach((value , key) => {
  console.log(`key: ${key} value: ${value}`);
})

console.log('-------------------------------');
// check if elements present in map or not
let ans = m.has('grapes');
console.log(ans);
ans = m.has('Cherries');
console.log(ans);

console.log('-------------------------------');
//delete a elements from map
let isdeleted = m.delete('apple');
console.log(isdeleted);