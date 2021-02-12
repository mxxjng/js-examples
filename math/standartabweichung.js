const zuerich = [
  420,
  375,
  450,
  510,
  547,
  457,
  450,
  555,
  345,
  495,
  510,
  502,
  405,
  367,
  450,
  435,
  532,
  367,
  480,
  375,
];

const munich = [
  235,
  285,
  280,
  285,
  290,
  230,
  290,
  220,
  280,
  315,
  250,
  215,
  270,
  320,
  275,
  310,
  245,
  280,
  250,
  330,
];

const MITTELWERT_ZUERICH = 451.35;
const MITTELWERT_MUNICH = 272.75;

const calculateStandartAbweichung = (data, mittelWert) => {
  let sum = data.reduce((acc, val) => acc + Math.pow(val - mittelWert, 2), 0);
  return Math.sqrt(sum / data.length - 1);
};

console.log(calculateStandartAbweichung(zuerich, MITTELWERT_ZUERICH));
console.log(calculateStandartAbweichung(munich, MITTELWERT_MUNICH));
