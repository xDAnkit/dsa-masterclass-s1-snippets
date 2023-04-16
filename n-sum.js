/**
 * @description {Method to sum n elements}
 *
 * Step 1   - Take all input as an array
 * Step 2   - Check if array is empty
 * Step 2.-1- Return please enter valid input
 * Step 3   - Iterate a loop & sum all the number
 * Step 4   - Save the result
 * Step 5   - Return the output
 */
function nSum() {
  if (arguments.length === 0) {
    return "Please enter a valid input";
  }

  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    result = result + arguments[i];
    //result += arguments[i];
  }

  return result;
}

/**
 * @description {Method to sum n elements}
 *
 * Step 1   - Take all input as an array
 * Step 2   - Check if array is empty
 * Step 2.-1- Return please enter valid input
 * Step 3   - Iterate a loop & sum all the number
 * Step 4   - Save the result
 * Step 5   - Return the output
 */
function nSumV2(...mereParameters) {
  if (mereParameters.length === 0) {
    return "Please enter a valid input";
  }

  let result = 0;

  for (let i = 0; i < mereParameters.length; i++) {
    result = result + mereParameters[i];
    //result += arguments[i];
  }

  return result;
}

/**
 * @description {Method to sum n elements}
 *
 * Step 1   - Take all input as an array
 * Step 2   - Check if array is empty
 * Step 2.-1- Return please enter valid input
 * Step 3   - Iterate a loop & sum all the number
 * Step 4   - Save the result
 * Step 5   - Return the output
 */
const nSumV3 = (...mereParameters) => {
  if (mereParameters.length === 0) {
    return "Please enter a valid input";
  }

  let result = 0;

  for (let i = 0; i < mereParameters.length; i++) {
    result = result + mereParameters[i];
    //result += arguments[i];
  }

  return result;
};

/**
 * @description {Method to sum n elements}
 *
 * Step 1   - Take all input as an array
 * Step 2   - Check if array is empty
 * Step 2.-1- Return please enter valid input
 * Step 3   - Iterate a loop & sum all the number
 * Step 4   - Save the result
 * Step 5   - Return the output
 */
const nSumV5 = (...mereParameters) => {
  if (mereParameters.length === 0) {
    return "Please enter a valid input";
  }

  const result = mereParameters.reduce((acc, current) => acc + current);
  return result;
};

console.log(nSum(1, 2));
console.log(nSum(1, 2, 3));
console.log(nSum(1, 2, 4));
console.log(nSum(1, 2, 6, 7, 8, 8));
console.log(nSum(1, 2, 6, 7, 8, 8, 3, 4, 5, 6));
