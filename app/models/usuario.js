'use strict';
module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        names: DataTypes.STRING,
        surnames: DataTypes.STRING,
        dni: { type: DataTypes.STRING(12), unique: true },
        role: { type: DataTypes.STRING },
        email: { type: DataTypes.STRING, unique: true },
        state: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        phone: DataTypes.STRING,
        password: DataTypes.STRING,
        google: DataTypes.BOOLEAN,
        facebook: DataTypes.BOOLEAN
    }, { schema: 'public' });
    Usuario.associate = function(models) {
        Usuario.hasMany(models.Reservation, {
            foreignKey: 'UsuarioId',
        });
    };
    return Usuario;
};