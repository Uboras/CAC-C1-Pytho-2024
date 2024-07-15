const formulario = ()=>{

    const formulario = document.getElementById("form-registro");

    formulario.innerHTML = 
    `<form id="registro" onsubmit="verificacionRegistro('registro'); return false;">
        <input type="email" id="registro-input-email" placeholder="Ingresa tu email..."  />
        <input type="text" id="registro-input-usuario" placeholder="Usuario"  />
        <input type="password" id="registro-input-contasena" placeholder="Contraseña..."  />
        <button type="submit">Registro</button><br/>
        <div id="registro-error">&nbsp;</div>
        <div ><p id="textoUsuario">Usuario 4 a 8 Caracteres</p></div>
        <div><p id="text">¿Tenés cuenta? clickea<a href="./pages/LogIn.html">Acá</a></p></div>
    </form>`
}

formulario();