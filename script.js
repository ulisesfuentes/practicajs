//#region definir variables
var a="Hola "; //vieja forma
let b='mundo!!';//nueva  
const n=5;//variable que no se puede modificar en el trayecto de el codigo
let array=[10,15,16,423,23];
//#endregion

//#region mostrar por consola
suma(n);
resta(n);
division(n);
multiplicacion(n);
console.log(array);
//vieja forma de hacer un for
for (let i=0;i<=10;i++){
    console.log(a+b);
}
//#endregion

//#region funciones
function suma(n){
    let resultado=n+n;
    console.log(resultado);
}
function resta(n){
    let resultado=n-n;
    console.log(resultado);
}
function division(n){
    let resultado=n/n;
    console.log(resultado);
}
function multiplicacion(n){
    let resultado=n*n;
    console.log(resultado);
}
//#endregion
