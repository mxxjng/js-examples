const data = require('../../mockData');

/**
 * a function that groups objects by category
 * @param {array} arr Array with objects
 * @param {string} category category to group by
 */
const groupBy = (arr, category) => {
  return arr.reduce((acc, obj) => {
    let key = obj[category];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};

console.log(groupBy(data, 'gender'));

/* Output:
{
  male: [
    { name: 'Max', age: 23, gender: 'male' },
    { name: 'Moritz', age: 14, gender: 'male' },
    { name: 'Tim', age: 19, gender: 'male' }
  ],
  female: [ { name: 'Nina', age: 19, gender: 'female' } ]
}
*/
