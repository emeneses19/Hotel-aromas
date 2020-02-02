const db = require('../app/models');

const now = new Date();
const usuarios = [
  { 
    nombres: 'Tony',
    apellidos: 'Stark',
    email: 'imironman@avenger.org',
    dni: '11223344',
    password: '1234',
  },
  { 
    nombres: 'Bruce',
    apellidos: 'Banner',
    email: 'thehulk@avenger.org',
    dni: '11223355',
    password: '1234',
  },
  { 
    nombres: 'Steve',
    apellidos: 'Rogers',
    email: 'capi@avenger.org',
    dni: '11223366',
    password: '1234',
  },
  { 
    nombres: 'Thor',
    apellidos: 'Odinson',
    email: 'thor@avenger.org',
    dni: '11223377',
    password: '1234',
  },
];

const tareas = [
  {
    titulo: 'salvar el mundo',
    detalle: 'lo de siempre',
    fecha: now,
    usuarioId: 1,
  },
  {
    titulo: 'salvar el mundo otra vez',
    detalle: 'lo de siempre',
    fecha: now,
    usuarioId: 1,
  },
  {
    titulo: 'derrotar al mandarin',
    detalle: 'los 10 anillos',
    fecha: now,
    usuarioId: 1,
  },
  {
    titulo: 'no molestarce',
    detalle: 'keep calm and ...',
    fecha: now,
    usuarioId: 2,
  },
  {
    titulo: 'Derrotar a hodra',
    detalle: 'lo de siempre',
    fecha: now,
    usuarioId: 3,
  },
  {
    titulo: 'Pelear con los nazis',
    detalle: 'lo de siempre',
    fecha: now,
    usuarioId: 3,
  },
  {
    titulo: 'Loki again',
    detalle: 'mas brujeria',
    fecha: now,
    usuarioId: 4,
  },
  {
    titulo: 'Luchar contra hulk',
    detalle: 'quien es el mas fuerte?',
    fecha: now,
    usuarioId: 4,
  },
];

const admins = [
  {
    Fullname:'Aplicacion Web',
    Fechana:new Date(),
    Correo:'web@macentromedico.com',
    Contrasena:'Jhamil2019.',
    Imagenadmin:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRc1Hb6scCE8X-wB9vEZqtLSDunMTyQOcez9ZFdrKaA7peKea8d'
  },
  {
    Fullname:'Aplicacion Movil',
    Fechana:new Date(),
    Correo:'movil@macentromedico.com',
    Contrasena:'Jhamil2019.',
    Imagenadmin:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCAvW_HvpF3Y5TyqzWkLZn52aFltc6UzfRtK4bA7CLRBaaMD8T'
  },
  {
    Fullname:'Jhamil Huaman',
    Fechana:'1997-04-11',
    Correo:'jhamillex@macentromedico.com',
    Contrasena:'Jhamil2019.',
    Imagenadmin:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRCAvW_HvpF3Y5TyqzWkLZn52aFltc6UzfRtK4bA7CLRBaaMD8T'
  },
];

const especialidades = [
  {
    Name:'Odontología',
    Resumen:'Especialidad médica que se dedica al estudio de los dientes y las encías y al tratamiento de sus dolencias.',
    Descripcion:'La odontología es la especialidad médica que se dedica al estudio de los dientes y las encías y al tratamiento de sus dolencias. Esta disciplina se encarga de todo lo referente al aparato estomatognático, formado por el conjunto de órganos y tejidos que se encuentran en la cavidad oral y en parte del cráneo, la cara y el cuello.',
    Precio:100,
    Atencion:'los martes y jueves, de 3:00 pm a 6:00 pm ',
    IconoEspecialidad:'http://aplicacion.kayserjhamillex.com/assets/img/odontology.png',
    ImagenEspecialidad:'http://aplicacion.kayserjhamillex.com/assets/img/odontologia.jpg'
  },
  {
    Name:'Medicina Oncologica',
    Resumen:'Oncología a la especialidad médica que se especializa en el análisis y el tratamiento de tumores tanto benignos como malignos.',
    Descripcion:'La oncología, por lo tanto, se encarga de detectar, combatir y controlar el cáncer. En el caso del tratamiento, contempla la posibilidad de someter al paciente a una cirugía y a terapias no quirúrgicas, como lo son la quimioterapia y la radioterapia.',
    Precio:150,
    Atencion:'los miercoles y jueves, de 2:00 pm a 7:00 pm',
    IconoEspecialidad:'http://aplicacion.kayserjhamillex.com/assets/img/oncology.png',
    ImagenEspecialidad:''
  },
];

