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

//count

let count = 0; 

document.getElementById("decreaseBtn").onclick = function() {
    count -=1;
    document.getElementById("countLabel").innerHTML =  count;
}
document.getElementById("resetBtn").onclick = function() {
    count =0;
    document.getElementById("countLabel").innerHTML =  count;
}
document.getElementById("increaseBtn").onclick = function() {
    count +=1;
    document.getElementById("countLabel").innerHTML =  count;
}

// Random number generator 

let u = Math.floor(Math.random() * 6) + 1;
let w = Math.floor(Math.random() * 6) + 1;
let t = Math.floor(Math.random() * 6) + 1;

document.getElementById("rollButton").onclick = function() {

    u = Math.floor(Math.random() * 6) + 1;
    w = Math.floor(Math.random() * 6) + 1;
    t = Math.floor(Math.random() * 6) + 1;

    document.getElementById("uLabel").innerHTML = u;
    document.getElementById("wLabel").innerHTML = w;
    document.getElementById("tLabel").innerHTML = t;
} 

// Useful string methods 

let userName = "Samra Raković";
let phoneNumber = "123-456-7890";

//console.log(userName.length);
//console.log(userName.charAt(0));
//console.log(userName.indexOf("o"));
//console.log(userName.lastIndexOf("a"));
//userName = userName.trim();
//userName = userName.toUpperCase();
//userName = userName.toLowerCase();

phoneNumber = phoneNumber.replaceAll("-", "/");

console.log(userName);
console.log(phoneNumber);

// String slicing

let fullName = "Samra Raković";
let fName;
let lastName; 

//fName = fullName.slice(0, 5);
//lastName = fullName.slice(6);

fName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(fName);
console.log(lastName);

// Method chaining 

let uName = "samra"; 

let letter = uName.charAt(0).toUpperCase().trim();

console.log(letter);

// if statement 

/* let ageN = 75; 

if(ageN >= 65){
    console.log("You are a senior citizen!");
}
else if(ageN >= 18){
    console.log("You are an adult!");
}
else if (ageN < 0){
    console.log("YOU HAVEN'T BEEN BORN YET!");
}
else{
    console.log("You are a child!");
} */

let online = false;
if(online){
    console.log("You are online!"); 
}
else{
    console.log("You are offline!");
}

// checked propery

document.getElementById("myButton1").onclick = function() {
    const myCheckBox = document.getElementById("myCheckBox");
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if(myCheckBox.checked) {
        console.log("You are subscribed!");
    }
    else{
        console.log("You are not subscribed!");
    }

    if(visaBtn.checked){
        console.log("You are paying with a Visa!");
    }
    else if(mastercardBtn.checked){
        console.log("You are paying with a Mastercard!");
    }
    else if(paypalBtn.checked){
        console.log("You are paying with a Paypal!");
    }
    else{
        console.log("You must select a payment type!");
    }
}

// Switch

/* let grade = "Pizza";

switch(grade) {
    case "A":
        console.log("You did great!");
        break;
    case "B":
        console.log("You did good!");
        break;
    case "C":
        console.log("You did okay!");
        break;
    case "D":
        console.log("You passed .... barely");
        break;
    case "F":
        console.log("You FAILED!");
        break;
    default: 
        console.log(grade, "is not a letter grade");

} */
let grade = 61;

switch(true) {
    case grade >= 90:
        console.log("You did great!");
        break;
    case grade >= 80:
        console.log("You did good!");
        break;
    case grade >= 70:
        console.log("You did okay!");
        break;
    case grade >= 60:
        console.log("You passed .... barely");
        break;
    case grade > 60:
        console.log("You FAILED!");
        break;
    default: 
        console.log(grade, "is not a letter grade");

} 

// AND OR logical operators
let temp = 15; 
if(temp > 0 && temp < 30) {
    console.log("The weather is good!");
}
else {
    console.log("The weather is bad!");
}