/* let num = prompt("Enter you number");

if(num % 5 === 0){

    console.log("It is multiple of five");

 }
 else{
   console.log("It is not multiple of five");
}
   */

let marks = prompt("Enter marks");

if (marks >= 90 && marks >=100) {
  console.log("A");
} else if (marks >= 65) {
  console.log("B");
} else if (marks >= 55) {
  console.log("C");
} else if (marks >= 45) {
  console.log("D");
} else if (marks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}
