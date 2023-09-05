// Add number to end of array
const numbers = [1, 2, 4, 5];
const append = (arr, el) => {
  return [...arr, el];
};
const newNumbers = append(numbers, 3);
console.log(newNumbers);

// Write a fucntion which can concat 2 arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
  // return arr1.concat(...arr2)
};
const newArray = concatArrays(array1, array2);
console.log(newArray);
