const findLargestAndSmallest = (arr) => {
  const minMax = [arr[0], arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (minMax[0] > arr[i]) minMax[0] = arr[i];
      if (minMax[1] < arr[i]) minMax[1] = arr[i];
    }
  }

  return minMax;
};

console.log(findLargestAndSmallest([1, 5, 40, 120, -1, -100, 100]));
console.log(findLargestAndSmallest([50, 15, 98, 459, 987, 15, 98, 1, 9, 564]));

// Done
