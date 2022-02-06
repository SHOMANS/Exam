const loop = (arr, depth) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      depth += loop(arr[i], depth);
    }
  }
  return depth;
};

const arrayDepth = (array) => {
  return Array.isArray(array) ? loop(array, 1) : "not Array";
};

console.log(arrayDepth([1, [1, [1]]]));
console.log(arrayDepth([1, [1, [1, [1]]]]));
console.log(arrayDepth([1, 2, [1, 2, [1, [0]]]])); // Done
