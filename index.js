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