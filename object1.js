// to declare a Symbol datatype
const mySym = Symbol("key1");

// deaclare the object
const User ={
    name: "Priyanshu",
    age:21,
    [mySym]:"key2", // syntax to declare string in object
    city:"Delhi",
    lastdaysigned:["mon","tue"]
}

// to access the object
// console.log(User.name);
// console.log(User["city"]);
// console.log(User[mySym]);// syntax for accessing symobol datatype

// Using with the fucntion
User.greeting = function(){
    console.log("Hello JS users")
}
User.greetingTwo = function(){ // using value of the object
    console.log(`Hello JS user, ${this.name} and you age is, ${this.age}`)
}
console.log(User.greeting());
console.log(User.greetingTwo());