const servicios = [
  {
    Name:'LaboratorioClinico',
    Resumen:'laboratorios de análisis de rutina y laboratorios de análisis específicos.',
    Descripcion:'Nuestro equipo multidisciplinario, formado por el médico patólogo clínico o analista clínico, profesionales del laboratorio y técnicos en análisis clínicos, analizan muestras biológicas humanas que contribuyen al estudio, prevención, diagnóstico y tratamiento de las enfermedades.',
    Iconoservicio:'http://aplicacion.kayserjhamillex.com/assets/img/laboratorio.png',
    Imagenservicio:'https://irp-cdn.multiscreensite.com/e4ccdf67/MOBILE/jpg/005.jpg'
  },
  {
    Name:'Radiografia',
    Resumen:'Las imágenes de rayos X muestran el interior de su cuerpo en diferentes tonos de blanco y negro.',
    Descripcion:'Las imágenes de rayos X muestran el interior de su cuerpo en diferentes tonos de blanco y negro. Esto es debido a que diferentes tejidos absorben diferentes cantidades de radiación. El calcio en los huesos absorbe la mayoría de los rayos X, por lo que los huesos se ven blancos. La grasa y otros tejidos blandos absorben menos, y se ven de color gris. El aire absorbe la menor cantidad, por lo que los pulmones se ven negros.',
    Iconoservicio:'http://aplicacion.kayserjhamillex.com/assets/img/radiografia.png',
    Imagenservicio:'http://kayserjhamillex.com/wp-content/uploads/2019/07/tomografia.jpg'
  },
  {
    Name:'Ecografia',
    Resumen:'Es una técnica de exploración de los órganos internos del cuerpo que consiste en registrar el eco de ondas electromagnéticas o acústicas enviadas hacia el lugar que se examina.',
    Descripcion:'Es una técnica de exploración de los órganos internos del cuerpo que consiste en registrar el eco de ondas electromagnéticas o acústicas enviadas hacia el lugar que se examina. Este procedimiento de diagnóstico emplea el ultrasonido para crear imágenes tridimensionales, con la finalidad de visualizar órganos para diagnósticos exactos.',
    Iconoservicio:'http://aplicacion.kayserjhamillex.com/assets/img/ecografia.png',
    Imagenservicio:'http://kayserjhamillex.com/wp-content/uploads/2019/07/ecografia.jpg'
  },
  {
    Name:'Farmacia',
    Resumen:'Es el servicio que brinda atención durante las 24 horas del día para la dispensación de productos químicos farmacéuticos.',
    Descripcion:'Una farmacia también puede ser utilizada como un centro de atención para primeros auxilios, contando en tal caso con el equipo para tomar presión, para aplicar inyecciones, etc. Esto prueba que las farmacias no pueden ser operadas por empleados si no que deben contar siempre en su staff con gente especialmente capacitada para atender las necesidades sanitarias de las personas que allí concurren.',
    Iconoservicio:'http://aplicacion.kayserjhamillex.com/assets/img/farmacia.png',
    Imagenservicio:'https://i1.wp.com/umetonline.com/wp-content/uploads/2019/02/03-farmacia.jpg?resize=1170%2C750&ssl=1'
  },
  {
    Name:'Emergencia',
    Resumen:'El área de Emergencias brinda una buena e inmediata atención para restablecer la salud del paciente.',
    Descripcion:'El área de Emergencias brinda una buena e inmediata atención para restablecer la salud del paciente. Nuestro staff de médicos emergencistas y personal de enfermería cuenta con amplia experiencia y la convicción de brindar la mejor atención a los pacientes, con el mayor compromiso ético y profesional para solucionar los problemas urgentes de salud.',
    Iconoservicio:'http://aplicacion.kayserjhamillex.com/assets/img/emergencia.png',
    Imagenservicio:'https://thumbs.dreamstime.com/b/m%C3%A9dicos-com-mulher-na-marquesa-do-hospital-na-emerg%C3%AAncia-63738304.jpg'
  },
  {
    Name:'Hospitalización',
    Resumen:'Nuestro objetivo es prestar una atención médica integral a aquellos pacientes adultos y pediátricos que se hospitalizan por una patología de baja o mediana complejidad',
    Descripcion:'Nuestro objetivo es prestar una atención médica integral a aquellos pacientes adultos y pediátricos que se hospitalizan por una patología de baja o mediana complejidad, tanto de causa médica como quirúrgica. Cumpliendo estándares exigentes de calidad técnica y profesional, el servicio de Hospitalización se lleva a cabo bajo el sello de servir a la persona enferma, con un trato humano y digno.',
    Iconoservicio:'http://aplicacion.kayserjhamillex.com/assets/img/hospitaliacion.png',
    Imagenservicio:'https://image.freepik.com/foto-gratis/mujer-hospitalizada-doctores_13339-88558.jpg'
  },
];

