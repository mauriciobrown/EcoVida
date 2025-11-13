function tomarFotoConUbicacion() {
  navigator.camera.getPicture(onFotoTomada, onError, {
    quality: 50,
    destinationType: Camera.DestinationType.DATA_URL,
    encodingType: Camera.EncodingType.JPEG,
    mediaType: Camera.MediaType.PICTURE,
    correctOrientation: true
  });

  function onFotoTomada(imageData) {
    const fechaHora = new Date().toISOString();

    navigator.geolocation.getCurrentPosition(function (position) {
      const entrada = {
        foto: 'data:image/jpeg;base64,' + imageData,
        fecha: fechaHora,
        lat: position.coords.latitude,
        lon: position.coords.longitude
      };

      let lista = JSON.parse(localStorage.getItem('registroFotos')) || [];
      lista.push(entrada);
      localStorage.setItem('registroFotos', JSON.stringify(lista));

      alert('Foto registrada con ubicación y fecha.');
    }, function () {
      alert('Error al obtener ubicación');
    });
  }

  function onError(message) {
    alert('Error al tomar foto: ' + message);
  }
}

function generarVistaFotos() {
  const lista = JSON.parse(localStorage.getItem('registroFotos')) || [];
  let html = `<h2>Registro fotográfico</h2><ul class="lista-fotos">`;

  lista.forEach((item, index) => {
    const fechaLocal = new Date(item.fecha).toLocaleString('es-CL', {
      dateStyle: 'short',
      timeStyle: 'short'
    });

    const enlaceGPS = `https://www.google.com/maps?q=${item.lat},${item.lon}`;

    html += `
      <li class="foto-item">
        <img src="${item.foto}" alt="Foto ${index + 1}" class="miniatura" />
        <p><strong>Fecha:</strong> ${fechaLocal}</p>
        <p><strong>Ubicación:</strong> Lat ${item.lat.toFixed(5)}, Lon ${item.lon.toFixed(5)}</p>
        <p><a href="${enlaceGPS}" target="_blank">📍 Ver en Google Maps</a></p>
      </li>
    `;
  });

  html += `</ul>`;
  return html;
}

