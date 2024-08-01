const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.Owner, {
        foreignKey: "owner_id",
        as: "owner_data",
      });

      Payment.belongsTo(models.Company, {
        foreignKey: "company_id",
        as: "company_data",
      });

      Payment.belongsTo(models.Merchant, {
        foreignKey: "merchant_id",
        as: "merchant_data",
      });

      Payment.belongsTo(models.Invoice, {
        foreignKey: "invoice_id",
        as: "invoice_data",
      });
    }
  }

  Payment.init(
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
      invoice_id: {
        type: DataTypes.INTEGER,
        field: "invoice_id",
      },
      payment_date: {
        type: DataTypes.DATE,
        field: "payment_date",
      },
      customer_email: {
        type: DataTypes.STRING,
        field: "customer_email",
      },
      payment_method: {
        type: DataTypes.STRING,
        field: "payment_method",
      },
      ref_no: {
        type: DataTypes.STRING,
        field: "ref_no",
      },
      dep_no: {
        type: DataTypes.STRING,
        field: "dep_no",
      },
      attachments: {
        type: DataTypes.STRING,
        field: "attachments",
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "payment",
      modelName: "Payment",
      timestamps: true,
    }
  );

  return Payment;
};
