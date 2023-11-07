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
