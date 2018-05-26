window.toggleLeft = function() {
    var element = document.getElementById("offcanvas-left");
    element.classList.toggle("hide");
}
window.toggleRight = function() {
    var element = document.getElementById("offcanvas-right");
    element.classList.toggle("hide");
}
let firstName = 'Renee';
let lastName = 'Yang';
const fullName = `${firstName} ${lastName}`;
console.log(fullName);

let example = 7.77;
console.log(parseInt(example));

let example1 = 666;
console.log(Boolean(example1)); //checks if number is true; only false number is 0

let example2 = [8, 7, 6];
example2.push(4, 2, 5); //add values to an array
example2.pop(); //delete last values from array
let example4 = example2; //creates new array (shallow copy)
let example3 = [...example2]; //creates brand new array; (deep copy)
console.log(example2.length);
console.log(example2[2]);

let example5 = {
    firstName: 'Renee',
    lastName: 'Yang',
    address: {
        city: 'Columbia',
        state: 'Maryland'
    }
}
example5.age = 19;
console.log(example5.age);

let number1 = 10;
let number2 = '10';
console.log(number1 == number2); //only checks if numbers are same
console.log(number1 === number3); //strictly equals; checks if type and value are true

function add(num1, num2) {
   return num1 + num2;
}
console.log(add(10, 34));
console.log(add(45, 9));