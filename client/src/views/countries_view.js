const CountriesView = function (countriesSelect) {
  this.countriesSelect = countriesSelect;

}
CountriesView.prototype.renderCountriesSelect = function (countriesData) {
countriesData.forEach((country, index) => {
  const option = document.createElement('option');
  option.textContent = country.name;
  this.countriesSelect.appendChild(option);
});
}

module.exports = CountriesView;
