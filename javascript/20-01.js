//.map()

/*let array = [1, 2, 3, 4, 5];
let newArray = [];

for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i] * array[i];
}
console.log(newArray);*/


/*let array = [5, 10, 15, 20];

function functionForMap(element) {
    return element * element;
}

let newArray = array.map(functionForMap);
console.log(newArray);*/


//.forEach()

/*let array = [1, 2, 3, 4, 5];
array.forEach((Element, index) => {
    Element *= Element;
    console.log(Element);
});
console.log("Array is: ", array);*/


//.filter()

/*let array = [10, 20, 30, 40, 50];
let newArray = array.filter((Element) => Element >= 30);
console.log(newArray);*/


//.find()

/*let array = [10, 20, 30, 40, 50];
let temp = array.find((value) => {
    return value> 20;
});
console.log(temp);*/


//.sort()

/*let array = [50, 40, 30, 20, 10, 111];
let sortedArray = array.sort((el1, el2) => {
    el1 = Number(el1);
    el2 = Number(el2);
    return el1 - el2;
});
console.log(sortedArray);*/


//object Destructuring

/*let details = {
    name: "Alex",
    age: 24,
    address: {
        street: "Brooklyn",
        city: "new york",
        state: "NY",
        country: "USA",
        passportDetails: {
            passportNumber: "ABCD1234",
        },
    },
};
let myName = details.name;
let age = details.age;
console.log(myName, age);*/


//Maps & set 

/*let map = new Map();
map.set(1, "john");
map.set(2, "alex");
console.log(map);

let set = new Set();
set.add(1);
set.add(2);
console.log(set);*/

//class

class Animal {
    noofLegs;
    color;
    family;
    sound;
    constructor(noofLegs, color, family, sound) {
        this.noofLegs = noofLegs;
        this.color = color;
        this.family = family;
        this.sound = sound;
    }
}
let animal = new Animal(4, "brown", "rodent", "something");
console.log(animal);