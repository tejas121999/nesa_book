const express = require("express")
const router = express.Router()
const controller = require('../controllers/AccountHeading')

router.post('/get', controller.getAccountHeading)
router.post('/post', controller.addAccountHeading)
router.post('/update', controller.updateAccountHeading)

module.exports = router