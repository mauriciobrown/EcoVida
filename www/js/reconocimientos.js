function generarReconocimientos() {
  const actividades = JSON.parse(localStorage.getItem('actividades') || '[]');
  const total = actividades.length;
  let medalla = "🌱 Iniciado";
  if (total >= 10) medalla = "🌿 Avanzado";
  if (total >= 20) medalla = "🌳 Experto";

  return `
    <h2>Reconocimientos</h2>
    <p>Has registrado ${total} actividades sostenibles.</p>
    <p>Tu nivel actual: <strong>${medalla}</strong></p>
  `;
}
