'use strict';
module.exports = (sequelize, DataTypes) => {
    const TypeRoom = sequelize.define('TypeRoom', {
        name: { type: DataTypes.STRING, unique: true },
        description: DataTypes.TEXT,
    }, { schema: 'public' });
    TypeRoom.associate = function(models) {
        TypeRoom.hasMany(models.Roms, {
            foreignKey: 'TypeRoomId',
        });
    };
    return TypeRoom;
};