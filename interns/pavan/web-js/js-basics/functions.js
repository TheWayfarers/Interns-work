
//Regular Function
function add(a, b) {
    return a + b;
}
const result = add(1,2);
console.log(`Addition is ${result}`);

//Arrow Function
const multiply = (a,b) => {
return a*b;
}
console.log(`Multiplication is ${multiply(2,3)}`);

//function with a default parameter
function greeting(name = "Guest"){
    console.log(`Hello, ${name}`);
}
greeting("paul");
greeting();