const doctores = [
  {
    Fullname:'Rocio Del Pilar Valentin Bejarano',
    Fechana:new Date(),
    Genero:'',
    Celular:'',
    Email:'rocio@macentromedico.com',
    Imagendoctor:'http://aplicacion.kayserjhamillex.com/assets/img/doctor2.png',
    Password:'',
    Facebook:'',
    Instagram:'',
    Twitter:''
  },
  {
    Fullname:'John Henrry Valentin Bejarano',
    Fechana:new Date(),
    Genero:'',
    Celular:'',
    Email:'johnhenrry@macentromedico.com',
    Imagendoctor:'http://aplicacion.kayserjhamillex.com/assets/img/doctor1.png',
    Password:'',
    Facebook:'',
    Instagram:'',
    Twitter:''
  }
];

const especialistas = [
  {EspecialidadId: 1,DoctorId:1},
  {EspecialidadId: 2,DoctorId:2},
//   {EspecialidadId: 3,DoctorId:3},
//   {EspecialidadId: 4,DoctorId:4},
//   {EspecialidadId: 5,DoctorId:5},
//   {EspecialidadId: 6,DoctorId:6},
//   {EspecialidadId: 7,DoctorId:7},
//   {EspecialidadId: 8,DoctorId:8},
//   {EspecialidadId: 9,DoctorId:9},
//   {EspecialidadId: 10,DoctorId:10},
//   {EspecialidadId: 11,DoctorId:11},
//   {EspecialidadId: 12,DoctorId:12},
//   {EspecialidadId: 13,DoctorId:13},
//   {EspecialidadId: 14,DoctorId:14},
//   {EspecialidadId: 15,DoctorId:15},
//   {EspecialidadId: 16,DoctorId:16},
//   {EspecialidadId: 17,DoctorId:17},
//   {EspecialidadId: 18,DoctorId:18},
//   {EspecialidadId: 1,DoctorId:19},
];


