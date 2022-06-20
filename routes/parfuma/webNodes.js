const express = require('express')
const router = express.Router()

// get product by url
router.get('/main/root', async function (req, res, next) {
  let result = {}
  if (Number(req.query.descendantLevel) === 3) {
    result = require('../../mock-data/parfuma/root_level3.json')
  }
  setTimeout(() => {
    res.json(result)
  }, 1000)
})

// get product connections by productId
router.get('/:id/connections', async function (req, res, next) {
  setTimeout(() => {
    res.json(require('../../mock-data/parfuma/product_connections.json'))
  }, 1000)
})

module.exports = router
