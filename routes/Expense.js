const express = require("express")
const router = express.Router()
const controller = require('../controllers/Expense')

router.post('/get', controller.getExpense)
router.post('/post', controller.addExpense)
router.post('/update', controller.updateExpense)

module.exports = router