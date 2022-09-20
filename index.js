let express = require("express");
let routes = require("./routes");
let contactRoutes = require("./routes/contacts");
let models = require("./models/index");

let app = express();
let port = 3000;

app.use(express.json());
app.use(routes);
app.use("/contacts", contactRoutes);



app.listen(port, () => {
    console.log(`Example app listening to port ${port}`);

    //connect to the database
    models.connect()
})