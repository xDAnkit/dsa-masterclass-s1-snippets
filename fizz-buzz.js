// T

// Big O Notation

// Space i, b, c, d, r - 5 variable - 5Var -> O(5Var) -> O(1)

// Time Iteration , i = 1 -> i = 100 -> 100n ->  O(n) -> n = 100

const printFizzBuzzV1 = () => {
  let b = 10;
  let c = 20;
  const d = 30;
  var r = 10;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzBuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

const printFizzBuzzV2 = () => {
  for (let i = 1; i <= 100; i++) {
    let result = i % 3 === 0 ? "Fizz" : "";

    if (i % 5 === 0) {
      result += "Buzz";
    }

    console.log(result);
  }
};
