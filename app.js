const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./app/routes/index');
const roomRouter = require('./app/routes/room.routes');
const typeDocRouter = require('./app/routes/typedoc.routes');
const typeRoomRouter = require('./app/routes/typeroom.routes');
const usuarioRouter = require('./app/routes/usuario.routes');
const clientRouter = require('./app/routes/client.routes');
// const horaRouter = require('./app/routes/hora.routes');
// const tareaRouter = require('./app/routes/tareas.routes');
// const adminRouter = require('./app/routes/admin.routes');
// const blogRouter = require('./app/routes/blog.routes');
// const citaRouter = require('./app/routes/cita.routes');
// const doctorRouter = require('./app/routes/doctor.routes');
// const especialidadRouter = require('./app/routes/especialidad.routes');
// const especialistaRouter = require('./app/routes/especialista.routes');
// const horarioRouter = require('./app/routes/horario.routes');
// const pacienteRouter = require('./app/routes/paciente.routes');
// const servicioRouter = require('./app/routes/servicio.routes');

const app = express();

app.use(cors()); //acepta todos los origenes
// app.use(cors({
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuario', usuarioRouter);
app.use('/habitacion', roomRouter);
app.use('/cliente', clientRouter);
app.use('/tipohabitacion', typeRoomRouter);
app.use('/tipodoc', typeDocRouter);
// app.use('/admin', adminRouter);
// app.use('/blog', blogRouter);
// app.use('/cita', citaRouter);
// app.use('/doctor', doctorRouter);
// app.use('/especialidad', especialidadRouter);
// app.use('/especialista', especialistaRouter);
// app.use('/hora', horaRouter);
// app.use('/horario', horarioRouter);
// app.use('/paciente', pacienteRouter);
// app.use('/servicio', servicioRouter);

module.exports = app;