const horas = [
  { Horainicio:'8:00 am', Horafin:'8:05 am' },
  { Horainicio:'8:05 am', Horafin:'8:10 am' },
  { Horainicio:'8:10 am', Horafin:'8:15 am' },
  { Horainicio:'8:15 am', Horafin:'8:20 am' },
  { Horainicio:'8:20 am', Horafin:'8:25 am' },
  { Horainicio:'8:25 am', Horafin:'8:30 am' },
  { Horainicio:'8:30 am', Horafin:'8:35 am' },
  { Horainicio:'8:35 am', Horafin:'8:40 am' },
  { Horainicio:'8:40 am', Horafin:'8:45 am' },
  { Horainicio:'8:45 am', Horafin:'8:50 am' },
  { Horainicio:'8:50 am', Horafin:'8:55 am' },
  { Horainicio:'8:55 am', Horafin:'9:00 am' },
  { Horainicio:'9:00 am', Horafin:'9:05 am' },
  { Horainicio:'9:05 am', Horafin:'9:10 am' },
  { Horainicio:'9:10 am', Horafin:'9:15 am' },
  { Horainicio:'9:15 am', Horafin:'9:20 am' },
  { Horainicio:'9:20 am', Horafin:'9:25 am' },
  { Horainicio:'9:25 am', Horafin:'9:30 am' },
  { Horainicio:'9:30 am', Horafin:'9:35 am' },
  { Horainicio:'9:35 am', Horafin:'9:40 am' },
  { Horainicio:'9:40 am', Horafin:'9:45 am' },
  { Horainicio:'9:45 am', Horafin:'9:50 am' },
  { Horainicio:'9:50 am', Horafin:'9:55 am' },
  { Horainicio:'9:55 am', Horafin:'10:00 am' },
  { Horainicio:'10:00 am', Horafin:'10:05 am' },
  { Horainicio:'10:05 am', Horafin:'10:10 am' },
  { Horainicio:'10:10 am', Horafin:'10:15 am' },
  { Horainicio:'10:15 am', Horafin:'10:20 am' },
  { Horainicio:'10:20 am', Horafin:'10:25 am' },
  { Horainicio:'10:25 am', Horafin:'10:30 am' },
  { Horainicio:'10:30 am', Horafin:'10:35 am' },
  { Horainicio:'10:35 am', Horafin:'10:40 am' },
  { Horainicio:'10:40 am', Horafin:'10:45 am' },
  { Horainicio:'10:45 am', Horafin:'10:50 am' },
  { Horainicio:'10:50 am', Horafin:'10:55 am' },
  { Horainicio:'10:55 am', Horafin:'11:00 am' },
  { Horainicio:'11:00 am', Horafin:'11:05 am' },
  { Horainicio:'11:05 am', Horafin:'11:10 am' },
  { Horainicio:'11:10 am', Horafin:'11:15 am' },
  { Horainicio:'11:15 am', Horafin:'11:20 am' },
  { Horainicio:'11:20 am', Horafin:'11:25 am' },
  { Horainicio:'11:25 am', Horafin:'11:30 am' },
  { Horainicio:'11:30 am', Horafin:'11:35 am' },
  { Horainicio:'11:35 am', Horafin:'11:40 am' },
  { Horainicio:'11:40 am', Horafin:'11:45 am' },
  { Horainicio:'11:45 am', Horafin:'11:50 am' },
  { Horainicio:'11:50 am', Horafin:'11:55 am' },
  { Horainicio:'11:55 am', Horafin:'12:00 am' },
  { Horainicio:'12:00 am', Horafin:'12:05 am' },
  { Horainicio:'12:05 am', Horafin:'12:10 am' },
  { Horainicio:'12:10 am', Horafin:'12:15 am' },
  { Horainicio:'12:15 am', Horafin:'12:20 am' },
  { Horainicio:'12:20 am', Horafin:'12:25 am' },
  { Horainicio:'12:25 am', Horafin:'12:30 am' },
  { Horainicio:'12:30 am', Horafin:'12:35 am' },
  { Horainicio:'12:35 am', Horafin:'12:40 am' },
  { Horainicio:'12:40 am', Horafin:'12:45 am' },
  { Horainicio:'12:45 am', Horafin:'12:50 am' },
  { Horainicio:'12:50 am', Horafin:'12:55 am' },
  { Horainicio:'12:55 am', Horafin:'1:00 pm' },
  { Horainicio:'1:00 pm', Horafin:'1:05 pm' },
  { Horainicio:'1:05 pm', Horafin:'1:10 pm' },
  { Horainicio:'1:10 pm', Horafin:'1:15 pm' },
  { Horainicio:'1:15 pm', Horafin:'1:20 pm' },
  { Horainicio:'1:20 pm', Horafin:'1:25 pm' },
  { Horainicio:'1:25 pm', Horafin:'1:30 pm' },
  { Horainicio:'1:30 pm', Horafin:'1:35 pm' },
  { Horainicio:'1:35 pm', Horafin:'1:40 pm' },
  { Horainicio:'1:40 pm', Horafin:'1:45 pm' },
  { Horainicio:'1:45 pm', Horafin:'1:50 pm' },
  { Horainicio:'1:50 pm', Horafin:'1:55 pm' },
  { Horainicio:'1:55 pm', Horafin:'2:00 pm' },
  { Horainicio:'2:00 pm', Horafin:'2:05 pm' },
  { Horainicio:'2:05 pm', Horafin:'2:10 pm' },
  { Horainicio:'2:10 pm', Horafin:'2:25 pm' },
  { Horainicio:'2:25 pm', Horafin:'2:20 pm' },
  { Horainicio:'2:20 pm', Horafin:'2:25 pm' },
  { Horainicio:'2:25 pm', Horafin:'2:30 pm' },
  { Horainicio:'2:30 pm', Horafin:'2:35 pm' },
  { Horainicio:'2:35 pm', Horafin:'2:40 pm' },
  { Horainicio:'2:40 pm', Horafin:'2:45 pm' },
  { Horainicio:'2:45 pm', Horafin:'2:50 pm' },
  { Horainicio:'2:50 pm', Horafin:'2:55 pm' },
  { Horainicio:'2:55 pm', Horafin:'3:00 pm' },
  { Horainicio:'3:00 pm', Horafin:'3:05 pm' },
  { Horainicio:'3:05 pm', Horafin:'3:10 pm' },
  { Horainicio:'3:10 pm', Horafin:'3:15 pm' },
  { Horainicio:'3:15 pm', Horafin:'3:20 pm' },
  { Horainicio:'3:20 pm', Horafin:'3:25 pm' },
  { Horainicio:'3:25 pm', Horafin:'3:30 pm' },
  { Horainicio:'3:30 pm', Horafin:'3:35 pm' },
  { Horainicio:'3:35 pm', Horafin:'3:40 pm' },
  { Horainicio:'3:40 pm', Horafin:'3:45 pm' },
  { Horainicio:'3:45 pm', Horafin:'3:50 pm' },
  { Horainicio:'3:50 pm', Horafin:'3:55 pm' },
  { Horainicio:'3:55 pm', Horafin:'4:00 pm' },
  { Horainicio:'4:00 pm', Horafin:'4:05 pm' },
  { Horainicio:'4:05 pm', Horafin:'4:10 pm' },
  { Horainicio:'4:10 pm', Horafin:'4:15 pm' },
  { Horainicio:'4:15 pm', Horafin:'4:20 pm' },
  { Horainicio:'4:20 pm', Horafin:'4:25 pm' },
  { Horainicio:'4:25 pm', Horafin:'4:30 pm' },
  { Horainicio:'4:30 pm', Horafin:'4:35 pm' },
  { Horainicio:'4:35 pm', Horafin:'4:40 pm' },
  { Horainicio:'4:40 pm', Horafin:'4:45 pm' },
  { Horainicio:'4:45 pm', Horafin:'4:50 pm' },
  { Horainicio:'4:50 pm', Horafin:'4:55 pm' },
  { Horainicio:'4:55 pm', Horafin:'5:00 pm' },
  { Horainicio:'5:00 pm', Horafin:'5:05 pm' },
  { Horainicio:'5:05 pm', Horafin:'5:10 pm' },
  { Horainicio:'5:10 pm', Horafin:'5:15 pm' },
  { Horainicio:'5:15 pm', Horafin:'5:20 pm' },
  { Horainicio:'5:20 pm', Horafin:'5:25 pm' },
  { Horainicio:'5:25 pm', Horafin:'5:30 pm' },
  { Horainicio:'5:30 pm', Horafin:'5:35 pm' },
  { Horainicio:'5:35 pm', Horafin:'5:40 pm' },
  { Horainicio:'5:40 pm', Horafin:'5:45 pm' },
  { Horainicio:'5:45 pm', Horafin:'5:50 pm' },
  { Horainicio:'5:50 pm', Horafin:'5:55 pm' },
  { Horainicio:'5:55 pm', Horafin:'6:00 pm' },
  { Horainicio:'6:00 pm', Horafin:'6:05 pm' },
  { Horainicio:'6:06 pm', Horafin:'6:10 pm' },
  { Horainicio:'6:10 pm', Horafin:'6:15 pm' },
  { Horainicio:'6:15 pm', Horafin:'6:20 pm' },
  { Horainicio:'6:20 pm', Horafin:'6:25 pm' },
  { Horainicio:'6:25 pm', Horafin:'6:30 pm' },
  { Horainicio:'6:30 pm', Horafin:'6:35 pm' },
  { Horainicio:'6:35 pm', Horafin:'6:40 pm' },
  { Horainicio:'6:40 pm', Horafin:'6:45 pm' },
  { Horainicio:'6:45 pm', Horafin:'6:50 pm' },
  { Horainicio:'6:50 pm', Horafin:'6:55 pm' },
  { Horainicio:'6:55 pm', Horafin:'7:00 pm' },
  { Horainicio:'7:00 pm', Horafin:'7:05 pm' },
  { Horainicio:'7:07 pm', Horafin:'7:10 pm' },
  { Horainicio:'7:10 pm', Horafin:'7:15 pm' },
  { Horainicio:'7:15 pm', Horafin:'7:20 pm' },
  { Horainicio:'7:20 pm', Horafin:'7:25 pm' },
  { Horainicio:'7:25 pm', Horafin:'7:30 pm' },
  { Horainicio:'7:30 pm', Horafin:'7:35 pm' },
  { Horainicio:'7:35 pm', Horafin:'7:40 pm' },
  { Horainicio:'7:40 pm', Horafin:'7:45 pm' },
  { Horainicio:'7:45 pm', Horafin:'7:50 pm' },
  { Horainicio:'7:50 pm', Horafin:'7:55 pm' },
  { Horainicio:'7:55 pm', Horafin:'8:00 pm' }
];

