console.log("Hello World");
document.write("Hello World");
var num = 10;
console.log(num);
console.log(typeof(num));
var num = false;
console.log(num);
console.log(typeof(num));
var num = null;
console.log(num);
console.log(typeof(num));
var num = undefined;
console.log(num);
console.log(typeof(num));
//Function
let sayHello = function(){
    alert("Hello World");
}
sayHello();
//Array
let numArray = [1, 2, 3];//static
let animals = new Array["cat", "Dog", "Lion"];
const sym1 = Symbol(4);
console.log(sym1);
const sym2 = Symbol(4);
if(sym1 == sym2){
    console.log("True");
} 
else{
    console.log("False");
}