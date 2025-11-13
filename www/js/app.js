let ultimaSeccion = 'inicio';


function mostrarSeccion(seccion) {
  ultimaSeccion = seccion;
  cerrarMenu();

  const contenido = document.getElementById('contenido');
  const btnVolver = document.getElementById('btnVolver');

  // Limpiar contenido anterior
  contenido.innerHTML = '';

  if (seccion === 'inicio') {
    btnVolver.classList.add('oculto');
  } else {
    btnVolver.classList.remove('oculto');
  }

  // Insertar nueva vista
  switch (seccion) {
    case 'inicio':
      contenido.innerHTML = generarVistaInicio();
      break;
    case 'actividades':
      contenido.innerHTML = generarVistaActividades();
      mostrarActividades();
      break;
    case 'calculadora':
      contenido.innerHTML = generarVistaCalculadora();
      break;
    case 'logros':
      contenido.innerHTML = generarVistaLogros();
      break;
    case 'gps':
      contenido.innerHTML = generarVistaGPS();
      iniciarSeguimiento();
      break;
    case 'consejos':
      contenido.innerHTML = generarVistaConsejos();
      refrescarConsejos();
      break;
    case 'recursos':
      contenido.innerHTML = generarVistaRecursos();
      refrescarRecursos();
      break;
    case 'grafico':
      contenido.innerHTML = generarVistaGrafico();
      generarGraficoImpacto();
      break;
    case 'historial':
      contenido.innerHTML = generarVistaHistorial();
      break;
    case 'configuracion':
      contenido.innerHTML = generarVistaConfiguracion();
      break;
    case 'fotos':
      contenido.innerHTML = generarVistaFotos();
      break;

    default:
      contenido.innerHTML = `<p>Sección no encontrada.</p>`;
  }
}



function volver() {
  mostrarSeccion('inicio');
}

function abrirMenu() {
  document.getElementById('menuLateral').classList.remove('oculto');
}

function cerrarMenu() {
  document.getElementById('menuLateral').classList.add('oculto');
}

function refrescarConsejos() {
  const lista = document.getElementById('lista-consejos');
  const nuevos = localStorage.getItem('consejosExtra');
  if (nuevos && lista) {
    const extra = document.createElement('li');
    extra.textContent = `📝 ${nuevos}`;
    lista.appendChild(extra);
  }
}

function refrescarRecursos() {
  const lista = document.getElementById('lista-recursos');
  const nuevos = localStorage.getItem('recursosExtra');
  if (nuevos && lista) {
    const extra = document.createElement('li');
    extra.innerHTML = `<a href="${nuevos}" target="_blank">🌐 Recurso adicional</a>`;
    lista.appendChild(extra);
  }
}

