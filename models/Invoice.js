const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    static associate(models) {
      Invoice.belongsTo(models.Owner, {
        foreignKey: "owner_id",
        as: "owner_data",
      });

      Invoice.belongsTo(models.Company, {
        foreignKey: "company_id",
        as: "company_data",
      });

      Invoice.belongsTo(models.Merchant, {
        foreignKey: "merchant_id",
        as: "merchant_data",
      });

      Invoice.hasOne(models.Payment, {
        foreignKey: "invoice_id",
      });
    }
  }

  Invoice.init(
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
      customer_email: {
        type: DataTypes.STRING,
        field: "customer_email",
      },
      service: {
        type: DataTypes.JSON,
        field: "service",
      },
      billing_address: {
        type: DataTypes.STRING,
        field: "billing_address",
      },
      terms: {
        type: DataTypes.STRING,
        field: "terms",
      },
      invoice_date: {
        type: DataTypes.DATE,
        field: "invoice_date",
      },
      due_date: {
        type: DataTypes.DATE,
        field: "due_date",
      },
      our_reference: {
        type: DataTypes.STRING,
        field: "our_reference",
      },
      invoice_no: {
        type: DataTypes.STRING,
        field: "invoice_no",
      },
      location: {
        type: DataTypes.STRING,
        field: "location",
      },
      message_on_invoice: {
        type: DataTypes.STRING,
        field: "message_on_invoice",
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "invoice",
      modelName: "Invoice",
      timestamps: true,
    }
  );

  return Invoice;
};
