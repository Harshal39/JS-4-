//Arrays
//An array is an ordered collection of elements, which can be of any type (numbers, strings, objects), indexed numerically, and allows efficient access, modification, and iteration.

const array = [1,2,3,4,5]; //Creating an array
console.log(array);

const emptyArray = new Array(); //To create an empty array
console.log(emptyArray);

const arrayLength = array.length; //Finding the length of an array
console.log(arrayLength);

const elementPosition = array[1]; //Finding element in array using index number
console.log(elementPosition);

const lastElement = array[array.length - 1] //Finding last element of array
console.log(lastElement);

const addElement = array.push(6); //Add element to the end of array
console.log(addElement); //Displays added element
console.log(array); //Displays new array with added element

const addingElement = array.unshift(0); //Add element in the beginning of array
console.log(addingElement);
console.log(array);

const removeElement = array.pop()//Removes element from the end of array
console.log(removeElement);//Displays the removed element
console.log(array);//Displays new formed array

const removedElement = array.shift()//Removes element from the beginning of array
console.log(removedElement);
console.log(array);

const findIndex = array.indexOf(2); //Finding index of the element of an array
console.log(findIndex);

const arrayIncludes = array.includes(2); //Checking whether element is present in an array or not
console.log(arrayIncludes); //It gives boolean value

array.forEach(element => { // Looping through array and executes a function for each array element.
   console.log(element * 2);// Here each element of an array will be traversed and then multiplied with 2 and new value will be displayed in console. 
})

let mapArray = array.map(element => element * 2); //Creates a new array with the results of calling a function on every element
console.log(mapArray); 

/*
forEach iterates over each element of an array and transforms it according to function definiton but it modifies the existing array and does not return new array.

map() iterates over each element of an array and transforms it according to function definiton and returns new array.
*/

let filteredArray = array.filter(element => element > 2); //Here array elements greater than 2 will be displayed in console.
console.log(filteredArray);

let sortedArray = array.sort();
console.log(sortedArray); //Sorting the array in ascending order

let reverseArray = array.reverse();
console.log(reverseArray); //Reverse the array elements

let newArray = array.concat([6,7]);
console.log(newArray); //It will concatenate or add 6,7 to previous array

let findArrayElement = array.find(element => element > 2);
console.log(findArrayElement); //It will return the first element of an array which satisfies the condition

let findArrayIndex = array.findIndex(element => element > 2);
console.log(findArrayIndex); //It will return index of first element of an array which satisfies the condition

let checkArray = Array.isArray(array); //To check whether the data in variable is data type or not
console.log(checkArray);//It returns boolean values that is true or false


/* For reduce() method
1.Define a function
2.Apply reduce function to an array with callback function we have defined.
*/
let sum = (previous,next) => {
   return previous + next;
}
let total = array.reduce(sum); //Reduces the elements of an array into single element.
console.log(total); //Here array elements will be converted into single element that is sum of all array elements.


/* For splice() method 
array.splice(indexNumber, number of elements to be removed, new elements to be added);
Slice method updates existing array and does not return new array.
*/
let splicedArray = array.splice(2,3,11,12);
console.log(splicedArray); //It will show the removed array
console.log(array); //It will remove 3 elements from index number 2 onwards and add new elements in array


/*
slice() method will give shallow copy of array which means it will return newly formed array and does not update existing array
array.slice(startIndex,endIndex - 1);
If end index is not mentioned array will be sliced from start index to last element of an array.
*/
let slicedArray = array.slice(1,3);
console.log(slicedArray); //Shallow copy is displayed
console.log(array); //Original Array is not changed

/*For some() method
Function named result is defined
Function is used as callback in array.some() method.
*/
let someArray = array.some(result); //Checks whether the particular element is present in array or not
function result(){
   return array > 4;
};
console.log(someArray); //Output will be in boolean form

//In map(), filter(), findArrayIndex(), findArrayElement() we can use callback function method as used in reduce(), some() etc.


/*
forEach():
Iterates over elements.
Does not return a new array or any value (returns undefined).
Used for performing side effects (e.g., logging, modifying external variables).

map():
Transforms each element in the array.
Returns a new array with the transformed elements.
Used when you need a new array based on the original array with modified values.

filter():
Filters elements based on a condition.
Returns a new array with elements that pass the test.
Used when you need to remove certain elements based on a condition.

When to Use Which:
Use **forEach()** when you need to perform an action on each element without needing to create a new array.
Use **map()** when you need to transform each element and create a new array with these transformed elements.
Use **filter()** when you need to select elements that meet a certain condition and create a new array with these elements.

*/