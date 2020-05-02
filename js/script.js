var numFloat=0 //Variável para auxiliar na hora de colocar os pontos. O usuário vai poder digitar dois pontos apenas, e após digitar uma vez, só estará disponível para digitar outro após uma operação e um número serem inseridos. 
var antesFloat=false //Variável para auxiliar no caso de colocar um ponto sem ter número antes
var numOperations=0 //Variável auxiliar para deixar colocar apenas uma operação
var antesOperations=false //Variável para auxiliar caso o usuário queira adicionar uma operação antes de ter número
var antesFloatOperations=false //Variável para auxiliar caso o usuário digite um ponto e depois uma operação
var equal=0 //Variável para auxiliar. Só pode obter o resultado se houver uma operação e um número após a operação (se a conta já estiver pronta para ser terminada)
var ciclo=false //Variável auxiliar para, se já tiver mostrado o resultado e o usuário inserir um novo número, começa tudo de novo.

//NÚMEROS 
function seven() {
    var result = document.getElementById("results") //Guarda o visor da calculadora, que guarda os resultados.
    if (ciclo==true) {
        result.value = ""
        ciclo=false
    }
    result.style.color = "black"
    result.value += 7
    antesFloat=true
    antesOperations=true
    antesFloatOperations=true
    if (equal==1) {
        equal=2;
    }
}

function eight() {
    var result = document.getElementById("results") //Guarda o visor da calculadora, que guarda os resultados.
    if (ciclo==true) {
        result.value = ""
        ciclo=false
    }
    result.style.color = "black"
    result.value += 8
    antesFloat=true
    antesOperations=true
    antesFloatOperations=true
    if (equal==1) {
        equal=2;
    }
}

function nine() {
    var result = document.getElementById("results") //Guarda o visor da calculadora, que guarda os resultados.
    if (ciclo==true) {
        result.value = ""
        ciclo=false
    }
    result.style.color = "black"
    result.value += 9
    antesFloat=true
    antesOperations=true
    antesFloatOperations=true
    if (equal==1) {
        equal=2;
    }
}

function four() {
    var result = document.getElementById("results") //Guarda o visor da calculadora, que guarda os resultados.
    if (ciclo==true) {
        result.value = ""
        ciclo=false
    }
    result.style.color = "black"
    result.value += 4
    antesFloat=true
    antesOperations=true
    antesFloatOperations=true
    if (equal==1) {
        equal=2;
    }
}

function five() {
    var result = document.getElementById("results") //Guarda o visor da calculadora, que guarda os resultados.
    if (ciclo==true) {
        result.value = ""
        ciclo=false
    }
    result.style.color = "black"
    result.value += 5
    antesFloat=true
    antesOperations=true
    antesFloatOperations=true
    if (equal==1) {
        equal=2;
    }
}

function six() {
    var result = document.getElementById("results") //Guarda o visor da calculadora, que guarda os resultados.
    if (ciclo==true) {
        result.value = ""
        ciclo=false
    }
    result.style.color = "black"
    result.value += 6
    antesFloat=true
    antesOperations=true
    antesFloatOperations=true
    if (equal==1) {
        equal=2;
    }
}

function one() {
    var result = document.getElementById("results") //Guarda o visor da calculadora, que guarda os resultados.
    if (ciclo==true) {
        result.value = ""
        ciclo=false
    }
    result.style.color = "black"
    result.value += 1
    antesFloat=true
    antesOperations=true
    antesFloatOperations=true
    if (equal==1) {
        equal=2;
    }
}

function two() {
    var result = document.getElementById("results") //Guarda o visor da calculadora, que guarda os resultados.
    if (ciclo==true) {
        result.value = ""
        ciclo=false
    }
    result.style.color = "black"
    result.value += 2
    antesFloat=true
    antesOperations=true
    antesFloatOperations=true
    if (equal==1) {
        equal=2;
    }
}

function three() {
    var result = document.getElementById("results") //Guarda o visor da calculadora, que guarda os resultados.
    if (ciclo==true) {
        result.value = ""
        ciclo=false
    }
    result.style.color = "black"
    result.value += 3
    antesFloat=true
    antesOperations=true
    antesFloatOperations=true
    if (equal==1) {
        equal=2;
    }
}

