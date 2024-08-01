const { Company } = require("../models");
const model = require("../models");

exports.getCompany = async (req, res) => {
  try {
    await Company.findAll({
      where: {
        isDelete: false,
      },
      include: [
        {
          model: model.Owner,
          as: "owner_data",
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

exports.addCompany = async (req, res) => {
  try {
    const { company } = req.body;
    await Company.create(company)
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

exports.updateCompany = async (req, res) => {
  try {
    const { company } = req.body;
    await Company.update(company, {
      where: {
        id: company.id,
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
