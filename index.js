const YAML= require  ('yamljs');
const swaggerUi = require ('swagger-ui-express');
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  res.send('hello World');
});
const swaggerDocument = YAML.load('swagger.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Create a new user
app.post('/users', async (req, res) => {
  
});



app.listen(3000, () => {
    console.log(`Rimmomg`)
 } )