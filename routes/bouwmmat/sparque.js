const express = require('express')
const router = express.Router()

// delivery options
router.get('/config', async function (req, res, next) {
  let result = {}
  if (req.query.format === 'json') {
    result = require('../../mock-data/bouwmaat/config_sparque.json')
  }
  res.json(result)
})

// pickup options
router.get('/search', async function (req, res, next) {
  let result = {}
  const { searchTerm, requestType } = req.query
  if (requestType === 'results') {
    if (searchTerm === 'MP75') {
      result = require('../../mock-data/bouwmaat/search_result_MP75_sparque.json')
    } else {
      result = require('../../mock-data/bouwmaat/product_list_sparque.json')
    }
  }

  res.json(result)
})

module.exports = router
