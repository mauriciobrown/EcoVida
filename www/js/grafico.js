function generarVistaGrafico() {
  return `
    <h2>Resumen de Impacto</h2>
    <canvas id="graficoImpacto" width="300" height="200"></canvas>
  `;
}

function generarGraficoImpacto() {
  const datos = JSON.parse(localStorage.getItem('distancias') || '[]');
  const dias = {};
  datos.forEach(d => {
    const fecha = new Date(d.fecha).toLocaleDateString();
    dias[fecha] = (dias[fecha] || 0) + d.km;
  });

  const labels = Object.keys(dias);
  const valores = Object.values(dias);

  new Chart(document.getElementById('graficoImpacto'), {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Km recorridos',
        data: valores,
        backgroundColor: '#81c784'
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}
