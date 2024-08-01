const express = require("express")
const router = express.Router()
const controller = require('../controllers/Invoice')

router.post('/get', controller.getInvoice)
router.post('/post', controller.addInvoice)
router.post('/update', controller.updateInvoice)

module.exports = router