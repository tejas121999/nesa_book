const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Merchant extends Model {
    static associate(models) {
      Merchant.belongsTo(models.Owner, {
        foreignKey: "owner_id",
        as: "owner_data",
      });

      Merchant.belongsTo(models.Company, {
        foreignKey: "company_id",
        as: "company_data",
      });

      Merchant.hasOne(models.Sales, {
        foreignKey: "merchant_id",
      });

      Merchant.hasOne(models.Invoice, {
        foreignKey: "merchant_id",
      });

      Merchant.hasOne(models.Payment, {
        foreignKey: "merchant_id",
      });

      Merchant.hasOne(models.Bills, {
        foreignKey: "merchant_id",
      });

      Merchant.hasOne(models.Expense, {
        foreignKey: "merchant_id",
      });
    }
  }

  Merchant.init(
    {
      owner_id: {
        type: DataTypes.INTEGER,
        field: "owner_id",
      },
      company_id: {
        type: DataTypes.INTEGER,
        field: "company_id",
      },
      title: {
        type: DataTypes.STRING,
        field: "title",
      },
      first_name: {
        type: DataTypes.STRING,
        field: "first_name",
      },
      middle_name: {
        type: DataTypes.STRING,
        field: "middle_name",
      },
      last_name: {
        type: DataTypes.STRING,
        field: "last_name",
      },
      suffix: {
        type: DataTypes.STRING,
        field: "suffix",
      },
      company_name: {
        type: DataTypes.STRING,
        field: "company_name",
      },
      company_email: {
        type: DataTypes.STRING,
        field: "company_email",
      },
      company_mobile_number: {
        type: DataTypes.STRING,
        field: "company_mobile_number",
      },
      website: {
        type: DataTypes.STRING,
        field: "website",
      },
      other: {
        type: DataTypes.STRING,
        field: "other",
      },
      merchant_address: {
        type: DataTypes.JSON,
        field: "merchant_address",
      },
      isAddress: {
        type: DataTypes.BOOLEAN,
        field: "isAddress",
        defaultValue: false,
      },
      shipping_address: {
        type: DataTypes.JSON,
        field: "shipping_address",
      },
      payment: {
        type: DataTypes.JSON,
        field: "payment",
      },
      taxes: {
        type: DataTypes.JSON,
        field: "taxes",
      },
      merchant_type: {
        type: DataTypes.BOOLEAN,
        field: "merchant_type",
        defaultValue: false,
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "merchant",
      modelName: "Merchant",
      timestamps: true,
    }
  );

  return Merchant;
};
