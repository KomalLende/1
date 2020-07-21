// Assignment Day 6

// Question 3:

// Using promises/async await/fetch get the random todos from the json placeholder api. And log all the
// completed todos to the console.
// API Endpoint : https://jsonplaceholder.typicode.com/todos

//fetch('http://jsonplaceholder.typicode.com/todos').then(response=>response.json())
//.then(data=>console.log(data));

async function fetchtodos()
{
    const response=await fetch('http://jsonplaceholder.typicode.com/todos/random');
    const data=await response.json();
    console.log(data);
}
fetchtodos();