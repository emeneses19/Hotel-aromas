const db = require('../models');
const Client = db.Client;

exports.list = async function(req, res) {
    try {
        const Clients = await Client.findAll();
        res.json(Clients);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.get = async function(req, res) {
    try {
        const id = req.params.id;
        const client = await Client.findOne({
            where: { id: id },
            include: [
                { model: db.TypeDoc, attributes: ['name'] }
            ],
            attributes: ['names', 'surnames', 'numberDoc', 'phone', 'role', 'email', 'state' ],
        });
        res.json(client);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

// POST /productos/
exports.create = async function(req, res) {
    try {
        const nuevoClient = await Client.create(req.body);
        res.json({
            ok: true,
            nuevoClient
        });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

// PUT /productos/5
exports.update = async function(req, res) {
    const id = req.params.id;
    try {
        await Client.update(req.body, { where: { id: id } });
        res.json({ ok: 'ok' })
    } catch (error) {}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
    const id = req.params.id;
    try {
        await Client.destroy({ where: { id: id } });
        res.json({ ok: 'ok' })

    } catch (error) {
        res.status(500).json({ error: err });
    }
};