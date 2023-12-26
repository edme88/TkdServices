En el navegador, para pasar parametros, query-param
http://localhost:8080/usuario?nombre=Agus&apellido=aliciardi

Pasar mas datos al get
http://localhost:8080/usuario/Agus
http://localhost:8080/api/usuario?token=123

Ver lo de jwt
servicios para la pagina de Tkd (post usuario)

http://localhost:8080/api/taekwondista?nombre=Agustina&apellido=Aliciardi&dni=34004891&fechaNacimiento=24101988&direccion=gralPaz1338g&categoria=2dan&instructor=MaxiPedrotti&peso=60kg&altura=154&genero=F&nacionalidad=argentina&celular=3513892282&email=edmealiciardi@gmailcom&contactoEmergencia.nombre=Andres&contactoEmergencia.apellido=Leal&contactoEmergencia.vinculo=Novio&contactoEmergencia.celular=3513895658

https://gitlab.com/e-programming1/curso-backend-nodejs/-/tree/main/poo-patrones-dise%C3%B1o/polimorfismo?ref_type=heads

static -> la clase se instancia a si misma...No hace falta hacer el new

https://refactoring.guru

Patrones de Diseño -> Proposito
Singleton
Factory
Strategy
Adapter

calculadora con 4 operaciones en el if

SOLID

[ ] POST -> Los datos del nuevo taekwondista se deberían guardar en this.data
[x] Guardar la data en un JSON
[ ] Guardar la data en una BD

Ejemplo:
Si busco
http://localhost:8080/api/taekwondistas?Dni=34004891
Me aparece 1 resultado

Si busco
http://localhost:8080/api/taekwondistas?Genero=Femenino
Me aparecen 2 resultados

POST
http://localhost:8080/api/taekwondista
raw JSON

body:
{
"nombre": "Andres",
"apellido": "Leal",
"dni": "34011678",
"categoria": "blanco",
"fecha-nacimiento": "04/Enero/1989",
"instructor-a-cargo": "Maximiliano Pedrotti",
"pesa": "92kg",
"altura": "1,54m",
"genero": "Masculino",
"nacionalidad": "Argentina",
"foto": "",
"celular": "3513892282",
"email": "andres@gmail.com",
"nombre-contacto": "Agustina",
"apellido-contacto": "Aliciardi",
"vinculo-contacto": "novia",
"celular-contacto": "3513892282"
}

CRUD
(x) hacer el delete
(x) agregar crud de Dojans
Enchufar a la UI
(x) Interfaz para Dojos y Taekwondistas
(tarea) Modelo Entidad-Relación
(tarea) Modelo de Clases
Swagger
Login
Test Unitarios en Jest

Luego BD
Manejo de Errores - Loggers
Eventos
Envio de Emails cuando se registra o se crea un evento o capacitación
Micro-servicios
Luego conquistar el mundo (?)
Imagenes del taekwondo

NestJs
AdonisJs https://adonisjs.com/

npm install swagger-jsdoc
npm install swagger-ui-express

Documentación de knex https://knexjs.org/guide/query-builder.html#rownumber

Docker

------
CREAR UN SCRIPT DE INSERT DE DATOS
EN EL PACKAGE hacer las 3 cosas (drop, create, insert)