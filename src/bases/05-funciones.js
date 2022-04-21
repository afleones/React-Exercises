//Funciones en JS

// const saludar = function(nombre){
//   return `hola, ${nombre}`;
// }

// const saludar2 = (nombre)=> {
//   return `hola, ${nombre}`;
// }

// const saludar3 = (nombre)=> `hola, ${nombre}`;
//
// const saludar4 = ()=> `hola Mundo`;
//
// console.log(saludar);
// console.log(saludar4());


// const getUser = () =>({
//     uid: 'ABC123',
//     username: 'user123'
// });
//
// const user = getUser();
//
// console.log(user);
//
// se reemplaza "return" const = variable () => return {}, por parentesis, ej: "const variable = () => ({Objeto})"
//
// console.log(getUser());

/*
1. Transformar en una función de Flecha
2. Tiene que retornar un objeto Implícito
3. pruebas

 function getUsuarioActivo(nombre){
   return{
     uid:'ABC567',
     username: nombre;
   }
 };
*/

const getUsuarioActivo = (nombre) =>({
    uid:'ABC567',
    username: nombre
  })

 const usuarioActivo = getUsuarioActivo('Andres');
 console.log(usuarioActivo);
