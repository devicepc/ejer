let bienvenido = " bienvenido al juego"; 
let respuestac= "colon";
let respuestain="yo";
let respuestai= "prueba de nuevo";
let pregunta ="quien descubrió américa";
let fin = " fin del juego";

function Game(){
console.log(bienvenido);

retraso();


}
function retraso() {
  console.log(pregunta);
console.log("A) "+ respuestac);
console.log("B) " +respuestain);
var Userresp = prompt("quien descubre america ? ");
console.log(Userresp);
 if(Userresp == respuestac){
console.log("correcto " + respuestac)
}else{
  console.log (respuestai);
  Game();
  } 
}