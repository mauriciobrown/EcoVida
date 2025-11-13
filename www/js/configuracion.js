function generarVistaConfiguracion() {
  return `
    <h2>Configuración</h2>
    <label for="nombreUsuario">Nombre:</label>
    <input type="text" id="nombreUsuario" placeholder="Tu nombre">
    <button onclick="guardarConfiguracion()">Guardar</button>
  `;
}

function guardarConfiguracion() {
  const nombre = document.getElementById('nombreUsuario').value.trim();
  if (nombre === '') return alert('Ingresa tu nombre.');
  localStorage.setItem('usuarioEcoVida', nombre);
  alert('Configuración guardada.');
}
