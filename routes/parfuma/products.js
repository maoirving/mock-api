const express = require('express')
const router = express.Router()

// get product by url
router.get('/url/:url', async function (req, res, next) {
  setTimeout(() => {
    res.json(require('../../mock-data/parfuma/product_url_1043504.json'))
  }, 1000)
})

// get product connections by productId
router.get('/:id/connections', async function (req, res, next) {
  setTimeout(() => {
    res.json(require('../../mock-data/parfuma/product_connections.json'))
  }, 1000)
})

module.exports = router
