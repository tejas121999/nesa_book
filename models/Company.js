const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      Company.belongsTo(models.Owner, {
        foreignKey: "owner_id",
        as: "owner_data",
      });

      Company.hasOne(models.Users, {
        foreignKey: "company_id",
      });

      Company.hasOne(models.Sales, {
        foreignKey: "company_id",
      });

      Company.hasOne(models.Invoice, {
        foreignKey: "company_id",
      });

      Company.hasOne(models.Merchant, {
        foreignKey: "company_id",
      });

      Company.hasOne(models.Bills, {
        foreignKey: "company_id",
      });

      Company.hasOne(models.Expense, {
        foreignKey: "company_id",
      });
    }
  }

  Company.init(
    {
      owner_id: {
        type: DataTypes.INTEGER,
        field: "owner_id",
      },
      company_name: {
        type: DataTypes.STRING,
        field: "company_name",
      },
      company_email: {
        type: DataTypes.STRING,
        field: "company_email",
      },
      company_number: {
        type: DataTypes.STRING,
        field: "company_number",
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "company",
      modelName: "Company",
      timestamps: true,
    }
  );

  return Company;
};
