const express = require("express")
const router = express.Router()
const controller = require('../controllers/Users')

router.post('/get', controller.getUsers)
router.post('/post', controller.addUsers)
router.post('/update', controller.updateUsers)

module.exports = router