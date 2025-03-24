const express = require('express');
const countryRoutes = require('./app/routes/countryRoutes');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();

app.use(express.json());
app.use('/countries', countryRoutes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = process.env.PORT || 5087;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));

module.exports = app;