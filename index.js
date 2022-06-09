// code your solution here

function superbowlWin(arr) {
  return arr.find(obj => obj.result === "W") ? arr.find(obj => obj.result === "W").year : undefined;
}