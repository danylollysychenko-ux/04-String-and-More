/*
    CHALLENGE: Galactic Access Badge

    A pilot has sent a messy identification transmission. Your job is to
    clean it, decode it, decide whether the pilot may enter the space station,
    and print an official badge.

    Complete every TODO without changing the three starting values below.
    Do not use arrays, loops, or .split(). Everything you need has already
    been covered in this folder (plus if/else and template literals).
*/

const transmission = "   nova.quill | cosmic-raven | 7   ";
const stationPrefix = "COSMIC";
const requiredClearance = "7";

// --------------------------------------------------------------------------
// PART 1: CLEAN AND LOCATE
// --------------------------------------------------------------------------

// TODO 1: Trim the transmission and store the result in cleanTransmission.
let cleanTransmission = transmission.trim();
console.log(`cleanTransmisson: ${cleanTransmission}`);

// TODO 2: Find the positions of the first and last | characters.
// Store them in firstDivider and lastDivider. Use two different methods.
let firstDivider = transmission.indexOf("|");
console.log(`firstDivider: ${firstDivider}`);
let lastDivider = transmission.lastIndexOf("|");
console.log(`secondDivider: ${lastDivider}`);

// --------------------------------------------------------------------------
// PART 2: DECODE THE THREE SECTIONS
// --------------------------------------------------------------------------

// TODO 3: Use slice() and the divider positions to extract these sections:
//      nameCode:      "nova.quill"
//      codeName:      "cosmic-raven"
//      clearanceCode: "7"
// Be sure to remove the extra spaces from each section.
let nameCode = transmission.slice(0, transmission.indexOf("|")).trim();
let codeName = transmission
  .slice(transmission.indexOf("|") + 1, transmission.lastIndexOf("|"))
  .trim();
let clearanceCode = transmission
  .slice(transmission.lastIndexOf("|") + 1)
  .trim();
console.log(`nameCode: ${nameCode}`);
console.log(`codeName: ${codeName}`);
console.log(`clearanceCode: ${clearanceCode}`);

// TODO 4: Turn nameCode into "NOVA QUILL".
// Replace the period, change the case, and use method chaining.
// Store the result in agentName.
agentName = nameCode.replace(".", " ").toUpperCase();
console.log(`agentName: ${agentName}`);

// TODO 5: Turn codeName into "COSMIC RAVEN".
// Replace every dash, change the case, and use method chaining.
// Store the result in formattedCodeName.
let formattedCodeName = codeName.replaceAll("-", " ").toUpperCase();
console.log(`formattedCodeName: ${formattedCodeName}`);

// TODO 6: Find the space in agentName, then use dynamic slicing to store
// "NOVA" in firstName and "QUILL" in lastName. Do not use fixed positions.

lastName = agentName.slice(agentName.indexOf(" ")).trim();
firstName = agentName.slice(0, agentName.indexOf(" ")).trim();
console.log(`firstName: ${firstName}`);
console.log(`lastName: ${lastName}`);

// --------------------------------------------------------------------------
// PART 3: CREATE A CALL SIGN
// --------------------------------------------------------------------------

// TODO 7: Create the call sign "NQ-N" using all three techniques below:
//      - charAt() to get the first character of firstName
//      - bracket notation to get the first character of lastName
//      - slice(-1) to get the final character of agentName
// Store the result in callSign.
callSign = firstName.charAt(0) + lastName[0] + "-" + codeName.slice(-1).toUpperCase();
console.log(`callSign: ${callSign}`);

// TODO 8: Store the length of formattedCodeName in codeNameLength.
let formattedCodeLength = formattedCodeName.length;
console.log(`formattedCodeLength: ${formattedCodeLength}`);
// --------------------------------------------------------------------------
// PART 4: RUN THE SECURITY CHECK
// --------------------------------------------------------------------------

// TODO 9: Create these four Boolean variables:
//      hasValidName: firstName AND lastName must both contain characters.
//      hasValidPrefix: formattedCodeName must start with stationPrefix.
//      hasValidClearance: clearanceCode must be strictly equal to
//                         requiredClearance.
//      isBlocked: the code name starts with "DARK" OR "ROGUE".
// let hasValidPrefix = true;
// let hasValidClearance = true;
// let isblocked = true;

if ((firstName = lastName)) {
  hasValidName = true;
} else {
  hasValidName = true;
}
if (formattedCodeName) {
  hasValidPrefix = true;
} else {
  hasValidPrefix = false;
}
if (clearanceCode === requiredClearance) {
  hasValidClearance = true;
} else {
  hasValidClearance = false;
}
let blocked = codeName.slice(0, codeName.indexOf(" "));
console.log(blocked);
if (blocked == "DARK" || blocked == "ROGUE") {
  isBlocked = true;
} else {
  isBlocked = false;
}

console.log(`hasValidName: ${hasValidName}`);
console.log(`hasValidPrefix: ${hasValidPrefix}`);
console.log(`hasValidClearance: ${hasValidClearance}`);
console.log(`isBlocked: ${isBlocked}`);

// TODO 10: Create accessGranted. It is true only when the name, prefix, and
// clearance are valid AND the pilot is NOT blocked. Use && and !.
if (
  hasValidName == true &&
  hasValidPrefix == true &&
  hasValidClearance == true &&
  isBlocked != false
) {
  accessGranted = true;
} else {
  accessGranted = false;
}
console.log(`acessGranted: ${accessGranted}`);

// TODO 11: This expression should be true because the data types differ.
// Replace false with a strict inequality comparison between clearanceCode
// and the number 7.
const typeMismatchDetected = false;
if (clearanceCode === 7) {
  console.log(`typeMismatchDetected: ${typeMismatchDetected}`);
}

// --------------------------------------------------------------------------
// PART 5: PRINT THE BADGE
// --------------------------------------------------------------------------

// TODO 12: Create a 44-character border by repeating "=".
console.log("=".repeat(44));

// TODO 13: Use padStart() and padEnd() to decorate the title so it is exactly
// 44 characters wide. The finished title should include:
// GALACTIC ACCESS BADGE

let title = " GALACTIC ACCESS BADGE ";
title = title.padStart(34, "*").padEnd(44, "*");
console.log(title);

// TODO 14: Use an if/else statement to print the badge shown below.
// Use template literals and the variables you created--do not type the decoded
// values directly. The final status depends on accessGranted.
//
// ============================================
// *********** GALACTIC ACCESS BADGE **********
// AGENT: NOVA QUILL
// CODENAME: COSMIC RAVEN
// CALL SIGN: NQ-N
// CODE NAME LENGTH: 12
// CLEARANCE: 007
// TYPE CHECK PASSED: true
// STATUS: ACCESS GRANTED
// ============================================
//
// Hint: pad clearanceCode at the beginning with zeroes until it is 3
// characters long.

// --------------------------------------------------------------------------
// TEST TRANSMISSIONS (try these only after the original one works)
// --------------------------------------------------------------------------
// "   rex.stone | lunar-wolf | 7   "       -> invalid prefix
// "   ivy.frost | cosmic-owl | 4   "       -> invalid clearance
// "   max.power | dark-comet | 7   "        -> blocked and invalid prefix
