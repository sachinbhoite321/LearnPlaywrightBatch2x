let fruits = ["Banana", "Abple", "Aberry"];
// fruits.sort();
// console.log(fruits);

console.log(fruits.sort((a, b) => b.length - a.length));

console.log(fruits.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' })));



let numbers = [10, 3, 1, 7, 56, 14];
// numbers.sort();
// console.log(numbers);

//Output : [ 1, 10, 14, 3, 56, 7 ]
//Natural sorting lexical sorting

//for that we use sorting using arrow function



console.log(numbers.sort((a, b) => a - b)); // Ascending

//For descending order

console.log(numbers.sort((a, b) => b - a)); // Descending