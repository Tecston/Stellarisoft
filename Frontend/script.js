const formElement = document.getElementById("saveArboles");

formElement.addEventListener ("submit", (event)=> {
    event.preventDefault();
   let arbol = document.getElementById("arbol").value;
   let latitud = document.getElementById("latitud").value;
   let longitud = document.getElementById("longitud").value;
   let fecha = document.getElementById("fecha").value;

 //guardamos lo valores que se registraron en cada apartador
   let arboles = {arbol : arbol, latitud : latitud, longitud : longitud, fecha : fecha};
   let arbolesJson =JSON.stringify(arboles);
   //Mandarlos al backend
   
   
   console.log(arbolesJson);
})