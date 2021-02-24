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



};

main();