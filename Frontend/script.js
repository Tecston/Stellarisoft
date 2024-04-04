// Obtiene el elemento del DOM que representa el formulario de guardado de árboles.s
const formElement = document.getElementById("saveArboles");

// Agrega un oyente de eventos al formulario para manejar el evento de envío (submit).
formElement.addEventListener ("submit", (event)=> {
    //Evita que la pagina se este racargando cada ves que añadimos un nuevo valor
    event.preventDefault();
    //Se obtiene los valors ingresados por el usuario
   let arbol = document.getElementById("arbol").value;
   let latitud = document.getElementById("latitud").value;
   let longitud = document.getElementById("longitud").value;
   let fecha = document.getElementById("fecha").value;

   //guardamos lo valores que se registraron en cada apartador
   let arboles = {arbol : arbol, latitud : latitud, longitud : longitud, fecha : fecha};
   let arbolesJson =JSON.stringify(arboles);

   //Mandarlos al backend
   fetch(`http://localhost:3000/arboles`, {
    method : `post`,
    body : arbolesJson
   })
   
   //Resaliza una solicitud para obtener los datos y lls muestar en la consola
   fetch(`http://localhost:3000/arboles`).then(x => x.json().then(console.log))
})