const pacientes = [
  {
    Fullname:'Anibal Jhamil Huaman Verastein',
    Fechana:'1997-04-11',
    Genero:'Masculino',
    Tipodocumento:'DNI',
    Numerodocumento:'72547410',
    Email:'anibaljhamil@gmail.com',
    Password:'1234',
    Imagenpaciente:'http://aplicacion.kayserjhamillex.com/assets/img/man.png'
  },
  {
    Fullname:'Harol Sergio Huaman Verastein',
    Fechana:'2004-05-11',
    Genero:'Masculino',
    Tipodocumento:'DNI',
    Numerodocumento:'72205430',
    Email:'harolsergio2004@gmail.com',
    Password:'1234',
    Imagenpaciente:'http://aplicacion.kayserjhamillex.com/assets/img/man.png'
  },
  {
    Fullname:'Bryan Ordoñes De La Cruz',
    Fechana:'1994-07-21',
    Genero:'Masculino',
    Tipodocumento:'DNI',
    Numerodocumento:'54234341',
    Email:'bryanoc@gmail.com',
    Password:'1234',
    Imagenpaciente:'http://aplicacion.kayserjhamillex.com/assets/img/man.png'
  },
  {
    Fullname:'Max Antony Paucar Ramirez',
    Fechana:'1999-12-21',
    Genero:'Masculino',
    Tipodocumento:'DNI',
    Numerodocumento:'23154353',
    Email:'maxcamito@gmail.com',
    Password:'1234',
    Imagenpaciente:'http://aplicacion.kayserjhamillex.com/assets/img/man.png'
  },
  {
    Fullname:'Jhenny Yessica Contreras Llantoy',
    Fechana:'1995-04-19',
    Genero:'Femenino',
    Tipodocumento:'DNI',
    Numerodocumento:'84583684',
    Email:'jhenny@gmail.com',
    Password:'1234',
    Imagenpaciente:'http://aplicacion.kayserjhamillex.com/assets/img/woman.png'
  },
  {
    Fullname:'Carmen Rossio Rios Naula',
    Fechana:'1995-04-19',
    Genero:'Femenino',
    Tipodocumento:'DNI',
    Numerodocumento:'45673678',
    Email:'chio@gmail.com',
    Password:'1234',
    Imagenpaciente:'http://aplicacion.kayserjhamillex.com/assets/img/woman.png'
  },
  {
    Fullname:'Epifania Meneses Taipe',
    Fechana:'1995-04-19',
    Genero:'Femenino',
    Tipodocumento:'DNI',
    Numerodocumento:'83525673',
    Email:'epfaniamenesestaipe@gmail.com',
    Password:'1234',
    Imagenpaciente:'http://aplicacion.kayserjhamillex.com/assets/img/woman.png'
  },
  {
    Fullname:'Thania del Castillo Hernandez',
    Fechana:'1994-01-17',
    Genero:'Femenino',
    Tipodocumento:'DNI',
    Numerodocumento:'89345234',
    Email:'thania@gmail.com',
    Password:'1234',
    Imagenpaciente:'http://aplicacion.kayserjhamillex.com/assets/img/woman.png'
  },
];


