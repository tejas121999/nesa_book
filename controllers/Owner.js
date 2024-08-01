const { Owner } = require("../models");
const model = require("../models");
const CryptoJS = require("crypto-js");

exports.getOwner = async (req, res) => {
  try {
    await Owner.findAll({
      where: {
        isDelete: false,
      },
      include: [
        {
          model: model.Subscription,
          as: "subscription_data",
          subQuery: false,
        },
      ],
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

exports.addOwner = async (req, res) => {
  try {
    const { owner } = req.body;
    await Owner.create(owner)
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

exports.updateOwner = async (req, res) => {
  try {
    const { owner } = req.body;
    await Owner.update(owner, {
      where: {
        id: owner.id,
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
