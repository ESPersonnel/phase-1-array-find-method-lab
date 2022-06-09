// code your solution here
// Write a function called superbowlWin() in index.js:

// The function should receive 1 argument, an Array of JavaScript Objects
// Each object has two properties: year and result
// It should use find() to test each Object to see if the result is "W" — a win!
// It should return the year when the win occurred (if it occurred at all!)
// If no win is found, it should return undefined

// function superbowlWin(arr) {
//   return arr.find(obj => obj.result === "W").year;
// }

// repeat the function and return undefined if no win is found

function superbowlWin(arr) {
  return arr.find(obj => obj.result === "W") ? arr.find(obj => obj.result === "W").year : undefined;
}