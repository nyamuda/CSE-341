let express = require("express");
let routes = require("./routes");


let app = express();
let port = 3000

app.use(routes);


app.listen(port, () => {
    console.log(`Example app listening to port ${port}`);
})