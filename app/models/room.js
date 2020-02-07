'use strict';
module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('Room', {
        numberRoom: { type: DataTypes.STRING, unique: true },
        priceNeight: DataTypes.DECIMAL,
        description: DataTypes.STRING,
        state: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        imgRoom: DataTypes.TEXT,
        // typeRoomId: DataTypes.INTEGER
    }, { schema: 'public' });
    Room.associate = function(models) {
        Room.belongsTo(models.TypeRoom, { foreignKey: 'typeRoomId', as: 'typeroom' })
            // Room.hasMany(models.DetailReserve, {
            //     foreignKey: 'RoomId',
            // });
        Room.hasMany(models.DetailReserve, { foreignKey: 'roomId' });
    };
    return Room;
};