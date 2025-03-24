const { fetchAllCountries, fetchCountryByName } = require('../app/services/countryService');
test('fetchAllCountries returns countries', async () => {
  const countries = await fetchAllCountries();
  expect(Array.isArray(countries)).toBe(true);
});

test('fetchCountryByName returns country details', async () => {
  const country = await fetchCountryByName('France');
  expect(country.name).toBe('France');
});