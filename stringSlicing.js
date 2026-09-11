let program = "Computer Programming";
// slicing - take part of the string out (a substring)
// this does not change the original string - it creates a copy
let firstWord = program.slice(0, 8);
console.log(firstWord);
let secondWord = program.slice(9); //omit the 2nd argument to go to the end.
console.log(secondWord);

//get the last character:
let lastChar = program.slice(-1);
console.log(lastChar);

//dynamically get first and second word:
let first = program.slice(0, program.indexOf(" "));
console.log(first);
let second = program.slice(program.indexOf(" ") + 1);
console.log(second);
