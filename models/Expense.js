const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Expense extends Model {
    static associate(models) {
      Expense.belongsTo(models.Owner, {
        foreignKey: "owner_id",
        as: "owner_data",
      });

      Expense.belongsTo(models.Company, {
        foreignKey: "company_id",
        as: "company_data",
      });

      Expense.belongsTo(models.Merchant, {
        foreignKey: "merchant_id",
        as: "merchant_data",
      });
    }
  }

  Expense.init(
    {
      owner_id: {
        type: DataTypes.INTEGER,
        field: "owner_id",
      },
      company_id: {
        type: DataTypes.INTEGER,
        field: "company_id",
      },
      merchant_id: {
        type: DataTypes.INTEGER,
        field: "merchant_id",
      },
      payment_account: {
        type: DataTypes.STRING,
        field: "payment_account",
      },
      payment_date: {
        type: DataTypes.DATE,
        field: "payment_date",
      },
      payment_method: {
        type: DataTypes.STRING,
        field: "payment_method",
      },
      ref_no: {
        type: DataTypes.STRING,
        field: "ref_no",
      },
      location: {
        type: DataTypes.STRING,
        field: "location",
      },
      category_details: {
        type: DataTypes.JSON,
        field: "category_details",
      },
      memo: {
        type: DataTypes.STRING,
        field: "memo",
      },
      attachment: {
        type: DataTypes.STRING,
        field: "attachment",
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "expense",
      modelName: "Expense",
      timestamps: true,
    }
  );

  return Expense;
};
