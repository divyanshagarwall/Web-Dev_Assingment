var Operator = prompt("Enter opertor:");
const num1 = parseInt(prompt("Enter first number: "));
const num2 = parseInt(prompt("Enter Second number: "));

let result;
if (Operator == "+") {
  result = num1 + num2;
} else if (Operator == "-") {
  result = num1 - num2;
} else {
  result = "wrong option";
}
alert("Result is : " + result);
document.write("Result is :  " + result);
console.log("Result is :  " + result);
