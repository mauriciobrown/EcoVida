function generarVistaActividades() {
  return `
    <h2>Registro de Actividades</h2>
    <input type="text" id="actividad" placeholder="Ej. Usé bicicleta">
    <button onclick="registrarActividad()">Registrar</button>
    <ul id="listaActividades"></ul>
  `;
}

function registrarActividad() {
  const actividad = document.getElementById('actividad').value.trim();
  if (actividad === '') return alert('Por favor ingresa una actividad.');

  const historial = JSON.parse(localStorage.getItem('actividades') || '[]');
  historial.push({ texto: actividad, fecha: new Date().toISOString() });
  localStorage.setItem('actividades', JSON.stringify(historial));
  document.getElementById('actividad').value = '';
  mostrarActividades();
}

function mostrarActividades() {
  const historial = JSON.parse(localStorage.getItem('actividades') || '[]');
  const lista = document.getElementById('listaActividades');
  lista.innerHTML = historial.map(a => `<li>${a.texto} (${new Date(a.fecha).toLocaleDateString()})</li>`).join('');
}
