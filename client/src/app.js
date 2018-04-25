const Request = require('./services/request.js');
const CountriesData = require('./models/countries_data.js');
const CountriesView = require('./views/countries_view.js');

const request = new Request('http://localhost:3000/db/countries');

document.addEventListener('DOMContentLoaded', () => {

  const countrySelect = document.querySelector('#country-select');

  const countriesData = new CountriesData();
  const countriesView = new CountriesView(countrySelect);

  countriesView.countrySelect.addEventListener('change', () => {
    // get index of selected country
    // get the country
    request.post(onPostComplete, country); // this function needs writing

  });

  countriesData.getData((data) => {
    // console.dir(data);

    countriesView.renderCountriesSelect(data);

  });

});
