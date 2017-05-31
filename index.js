exports.setYears = function (selector, offset, yearsToShow) {
  const el = document.querySelector(selector);
  const TIME_BEHIND_IN_YEARS = yearsToShow;
  let maxAllowedYear = new Date().getFullYear() - offset;
  const howManyYearsBack = maxAllowedYear - TIME_BEHIND_IN_YEARS;

  while (maxAllowedYear >= howManyYearsBack) {
    let option = document.createElement('option');
    option.value = `${maxAllowedYear}`;

    if (typeof option.innerText === 'undefined') {
      option.textContent = `${maxAllowedYear}`;
    } else {
      option.innerText = `${maxAllowedYear}`;
    }

    el.appendChild(option);
    maxAllowedYear--;
  }
};