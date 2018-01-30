var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  const newArray = [element, ...array];
  return newArray
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array
}


function addElementToEndOfArray(array, element) {
  const newArray = [...array, element];
  return newArray
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element);
}

function accessElementInArray(array, index) {
  return array[index];

}
accessElementInArray();

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}
