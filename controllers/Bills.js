const { Bills } = require("../models");
const model = require("../models");
const CryptoJS = require("crypto-js");

exports.getBills = async (req, res) => {
  try {
    await Bills.findAll({
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

exports.addBills = async (req, res) => {
  try {
  } catch (error) {}
};

exports.updateBills = async (req, res) => {
  try {
  } catch (error) {}
};