const horarios = [
  {Dia:'martes', EspecialistaId:1,HoraId:1},
  {Dia:'martes', EspecialistaId:1,HoraId:2},
  {Dia:'martes', EspecialistaId:1,HoraId:3},
  {Dia:'martes', EspecialistaId:1,HoraId:4},
  {Dia:'martes', EspecialistaId:1,HoraId:5},
  {Dia:'martes', EspecialistaId:1,HoraId:6},
  {Dia:'martes', EspecialistaId:1,HoraId:7},
  {Dia:'martes', EspecialistaId:1,HoraId:8},
  {Dia:'martes', EspecialistaId:1,HoraId:9},
  {Dia:'martes', EspecialistaId:1,HoraId:10},
  {Dia:'martes', EspecialistaId:1,HoraId:11},
  {Dia:'martes', EspecialistaId:1,HoraId:12},
  {Dia:'martes', EspecialistaId:1,HoraId:13},
  {Dia:'martes', EspecialistaId:1,HoraId:14},
  {Dia:'martes', EspecialistaId:1,HoraId:15},
  {Dia:'martes', EspecialistaId:1,HoraId:16},
  {Dia:'martes', EspecialistaId:1,HoraId:17},
  {Dia:'martes', EspecialistaId:1,HoraId:18},
  {Dia:'martes', EspecialistaId:1,HoraId:19},
  {Dia:'martes', EspecialistaId:1,HoraId:20},
  {Dia:'martes', EspecialistaId:1,HoraId:21},
  {Dia:'martes', EspecialistaId:1,HoraId:22},
  {Dia:'martes', EspecialistaId:1,HoraId:23},
  {Dia:'jueves', EspecialistaId:1,HoraId:1},
  {Dia:'jueves', EspecialistaId:1,HoraId:2},
  {Dia:'jueves', EspecialistaId:1,HoraId:3},
  {Dia:'jueves', EspecialistaId:1,HoraId:4},
  {Dia:'jueves', EspecialistaId:1,HoraId:5},
  {Dia:'jueves', EspecialistaId:1,HoraId:6},
  {Dia:'jueves', EspecialistaId:1,HoraId:7},
  {Dia:'jueves', EspecialistaId:1,HoraId:8},
  {Dia:'jueves', EspecialistaId:1,HoraId:9},
  {Dia:'jueves', EspecialistaId:1,HoraId:10},
  {Dia:'jueves', EspecialistaId:1,HoraId:11},
  {Dia:'jueves', EspecialistaId:1,HoraId:12},
  {Dia:'jueves', EspecialistaId:1,HoraId:13},
  {Dia:'jueves', EspecialistaId:1,HoraId:14},
  {Dia:'jueves', EspecialistaId:1,HoraId:15},
  {Dia:'jueves', EspecialistaId:1,HoraId:16},
  {Dia:'jueves', EspecialistaId:1,HoraId:17},
  {Dia:'jueves', EspecialistaId:1,HoraId:18},
  {Dia:'jueves', EspecialistaId:1,HoraId:19},
  {Dia:'jueves', EspecialistaId:1,HoraId:20},
  {Dia:'jueves', EspecialistaId:1,HoraId:21},
  {Dia:'jueves', EspecialistaId:1,HoraId:22},
  {Dia:'jueves', EspecialistaId:1,HoraId:23},
  {Dia:'lunes', EspecialistaId:2,HoraId:1},
  {Dia:'lunes', EspecialistaId:2,HoraId:2},
  {Dia:'lunes', EspecialistaId:2,HoraId:3},
  {Dia:'lunes', EspecialistaId:2,HoraId:4},
  {Dia:'lunes', EspecialistaId:2,HoraId:5},
  {Dia:'lunes', EspecialistaId:2,HoraId:6},
  {Dia:'lunes', EspecialistaId:2,HoraId:7},
  {Dia:'lunes', EspecialistaId:2,HoraId:8},
  {Dia:'lunes', EspecialistaId:2,HoraId:9},
  {Dia:'lunes', EspecialistaId:2,HoraId:10},
  {Dia:'lunes', EspecialistaId:2,HoraId:11},
  {Dia:'lunes', EspecialistaId:2,HoraId:12},
  {Dia:'lunes', EspecialistaId:2,HoraId:13},
  {Dia:'lunes', EspecialistaId:2,HoraId:14},
  {Dia:'lunes', EspecialistaId:2,HoraId:15},
  {Dia:'lunes', EspecialistaId:2,HoraId:16},
  {Dia:'lunes', EspecialistaId:2,HoraId:17},
  {Dia:'lunes', EspecialistaId:2,HoraId:18},
  {Dia:'lunes', EspecialistaId:2,HoraId:19},
  {Dia:'lunes', EspecialistaId:2,HoraId:20},
  {Dia:'lunes', EspecialistaId:2,HoraId:21},
  {Dia:'lunes', EspecialistaId:2,HoraId:22},
  {Dia:'lunes', EspecialistaId:2,HoraId:23},
  {Dia:'miercoles', EspecialistaId:2,HoraId:1},
  {Dia:'miercoles', EspecialistaId:2,HoraId:2},
  {Dia:'miercoles', EspecialistaId:2,HoraId:3},
  {Dia:'miercoles', EspecialistaId:2,HoraId:4},
  {Dia:'miercoles', EspecialistaId:2,HoraId:5},
  {Dia:'miercoles', EspecialistaId:2,HoraId:6},
  {Dia:'miercoles', EspecialistaId:2,HoraId:7},
  {Dia:'miercoles', EspecialistaId:2,HoraId:8},
  {Dia:'miercoles', EspecialistaId:2,HoraId:9},
  {Dia:'miercoles', EspecialistaId:2,HoraId:10},
  {Dia:'miercoles', EspecialistaId:2,HoraId:11},
  {Dia:'miercoles', EspecialistaId:2,HoraId:12},
  {Dia:'miercoles', EspecialistaId:2,HoraId:13},
  {Dia:'miercoles', EspecialistaId:2,HoraId:14},
  {Dia:'miercoles', EspecialistaId:2,HoraId:15},
  {Dia:'miercoles', EspecialistaId:2,HoraId:16},
  {Dia:'miercoles', EspecialistaId:2,HoraId:17},
  {Dia:'miercoles', EspecialistaId:2,HoraId:18},
  {Dia:'miercoles', EspecialistaId:2,HoraId:19},
  {Dia:'miercoles', EspecialistaId:2,HoraId:20},
  {Dia:'miercoles', EspecialistaId:2,HoraId:21},
  {Dia:'miercoles', EspecialistaId:2,HoraId:22},
  {Dia:'miercoles', EspecialistaId:2,HoraId:23}
];

