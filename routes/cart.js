var express = require("express");
var router = express.Router();

// delivery options
router.get("/delivery/options", async function (req, res, next) {
  setTimeout(() => {
    res.json(require('../mock-data/bouwmaat/delivery_options.json'));
  }, 1000);
});

// pickup options
router.get("/pickup/options", async function (req, res, next) {
  setTimeout(() => {
    res.json(require('../mock-data/bouwmaat/pickup_options.json'));
  }, 1000);
});

module.exports = router;
