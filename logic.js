class Persona {
     constructor(nombre, edad) {
          this.nombre = nombre;
          this.edad = edad;
     }
}

let personas = Array(Persona);
let sumaEjer7 = 0;
let cadenasTextoEjer8 = "";

function mayorEdad(){
     let contenidoInput = document.getElementById("edad");
     let resultado = document.getElementById("resultadoEjer1");
     if(contenidoInput.value>=18){
          resultado.innerHTML = "Usted es mayor de edad";
     }else if(contenidoInput.value<18 && contenidoInput.value>=0){
          resultado.innerHTML = "Usted es menor de edad";
     }else{
          alert("ERROR: NO ESTA PERMITIDO INGRESAR UNA EDAD NEGATIVA");
     }
}

function calificacion(){
     let contenidoInput = document.getElementById("nota");
     let resultado = document.getElementById("resultadoEjer2");

     if(contenidoInput.value>=0 && contenidoInput.value<=10){
          if(contenidoInput.value<=2){
               resultado.innerHTML = "Muy deficiente";
          }else if(contenidoInput.value>=3 && contenidoInput.value<=4){
               resultado.innerHTML = "Insuficiente";
          }else if(contenidoInput.value>=5 && contenidoInput.value<=6){
               resultado.innerHTML = "Suficiente";
          }else if(contenidoInput.value==7 && contenidoInput.value<=8){
               resultado.innerHTML = "Bien";
          }else if(contenidoInput.value==9){
               resultado.innerHTML = "Notable";
          }else if(contenidoInput.value==10){
               resultado.innerHTML = "Sobresaliente";
          }
     }else{
          alert("ERROR: INGRESE UNA NOTA DEL 1 AL 10");
     }
}

function personaMayor(){
     let resultado = document.getElementById("resultadoEjer3");
     personas.push(new Persona(document.getElementById("nombre1").value, document.getElementById("edad1").value));
     personas.push(new Persona(document.getElementById("nombre2").value, document.getElementById("edad2").value));
     personas.push(new Persona(document.getElementById("nombre3").value, document.getElementById("edad3").value));

     console.log(personas);

     personas.sort(function(a, b){return b.edad - a.edad});

     resultado.innerHTML = "La persona mayor es " + personas[1].nombre;
}

function textoAMayuscula(){
     let contenidoInput = document.getElementById("textoMinusculas");
     let resultado = document.getElementById("resultadoEjer4");

     resultado.innerHTML = contenidoInput.value.toUpperCase();
}

function piramide(maxNum){
     let resultado = document.getElementById("piramide");
     let piramide = "";
     for(let i = 1; i<=maxNum; i++){
          for(let j = 1; j<=i; j++){
               piramide += i;
          }
          piramide += "<br>";
     }
     resultado.innerHTML = piramide;
}

function resaltarMultiplos(limite, primerNumero, segundoNumero){
     let resultado = document.getElementById("resultadoEjer6");
     let multiplosResaltados = "";

     for(let i = 1; i<=limite; i++){
          console.log(i % primerNumero == 0)
          console.log(i % segundoNumero == 0)
          if((i % primerNumero == 0) && (i % segundoNumero == 0)){
               multiplosResaltados += " [" + i + "]";
          }else{
               multiplosResaltados += " " + i;
          }
     }

     resultado.innerHTML = multiplosResaltados;
}

function sumarNumeros(){
     let resultado = document.getElementById("resultadoEjer7");
     let numeroIngresado = document.getElementById("numerosEjer7").value;

     if(sumaEjer7 == 0){
          resultado.innerHTML = "";
     }

     if(!isNaN(numeroIngresado)){
          if(numeroIngresado == 0){
               resultado.innerHTML = "La suma total de los números es: " + sumaEjer7;
               sumaEjer7 -= sumaEjer7;
          }else{
               sumaEjer7 += parseInt(numeroIngresado);
          }
     }else{
          alert("ERROR: SOLO ESTA PERMITIDO INGRESAR NÚMEROS");
     }
     console.log(sumaEjer7);
}

function unirCadenas(){
     let resultado = document.getElementById("resultadoEjer8");
     let cadenaIngresada = document.getElementById("cadenasEjer8").value;

     if(cadenasTextoEjer8 == ""){
          resultado.innerHTML = "";
     }

     if(cadenaIngresada != "fin"){
          if(cadenasTextoEjer8 == ""){
               cadenasTextoEjer8 += cadenaIngresada;
          }else{
               cadenasTextoEjer8 += "-" + cadenaIngresada;
          }
     }else{
          resultado.innerHTML = cadenasTextoEjer8;
          cadenasTextoEjer8 = "";
     }
}

function contarVocales(){
     let resultado = document.getElementById("resultadoEjer9");
     let cadenaIngresada = document.getElementById("cadenaEjer9").value;

     const vocales = "aeiouAEIOU";
     let contador = 0;

     for (let i = 0; i < cadenaIngresada.length; i++) {
          if (vocales.includes(cadenaIngresada[i])) {
               contador++;
          }
     }
     resultado.innerHTML = "La cantidad de vocales que contiene la cadena de caracteres es: " + contador;
}

function invertirCadena(){
     let resultado = document.getElementById("resultadoEjer10");
     let cadenaIngresada = document.getElementById("cadenaEjer10").value;

     let cadenaInvertida = "";
     
     for(let i = cadenaIngresada.length-1; i>=0; i--){
          cadenaInvertida += cadenaIngresada[i];
     }

     resultado.innerHTML = cadenaInvertida;
}

function calcularAreaCirculo(){
     let resultado = document.getElementById("resultadoEjer11");
     let radioIngresado = document.getElementById("radioEjer11").value;

     console.log(parseFloat(radioIngresado)^2)
     console.log(parseFloat(radioIngresado))

     let area = Math.PI * (Math.pow(parseFloat(radioIngresado), 2));

     resultado.innerHTML = "El area del círculo es: " + area;
}