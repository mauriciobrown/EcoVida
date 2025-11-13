let ultimaPosicion = null;
let distanciaTotal = 0;

function generarVistaGPS() {
  return `
    <h2>Seguimiento por GPS</h2>
    <p>EcoVida está calculando tu distancia recorrida en tiempo real.</p>
    <div id="vistaDistancia"><p>Distancia acumulada: 0.00 km</p></div>
  `;
}

function iniciarSeguimiento() {
  navigator.geolocation.watchPosition(function (pos) {
    const nuevaPos = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    };

    if (ultimaPosicion) {
      const d = calcularDistancia(ultimaPosicion, nuevaPos);
      distanciaTotal += d;
      guardarDistancia(d);
      actualizarVistaDistancia();
    }

    ultimaPosicion = nuevaPos;
  }, function (err) {
    alert("Error de GPS: " + err.message);
  }, {
    enableHighAccuracy: true,
    maximumAge: 1000,
    timeout: 5000
  });
}

function calcularDistancia(p1, p2) {
  const R = 6371;
  const dLat = (p2.lat - p1.lat) * Math.PI / 180;
  const dLon = (p2.lon - p1.lon) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(p1.lat * Math.PI / 180) * Math.cos(p2.lat * Math.PI / 180) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function guardarDistancia(d) {
  const historial = JSON.parse(localStorage.getItem('distancias') || '[]');
  historial.push({ km: d, fecha: new Date().toISOString() });
  localStorage.setItem('distancias', JSON.stringify(historial));
}

function actualizarVistaDistancia() {
  const total = JSON.parse(localStorage.getItem('distancias') || '[]')
    .reduce((sum, d) => sum + d.km, 0);
  document.getElementById('vistaDistancia').innerHTML =
    `<p>Distancia acumulada: <strong>${total.toFixed(2)} km</strong></p>`;
}
