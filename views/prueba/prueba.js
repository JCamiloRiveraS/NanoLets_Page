const calculadora = document.getElementById("calculadora");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
 

const ver = () => {
 return document.write("Resultado");
};

const calcular = (num1, op, num2) =>{
if(op === "+"){
resultado = parseInt(num1 + num2);
  document.write(`<br> conexion exitosa suma  ${resultado}`);
}else if(op === "-"){
  resultado = parseInt(num1 - num2);
  document.write(`<br> conexion exitosa resta  ${resultado}`);
}else if(op === "*"){
  resultado = parseInt(num1 * num2);
  document.write(`<br> conexion exitosa multiplicación  ${resultado}`);
}else if(op === "/"){
  resultado = parseInt(num1 / num2);
  document.write(`<br> conexion exitosa división  ${resultado}`);
}else{
  document.write(" <br> Error de signo")
}
}
let num01 =prompt("ingresa el primer número ");
let sig =prompt("ingresa signo ");
let num02 =prompt("ingresa el segundo número ");
ver();
calcular(num01, sig, num02);