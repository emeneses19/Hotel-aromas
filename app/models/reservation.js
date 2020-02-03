'use strict';
module.exports = (sequelize, DataTypes) => {
    const Reservation = sequelize.define('Reservation', {
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        reservationCode: { type: DataTypes.STRING, unique: true },
        //poder tener el horario, el doctor y la especilidad
        UsuarioId: DataTypes.INTEGER,
        ClientId: DataTypes.INTEGER,
    }, { schema: 'public' });
    Reservation.associate = function(models) {
        Reservation.belongsTo(models.Usuario, { as: 'usuario' });
        Reservation.belongsTo(models.Client, { as: 'client' });
        Reservation.hasMany(models.Reservation, {
            foreignKey: 'ReservationId',
        });
    };
    return Reservation;
};