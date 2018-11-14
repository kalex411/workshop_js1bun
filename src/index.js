/* alert('alert from JS file') */
// number variables
var number = 17;
console.log("Number=", number);
// string variables
var name = "Kantor";
console.log("Name=", name);
// boolean variables
var isTrue = true;
console.log("Is true=", isTrue);
var isFalse = false;
console.log("Is false=", isFalse);
// + operator
console.log("sum=", 2 + 2);
// compare
console.log("compare numbers", 3 < 4); // result boolean
// equal VALUES
console.log("equal ", 2 == 2); //result boolean
console.log("equal ", 2 == "2"); //result boolean
// equal VALUES AND TYPES
console.log("equal ", 2 === 2); //result boolean
console.log("equal ", 2 === "2"); //result boolean
// Arrays DATA
// Define empty array
var arr = [];
console.log("Empty array", arr);
// define array with values
var arr2 = ["A", "B", "C"];
console.log("Array with values", arr2);
// Array length
console.log("Array number of elements", arr2.length);
// display B
console.log("display B::::", arr2[1]);
// update value
arr2[1] = "Bogdan";
console.log("display B::::", arr2);
// add new value
arr2.push("D");
console.log("display D::::", arr2);
// different data types array
var arr3 = ["A", 13, true];
console.log("Different data types array", arr3);
// OBJECTS ************************
// empty object
var obj = {};
console.log("object:", obj);
//object with value
var robot = {
  model: "TRX1000",
  color: "red"
};
console.log("Robot:", robot);
//get value
console.log("Robot model", robot.model);
//add new property
robot.weight = 180;
console.log("Robot", robot);
