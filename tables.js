// obtener modelos
const db = require('./app/models');

async function createSchema() {
    console.log('Iniciando la creacion de tablas');
    console.log('-----------------------------');
    try {
        // // Definicion de modelos en orden de cracion
        // await db.sequelize.models.Servicio.sync({force: true});
        // await db.sequelize.models.Blog.sync({force: true});
        // await db.sequelize.models.Admin.sync({force: true});
        // await db.sequelize.models.Paciente.sync({force: true});
        // await db.sequelize.models.Especialidad.sync({force: true});
        // await db.sequelize.models.Doctor.sync({force: true});
        // await db.sequelize.models.Hora.sync({force: true});
        // await db.sequelize.models.Usuario.sync({force: true});
        // await db.sequelize.models.Tarea.sync({force: true});
        // await db.sequelize.models.Especialista.sync({force: true});
        // await db.sequelize.models.Horario.sync({force: true});
        // await db.sequelize.models.Cita.sync({force: true});
        await db.sequelize.models.TypeRoom.sync({ force: true });
        await db.sequelize.models.TypeDoc.sync({ force: true });
        await db.sequelize.models.Roms.sync({ force: true });
        await db.sequelize.models.Usuario.sync({ force: true });
        await db.sequelize.models.Client.sync({ force: true });
        await db.sequelize.models.Reservation.sync({ force: true });
        await db.sequelize.models.DetailReserve.sync({ force: true });

    } catch (err) {
        console.log('ERROR: ', err);
    }
    console.log('-----------------------------');
    console.log('Creacion de tablas finalizado');
}
// ejecucion de la funcion
createSchema();