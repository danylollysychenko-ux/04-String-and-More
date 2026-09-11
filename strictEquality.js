// strict equality! (===)
// let's talk about the equals sign:
// = assignment (stores a value in a variable)
// == compares values but ignores data type
// === compares values and data types

const pi = 3.14;
console.log("==");
if (pi == "3.14") {
  console.log("That's pi!");
} else {
  console.log("That's not pi!");
}

console.log("===");
if (pi === "3.14") {
  console.log("That's pi!");
} else {
  console.log("That's not pi!"); //data types don't match
}

// inequality (!=)
console.log("!=");
if (pi != "3.14") {
  console.log("That's not pi!");
} else {
  console.log("That's pi!"); //data types don't match
}

//strict inequality (!==)
console.log("!==");
if (pi !== "3.14") {
  console.log("That's not pi!");
} else {
  console.log("That's pi!"); //data types don't match
}
