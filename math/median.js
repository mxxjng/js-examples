const data = [2, 2, 3, 4, 6, 5, 5, 6, 4, 7];
const data1 = [2, 4, 3, 4, 2, 5, 5, 6, 6];

const calculateMedian = (inputData) => {
  let sortedArr = inputData.sort((a, b) => a - b);
  let isEqual = sortedArr.length % 2 === 0;

  if (isEqual) {
    return (
      (sortedArr[sortedArr.length / 2 - 1] + sortedArr[sortedArr.length / 2]) /
      2
    );
  } else {
    return sortedArr[(sortedArr.length + 1) / 2 - 1];
  }
};
console.log(calculateMedian(data));
console.log(calculateMedian(data1));
