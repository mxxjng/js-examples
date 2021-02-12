let data = [1, 2, 3, 3, 4, 4, 5, 6, 6, 6];

const calculateArithmeticMiddle = (inputData) => {
  let anzahl = inputData.reduce((acc, val) => acc + val, 0);
  return anzahl / inputData.length;
};

console.log(calculateArithmeticMiddle(data));
