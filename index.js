console.log("I like books!");
console.log("Hello everyone!"); 

//window.alert("I really love to read books!!!");

//This is a comment

/* 
 This is a multiline comment 
*/

// Variables
let firstName = "Samra";
let age = 21; 
let student = true; 

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("Enrolled:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";

//Arithmetic expressions 
 let studentsArithmetic = 20; 
 //studentsArithmetic = studentsArithmetic + 1; 
 //studentsArithmetic = studentsArithmetic - 1; 
 //studentsArithmetic = studentsArithmetic * 2; 
 //studentsArithmetic = studentsArithmetic / 2; 
 //let extraStudent = studentsArithmetic % 2;

 //studentsArithmetic += 1;
 //studentsArithmetic -= 1;
 //studentsArithmetic *= 2;
 //studentsArithmetic /= 2;


//console.log(extraStudent);
console.log(studentsArithmetic);

/* operator precedence */
let result = (1 + 2) * (3 + 4);
console.log(result);

//User input
    // Easy way with a window prompt
        //let username = window.prompt("What's your name?");
        //console.log(username);
    // Difficult way HTML textbox
    let username;
    document.getElementById("myButton").onclick = function() {
        username = document.getElementById("myText").value; 
        console.log(username);
        document.getElementById("myLabel").innerHTML = "Hello " + username;
    }

//Type conversion
    /*let ageConversion = window.prompt("How old are you?"); 
    console.log(typeof ageConversion);
    ageConversion = Number(ageConversion);
    console.log(typeof ageConversion);
    ageConversion += 1;
    console.log("Happy Birthday! You are", ageConversion, "years old");*/
    let x; 
    let y; 
    let z;

    x = Number("3.14");
    y = String(3.14);
    z = Boolean("pizza"); 

    console.log(x, typeof x);
    console.log(y, typeof y);
    console.log(z, typeof z);

// const
const PI = 3.14159;
let radius;
let circumference; 

//radius = window.prompt("Enter the radius of a circle");
radius = Number(radius); 

//PI = 420.69;

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);

// Math

let p = 3.71; 

p = Math.round(p); 

console.log(p);

let n = 3.14;
let l = 5; 
let v = 9;
let maximum; 
let minimun; 
//n = Math.floor(n);
//n = Math.ceil(n);
//n = Math.pow(n, 2);
//n = Math.sqrt(n);
//n = Math.abs(n);
//maximum = Math.max(n, l, v);
//minimum = Math.min(n, l, v);
n = Math.PI;
console.log(n);

// Hypotenuse calc practice program 

/* let a; 
let b; 
let c;

a = window.prompt("Enter side A");
a = Number(a);
b = window.prompt("Enter side B");
b = Number(b);

c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

console.log("Side C:", c); */

document.getElementById("submitButton").onclick = function() {
    
    a = document.getElementById("aTextBox").value;
    a = Number(a);

    b = document.getElementById("bTextBox").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    document.getElementById("cLabel").innerHTML = "Side C: " + c;
}

