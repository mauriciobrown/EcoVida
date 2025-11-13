function autenticarUsuario() {
  Fingerprint.show({
    title: "EcoVida",
    subtitle: "Autenticación ecológica",
    description: "Usa tu huella o rostro para acceder",
    disableBackup: true
  }, function () {
    console.log("Autenticación exitosa");
    mostrarSeccion('actividades');
  }, function (err) {
    alert("Autenticación fallida: " + err);
  });
}
