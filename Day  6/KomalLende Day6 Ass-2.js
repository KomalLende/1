//Assignment Day 6

// Question 2:

// Create a Class User with properties as name, age & email.
// He can login and logout
// Create another class Moderator which has all the features of User, plus additional functionality to Add
// coins and remove coins.
// Create one more class Admin which has all the features of Moderator plus additional features like add a
// Course and delete a particular course for a user.

class user{
    constructor(name,age,email)
    {
    this.name=name;
    this.age=age;
    this.email=email;
    this.lucoins=0;
    this.courses=[];
    
   }
   login(){
       console.log(`${this.name} has LOGGED IN`);
   }
   logout(){
       console.log(`${this.name} has LOGGED OUT`);
   }
   
}

class Moderator extends user{
    //constructor(name,age,email,role){
      //  super(name,age,email);
        //this.role='Moderator';
        addCoins(){
            this.lucoins++;
            console.log(`${this.name} has ${this.lucoins} coins`);
         return this
        }
   
        subCoins(){
            this.lucoins--;
            console.log(`${this.name} has ${this.lucoins} coins`);
        }
    }
class Admin extends Moderator{
    addCourse(user,courses){
        user.courses.push(courses);
    }
    deleteCourse(user,courses){
            user.courses.pop(courses);
        
    }

    

}


let user1=new Admin('sachin',22,'s@gmail.com','Moderator');
let user2=new Admin('danny',21,'d@gmail.com','Cheif Moderator');
user1.login();
user1.addCoins();
user1.addCoins();
user1.subCoins();

//let admin=new Admin;
user1.addCourse(user1,'javascript');
user1.addCourse(user1,'Python');
user1.addCourse(user1,'Java');
console.log(user1.courses);
user1.deleteCourse(user1,'Python');
console.log(user1.courses);

user1.logout();
console.log(user1);
console.log(user2);