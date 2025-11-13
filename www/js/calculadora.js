function generarVistaCalculadora() {
  return `
    <h2>Calculadora de Impacto</h2>
    <label>Km recorridos sin auto:</label>
    <input type="number" id="km" placeholder="Ej. 5">
    <button onclick="calcularImpacto()">Calcular</button>
    <p id="resultadoImpacto"></p>
  `;
}

function calcularImpacto() {
  const km = parseFloat(document.getElementById('km').value);
  if (isNaN(km) || km <= 0) return alert('Ingresa una cantidad válida.');

  const ahorroCO2 = km * 0.2; // Ejemplo: 0.2 kg CO2 por km
  document.getElementById('resultadoImpacto').innerHTML =
    `Has evitado aproximadamente <strong>${ahorroCO2.toFixed(2)} kg</strong> de CO₂.`;
}
