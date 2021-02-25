/**
 * Performs the specified action for each element in an array.
 * @param callbackfn  A function that calls the callbackfn function one time for each element in the array.
 */
Array.prototype.myEach = function(callbackfn) {
    for(let i = 0; i < this.length; ++i) {
        callbackfn(this[i], i, this);
    }
}
/**
 * Performs the specified action for each element in an array.
 * @param callbackfn  A function that calls the callbackfn function one time for each element in the array.
 * @return {Array} returnArray with each element being the result of the callback function.
 */
Array.prototype.myMap = function(callbackfn) {
    let returnArray = new Array(this.length);

    for(let i = 0; i < this.length; ++i) {
        returnArray[i] = callbackfn(this[i], i, this);  
    }

    return returnArray;
}
/**
 * Calls a callback function on each element of an array, and returns an array that contains the results.
 * @param callbackfn A function that calls the callbackfn function one time for each element in the array.
 * @return {Array} returnArray of elements that passed the filter or empty if none.
 */
Array.prototype.myFilter = function(callbackfn) {
    let returnArray = [];

    for(let i = 0; i < this.length; ++i) {
        if (callbackfn(this[i], i, this)) {
            returnArray.push(this[i]);
        }  
    }

    return returnArray;
}

/*
some() (aka any())
Without using the native “Array.prototype.some” method of JavaScript, 
compose a function titled “mySome” that will take in an array of elements 
and execute a callback function on each of those elements.
*/
Array.prototype.mySome =  function(callbackfn) {
    for (let i = 0; i < this.length; i++) {
        if (callbackfn(this[i], i, this)) {
            return true;
        }
    }
    return false;
}

/*
every()
Without using the native “Array.prototype.every” method of JavaScript, 
compose a function titled “myEvery” that will take in an array of elements 
and execute a callback function on each of those elements.
*/
Array.prototype.myEvery =  function(callbackfn) {
    for (let i = 0; i < this.length; i++) {
        if (!callbackfn(this[i], i, this)) {
            return false;
        }
    }
    return true;
}

/*
reduce()
Without using the native “Array.prototype.reduce” method of JavaScript, 
compose a function titled “myReduce” that will take in an array of elements 
and execute a callback function on each of those elements.
*/
Array.prototype.myReduce =  function(callbackfn) {
    let retVal = callbackfn(this[0], this[1]);
    for (let i = 2; i < this.length; i++) {
        retVal = callbackfn(retVal, this[i])
    }
    return retVal;
}

/*
f10
Without using the native “Array.prototype.lastIndexOf” method of JavaScript, 
compose a function titled “myLastIndexOf” that will take in an array of elements 
and returns the index of the last encounter of a target element (if it is found) 
or -1 if that element does not exist within the input array.
*/
Array.prototype.myLastIndexOf = function(_element, index = 1){
    for(let i = this.length - index; i >= 0; i--){
        if(this[i] === _element){
            return i;
        }
    }
    return -1;
}
/*
f11
Without using the native “Object.keys()” method of JavaScript, 
compose a function titled “grabKeys” that will take in an object 
and return all of the keys of the key:value pairs of that object.
*/
const grabKeys = function(_obj){
    const array = [];
      for(const _key in _obj){
        array.push(`${_key}`);
    }
  return array;
  //console.log(array);
}
/*
f12
Without using the native “Object.values()” method of JavaScript, 
compose a function titled “grabValues” that will take in an object 
and return all of the values of the key:value pairs of that object.
*/
const grabValues = function(_obj){
    const array = [];
    for(const _key in _obj){
        array.push('${_obj[_key]}');
   }
   return array;
}
   

/**
 * Main function to run tests in
 */
function main() { 
    let arr = [1, 2, 3, 4];

    // test for myEach
    console.log(arr.forEach(x => console.log(x)));
    console.log(arr.myEach(x => console.log(x)));

    // test for myMap()
    console.log(arr.map(x => x * 2));
    console.log(arr.myMap(x => x * 2));

    // test for myFilter()
    console.log(arr.filter(x => x > 2));
    console.log(arr.myFilter(x => x > 2));

    // test for mySome()
    console.log(arr.some(x => x % 2 == 0))
    console.log(arr.mySome(x => x % 2 == 0))

    // test for myEvery()
    console.log(arr.some(x => x % 2 == 0))
    console.log(arr.mySome(x => x % 2 == 0))

    // test for myReduce()
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(arr.reduce(reducer))
    console.log(arr.myReduce(reducer))


    let arr = [1, 2, 4, 4];

    //test for lastIndexOf()
    console.log(arr.lastIndexOf(4));
    console.log(arr.myLastIndexOf(4));

    const details = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        age: 25,
        dob: '08/02/1989',
        active: true
    };

    //test for Object.keys()
    console.log(Object.keys(details));
    console.log(grabKeys(details));

    //test for Object.values()
    console.log(Object.values(details));
    console.log(grabValues(details));
};

main();