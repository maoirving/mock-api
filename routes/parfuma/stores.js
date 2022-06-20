const express = require('express')
const router = express.Router()

// get stores
router.get('/', async function (req, res, next) {
  setTimeout(() => {
    res.json(require('../../mock-data/parfuma/stores.json'))
  }, 0)
})

module.exports = router
