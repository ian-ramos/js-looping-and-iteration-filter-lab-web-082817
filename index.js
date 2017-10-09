// Code your solution in this file
function findMatching(array, name) {
  return array.filter(function (n) { return n.toLowerCase() === name.toLowerCase() });
}

function fuzzyMatch(array, letters) {
  return array.filter(function (n) { return n.startsWith(letters) });
}

function matchName(array, string) {
  return array.filter(function (n) { return n.name === string });
}
