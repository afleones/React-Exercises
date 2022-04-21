/*
Desestructuración o
Asignación Desestructurante
*/

const persona = {
  nombre:'Tony',
  edad:45,
  clave:'Ironman',
  rango: 'Soldado'
};

//Asignación Desestructurante
// const {nombre, edad, clave} = persona;

/*
{nombre:nombre2} -- sirve para extraer el valor de nombre, en el objeto persona y se lo asigno a la variable nombre2.
nombre ya no tendría ningun valor porque se lo asignó a nombre2.
*/

// console.log(nombre);
// console.log(edad);
// console.log(clave);

/*
Asignación Desestructurante dentro de la función:
dentro de los parametros de la función se colocan las propiedades a extraer dentro de llaves:

const funcion = ({propiedade1, propiedad2, etc})=> {
  *argumentos
}

*/
const useContext = ({clave, nombre, edad, rango= 'capitán'}) =>{

  //console.log(nombre, edad, rango);
  return {
    nombreClave: clave,
    anios: edad,
    latlng:{
      lat: 14.1232,
      lng: -12.3232
    }
  }
}

/*
para extraer propiedades de objetos anidados se coloca el nombre del objeto dos puntos y dentro de llaves,
la propiedad que deseamos extraer const {propiedad, nombreObjetoAnidado:{propiedad1, propiedad2}}, ej: latlng:{lat, lng}}
*/
const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

/*
También podemos realizar la extracción del objeto anidad y luego extraer sus propiedades en una
desestructuración individual, ej:
1. const {nombreClave, anios, latlng} = useContext(persona);
2. const {lat, lng} = latlng;
*/

console.log(nombreClave, anios);
console.log(lat, lng);
