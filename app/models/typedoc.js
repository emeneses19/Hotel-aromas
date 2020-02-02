'use strict';
module.exports = (sequelize, DataTypes) => {
    const TypeDoc = sequelize.define('TypeDoc', {
        name: { type: DataTypes.STRING, unique: true }
    }, { schema: 'public' });
    TypeDoc.associate = function(models) {
        TypeDoc.hasMany(models.Client, {
            foreignKey: 'TypeDocId',
        });
    };
    return TypeDoc;
};