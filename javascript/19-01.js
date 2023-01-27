// in javascript we can declare variable in 3 ways
// var,let and const


/*var myName = "John";
console.log(myName);*/


/*const myName = [];
console.log(myName);
myName.push("John")
console.log(myName);*/


/*let myName = "John";
console.log(myName);
myName = "Alex";
console.log(myName);*/


/*function addTwoNumbers(num1, num2) {
    var num =5;
    return num1 + num2;
}
console.log(num);*/


//string Interpolation


/*let firstName = "John";
let lastName = "Alex";
console.log(firstName+ " " + lastName);*/


//Default params


/*function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log(addTwoNumbers(1,2));*/


/*let addTwoNumbers = (num1, num2) => {
    return num1 + num2;
};
console.log(addTwoNumbers(1,2));*/


/*let addTwoNumbers = (num1, num2) => {
    console.log(num1);
    console.log(num2);
    return num1 + num2;
};
console.log(addTwoNumbers(1));*/


//Rest and spread Operator
//for arrays

/*let array = [5, 10, 15, 20, 25];
console.log(...array);*/


/*let maxofNumbers = (...numbers) => {
    console.log(numbers);
};
maxofNumbers(1,2,3,4,5,6,7,8,9,10);*/

//for object

let object = {
    name: "John",
    age: 25,
    city: "new york",
};
let object2 = {
    ...object, country: "USA",
};
console.log(object2);




















