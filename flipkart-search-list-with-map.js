const searchList = new Map();
const limit = 5;

const add = (search) => {
  search = search.toLowerCase();
  const hasElement = find(search); // O(1)
  if (hasElement) {
    remove(search); // O(1)
  }

  if (searchList.size === 5) {
    const deleteKey = searchList.keys().next().value;
    console.log({ deleteKey });
    remove(deleteKey); // O(1)
  }

  searchList.set(search, search);
};

const remove = (key) => searchList.delete(key);
const find = (search) => searchList.has(search);

add("apple");
add("samsung");
add("apple");
add("apple1");
add("apple2");
add("apple3");
add("apple");
add("apple3");
add("apple2");

console.log(searchList.keys());
