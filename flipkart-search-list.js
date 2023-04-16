const searchList = [];
const limit = 5;

const add = (search) => {
  search = search.toLowerCase(); // Iteration -> O(N)

  const hasElement = find(search); // Iteration -> O(N)

  if (hasElement) {
    remove(hasElement); //O(N-index)
  }

  if (searchList.length === 5) {
    searchList.pop(); //O(1)
  }

  searchList.unshift(search); //O(N)
};

const remove = (index) => {
  searchList.splice(index, 1); // [1,2,3,4,5,6] O(N-index)
  return;
};

const find = (search) => {
  const index = searchList.findIndex((item) => search === item);
  if (index === -1) {
    return false;
  }

  return index;
};

add("apple");
add("samsung");
add("apple"); // apple, samsung
add("google");
add("Apple");
add("lg");
add("philips");
add("koreo");
add("patanjali");
add("Apple");
add("koreo");

console.log(searchList);
