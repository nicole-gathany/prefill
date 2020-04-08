// Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.

// You have to validate input:

// v can be anything (primitive or otherwise)
// if v is ommited, fill the array with undefined
// if n is 0, return an empty array
// if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
// When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.
function prefill(n, v) {
  let nIsInteger = parseInt(n, 10);
  let result = [];
  if (!isNaN(nIsInteger) && nIsInteger > 0 && n % 1 === 0) {
    for (let i = 0; i < n; i++) {
      result.push(v);
    }
    return result;
  } else if (nIsInteger === 0) {
    return [];
  } else if (isNaN(nIsInteger) || nIsInteger < 0 || n % 1 !== 0) {
    throw new TypeError(`${n} is invalid`);
  }
}

console.log(prefill(3, 1)); //--> [1,1,1]
console.log(prefill(3.333, 1));
prefill(2, "abc"); //--> ['abc','abc']

prefill("1", 1); //--> [1]

prefill(3, prefill(2, "2d"));
//--> [['2d','2d'],['2d','2d'],['2d','2d']]
console.log(prefill(-9, "something"));
// console.log(prefill("xyz", 1));
//--> throws TypeError with message "xyz is invalid"
console.log(prefill(NaN, 2));
