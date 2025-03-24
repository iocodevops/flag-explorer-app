const countryService = require('../services/countryService');

exports.getAllCountries = async (req, res) => {
  try {
    const countries = await countryService.fetchAllCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch countries' });
  }
};

exports.getCountryByName = async (req, res) => {
  try {
    const country = await countryService.fetchCountryByName(req.params.name);
    res.json(country);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch country' });
  }
};