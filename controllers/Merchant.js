const { Merchant } = require("../models");
const model = require("../models");

exports.getMerchant = async (req, res) => {
  try {
    await Merchant.findAll({
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
      ],
    })
      .then((data) => {
        return res.status(200).json({
          message: "Success",
          data,
        });
      })
      .catch((err) => {
        console.log(err);
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

exports.addMerchant = async (req, res) => {
  try {
    const { merchant } = req.body;
    await Merchant.create(merchant)
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

exports.updateMerchant = async (req, res) => {
  try {
    const { merchant } = req.body;
    await Merchant.update(merchant, {
      where: {
        id: merchant.id,
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
