//No es buena practica agregar caracteres especiales "Ñ,Tildes, Etc.."
const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zipcode: 55321321,
    lat: 14.3232,
    lng: 34.923321,
  }
};

// console.table(persona);
console.log(persona);

//ECMAScript 6 incluyó el operador SPREAD para asignar propiedades a un clon de un objeto ya existente "{...nombreObjeto}"
const persona2 = { ...persona };
persona2.nombre = 'Peter';

console.log(persona2);
