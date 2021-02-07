const data = require('../mockData');

/**
 * a function that groups objects by category
 * @param {array} arr Array with objects
 * @param {*} category category to group by
 */
const groupBy = (arr, category) => {
  return arr.reduce((acc, obj) => {
    let key = obj[category];
    console.log(key);
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};

console.log(groupBy(data, 'gender'));
