let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

//singles: Imperative version
function imperativeSingles(elements) {
  let singles = [];
  elements.forEach(function(element) {
    if (element.split(/\s+/).length === 1) {
      singles.push(element);
    }
  });
  return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
  return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

function functionalPairs(elements) {
  return elements.filter(element => element.split(/\s+/).length === 2);
}
console.log(functionalPairs(states));

function functionalDakota(elements) {
  return elements.filter(element => element.split(/\s+/).includes("Dakota") === true);
}
console.log(functionalDakota(states));
