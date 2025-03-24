const express = require('express');
const countryRoutes = require('./app/routes/countryRoutes');
const app = express();

app.use(express.json());
app.use('/countries', countryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

module.exports = app;