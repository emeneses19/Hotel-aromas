// obtener modelos
const db = require('../app/models');

async function createSchema() {
    console.log('Iniciando la creacion de tablas');
    console.log('-----------------------------');
    try {
        // Definicion de modelos en orden de cracion
        await db.Usuario.sync({ force: true });
        await db.Client.sync({ force: true });
        await db.Room.sync({ force: true });
        await db.TypeRoom.sync({ force: true });
        await db.TypeDoc.sync({ force: true });
        // await db.Tarea.sync({force: true});
        // await db.Servicio.sync({force: true});
        // await db.Admin.sync({force: true});
        // await db.Blog.sync({force: true});
        // await db.Paciente.sync({force: true});
        // await db.Especialidad.sync({force: true});
        // await db.Doctor.sync({force: true});
        // await db.Hora.sync({force: true});
        // await db.Especialista.sync({force: true});
        // await db.Horario.sync({force: true});
        // await db.Cita.sync({force: true});

    } catch (err) {
        console.log('ERROR: ', err);
    }
    console.log('-----------------------------');
    console.log('Creacion de tablas finalizado');
}
// ejecucion de la funcion
createSchema();