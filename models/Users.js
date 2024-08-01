const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.belongsTo(models.Owner, {
        foreignKey: "owner_id",
        as: "owner_data",
      });

      Users.belongsTo(models.Company, {
        foreignKey: "company_id",
        as: "company_data",
      });
    }
  }

  Users.init(
    {
      owner_id: {
        type: DataTypes.INTEGER,
        field: "owner_id",
      },
      company_id: {
        type: DataTypes.INTEGER,
        field: "company_id",
      },
      user_name: {
        type: DataTypes.STRING,
        field: "user_name",
      },
      user_email: {
        type: DataTypes.STRING,
        field: "user_email",
      },
      user_number: {
        type: DataTypes.STRING,
        field: "user_number",
      },
      password: {
        type: DataTypes.STRING,
        field: "password",
      },
      isDelete: {
        type: DataTypes.BOOLEAN,
        field: "isDelete",
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: "users",
      modelName: "Users",
      timestamps: true,
    }
  );

  return Users;
};
