const db = require('../models');
const Room = db.Room;
// const Detailreserve = db.Detailreserve;
const Reservation = db.Reservation;

exports.list = async function(req, res) {
    try {
        const Rooms = await Room.findAll({
            include: [
                { model: db.TypeRoom, as: 'typeroom', attributes: ['name', 'description'] }
            ]
        });
        res.json(Rooms);
    } catch (err) {
        res.status(500).json({ err });
    }
}

exports.get = async function(req, res) {
    try {
        const id = req.params.id;
        const room = await Room.findOne({
            where: { id: id },
            include: [
                { model: db.TypeRoom, attributes: ['name', 'description'] }
            ],
            attributes: ['numberRoom', 'priceNeight', 'description', 'state', 'imgRoom'],
        });
        res.json(Room);
    } catch (err) {
        res.status(500).json({
            ok: false,
            error: err
        });
    }
}

// POST /productos/
exports.create = async function(req, res) {
    try {
        const nuevoRoom = await Room.create(req.body);
        res.json({
            ok: true,
            nuevoRoom
        });
    } catch (err) {
        res.status(500).json({ error });
    }
};

// PUT /productos/5
exports.update = async function(req, res) {
    const id = req.params.id;
    try {
        await Room.update(req.body, { where: { id: id } });
        res.json({
            ok: true,
            messa: 'cuarto actualizado',
        })
    } catch (error) {
        res.status(500).json(error);
    }
};

//DELETE //productos/9
exports.remove = async function(req, res) {
    const id = req.params.id;
    try {
        await Room.destroy({ where: { id: id } });
        res.json({ ok: 'ok' })

    } catch (error) {
        res.status(500).json({ error: err });
    }
};

// Buscando habitaciones disponibles 
exports.roomava = async function(req, res) {
    try {
        const startDate = new Date(req.params.startDate);
        const endDate = new Date(req.params.endDate);
        const reservations = await Reservation.findAll({
                where: {
                    [startDate.lt]: endDate, // lt menor que
                    [endDate.gt]: startDate, //// gt mayor que
                    [estado.ne]: 'anulado' //ne no es igual
                }
            })
            .selected('detailReserve')
            .exec();

        let ocupadasroom = [];
        for (const reservation of reservations) {
            for (const reshab of reservation.detailReserve) {
                ocupadasroom.push(reshab.roomid);
            }
        }

        const disponiblerooms = await Room.find({ 'id': { $notIn: ocupadasroom }, state: true })
            .exec();
        res.json(disponiblerooms);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

// exports.tareas = async function(req, res) {
//     try {
//         const id = req.params.id;
//         const tareas = await db.Tarea.findAll({
//             where: { 'usuarioId': id },
//         });
//         res.json(tareas);
//     } catch (err) {
//         res.status(500).json({ error: err });
//     }
// }