exports.setYears = function (offset, yearsToShow) {
  const TIME_BEHIND_IN_YEARS = yearsToShow;
  let maxAllowedYear = new Date().getFullYear() - offset;
  const howManyYearsBack = maxAllowedYear - TIME_BEHIND_IN_YEARS;

  let arrYears = [];
  while (maxAllowedYear >= howManyYearsBack) {
    arrYears.push(maxAllowedYear);
    maxAllowedYear--;
  }

  return arrYears;
};