document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  autenticarConHuella();
}

function autenticarConHuella() {
  FingerprintAuth.isAvailable(function(result) {
    if (result.isAvailable) {
      mostrarDialogoHuella();
    } else {
      alert("Huella no disponible en este dispositivo");
      mostrarSeccion('inicio'); // Permitir acceso sin huella
    }
  }, function(error) {
    console.log("Error al verificar huella: " + error);
    mostrarSeccion('inicio');
  });
}

function mostrarDialogoHuella() {
  FingerprintAuth.encrypt({
    clientId: "EcoVida",
    username: "usuario",
    password: "claveDummy",
    disableBackup: true,
    dialogTitle: "Autenticación requerida",
    dialogMessage: "Coloca tu dedo para continuar",
    dialogHint: "Usa tu huella digital"
  }, function(success) {
    console.log("Autenticación exitosa");
    mostrarSeccion('inicio');
  }, function(error) {
    alert("Autenticación fallida o cancelada");
    navigator.app.exitApp(); // Cierra la app si falla
  });
}
