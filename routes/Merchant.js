const express = require("express")
const router = express.Router()
const controller = require('../controllers/Merchant')

router.post('/get', controller.getMerchant)
router.post('/post', controller.addMerchant)
router.post('/update', controller.updateMerchant)

module.exports = router