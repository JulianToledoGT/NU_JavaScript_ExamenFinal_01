/*Julian Toledo 20191127*/
/*
//Funcionalidad de la calculadora
*/




/*
//Efecto de presionar teclas
//Dimensiones de la tecla "mas": x 79; y 149.56; (Aunque éstas dimensiones no se usan pues sus dimensiones se establecen pro porcentaes respecto asu contenedor).
//Dimensiones de las demás teclas: x 76.98; y 62.91; (Para no perderlas si se hace mouse down y no se realiza el mouse up sobre la misma tecla. En este caso debería reaccionar como una tecla atorada que se desatorará al hacer mouse up sobre ella. En este caso no uso el evento cluck porque quería dar la impresión de que la tecla permanece presionada mientras se manteiene el presionado el mouse sobre el objeto, y no simplemente usar un "setTimeout" para restablecerla luego de un brebe tiempo).
*/
var teclas = document.getElementsByClassName("tecla");
for (var i = 0; i < teclas.length; i++) {
    var x = 76.98; 
    var y = 62.91;

    teclas[i].addEventListener("mousedown", function () {
        var tecla = document.getElementById(this.id);
        if (this.id == "mas") {
            tecla.style.width = '85%';
            tecla.style.height = '95%';
        }
        else {
            var xval = x / 1.05;
            var yval = y / 1.05;
            tecla.style.width = xval + 'px';
            tecla.style.height = yval + 'px';
        };
    });

    teclas[i].addEventListener("mouseup", function () {
        var tecla = document.getElementById(this.id);
        if (this.id == "mas") {
            tecla.style.width = '100%';
            tecla.style.height = '100%';
        }
        else {
            tecla.style.width = x + 'px';
            tecla.style.height = y + 'px';
        }
    });
};



/*
var teclas = document.getElementsByClassName("tecla");
for (var i = 0; i < teclas.length; i++) {
    var x = 76.98;
    var y = 62.91;

    if (teclas[i].id == 'mas') {
        teclas[i].addEventListener("mousedown", function () {
            var tecla = document.getElementById(this.id);
            tecla.style.width = '85%';
            tecla.style.height = '95%';
        });
        teclas[i].addEventListener("mouseup", function () {
            var tecla = document.getElementById(this.id);
            tecla.style.width = '100%';
            tecla.style.height = '100%';
        });
    } else {
        teclas[i].addEventListener("mousedown", function () {
            var tecla = document.getElementById(this.id);
            var xval = x / 1.05;
            var yval = y / 1.05;
            tecla.style.width = xval + 'px';
            tecla.style.height = yval + 'px';
        });
        teclas[i].addEventListener("mouseup", function () {
            var tecla = document.getElementById(this.id);
            tecla.style.width = x + 'px';
            tecla.style.height = y + 'px';
        });
    };
};
*/

