let nombre = prompt("Cual es tu nombre?");
let apellido = prompt("Cual es tu apellido, " + nombre + "?")
let edad = prompt("Cual es tu edad?");
let direccion = prompt("Cual es tu direccion?");
let pais = prompt("Cual es tu pais de origen?")
let comida = prompt("Comida favorita?")

let resultado = nombre + " " + apellido + " tiene " + edad + " años de edad, vive en " + direccion + ". Su pais de origen es " + pais + " y le gusta mucho comer " + comida + ", asi es " + nombre + ".";
alert(resultado) 



let nombre = prompt ("Hola, ¿Cual es tu nombre?")
let adivina = prompt ("Perfecto, " + nombre + "... ¿Quieres jugar un juego?")
let apellido = prompt ("Bueno, quieras o no vamos a jugar. Cual es tu apellido?")
let sitio = prompt ("De donde eres?")
let edad = prompt ("En que año naciste?")

let respuesta = "Genial, te llamas " + nombre + " y tu apellido es " + apellido + ", eres de " + sitio + " y por el año en que naciste, seguro tienes " + (2019 - edad) + " o " + ((2019 - edad) - 1) + ". ¿Adiviné verdad?";
alert(respuesta)




let radio = prompt ("Ingresa el valor del radio")


let resultado = "Tu diametro es de " + (2 * radio) + " y tu area es " + ((Math.PI) * (radio * radio)) + ".";
alert(resultado)


let color = prompt ("Dime un color:");
if (color == "verde") {
    console.log ("Eres feminista o aliado, matabebes");
}else if (color == "azul") {
    console.log ("Ah, eres provida... Cuantos bebes has adoptado?"); 
} else if(color == "rosa") {
    console.log ("Basica eh");
 } else if(color == "rojo") {
     console.log("Chavista tenias que ser");
} else {
    console.log ("Ah bueno... Normal, equis como vos."); 
}

let hair = prompt ("Cual es la longitud de tu cabello?");
let beard = confirm ("Tienes barba?") 
if (hair == "largo" && beard) {
    alert ("Ok, tienes que cortartelo y la barba tambien.");
} else if (hair == "medio" && beard) {
    alert ("Bien, solo cortate las puntas y peinate la barba.");
} else if (hair == "corto" && beard) {
    alert ("Tienes que raparte y la barba tambien se va.");
} else if (hair == "no se" && beard) {
    alert ("Como no vas a saber?");  
} else if (hair == "no tengo" && beard) {
    alert = "bueno, no tendras barba tampoco."
} else if (hair == "largo") {
    alert ("Ok, solo te cortaremos el cabello.");
} else if (hair == "medio") {
    alert ("Solo te cortaremos las puntas entonces");
} else if (hair == "corto") {
    alert ("Bueno, te raparemos la cabeza tambien");
} else if (hair == "no se") {
        alert ("Ah pero no sabes nada."); 
} else if (hair == "no tengo") {
    alert("El peladito");
} else {
    alert ("La pregunta era muy simple, pero vienes tu y me respondes con esto... Que va.");
}


