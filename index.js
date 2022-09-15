let express = require("express");

let app = express();
let port = 3000


app.get("/", (req, res) => {
    return res.send("hello world");
})


app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})