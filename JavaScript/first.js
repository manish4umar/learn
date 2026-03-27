/* let num = prompt("Enter you number");

if(num % 5 === 0){

    console.log("It is multiple of five");

 }
 else{
   console.log("It is not multiple of five");
}
   */

let marks = prompt("Enter marks");
marks = Number(marks); // Convert input to number

if (marks >= 90 && marks <= 100) {
  console.log("A");
} else if (marks >= 80 && marks < 90) {
  console.log("B");
} else if (marks >= 70 && marks < 80) {
  console.log("C");
} else if (marks >= 60 && marks < 70) {
  console.log("D");
} else if (marks >= 40 && marks < 60) {
  console.log("Pass");
} else {
  console.log("Fail");
}
