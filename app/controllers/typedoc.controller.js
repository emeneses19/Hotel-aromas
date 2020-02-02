const db = require('../models');
const TypeDoc = db.TypeDoc;

exports.list = async function(req, res) {
    try {
        const TypeDocs = await TypeDoc.findAll();
        res.json(TypeDoc);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.get = async function(req, res) {
        try {
            const id = req.params.id;
            const typedoc = await TypeDoc.findOne({
                where: { id: id },
                attributes: ['name']
            });
            res.json(typedoc);
        } catch (err) {
            res.status(500).json({ error: err });
        }
    }
    // POST /productos/
exports.create = async function(req, res) {
    try {
        const nuevoTypeDoc = await TypeDoc.create(req.body);
        res.json({
            ok: true,
            nuevoTypeDoc
        });
    } catch (err) {
        res.status(500).json({ error });
    }
};

// PUT /productos/5
exports.update = async function(req, res) {
    const id = req.params.id;
    try {
        await TypeDoc.update(req.body, { where: { id: id } });
        res.json({
            ok: true,
            message: 'tipo documento actualizado',
        })
    } catch (error) {
        res.status(500).json(error);
    }
};

//DELETE //productos/9
exports.remove = async function(req, res) {
    const id = req.params.id;
    try {
        await TypeDoc.destroy({ where: { id: id } });
        res.json({ ok: 'ok' })

    } catch (error) {
        res.status(500).json({ error: err });
    }
};

//tareas por usuario

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