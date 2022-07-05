const express = require('express')
const router = express.Router()

// get content
router.post('/', async function (req, res, next) {
  const { Url: url } = req.body
  let result = {}
  if (url === 'home') {
    result = require('../../mock-data/bouwmaat/vm_u_home.json')
  }
  res.json(result)
})

module.exports = router
