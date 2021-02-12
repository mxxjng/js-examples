const calculateBinomialKoeffizient = (n, k) => {
  return calculatyFaculty(n) / (calculatyFaculty(k) * calculatyFaculty(n - k));
};

const calculatyFaculty = (faculty) => {
  let result = 1;
  if (faculty === 0 || faculty == 1) {
    return 1;
  }

  for (let i = 1; i <= faculty; i++) {
    result *= i;
  }

  return result;
};

console.log(calculatyFaculty(4));
console.log(calculateBinomialKoeffizient(7, 3));
console.log(calculateBinomialKoeffizient(49, 6));
