const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Owner extends Model {
        static associate(models) {
            Owner.belongsTo(models.Subscription, {
                foreignKey: "subscription_id",
                as: 'subscription_data'
            })

            Owner.hasOne(models.Company, {
                foreignKey: "owner_id",
            })

            Owner.hasOne(models.Users, {
                foreignKey: "owner_id",
            })

            Owner.hasOne(models.Sales, {
                foreignKey: "owner_id",
            })

            Owner.hasOne(models.Invoice, {
                foreignKey: "owner_id",
            })

            Owner.hasOne(models.Merchant, {
                foreignKey: "owner_id",
            })

            Owner.hasOne(models.Bills, {
                foreignKey: "owner_id",
            })

            Owner.hasOne(models.Expense, {
                foreignKey: "owner_id",
            })
        }
    }

    Owner.init({
        subscription_id: {
            type: DataTypes.INTEGER,
            field: 'subscription_id'
        },
        owner_name: {
            type: DataTypes.STRING,
            field: 'owner_name'
        },
        owner_number: {
            type: DataTypes.STRING,
            field: 'owner_number'
        },
        isDelete: {
            type: DataTypes.BOOLEAN,
            field: 'isDelete',
            defaultValue: false,
        },
    }, {
        sequelize,
        tableName: 'owner',
        modelName: 'Owner',
        timestamps: true
    })

    return Owner
}