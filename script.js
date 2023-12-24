/*
CHALLENGE:

Write a jasvscript function to determine the sign of a number: postive, negative and zero using if-else statement
*/

function determineSign(ourNum) {
  if (ourNum < 0) {
    return "This is a negative number.";
  } else if (ourNum > 0) {
    return "This is a postive Number.";
  } else {
    return "The number is zero.";
  }
}
console.log(determineSign(20)); //This is a postive Number.
