const express = require('express')
const app = express()
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

// OUR MOCK ARRAY OF PROJECTS
// let reviews = [
//   { title: "Great Review", movieTitle: "Batman II" },
//   { title: "Great Review", movieTitle: "Batman II" },
//   { title: "Great Review", movieTitle: "Batman II" },
//   { title: "Awesome Movie", movieTitle: "Titanic" }
// ]

// data layer - model
const Review = mongoose.model("Review", {
    title: String,
    movieTitle: String
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// connecting to db
mongoose.connect("mongodb://localhost/rotten-potatoes", {
    useNewUrlParser: true
});




// INDEX
app.get("/", (req, res) => {
    Review.find()
        .then(reviews => {
            res.render("reviews-index", { reviews: reviews });
        })
        .catch(err => {
            console.log(err);
        });
});

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})