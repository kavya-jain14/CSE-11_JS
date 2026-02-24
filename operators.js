//Arithmetic Operators
let a = 5;
let b = 2;
let c = a+b; //Addition
let d = a-b; //Subtraction
let e = a*b; //Multiplication
let f = a/b; //Division
let g = a%b; //Modulus
let h = a**b; //Exponential
console.log("a + b =", a+b);
console.log("a - b =", d);
console.log("a * b =", e);
console.log("a/b =", f);
console.log("a%b =", g);
console.log("a^b =", h);

// Unary Operator
let p = 5;
let q = 2;
console.log("p = ", p, "q = ", q);
p++;
console.log("p = ", p);
q--;
console.log("q = ", q);
console.log("++p = ", ++p);
console.log("p++ = ", p++);
console.log("p = ", p);

// Assignment Operators
let r = 5;
let s = 7;
let t = 9;
let u = 10;
let v = 12;
let w = 15;
r += 2;
s -= 2;
t *= 2;
u /= 2;
v %= 2; //Modulus
w **= 2; //Exponential
console.log("r = ", r);
console.log("s = ", s);
console.log("t = ", t);
console.log("u = ", u);
console.log("v = ", v);
console.log("w = ", w);

// Comparision Operators
let i = 5;
let j = 2;
console.log("i == j", i==j);
j = 5;
console.log("i == j", i==j);
console.log("i == j", i!=j);
j = "5"
console.log("i == j", i==j); //Will return True because JS will first convert string to number and then compare.
console.log("i == j", i===j); //Stricter version of comparison, will not convert to string (=== and !==) -->strict equal to and strict not eqaul to.
//other comparision operators include >, <, <=, >=

// Logical Oprators
// Logical AND(&&)
// Logical OR(||)
// Logical NOT(!)
let m = 10;
let n = 15;
let cond1 = m > n;
let cond2 = m == n;
console.log("cond1 AND cond2 ", cond1 && cond2);
console.log("cond1  OR cond2 ", cond1 || cond2);
console.log(!(m < n));