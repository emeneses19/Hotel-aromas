const db = require('../models');
const Usuario = db.Usuario;

exports.list = async function(req, res) {
    try {
        const Usuarios = await Usuario.findAll();
        res.json(Usuarios);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

exports.get = async function(req, res) {
    try {
        const id = req.params.id;
        const usuario = await Usuario.findOne({
            where: { id: id },
            attributes: ['names', 'surnames', 'dni', 'role', 'email', 'state', ],
        });
        res.json(usuario);
    } catch (err) {
        res.status(500).json({ error: err });
    }
}

// POST /productos/
exports.create = async function(req, res) {
    try {
        const nuevoUsuario = await Usuario.create(req.body);
        res.json({
            ok: true,
            nuevoUsuario
        });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

// PUT /productos/5
exports.update = async function(req, res) {
    const id = req.params.id;
    try {
        await Usuario.update(req.body, { where: { id: id } });
        res.json({ ok: 'ok' })
    } catch (error) {}
};

//DELETE //productos/9
exports.remove = async function(req, res) {
    const id = req.params.id;
    try {
        await Usuario.destroy({ where: { id: id } });
        res.json({ ok: 'ok' })

    } catch (error) {
        res.status(500).json({ error: err });
    }
};

// //tareas por usuario

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