const express = require("express")
const router = express.Router()
const controller = require('../controllers/Subscription')

router.post('/get', controller.getAllSubscription)
router.post('/post', controller.addSubscription)
router.post('/update', controller.updateSubscription)

module.exports = router