const citas = [
  {Fechacita:'2020-02-14',Pago:true,AdminId:1,PacienteId:5,HorarioId:1},
  {Fechacita:'2020-02-14',Pago:true,AdminId:1,PacienteId:1,HorarioId:2},
  {Fechacita:'2020-02-14',Pago:true,AdminId:1,PacienteId:2,HorarioId:3},
  {Fechacita:'2020-02-14',Pago:true,AdminId:1,PacienteId:3,HorarioId:4},
  {Fechacita:'2020-02-14',Pago:true,AdminId:1,PacienteId:4,HorarioId:5},
  {Fechacita:'2020-02-14',Pago:true,AdminId:2,PacienteId:6,HorarioId:6},
  {Fechacita:'2020-02-14',Pago:true,AdminId:2,PacienteId:2,HorarioId:7},
  {Fechacita:'2020-02-14',Pago:true,AdminId:2,PacienteId:3,HorarioId:8},
  {Fechacita:'2020-02-14',Pago:true,AdminId:2,PacienteId:5,HorarioId:9},
  {Fechacita:'2020-02-14',Pago:true,AdminId:2,PacienteId:7,HorarioId:10},
  {Fechacita:'2020-02-14',Pago:true,AdminId:2,PacienteId:8,HorarioId:11},
];






async function insertData() {
  console.log('Iniciando la insercion de tablas');
  console.log('-----------------------------');
  // usuarios
  for (const usuario of usuarios) {
    await db.Usuario.create(usuario);
  }
  // tareas
  for (const tarea of tareas) {
    await db.Tarea.create(tarea);
  }
  //admin
  for (const controller of admins){
    await db.Admin.create(controller);
  }
  //especialidades
  for (const rama of especialidades){
    await db.Especialidad.create(rama);
  }
  //doctores
  for (const docto of doctores){
    await db.Doctor.create(docto);
  }
  //servicios
  for (const servi of servicios){
    await db.Servicio.create(servi);
  }
  //paciente
  for (const cliente of pacientes){
    await db.Paciente.create(cliente);
  }
  //horas
  for (const rango of horas){
    await db.Hora.create(rango);
  }
  //especialista
  for (const especial of especialistas){
    await db.Especialista.create(especial);
  }
  //horario
  for (const horasio of horarios){
    await db.Horario.create(horasio);
  }
  //cita
  for (const reserva of citas){
    await db.Cita.create(reserva);
  }


  console.log('-----------------------------');
  console.log('Insercion de tablas finalizado');
}

// ejecucion de la funcion
insertData();