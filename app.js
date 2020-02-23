const express = require('express')
const app = express()
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// OUR MOCK ARRAY OF PROJECTS
// let campaigns = [
//   { title: "Great campaign", movieTitle: "Batman II" },
//   { title: "Great campaign", movieTitle: "Batman II" },
//   { title: "Great campaign", movieTitle: "Batman II" },
//   { title: "Awesome Movie", movieTitle: "Titanic" }
// ]

// The following line must appear AFTER const app = express() and before your routes!
app.use(bodyParser.urlencoded({ extended: true }));

// data layer - model
const Campaign = mongoose.model("Campaign", {
    title: String,
    description: String,
    // TODO: change the following to Number
    amount: String
});

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// connecting to db
// TODO: change db name
mongoose.connect("mongodb://localhost/ihsan-donations", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});




// INDEX
app.get("/", (req, res) => {
    Campaign.find()
        .then(campaigns => {
            res.render("campaigns-index", { campaigns: campaigns });
            
        })
        .catch(err => {
            console.log(err);
        });
});

// NEW
app.get('/campaigns/new', (req, res) => {
    res.render('campaigns-new', {});
})

// CREATE
app.post('/campaigns', (req, res) => {
  Campaign.create(req.body).then((campaign) => {
    console.log(campaign)
    res.redirect(`/campaigns/${campaign._id}`) // Redirect to campaigns/:id
  }).catch((err) => {
    console.log(err.message)
  })
})

// SHOW
app.get('/campaigns/:id', (req, res) => {
    Campaign.findById(req.params.id).then((campaign) => {
        res.render('campaigns-show', { campaign: campaign })
    }).catch((err) => {
        console.log(err.message);
    })
})

app.listen(3000, () => {
    console.log("App listening on port 3000!");
});