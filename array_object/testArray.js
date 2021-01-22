// learning array 

console.log("we are in the page of array that we are learning here")

const marks = [54,22,77,66,11,558,532,321,3333];
const fruits = ["Orange", "peach" ,"data"];
const mixed = ['str', 34, [3,5]];

// making array using constructor

const arr =  new Array(23,44,22,'data', true)

    // print the array
    console.log(marks)
console.log(fruits)
console.log(mixed)

console.log(arr)

//array method.
console.log(fruits[1]);

// length property of array

console.log(fruits.length)

// isArray method return the array is there or not it return true and false
console.log(Array.isArray(fruits));
console.log(Array.isArray("fruits"));

// replacing the value of array using index;

// marks[0]= "Pradeep Kumar Sahani"
// console.log(marks);

// index of method to find the index of the element.

let value = marks.indexOf(558);
// console.log(value);

// mutating of array or modifying the array
//push method add the element in the last

let newMarks = marks.push(100);
console.log(newMarks);
console.log(marks)

// unshift method add the element at the starting

let changeMark = marks.unshift(320);
console.log(changeMark);
console.log(marks)

//pop method add the remove the element last

let delMark = marks.pop();
console.log(delMark);
console.log(marks)

// array shift method used to remove the element from the start

let removedd = marks.shift();
console.log(removedd);
console.log(marks)

//using the splice method of array

let del = marks.splice(1, 3) // in this first number is the starting point and second number till you want to remove.
console.log(del); // in the result it will remove from 1 index to 3 element from the array
console.log(marks);

// reverse method of array is used to reverse the array.

marks.reverse();
console.log(marks);

//array concat method which is use to add two array in a one array. 
// definig the marks2 array

let marks2 = [55,44,77,33];
let total = marks.concat(marks2);
let sorting = total.sort()
console.log(sorting);












