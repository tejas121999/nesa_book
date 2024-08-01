const { Users } = require("../models");
const model = require("../models");
const bcrypt = require("bcrypt");
const { createTokens } = require("../middleware/JWT");

exports.getUsers = async (req, res) => {
  try {
    await Users.findAll({
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

exports.addUsers = async (req, res) => {
  try {
    const { user } = req.body;
    const find_user = await Users.findOne({
      where: { user_email: user.user_email },
    });
    console.log(find_user);
    if (find_user) {
      return res.status(200).json({
        message: "User already exist",
      });
    } else {
      await bcrypt.hash(user.password, 10).then(async (hash) => {
        user.password = hash;
        await Users.create(user)
          .then((result) => {
            const accessToken = createTokens(result);
            return res.status(200).json({
              message: "Success",
              accessToken,
              result,
            });
          })
          .catch((err) => {
            res.status(400).json({ error: err });
          });
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateUsers = async (req, res) => {
  try {
    const { user } = req.body;
    await Users.update(user, {
      where: {
        id: user.id,
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
