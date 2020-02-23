// models/Campaign.js

const mongoose = require("mongoose");

const Campaign = mongoose.model("Campaign", {
    title: String,
    description: String,
    movieTitle: String
});

module.exports = Campaign;
