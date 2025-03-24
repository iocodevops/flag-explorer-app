const axios = require('axios');

exports.fetchAllCountries = async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all');
  return response.data.map(country => ({
    name: country.name.common,
    flag: country.flags.svg
  }));
};

exports.fetchCountryByName = async (name) => {
  const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
  const country = response.data[0];
  return {
    name: country.name.common,
    population: country.population,
    capital: country.capital?.[0] || 'N/A',
    flag: country.flags.svg
  };
};
