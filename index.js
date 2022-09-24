let express = require("express");
let homeRoute = require("./routes/index");
let contactRoutes = require("./routes/contacts");
let models = require("./models/index");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

let app = express();
let port = 3000;

app.use(express.json());
app.use("/", homeRoute);
app.use("/contacts", contactRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



app.listen(port, () => {
    console.log(`Example application listening to port ${port}`);

    //connect to the database
    models.connect()
})