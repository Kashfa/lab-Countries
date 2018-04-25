
const CountriesData = require('./models/countries_data.js');
const CountriesView = require('./views/countries_view.js');

document.addEventListener('DOMContentLoaded', () => {

  const countrySelect = document.querySelector('#country-select');

  const countriesData = new CountriesData();
  const countriesView = new CountriesView(countrySelect);

  countriesData.getData((data) => {
    // console.dir(data);

    countriesView.renderCountriesSelect(data);

  });

});
