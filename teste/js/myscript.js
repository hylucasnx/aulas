
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
    for(var n = 0; n < 10; n++) 
        var soma = soma + n
    }
    document.write() 
function contar() {
   var n = 0
    while (n <= 25) 
        n =  pronpt('diga um número')
    
    }
    function listas () {
        var lista = [1,2,3,4,5,6,7]
        for ( var cont = 0; cont < cars.lenght; cont++) {
            var texto = car(cont)
            console.log(texto)
        }
    }

    function contar(){
        var a = ["josé","maria","padre","joana","bento","francisco" ]
        for (let index = 0; index < a.lenght; index++) {
            const element = a[index];

            if(element == "pastor"){
                document.write("casinha:" + index + "tem" + element + "<br>")
                break
            }
        }

        var quem = prompt("diga um nome")
        var ondeEsta = a.indexOf(quem) // -1
        if(ondeEsta != -1){
            document.write("casinha:" + ondeEsta + "tem" + "<br>")
            
        }
    }

    const arrayValores = [];
    for (let i = 0; i <= numeroFornecido; i++) {
        arrayaValores.push(i);
    }
    
    document.write("Original: " + arrayValores + "<br>");
    document.write("<hr>");
    
    const valorRemover = parseInt(prompt("Digite um valor para remover:"));

    const index = arrayValores.indexOf(valorRemover);
    if(index !== -1) {
        arrayValores.splice(index,1);
    }
     document.write("Alterado:" + arrayValores + "<br>");
     document.write("<hr>");

    function contar() {
        var medias = [];
        var m1 = prompt("diga a media do 1o tri");
        var m2 = promprt("diga a media do o2 tri");

        medias[0] = m1;
        medias[1] = m2;

        var somatoria = 0.0;
        for (var i = 0; i < medias.length; i++) {
            var nota = medias[i];
            somatoria = somatoria + parseFloat(nota);
        }

        var m3 = 18.0 - somatoria;
        if (m3< 10.0) {
            alert("Voce precisa alcançar" + m3);

        } else [
            alert("nao deu.precisaria de " = + m3" . Esta reprovado!");
        ]

    }   
    
     
