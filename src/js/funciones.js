//formulario contacto
const mensajes=[];

inicio();
async function inicio() {
    if (await rellenaArray() != null) {
      mensajes = await rellenaArray();
    }
   
}

document.querySelector("#boton").addEventListener("click",()=> {

    let nombreD = document.querySelector("#nombre").value;
    let emailD = document.querySelector("#email").value;
    let comentarioD = document.querySelector("#comentario").value;
    let puntajeD = Number(document.querySelector("#puntaje").value);

    let obj={
      nombre: nombreD,
      email: emailD,
      comentario: comentarioD,
      puntaje: puntajeD
    };

    mensajes.push(obj);
    console.log(mensajes);

    guardar(mensajes);
  });


  async function guardar(arr) {
    datosJSON=JSON.stringify(arr);
    let url="https://asmaa-proyecto-default-rtdb.asia-southeast1.firebasedatabase.app/mensajes.json";
    const datatype= await fetch(url, {
    method:'PUT',
    body: datosJSON,
    headers: {
        'Content-Type':'application/json'
    }
    });
    const response= await datatype.json()
    alert("Gracias por contactarnos");
    limpiar();
}


  async function rellenaArray() {
    let url="https://asmaa-proyecto-default-rtdb.asia-southeast1.firebasedatabase.app/mensajes.json";
    const datatype= await fetch(url);
    const response= await datatype.json();
    return response;
}


function limpiar() {
    document.querySelector("#nombre").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#comentario").value = "";
    document.querySelector("#puntaje").value = "";
}
