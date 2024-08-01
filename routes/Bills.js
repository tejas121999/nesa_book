const express = require("express")
const router = express.Router()
const controller = require('../controllers/Bills')

router.post('/get', controller.getBills)
router.post('/post', controller.addBills)
router.post('/update', controller.updateBills)

module.exports = router