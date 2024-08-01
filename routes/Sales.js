const express = require("express")
const router = express.Router()
const controller = require('../controllers/Sales')

router.post('/get', controller.getSales)
router.post('/post', controller.addSales)
router.post('/update', controller.updateSales)

module.exports = router