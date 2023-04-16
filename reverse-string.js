/**
 * @description {Method to reverse the string}
 * @param {String} input
 * Step 1   - Check if the input is not a valid string
 * Step 1.1 - If true, return the error message
 *
 */
const revStrV1 = (input) => {
  let result = "";
  for (let i = 0; i < input.length; i++) {
    result = input[i] + result;
  }

  return result;
};
