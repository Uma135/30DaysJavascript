//comments can make code readable
//Welcome to 30DaysOfJavaScript

/*
comments can make code readable, 
easy to reuse and 
informative
*/

//variables
let name="Uma";
// name[0]="f"
let age=23;
let isAdult=true;
let city;
let country=null;
console.log(name, age, isAdult, city, country);
let arr=[1,3,4];
let person={firstName:"Uma",lastName:"G"};
function myFunction(){
    return person;
}
let today=Date.now()
let now=new Date()
console.log(today);
console.log(now)

//datatype
console.log(typeof name)
console.log(typeof age)
console.log(typeof isAdult)
console.log(typeof city)
console.log(typeof country)
console.log(typeof arr)
console.log(typeof person)
console.log(typeof myFunction)
console.log(typeof new Date())

//Declaring variables in single and multiple line
let n1=24;
let n2;
console.log(n1)
console.log("n2".charAt(8))

// let firstName="Celina", 
// lastName="Helan",
// isMarried=false;

let firstName="Celina", lastName="Helan", isMarried=false;
console.log(firstName, lastName, isMarried)
let myAge=22
let yourAge=20
console.log(`I am ${myAge} years old. \nYou are\\ ${yourAge} years old.`)
