'use strict';
module.exports = (sequelize, DataTypes) => {
    const Client = sequelize.define('Client', {
        names: DataTypes.STRING,
        surnames: DataTypes.STRING,
        typeDocID: DataTypes.INTEGER,
        numberDoc: { type: DataTypes.STRING, unique: true },
        phone: { type: DataTypes.STRING },
        role: { type: DataTypes.STRING, defaultValue: 'ROLE_USER' },
        email: { type: DataTypes.STRING, unique: true },
        password: DataTypes.STRING,
        google: DataTypes.BOOLEAN,
        facebook: DataTypes.BOOLEAN
    }, { schema: 'public' });
    Client.associate = function(models) {
        Client.belongsTo(models.TypeDoc, { as: 'typedoc' });
        Client.hasMany(models.Reservation, {
            foreignKey: 'ClientId',
        });
    };
    return Client;
};