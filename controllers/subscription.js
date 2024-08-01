const { Subscription } = require("../models");
const model = require("../models");
const CryptoJS = require("crypto-js");

exports.getAllSubscription = async (req, res) => {
  try {
    await Subscription.findAll({
      where: {
        isDelete: false,
      },
    })
      .then((resp) => {
        let data = CryptoJS.AES.encrypt(
          JSON.stringify({ resp }),
          "12345678"
        ).toString();
        return res.status(200).json({
          message: "Success",
          data,
        });
      })
      .catch((err) => {
        return res.status(400).json({
          message: "Data not found",
          data,
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

exports.addSubscription = async (req, res) => {
  try {
    const { subscription } = req.body;
    await Subscription.create(subscription)
      .then((result) => {
        return res.status(200).json({
          message: "Success",
        });
      })
      .catch((err) => {
        res.status(400).json({ error: err });
      });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateSubscription = async (req, res) => {
  try {
    const { subscription } = req.body;
    await Subscription.update(subscription, {
      where: {
        id: subscription.id,
      },
    })
      .then((result) => {
        return res.status(200).json({
          message: "Success",
          result,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ error: err });
      });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
