//Assignmennt Day 6

// Question 1:

// Write a program which does the following things:
// 1. Takes a positive number from the user.
// 2. Makes an array of numbers till the number given by user
// 3. Use higher order function to filter the odd numbers
// 4. Generate and array of the cubes of the filtered numbers

var inputArray=[];
var size=Number(prompt("How many Numbers u want to add"));

for(let i=0;i<size;i++)
{
    inputArray[i]=prompt("Enter a positive Numbers"+(i+1));
}

console.log(inputArray);
let odd=inputArray.filter(el=>el%2!=0);
console.log(odd);

let cube=odd.map(el=>el*el*el)
console.log(cube);