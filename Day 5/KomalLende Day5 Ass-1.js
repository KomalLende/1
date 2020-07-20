//Assignment day 5

//Question 1 :

//Create a for loop that iterates upto 100 while outputting "fizz" at multiples of 3 , "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5


for(let i=1;i<=15;i++)
{
    if(i%3==0 && i%5==0)
    {
        console.log("multiple of 3 and 5");
        console.log("FIZZBUZZ");
    }
    if(i%3==0 && i%5!=0)
    {
        console.log("multiple of 3 ");
        console.log("FIZZ");
    }
    if(i%5==0 && i%3!=0)
    {
        console.log("Multiple of 5");
        console.log("BUZZ");
    }
    
}