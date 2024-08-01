const { Invoice } = require("../models");
const model = require("../models");
const CryptoJS = require("crypto-js");

exports.getInvoice = async (req, res) => {
  try {
    await Invoice.findAll({
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
    console.log(error);
    return res.status(500).json({
      message: "Server error",
    });
  }
};

exports.addInvoice = async (req, res) => {
  try {
    const { invoice } = req.body;
    await Invoice.create(invoice)
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

exports.updateInvoice = async (req, res) => {
  try {
    const { invoice } = req.body;
    await Invoice.update(invoice, {
      where: {
        id: invoice.id,
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
