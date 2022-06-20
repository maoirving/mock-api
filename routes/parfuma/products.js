const express = require('express')
const router = express.Router()

// get product by url
router.get('/url/:url', async function (req, res, next) {
  const url = req.params.url
  let result = {}
  console.log(url)
  switch (url) {
    case 'shaving-bar-alpine-glow-75g-0001043504':
      // product/detail/shaving-bar-alpine-glow-75g-0001043504
      result = require('../../mock-data/parfuma/product_url_1043504.json')
      break
    case 'tranquillity-douche-crème-200ml-0001019528':
      // product/detail/tranquillity-douche-crème-200ml-0001019528
      result = require('../../mock-data/parfuma/product_url_1019528.json')
      break
    default:
      result = {}
  }
  setTimeout(() => {
    res.json(result)
  }, 0)
})

// get product connections by productId
router.get('/:id/connections', async function (req, res, next) {
  setTimeout(() => {
    res.json(require('../../mock-data/parfuma/product_connections.json'))
  }, 0)
})

module.exports = router
