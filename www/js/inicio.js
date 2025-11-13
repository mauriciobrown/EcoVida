function generarVistaInicio() {
  return `
    <h2>🌿 Bienvenido, EcoAliado</h2>
    <p>Cada acción cuenta. ¿Qué deseas hacer hoy?</p>
    <div class="tarjetas">
      <button onclick="mostrarSeccion('actividades')">Registrar actividad</button>
      <button onclick="mostrarSeccion('calculadora')">Ver impacto</button>
      <button onclick="mostrarSeccion('logros')">Ver logros</button>
      <button onclick="abrirMenu()">☰ Más opciones</button>
    </div>
  `;
}
