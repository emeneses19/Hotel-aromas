'use strict';
module.exports = (sequelize, DataTypes) => {
    const DetailReserve = sequelize.define('DetailReserve', {
        // RoomId: DataTypes.INTEGER,
        // ReservationId: DataTypes.INTEGER,
        totalPay: DataTypes.DECIMAL,
        estate: DataTypes.STRING,
        payload: DataTypes.STRING,
        description: DataTypes.STRING
    }, { schema: 'public' });
    DetailReserve.associate = function(models) {
        DetailReserve.belongsTo(models.Room, { foreignKey: 'roomId', as: 'room' });
        DetailReserve.belongsTo(models.Reservation, { foreignKey: 'ReservationId', as: 'reservation' });
    };
    return DetailReserve
};