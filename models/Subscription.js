const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Subscription extends Model {
        static associate(models) {
            Subscription.hasOne(models.Owner, {
                foreignKey: "subscription_id",
            })
        }
    }

    Subscription.init({
        price: {
            type: DataTypes.INTEGER,
            field: 'price'
        },
        description: {
            type: DataTypes.STRING,
            field: 'description'
        },
        isDelete: {
            type: DataTypes.BOOLEAN,
            field: 'isDelete',
            defaultValue: false,
        },
    }, {
        sequelize,
        tableName: 'subscription',
        modelName: 'Subscription',
        timestamps: true
    })

    return Subscription
}