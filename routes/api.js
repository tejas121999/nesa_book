const express = require("express");
const router = express.Router();
const AccountHeaders = require("./AccountHeading");
const Bills = require("./Bills");
const Company = require("./Company");
const Expense = require("./Expense");
const Invoice = require("./Invoice");
const Merchant = require("./Merchant");
const Owner = require("./Owner");
const Payment = require("./Payment");
const Sales = require("./Sales");
const Subscription = require("./Subscription");
const Users = require("./Users");

router.use("/accountHeaders", AccountHeaders);
router.use("/bills", Bills);
router.use("/company", Company);
router.use("/expense", Expense);
router.use("/invoice", Invoice);
router.use("/merchant", Merchant);
router.use("/owner", Owner);
router.use("/payment", Payment);
router.use("/sales", Sales);
router.use("/subscription", Subscription);
router.use("/user", Users);

module.exports = router;
