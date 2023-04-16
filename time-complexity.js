let count = 0;

for (i = 0; i < 100; i++) {
  // O(n) -> n -> 100
  count++;
}

for (let i = 0; i < 100; i++) {
  // O(n) -> 100
  count++;
}
console.log(count);

// Ignore the constant

// Fragment 1 + Fragment 2
// O(n) + O(n) - n(1 + 1) -> n(2)
// O(n)

let count2 = 0;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    count2++;
  }
}

console.log(count2);
// i = 0 -> 0 < j < 100 -> J will loop 100 times
// i = 1 -> 0 j 100 -> J will loop 100 times
