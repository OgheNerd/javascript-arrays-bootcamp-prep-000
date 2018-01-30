var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const newArray = [element, ...array];
  newArray
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
}


function addElementToEndOfArray(array, element) {
  const newArray = [...array, element];
  newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
}

function accessElementInArray(array, 3) {
  array[3];
}
