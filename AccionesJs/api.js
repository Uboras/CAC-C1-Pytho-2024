//Usuarios
// Verificación de Registro nuevo //POST
const GuardarRegistro = (data, form) => {
  fetch("http://127.0.0.1:5000/user/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        ErrorMensaje("Registro exitoso", form);
        setTimeout(() => {
          window.location.href = "./pages/Home.html";
        }, 2000);
      } else {
        ErrorMensaje(result.message, form);
      }
    })
    .catch((error) => {
      ErrorMensaje("Hubo un error al procesar el registro.", form);
      console.error("Error:", error);
    });
};

//Peliculas
//GET PELICULAS HOME
 function fetchPeliculas() {
  const response =  fetch("http://127.0.0.1:5000/pelicula/peliculas", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    })
    .catch((err) => console.log("Error: " + err));

  return response;
}
