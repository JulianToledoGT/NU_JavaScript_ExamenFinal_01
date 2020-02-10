/*Julian Toledo 20200210*/
/*
//Efecto de presionar teclas
//Dimensiones de la tecla "mas": x 79; y 149.56; (Aunque éstas dimensiones no se usan pues sus dimensiones se establecen por porcentajes respecto a su contenedor).
//Dimensiones de las demás teclas: x 76.98; y 62.91; (Para no perderlas si se hace mouse down y no se realiza el mouse up sobre la misma tecla. En este caso debería reaccionar como una tecla atorada que se desatorará al hacer mouse up sobre ella. En este caso no uso el evento clic porque quería dar la impresión de que la tecla permanece presionada mientras se mantiene presionado el mouse sobre el objeto, y no simplemente usar un "setTimeOut" para restablecerla luego de un brebe tiempo).
*/

var teclas = document.getElementsByClassName("tecla");
var mi_pantalla = document.getElementById("display");
var en_curso = false;
var resultado = 0;
var operador = "";
var valor = 0;
var itr = 0;
var x = 76.98; 
var y = 62.91;

for (var i = 0; i < teclas.length; i++) {
    teclas[i].addEventListener("mousedown", function () {
        var tecla = document.getElementById(this.id);
        if (this.id == "mas") {
            tecla.style.width = '85%';
            tecla.style.height = '95%';
        } else {
        var xval = x / 1.05;
            var yval = y / 1.05;
            tecla.style.width = xval + 'px';
            tecla.style.height = yval + 'px';
        };
        operar(this.id);
    });

    teclas[i].addEventListener("mouseup", function () {
        var tecla = document.getElementById(this.id);
        if (this.id == "mas") {
            tecla.style.width = '100%';
            tecla.style.height = '100%';
        } else {
            tecla.style.width = x + 'px';
            tecla.style.height = y + 'px';
        }
    });
};

function operar(signo) {
    if (parseInt(signo)==signo){
        if (mi_pantalla.innerText.replace("-","").replace(".","").length < 8){
            if (mi_pantalla.innerText == "0"){
                mi_pantalla.innerText = signo;
            } else {
                mi_pantalla.innerText += signo;
            }
        }
    } else if (signo=="punto"){
        if (mi_pantalla.innerText.indexOf('.') == -1){
            mi_pantalla.innerText += ".";
        }
    } else if (signo=="sign"){
        mi_pantalla.innerText *= -1;
    } else if (signo=="raiz"){
        mi_pantalla.innerText = resultado8(Math.sqrt(parseFloat(mi_pantalla.innerText)));
    } else if (signo=="on"){
        en_curso = false;
        resultado = 0;
        operador = "";
        valor = 0;
        mi_pantalla.innerText = "0";
    } else if (signo=="igual"){
        if (itr < 1){
            valor = parseFloat(mi_pantalla.innerText)
            itr += 1;
        };
        switch(operador){
            case "mas":
                resultado += valor;
                break;
            case "menos":
                resultado -= valor;
                break;
            case "por":
                resultado *= valor;
                break;
            case "dividido":
                resultado /= valor;
                break;
        }
        mi_pantalla.innerText = resultado8(resultado);
    } else {
        itr = 0;
        operador = signo;
        valor = parseFloat(mi_pantalla.innerText)
        if (en_curso == false){
            en_curso = true;
            resultado = valor;
        }
        mi_pantalla.innerText = 0;
    }
}

function resultado8 (mi_resultado){
    var lng = 8;
    var str_resultado = String(mi_resultado);
    if (str_resultado.indexOf('.') != -1){lng += 1};
    if (str_resultado.indexOf('-') != -1){lng += 1};
    return str_resultado.substr(0,lng)
}
