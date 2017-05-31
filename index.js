module.exports = function (offset, yearsToShow) {

  if (offset === undefined ||
    yearsToShow === undefined ||
    typeof offset !== 'number' ||
    typeof yearsToShow !== 'number') {
    return new Error('Invalid input data.');
  }

  const TIME_BEHIND_IN_YEARS = yearsToShow;
  let maxAllowedYear = new Date().getFullYear() - offset;
  const howManyYearsBack = maxAllowedYear - TIME_BEHIND_IN_YEARS;

  let arrYears = [];
  while (maxAllowedYear >= howManyYearsBack) {
    arrYears.push(maxAllowedYear);
    --maxAllowedYear;
  }

  return arrYears;
};