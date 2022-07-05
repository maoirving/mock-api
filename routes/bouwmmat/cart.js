const express = require('express')
const router = express.Router()

// delivery options
router.get('/delivery/options', async function (req, res, next) {
  setTimeout(() => {
    res.json(require('../../mock-data/bouwmaat/delivery_options.json'))
  }, 1000)
})

// pickup options
router.get('/pickup/options', async function (req, res, next) {
  setTimeout(() => {
    res.json(require('../../mock-data/bouwmaat/pickup_options.json'))
  }, 1000)
})

// check valid
router.get('/validate', async function (req, res, next) {
  setTimeout(() => {
    res.json(require('../../mock-data/bouwmaat/cart_validation.json'))
  }, 3000)
})

module.exports = router
