const express = require('express')
const app = express()
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// OUR MOCK ARRAY OF PROJECTS
// let reviews = [
//   { title: "Great Review", movieTitle: "Batman II" },
//   { title: "Great Review", movieTitle: "Batman II" },
//   { title: "Great Review", movieTitle: "Batman II" },
//   { title: "Awesome Movie", movieTitle: "Titanic" }
// ]

// The following line must appear AFTER const app = express() and before your routes!
app.use(bodyParser.urlencoded({ extended: true }));

// data layer - model
const Review = mongoose.model("Review", {
    title: String,
    description: String,
    movieTitle: String
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// connecting to db
mongoose.connect("mongodb://localhost/rotten-potatoes", {
    useNewUrlParser: true,
    useUnifiedTopology: true
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

// NEW
app.get('/reviews/new', (req, res) => {
    res.render('reviews-new', {});
})

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})

// CREATE
app.post('/reviews', (req, res) => {
        Review.create(req.body).then((review) => {
        console.log(review);
        res.redirect('/');
    }).catch((err) => {
        console.log(err.message);
    })
})