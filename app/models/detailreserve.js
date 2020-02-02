'use strict';
module.exports = (sequelize, DataTypes) => {
    const DetailReserve = sequelize.define('DetailReserve', {
        RoomId: DataTypes.INTEGER,
        ReservationId: DataTypes.INTEGER,
        reservationCode: { type: DataTypes.STRING, unique: true },
        totalPay: DataTypes.DECIMAL,
        estate: DataTypes.STRING,
        voucher: DataTypes.STRING,
        payload: DataTypes.STRING,
        description: DataTypes.STRING
    }, { schema: 'public' });
    DetailReserve.associate = function(models) {
        DetailReserve.belongsTo(models.Roms, { as: 'room' });
        DetailReserve.belongsTo(models.Reservation, { as: 'reservation' });
    };
    return DetailReserve
};