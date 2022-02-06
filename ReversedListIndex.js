const getItemsAt = (arr, par) => {
  // for (let i = arr.length - 1; i >= 0; i -= 2) {
  //   newArr.unshift(arr[i]);
  // }

  const recursion = (newArr, index) => {
    if (index > 1) recursion(index - 2);
    if (newArr.length > 0) {
      return [...newArr, arr[index]];
    } else {
      return [arr[index]];
    }
  };

  if (par === "odd") {
    return recursion([], arr.length - 1);
  } else {
    return recursion([], arr.length - 2);
  }
};

console.log("Last Array", getItemsAt([1, 2, 3, 4, 5, 6], "odd"));
console.log("Last Array", getItemsAt([1, 2, 3, 4, 5, 6], "even"));

// Not Done yet
