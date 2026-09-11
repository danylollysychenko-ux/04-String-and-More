let myName = "Mister. Klins    ";
console.log(myName.charAt(0));
console.log(myName[0]); //same as above

//find where the . is 
console.log(myName.indexOf(".")); //6
//find the last occurence of a character
console.log(myName.lastIndexOf("i")); //10

//find the length of the string;:
console.log(myName.length); //13

//remove leading and trailing whitespace:
console.log(myName.trim(), "   hello");

//convert to a new case:
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

//repeat:
console.log(myName.repeat(100));

//see if the string starts with a substring:
console.log(myName.trim().startsWith("Mister"));
console.log(myName.trim().startsWith("J"));

//replaces the first instance:
console.log(myName.replace("i", "e"))

//replace all instances:
console.log(myName.replaceAll("i", "e"))

let phone = "814-464-8637";
//replace all dashes with nothing
console.log(phone.replaceAll("-", ""));

//padding:
console.log(myName.trim().padStart(20, "*"));
console.log(myName.trim().padEnd(20, "*"));
