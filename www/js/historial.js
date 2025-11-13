function generarVistaHistorial() {
  const actividades = JSON.parse(localStorage.getItem('actividades') || '[]');
  const distancias = JSON.parse(localStorage.getItem('distancias') || '[]');

  return `
    <h2>Historial ecológico</h2>
    <h3>Actividades registradas</h3>
    <ul>${actividades.map(a => `<li>${a.texto} (${new Date(a.fecha).toLocaleDateString()})</li>`).join('')}</ul>
    <h3>Distancias recorridas</h3>
    <ul>${distancias.map(d => `<li>${d.km.toFixed(2)} km (${new Date(d.fecha).toLocaleDateString()})</li>`).join('')}</ul>
  `;
}
