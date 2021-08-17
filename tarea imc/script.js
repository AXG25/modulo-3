window.onload = empecemos();

function empecemos(){
    let btn = document.getElementById('calcular-btn');
    btn.addEventListener('click',calcular)
    
}

function calcular() {
    let edad = document.getElementById('input-edad').value;
    let peso = document.getElementById('input-peso').value;
    let altura = document.getElementById('input-altura').value;
    let imc = peso / (altura * altura)
    

    if(imc < 24.9){
       document.getElementById('resultado').innerHTML = `su masa corporal es de ${Math.round(imc)}. esta saludable`;
    }

    else if(imc < 29.9){
        document.getElementById('resultado').innerHTML = `su masa corporal es de ${Math.round(imc)}. tiene sobrepeso`;
 }

     else if(imc < 34.9){
        document.getElementById('resultado').innerHTML = `su masa corporal es de ${Math.round(imc)}. tiene obesidad grado 1`;
    }

     else if(imc < 39.9) {
        document.getElementById('resultado').innerHTML = `su masa corporal es de ${Math.round(imc)}. tiene obesidad gado 2`;
     }

     else {
        document.getElementById('resultado').innerHTML = `su masa corporal es de ${Math.round(imc)}. tiene obesidad grado 3`;
     }
        

}  
    