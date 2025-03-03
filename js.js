function cambio(){
    document.getElementById("fondo").classList.add("rojo")
}
function textos(){
document.getElementById("textouno").innerHTML = "sas";
document.getElementById("textodos").innerHTML = "sas";
document.getElementById("textotres").innerHTML = "sas";
}
 
function verificarNumero(){
    let num =document.getElementById("numero").value;
    let mensaje =num >10? "Eres mayor a 10": "Es menor o igual a 10";
    document.getElementById("resultado").textContent = mensaje;

}
function miObjeto(){
    var usuario={
        nombre:"miguelsss",
        edad:"33",
        correo:"sancocho@hotmail.com"
    }

    document.getElementById("datos").innerHTML = `nombre : ${usuario.nombre} <br> edad: ${usuario.edad} <br> correo: ${usuario.correo}`;
}

function lista(){
    var notas=["soachaton","dniel","santiago","paulinha",usuario.nombre];
    for(var i=0; i<notas.length;i++){
        document.getElementById("laLista").innerHTML +=`<li>${notas[i]}</li>`
    }
}

literalstring 