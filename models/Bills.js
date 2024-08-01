const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Bills extends Model {
    static associate(models) {
      Bills.belongsTo(models.Owner, {
        foreignKey: "owner_id",
        as: "owner_data",
      });

      Bills.belongsTo(models.Company, {
        foreignKey: "company_id",
        as: "company_data",
      });

      Bills.belongsTo(models.Merchant, {
        foreignKey: "merchant_id",
        as: "merchant_data",
      });
    }
  }

  Bills.init(
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
      billing_address: {
        type: DataTypes.STRING,
        field: "billing_address",
      },
      terms: {
        type: DataTypes.STRING,
        field: "terms",
      },
      billing_date: {
        type: DataTypes.DATE,
        field: "billing_date",
      },
      due_date: {
        type: DataTypes.DATE,
        field: "due_date",
      },
      bill_no: {
        type: DataTypes.STRING,
        field: "bill_no",
      },
      location: {
        type: DataTypes.STRING,
        field: "location",
      },
      tag: {
        type: DataTypes.STRING,
        field: "tag",
      },
      category_details: {
        type: DataTypes.JSON,
        field: "category_details",
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "bills",
      modelName: "Bills",
      timestamps: true,
    }
  );

  return Bills;
};
