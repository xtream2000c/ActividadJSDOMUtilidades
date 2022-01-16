window.onload = main;

var mesAhora;
var yearAhora;

function main(){

    document.getElementById("ImprimeCalendario").addEventListener("click", imprimirCalendario);

}

function imprimirCalendario(){

    var hoy = new Date(); // Cojo el dia de hoy
    mesAhora = hoy.getMonth(); // Cojo este mes
    yearAhora = hoy.getFullYear(); //Cojo este año
    var diaUno = new Date(); // Creo una fecha nueva
    diaUno.setDate(1); // Digo que la fecha empieza en el dia 1
    var diaSem = diaUno.getDay(); // Cojo la posicion del dia uno en la semana
    
    var contenedor = document.createElement('div');
    var tabla = document.createElement('table');
    contenedor.appendChild(tabla);
    tabla.id="tabla";
    tabla.setAttribute("border", 1);

    fila = tabla.insertRow(0);
    
    var cabecera = new Array ('L','M','X','J','V','S','D');
    for(var i in cabecera){
        var cabeceraTabla = document.createElement("th");
        var texto = document.createTextNode(cabecera[i]);
        cabeceraTabla.appendChild(texto);
        fila.appendChild(cabeceraTabla);
    }

    fila = tabla.insertRow(1);

    for (index = 0; index < diaSem-1; index++) {
        var primeraSemana = document.createElement("td");
        texto = document.createTextNode(" ");
        primeraSemana.appendChild(texto);
        fila.appendChild(primeraSemana);
    }
    var diaSem1 = 1;
    for (index = diaSem-1; index < 7; index++) {
        primeraSemana = document.createElement("td");
        if (hoy.getDate()==diaSem1) {
            texto = document.createTextNode(diaSem1);
        }else{
            texto = document.createTextNode(diaSem1);
        }
        primeraSemana.appendChild(texto);
        fila.appendChild(primeraSemana);
        diaSem1++;
    }

    var mesActual = queMes();

    var semanas = mesActual/7;
    
    var dia = diaSem1

    for(var i=2; i < semanas+2; i++){

        fila = tabla.insertRow(i);

        for (index = 0; index < 7 ; index++) {
            var semanaIntroducida = document.createElement("td");
            
            if(dia<mesActual+1){
                if (hoy.getDate()==dia) {
                    var textoSI = document.createTextNode(dia);
                    semanaIntroducida.style.fontWeight="bold";
                }else{
                    var textoSI = document.createTextNode(dia);
                }
            }else{
                var textoSI = document.createTextNode(" ");
            }
            
            semanaIntroducida.appendChild(textoSI);
            fila.appendChild(semanaIntroducida);
            dia++;
        }

    }

    document.body.appendChild(contenedor);
}

function queMes(){ //Comprueba en que mes estoy
    switch (mesAhora){
        case 0: //Enero
            return 31;
        case 1:
            return 28;
        case 2:
            return 31;
        case 3:
            return 30;
        case 4:
            return 31;
        case 5:
            return 30;
        case 6:
            return 31;
        case 7:
            return 31;
        case 8:
            return 30;
        case 9:
            return 31;
        case 10:
            return 30;
        case 11://Diciembre
            return 31;
    }
}