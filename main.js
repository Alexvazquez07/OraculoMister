import { respuestasFutbol } from './datos.js';

const inputPregunta = document.getElementById('pregunta-usuario');
const btnEnviar = document.getElementById('btn-enviar');
const cajaRespuesta = document.getElementById('pantalla-respuesta');
const textoRespuesta = document.getElementById('texto-respuesta');

function responderConsulta() {
  const pregunta = inputPregunta.value.trim();

  cajaRespuesta.classList.remove('hidden', 'error');

  if (pregunta === "") {
    cajaRespuesta.classList.add('error');
    textoRespuesta.textContent = "¡Eh! No puedes saltar al campo sin decir nada. Escribe una pregunta al Míster.";
    return;
  }

  // EASTER EGG 
  const preguntaMin = pregunta.toLowerCase();

  if (preguntaMin.includes("var")) {
    textoRespuesta.textContent = "Del VAR no voy a hablar, prefiero no meterme en líos y centrarnos en el verde."; 
  } else if (preguntaMin.includes("fichaje") || preguntaMin.includes("fichar")) {
    textoRespuesta.textContent = "Estamos contentos con la plantilla actual, confío a muerte en los chavales.";
  } else {
    const indiceAleatorio = Math.floor(Math.random() * respuestasFutbol.length);
    textoRespuesta.textContent = respuestasFutbol[indiceAleatorio];
  }
}
btnEnviar.addEventListener('click', responderConsulta);

inputPregunta.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    responderConsulta();
  }
});
