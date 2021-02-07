const MAX_AGE = 18;
let daysSinceLastVisit = 10;
let currentYear = new Date().getFullYear();
let user = {
  name: 'Max',
  age: 23,
};

const isUserAnAdult = user.age > MAX_AGE;
