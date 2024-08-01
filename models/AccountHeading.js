const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class AccountHeaders extends Model {
        static associate(models) {

        }
    }

    AccountHeaders.init({
        account_type: {
            type: DataTypes.STRING,
            field: 'account_type'
        },
        account_details: {
            type: DataTypes.JSON,
            field: 'account_details'
        },
        isDelete: {
            type: DataTypes.BOOLEAN,
            field: 'isDelete',
            defaultValue: false,
        },
    }, {
        sequelize,
        tableName: 'account_headers',
        modelName: 'AccountHeaders',
        timestamps: true
    })

    return AccountHeaders
}