//verifica espacios vacios
const verificaVacio = (contenido) => {
  return (contenido.trim().length = 0);
};
//auxiliar apra enviarmensajes en el punto de errores
const ErrorMensaje = (mensaje, form) => {
  document.getElementById(`${form}-error`).innerHTML = `${mensaje}`;
};
//verificacion de email
const verificacionEmail = (contenido, form) => {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (verificaVacio(contenido)) {
    ErrorMensaje(`Complete Email`, form);
  } else if (!emailRegex.test(contenido)) {
    ErrorMensaje("Por favor, ingresa un correo electrónico válido.", form);
  } else {
    return true; // Corregido: devolver true si la verificación es exitosa
  }
};
//verificacion de contraseña
const verificacionContrasena = (contenido, form) => {
  if (verificaVacio(contenido)) {
    ErrorMensaje(`Complete Contraseña`, form);
    return false;
  }

  return true;
};
// verificaion de usuario
const verificacionUsuario = (contenido, form) => {
  if (verificaVacio(contenido)) ErrorMensaje(`Complete Usuario`, form);
  if (contenido.trim().length > 8) {
    ErrorMensaje(`Usuario muy Largo, Max 8 caracteres`, form);
    return false;
  }
  if (contenido.trim().length < 4) {
    ErrorMensaje(`Usuario muy corto, Min 4 caracteres`, form);
    return false;
  }
  return true;
};

//verificacion de Registro nuevo
function verificacionRegistro(form) {
  const usuario = document.getElementById(`${form}-input-usuario`).value;
  const contrasena = document.getElementById(`${form}-input-contasena`).value;
  const email = document.getElementById(`${form}-input-email`).value;

  if (
    verificacionUsuario(usuario, form) &&
    verificacionContrasena(contrasena, form) &&
    verificacionEmail(email, form)
  ) {
    ErrorMensaje("Registro exitoso", form);

    setTimeout(() => {
      window.location.href = "./pages/Home.html";
    }, 2000);
  }
}
//verificacion Log In
function verificarIngresoCuenta(form) {
  const usuario = document.getElementById(`${form}-input-usuario`).value;
  const contrasena = document.getElementById(`${form}-input-contrasena`).value;

  if (
    verificacionUsuario(usuario, form) &&
    verificacionContrasena(contrasena, form)
  ) {
    ErrorMensaje("Ingreso Correcto", form);
    setTimeout(() => {
      window.location.href = "./Home.html"; //faltaria pasar el id del usuario para poder ingresar a cada home identificado
    }, 2000);
  } else {
    ErrorMensaje("Usuario/Contaseña invalidas", form);
  }
}

//faltaria el fetch a la base de datos para verificar que no este ya registado
