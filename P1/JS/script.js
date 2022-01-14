window.onload = main;

function main(){

    document.getElementById("opcion1").addEventListener("click", cambia);
    document.getElementById("opcion2").addEventListener("click", cambia);
}

function cambia(){

    var vista = this.childNodes[1].style;
    
    if (vista.display == '' || vista.display == 'none') {
        vista.display = 'block';
    } else {
        vista.display = 'none';
    }

}