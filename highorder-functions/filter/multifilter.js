const data = require('../../mockData');

const params = {
  name: 'Moritz',
  gender: 'male',
};

/**
 * is filtering an array by multiple params
 * @param {array} filterData
 * @param {object} filterQuery
 */
const multiFilter = (filterData, filterQuery) => {
  return filterData.filter((filter) => {
    for (let key in filterQuery) {
      if (filter[key] === undefined || filter[key] !== filterQuery[key])
        return false;
    }
    return true;
  });
};

console.log(multiFilter(data, params));
