const express = require("express")
const router = express.Router()
const controller = require('../controllers/Payment')

router.post('/get', controller.getPayment)
router.post('/post', controller.addPayment)
router.post('/update', controller.updatePayment)

module.exports = router