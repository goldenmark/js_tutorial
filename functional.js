let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Retruns a URL-friendly version of a string.
// Example: "North Dakota" -> "north-dakota"

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

function example(string) {
  return "https://example.com/".concat(urlify(string));
}

// urls : Imperative version
function imperativeUrls(elements) {
  let urls = [];
  elements.forEach(function(element) {
    urls.push(urlify(element));
  });
  return urls;
}
//console.log(imperativeUrls(states));

// url : Functional version
function functionalURLs(elements) {
    return elements.map(element => urlify(element));
}
//console.log(functionalURLs(states));

function afunctionalUrls(elements) {
  return states.map(elements => elements.toLowerCase().split(/\s+/).join('-'));
}
console.log(afunctionalUrls(states));

function exampleURLs(elements) {
    return elements.map(element => example(element));
}
//console.log(exampleURLs(states));

function aexampleUrls(elements) {
  return states.map(elements => "https://example.com/".concat(urlify(elements)));
}
console.log(aexampleUrls(states));

//sum: Imperative solution

function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
//console.log(imperativeSum(numbers));

function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n });
}
console.log(functionalSum(numbers));

function functionalMult(elements) {
  return elements.reduce((total, n) => { return total *= n });
}
console.log(functionalMult(numbers));

function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
//console.log(imperativeLengths(states));

//lengths: Funtional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths;}, {});
  return states.map(elements => elements.length);
}
console.log(functionalLengths(states));

//states.forEach(function(element) { console.log(element, element.length) });
