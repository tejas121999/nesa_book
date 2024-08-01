const express = require("express")
const router = express.Router()
const controller = require('../controllers/Owner')

router.post('/get', controller.getOwner)
router.post('/post', controller.addOwner)
router.post('/update', controller.updateOwner)

module.exports = router