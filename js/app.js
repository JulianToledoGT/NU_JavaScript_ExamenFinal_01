/*Julian Toledo 20200210*/
/*
//Efecto de presionar teclas
//Dimensiones de la tecla "mas": x 79; y 149.56; (Aunque éstas dimensiones no se usan pues sus dimensiones se establecen por porcentajes respecto a su contenedor).
//Dimensiones de las demás teclas: x 76.98; y 62.91; (Para no perderlas si se hace mouse down y no se realiza el mouse up sobre la misma tecla. En este caso debería reaccionar como una tecla atorada que se desatorará al hacer mouse up sobre ella. En este caso no uso el evento clic porque quería dar la impresión de que la tecla permanece presionada mientras se mantiene presionado el mouse sobre el objeto, y no simplemente usar un "setTimeOut" para restablecerla luego de un brebe tiempo).
*/

var teclas = document.getElementsByClassName("tecla");
var mi_pantalla = document.getElementById("display");
var x = 76.98; 
var y = 62.91;

var calculadora = {
    en_curso: false,
    itr: 0,
    resultado: 0,
    operador: "",
    valor: 0,
    inicializar: function(){
        this.en_curso = false;
        this.resultado = 0;
        this.operador = "";
        this.valor = 0;
        this.itr = 0;
    },
    resultado8: function(mi_resultado){
        var lng = 8;
        var str_resultado = String(mi_resultado);
        if (str_resultado.indexOf('.') != -1){lng += 1};
        if (str_resultado.indexOf('-') != -1){lng += 1};
        return str_resultado.substr(0,lng)
    },
    operar: function(signo) {
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
        } else if (signo=="raiz"){  //Se implemebtó, a pesar de no ser obligatorio
            mi_pantalla.innerText = this.resultado8(Math.sqrt(parseFloat(mi_pantalla.innerText)));
        } else if (signo=="on"){
            this.inicializar;
            mi_pantalla.innerText = "0";
        } else if (signo=="igual"){
            if (this.itr < 1){
                this.valor = parseFloat(mi_pantalla.innerText)
                this.itr += 1;
            };
            switch(this.operador){
                case "mas":
                    this.resultado += this.valor;
                    break;
                case "menos":
                    this.resultado -= this.valor;
                    break;
                case "por":
                    this.resultado *= this.valor;
                    break;
                case "dividido":
                    this.resultado /= this.valor;
                    break;
            }
            mi_pantalla.innerText = this.resultado8(this.resultado);
        } else {
            this.itr = 0;
            this.operador = signo;
            this.valor = parseFloat(mi_pantalla.innerText)
            if (this.en_curso == false){
                this.en_curso = true;
                this.resultado = this.valor;
            }
            mi_pantalla.innerText = 0;
        }
    }
}

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
        calculadora.operar(this.id);
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
