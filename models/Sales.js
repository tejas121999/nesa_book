const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Sales extends Model {
        static associate(models) {
            Sales.belongsTo(models.Owner, {
                foreignKey: "owner_id",
                as: 'Owner_data'
            })

            Sales.belongsTo(models.Company, {
                foreignKey: "company_id",
                as: 'company_data'
            })

            Sales.belongsTo(models.Merchant, {
                foreignKey: "merchant_id",
                as: 'merchant_data'
            })
           
        }
    }

    Sales.init({
        owner_id: {
            type: DataTypes.INTEGER,
            field: 'owner_id'
        },
        company_id: {
            type: DataTypes.INTEGER,
            field: 'company_id'
        },
        invoice_id: {
            type: DataTypes.INTEGER,
            field: 'invoice_id'
        },
        merchant_id: {
            type: DataTypes.INTEGER,
            field: 'merchant_id'
        },
        payment_id: {
            type: DataTypes.INTEGER,
            field: 'payment_id'
        },
        isDelete: {
            type: DataTypes.BOOLEAN,
            field: 'isDelete',
            defaultValue: false,
        },
    }, {
        sequelize,
        tableName: 'sales',
        modelName: 'Sales',
        timestamps: true
    })

    return Sales
}