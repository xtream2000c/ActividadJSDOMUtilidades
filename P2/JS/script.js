window.onload = main;

function main(){

    document.getElementById("ImprimeCalendario").addEventListener("click", imprimirCalendario);

}

function imprimirCalendario(){

    var hoy = new Date(); // Cojo el dia de hoy
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
        var cabeceraTabla = document.createElement("td");
        var texto = document.createTextNode(" ");
        cabeceraTabla.appendChild(texto);
        fila.appendChild(cabeceraTabla);
    }
    var diaSem1 = 1;
    for (index = diaSem-1; index < 7; index++) {
        var cabeceraTabla = document.createElement("td");
        var texto = document.createTextNode(diaSem1);
        cabeceraTabla.appendChild(texto);
        fila.appendChild(cabeceraTabla);
        diaSem1++;
    }



    document.body.appendChild(contenedor);
}