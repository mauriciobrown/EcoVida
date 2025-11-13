function generarVistaLogros() {
  const actividades = JSON.parse(localStorage.getItem('actividades') || '[]');
  const nivel = actividades.length >= 10 ? '🌳 Avanzado' :
                actividades.length >= 5 ? '🌿 Intermedio' : '🌱 Iniciado';

  return `
    <h2>Logros</h2>
    <p>Has registrado <strong>${actividades.length}</strong> actividades sostenibles.</p>
    <p>Tu nivel actual: <strong>${nivel}</strong></p>
  `;
}
