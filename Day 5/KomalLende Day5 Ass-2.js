//Assignment day 5

//Question 2 :

//Destructure the following code


const student=
{
    name:"Helesinki",
    age:24,
    projects:{
        diceGame:"Two player dice game using Javascript"
    }
}
const{name, age , projects:{diceGame}}=student;
console.log(name,age,diceGame);