window.onload = main;

function main(){

    document.getElementById("ImprimeCalendario").addEventListener("click", imprimirCalendario);

}

function imprimirCalendario(){
    
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

    

    document.body.appendChild(contenedor);
}