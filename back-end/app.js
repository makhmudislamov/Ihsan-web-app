const express = require('express')
const app = express()
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const campaigns = require("./controllers/campaigns");


// The following line must appear AFTER const app = express() and before your routes!
app.use(bodyParser.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))

// connecting to db
mongoose.connect("mongodb://localhost/ihsan-donations", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set("useFindAndModify", false);



app.listen(3000, () => {
    console.log("App listening on port 3000!");
});

campaigns(app);
module.exports = app;