function zero() {
    var result = document.getElementById("results") //Guarda o visor da calculadora, que guarda os resultados.
    if (ciclo==true) {
        result.value = ""
        ciclo=false
    }
    result.style.color = "black"
    result.value += 0
    antesFloat=true
    antesOperations=true
    antesFloatOperations=true
    if (equal==1) {
        equal=2;
    }
}

//PONTO FLUTUANTE
function float() {
    var result = document.getElementById("results") //Guarda o visor da calculadora, que guarda os resultados.
    if ((numFloat==0) && (antesFloat==true)) {
        result.value += "."
        numFloat=1
        antesFloat=false
        antesFloatOperations=false
    }
}

//OPERAÇÕES
function division() {
    var result = document.getElementById("results") //Guarda o visor da calculadora, que guarda os resultados.
    if (numOperations==0 && antesOperations==true && antesFloatOperations==true) {
        result.value += "/"
        numFloat=0
        numOperations=1
        antesFloat=false
        equal=1
    }
}

function multiplication() {
    var result = document.getElementById("results") //Guarda o visor da calculadora, que guarda os resultados.
    if (numOperations==0 && antesOperations==true && antesFloatOperations==true) {
        result.value += "x"
        numFloat=0
        numOperations=1
        antesFloat=false
        equal=1
    }
}

function subtraction() {
    var result = document.getElementById("results") //Guarda o visor da calculadora, que guarda os resultados.
    if (numOperations==0 && antesOperations==true && antesFloatOperations==true) {
        result.value += "-"
        numFloat=0
        numOperations=1
        antesFloat=false
        equal=1
    }
}

function addition() {
    var result = document.getElementById("results") //Guarda o visor da calculadora, que guarda os resultados.
    if (numOperations==0 && antesOperations==true && antesFloatOperations==true) {
        result.value += "+"
        numFloat=0
        numOperations=1
        antesFloat=false
        equal=1
    }
}

//RESULTADO
function equalF() {
    if (equal==2) {
        var um, dois
        var result = document.getElementById("results").value //Guarda o visor da calculadora, que guarda os resultados.

        var resultadoS = result.split("/")
        um = Number(resultadoS[0])
        dois = Number(resultadoS[1])
        if (dois==0) {
            result = document.getElementById("results")
            result.value = "ERROR"
            result.style.color = "darkred"
            ciclo=true
            numFloat=0 
            antesFloat=false 
            numOperations=0 
            antesOperations=false 
            antesFloatOperations=false 
            equal=0
        }
        else {
            var resultadoFinal = um/dois 
        }
        if (isNaN(resultadoFinal)==false) {
            result = document.getElementById("results")
            result.value = resultadoFinal
        }
        else {
            resultadoS = result.split("x")
            um = Number(resultadoS[0])
            dois = Number(resultadoS[1])
            resultadoFinal = um*dois 
            if (isNaN(resultadoFinal)==false) {
                result = document.getElementById("results")
                result.value = resultadoFinal
            }
            else {
                resultadoS = result.split("-")
                um = Number(resultadoS[0])
                dois = Number(resultadoS[1])
                resultadoFinal = um-dois 
                if (isNaN(resultadoFinal)==false) {
                    result = document.getElementById("results")
                    result.value = resultadoFinal
                }
                else {
                    resultadoS = result.split("+")
                    um = Number(resultadoS[0])
                    dois = Number(resultadoS[1])
                    resultadoFinal = um+dois 
                    if (isNaN(resultadoFinal)==false) {
                        result = document.getElementById("results")
                        result.value = resultadoFinal
                    }
                }
            }
        }
        ciclo=true
        numFloat=0 
        antesFloat=false 
        numOperations=0 
        antesOperations=false 
        antesFloatOperations=false 
        equal=0
        result.style.color = "black"
    }
}

//APAGAR VIA BOTÃO
function del() {
    var del = document.getElementById("c-all")
    result = document.getElementById("results")
    result.value = ""
    ciclo=true
    numFloat=0 
    antesFloat=false 
    numOperations=0 
    antesOperations=false 
    antesFloatOperations=false 
    equal=0
}