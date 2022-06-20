const express = require('express')
const router = express.Router()

// get stores
router.get('/json', async function (req, res, next) {
  setTimeout(() => {
    res.json(require('../../mock-data/common/google_geocode_1432AT.json'))
  }, 0)
})

module.exports = router
