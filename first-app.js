const person = {
    name: "jp",
    age: 23,
    //creating a function inside of a constant as a property
    greet() {
        console.log("Hi, I am " + this.name);
    }
}

// Object destructuring, receiving only a property name from the js object
const printName = ({name}) => {
    console.log(name);
}

printName(person);

// Object destructuring, set constants of properties - names must be same
const {name, age} = person;
console.log(name, age);

// spread operator to create a copy of an object
const copiedPerson = {...person};
console.log(copiedPerson);

// Spread operator to create a copy of an array
const hobbies = ["soccer","coding"];
const copiedHobbies = [...hobbies];
console.log(copiedHobbies);

// Rest operator to return variable length arguments as an array
function toArray(...args) {
    return args;
}

console.log(toArray(1,2,3));

// array destructuring, taken from list in order
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);



