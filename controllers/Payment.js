const { Payment } = require("../models");
const model = require("../models");
const CryptoJS = require("crypto-js");

exports.getPayment = async (req, res) => {
  try {
    await Payment.findAll({
      where: {
        isDelete: false,
      },
      include: [
        {
          model: model.Owner,
          as: "owner_data",
          subQuery: false,
        },
        {
          model: model.Company,
          as: "company_data",
          subQuery: false,
        },
        {
          model: model.Merchant,
          as: "merchant_data",
          subQuery: false,
        },
      ],
    })
      .then((result) => {
        let data = CryptoJS.AES.encrypt(
          JSON.stringify({ result }),
          "12345678"
        ).toString();
        return res.status(200).json({
          message: "Success",
          data,
        });
      })
      .catch((err) => {
        console.log("err", err);
        return res.status(400).json({
          message: "Data not found",
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

exports.addPayment = async (req, res) => {
  try {
    const { payment } = req.body;
    await Payment.create(payment)
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

exports.updatePayment = async (req, res) => {
  try {
    const { payment } = req.body;
    await Payment.update(payment, {
      where: {
        id: payment.id,
      },
    })
      .then((result) => {
        return res.status(200).json({
          message: "Success",
          result,
        });
      })
      .catch((err) => {
        res.status(400).json({ error: err });
      });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
