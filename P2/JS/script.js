window.onload = main;

function main(){

    document.getElementById("ImprimeCalendario").addEventListener("click", imprimirCalendario);

}

function imprimirCalendario(){

    var hoy = new Date(); // Cojo el dia de hoy
    var mes = hoy.getMonth; // Cojo este mes
    var year = hoy.getFullYear; //Cojo este año
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
        var texto = document.createTextNode(" ");
        primeraSemana.appendChild(texto);
        fila.appendChild(primeraSemana);
    }
    var diaSem1 = 1;
    for (index = diaSem-1; index < 7; index++) {
        primeraSemana = document.createElement("td");
        var texto = document.createTextNode(diaSem1);
        primeraSemana.appendChild(texto);
        fila.appendChild(primeraSemana);
        diaSem1++;
    }

    switch (mes){
        case 0:
            return 31;
            break;
        case 1:
            return 28;
            break;
        case 2:
            return 31;
            break;
        case 3:
            return 30;
            break;
        case 4:
            return 31;
            break;
        case 5:
            return 30;
            break;
        case 6:
            return 31;
            break;
        case 7:
            return 31;
            break;
        case 8:
            return 30;
            break;
        case 9:
            return 31;
            break;
        case 10:
            return 30;
            break;
        case 11:
            return 31;
            break;
    }

    document.body.appendChild(contenedor);
}