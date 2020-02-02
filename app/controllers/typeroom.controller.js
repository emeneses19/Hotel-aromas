const db = require('../models');
const TypeRoom = db.TypeRoom;

exports.list = async function(req, res) {
    try {
        const TypeRooms = await TypeRoom.findAll();
        res.json(TypeRooms);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.get = async function(req, res) {
        try {
            const id = req.params.id;
            const typeroom = await TypeRoom.findOne({
                where: { id: id },
                attributes: ['name', 'description']
            });
            res.json(typeroom);
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }
    // POST /productos/
exports.create = async function(req, res) {
    try {
        const nuevoTypeRoom = await TypeRoom.create(req.body);
        res.json({
            ok: true,
            nuevoTypeRoom
        });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

// PUT /productos/5
exports.update = async function(req, res) {
    const id = req.params.id;
    try {
        await TypeRoom.update(req.body, { where: { id: id } });
        res.json({
            ok: true,
            message: 'tipo de habitacion ha sido actualizado',
        })
    } catch (error) {
        res.status(500).json(error);
    }
};

//DELETE //productos/9
exports.remove = async function(req, res) {
    const id = req.params.id;
    try {
        await TypeRoom.destroy({ where: { id: id } });
        res.json({ ok: 'ok' })

    } catch (error) {
        res.status(500).json({ error: err });
    }
};