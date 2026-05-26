let arr = [1, 2, 3];

arr.push(4, 5, 6);
console.log(arr);

// arr.splice(2, 1) // Remove the element from index 2 and element one
// console.log(arr);

arr.splice(2, 1, 99, 100); // Adding the value 99 where from which value deleted from the index
console.log(arr);