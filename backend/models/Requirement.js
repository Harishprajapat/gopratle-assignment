const mongoose = require("mongoose");

const requirementSchema = new mongoose.Schema({
  eventName: String,
  eventType: String,
  date: String,
  location: String,
  venue: String,
  hiringFor: String,
  details: {
    type: Object, // dynamic fields (Planner/Performer/Crew)
  },
});

module.exports = mongoose.model("Requirement", requirementSchema)