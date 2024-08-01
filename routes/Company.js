const express = require("express")
const router = express.Router()
const controller = require('../controllers/Company')

router.post('/get', controller.getCompany)
router.post('/post', controller.addCompany)
router.post('/update', controller.updateCompany)

module.exports = router