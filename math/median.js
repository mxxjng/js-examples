const data = [2, 2, 3, 4, 6, 5, 5, 6, 4, 7];
const data1 = [2, 4, 3, 4, 2, 5, 5, 6, 6];

const calculateMedian = (inputData) => {
  let sortedArr = inputData.sort((a, b) => a - b);
  let isEqual = sortedArr.length % 2 === 0;

  if (isEqual) {
    let stelle1 = sortedArr.length / 2 - 1;
    let stelle2 = sortedArr.length / 2;
    return (sortedArr[stelle1] + sortedArr[stelle2]) / 2;
  } else {
    let stelle = (sortedArr.length + 1) / 2;
    return sortedArr[stelle - 1];
  }
};
console.log(calculateMedian(data));
console.log(calculateMedian(data1));
