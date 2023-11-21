
function mudarFrase() {
    var elemento = document.getElementById("frase")
    elemento.innerHTML = "Qualquer frase"
    elemento.style.color = "red";
    elemento.style.fontSize = "25px";
    elemento.style.backgroundColor = "yellow";
    document.body.style.backgroundColor = "blue";
    elemento.innerHTML = "<img src=\'img/a.jpeg\' />";
}

function trocarClasse () {
    var fraseAtual = document.getElementById("frase");
    fraseAtual.className = "h1_2";
}

function trocarTexto() {
    var elemento = document.getElementById("frase");
    var elementoNovo = document.getElementById("novaFrase").value;
    elemento.innerHTML = elementoNovo;
}

function somar() {
    let campoN1 = document.getElementById("n1");
    let valorN1 = parseInt(campoN1.value);

    let campoN2 = document.getElementById("n2");
    let valorN2 = parseInt(campoN2.value);

    let resultadoDaSoma = valorN1 + valorN2;

    let campoResultado = document.getElementById("resultado")
    campoResultado.value = resultadoDaSoma;
}

function subtrair() {
    let campoN1 = document.getElementById("n1");
    let valorN1 = parseInt(campoN1.value);

    let campoN2 = document.getElementById("n2");
    let valorN2 = parseInt(campoN2.value);

    let resultadoDaSoma = valorN1 - valorN2;

    let campoResultado = document.getElementById("resultado")
    campoResultado.value = resultadoDaSoma;
}

function multiplicar() {
    let campoN1 = document.getElementById("n1");
    let valorN1 = parseInt(campoN1.value);

    let campoN2 = document.getElementById("n2");
    let valorN2 = parseInt(campoN2.value);

    let resultadoDaSoma = valorN1 * valorN2;

    let campoResultado = document.getElementById("resultado")
    campoResultado.value = resultadoDaSoma;
}

function dividir() {
    let campoN1 = document.getElementById("n1");
    let valorN1 = parseInt(campoN1.value);

    let campoN2 = document.getElementById("n2");
    let valorN2 = parseInt(campoN2.value);

    let resultadoDaSoma = valorN1 / valorN2;

    let campoResultado = document.getElementById("resultado")
    campoResultado.value = resultadoDaSoma;
}

function contar() {
    var soma = 0
    for(var n = 0; n < 10; n++) {
        var soma = soma + n
    }
    document.write() 
function contar() {
   var n = 0
    while (n <= 25) {
        n =  pronpt('diga um número')

    }
    function listas () {
        var lista = [1,2,3,4,5,6,7]
        for ( var cont = 0; cont < cars.lenght; cont++) {
            var texto = car(cont)
            console.log(texto)
        }
    }


    
       

    

     
