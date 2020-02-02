'use strict';
module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('Roms', {
        numberRoom: { type: DataTypes.STRING, unique: true },
        priceNeight: DataTypes.DECIMAL,
        description: DataTypes.STRING,
        state: DataTypes.BOOLEAN,
        imgRoom: DataTypes.TEXT,
        typeRoomId: DataTypes.INTEGER
    }, { schema: 'public' });
    Room.associate = function(models) {
        Room.belongsTo(models.TypeRoom, { as: 'typeroom' })
        Room.hasMany(models.DetailReserve, {
            foreignKey: 'RomsId',
        });
    };
    return Room;
};