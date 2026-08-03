const array = ['item1','item2','item3','item4','item5'];


//map function
const transformedArray = array.map((item)=>{
    return item.toUpperCase();
});
console.log(transformedArray);

//filter function
const filteredArray = array.filter((item)=>{
    return item.endsWith('1') || item.endsWith('5');
});
console.log(filteredArray);

const person = {
    pName : "paul",
    role : "intern"
}
//destructuring
const {role} = person;
console.log(role);