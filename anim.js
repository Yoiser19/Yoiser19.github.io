var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");



// Añadir estilos CSS para centrar el texto
lyrics.style.position = "absolute";
lyrics.style.top = "50%";
lyrics.style.left = "50%";
lyrics.style.transform = "translate(-50%, -50%)";
lyrics.style.textAlign = "center";
lyrics.style.width = "80%"; // Ajusta este valor según necesites

var lyricsData = [
  { text: "Mira me presento estoy nervioso no te miento pero aqui va mi mejor intento", time: 5, duration: 7 },
  { text: "Pues si yo soy perfecto perfectamente imperfecto, lo perfecto solo exite en los cuentos le cuento que", time: 11, duration: 8 },
  { text: "No soy tan bueno para aparentar la verdad prefiero ser directo", time: 19, duration: 4 },
  { text: "A veces me acuesto a las 6 de la mañana no voy a la iglesia los fines de semana", time: 23, duration: 6 },
  { text: "Soy un poco despistado me relajo demaciado pero dejo todo a un lado, cada vez que ella me llama", time: 28, duration: 6 },
  { text: "y en ese momento todo esta bien y en ese momento vuelvo a perder", time: 34, duration: 6 },
  { text: "Toda mi cordura, toda mi amargura vuleve la locura y las ganas de llamarla otra vez", time: 40, duration: 7 },
  { text: "Esque es ella es, ella es mi mejor y mi peor dia del mes. Es que ella es, ella es, ella es ese final de las peliculas cliches", time: 46, duration: 12, color: "#FFFFFF" },
  { text: "Porque ella es, ella es la medicina que no existe pa'l estres porque ella es, ella es, ella es", time: 57, duration: 11 },
  { text: "Con otras yo he estado pero ninguna me ha aguantado Siempre me dicen que ando muy despreocupado y yo", time: 68, duration: 8 },

  { text: "De eso estoy cansado de que ninguna como soy me ha aceptado que deje de fumar en la mañana", time: 76, duration: 7 },
  { text: "Que no le caigo bien ni a sus amigas, ni a su hermana Que nunca le regalo cosas caras", time: 83, duration: 6 },
  { text: "Pura pendejada pero con ella todo esta bien, Pero con ella vuelvo a perder", time: 89, duration: 8 },
  { text: "Toda mi cordura, toda mi amargura vuelve la locura y las ganas de llamarla otra vez", time: 97, duration: 6 },
  { text: "Es que ella es, ella es mi mejor y mi peor dia del mes, Es que ella es, ella es, ella es ese final de las peliculas cliches", time: 103, duration: 11 },
  { text: "Poque ella es, ella es la medicina que no existe pa'l estres porque ella es, ella es, ella es", time: 113, duration: 10 },

  { text: "Pero con ella todo esta bien pero con ella vuelvo a perder", time: 136, duration: 6 },
  { text: "Toda mi corudura, toda mi amargura vuelve la locura y las ganas de llamarla otra vez", time: 141, duration: 6 },
  { text: "Pero con ella todo esta bien pero con ella vuelvo a perder", time: 147, duration: 6 },
  { text: "Toda mi cordura, toda mi amargura vuelve la locura y las ganas de llamarla otra vez", time: 151, duration: 7 },

  { text: "Es que ella es, ella es mi mejor y mi peor dia del mes, Es que ella es, ella es, ella es ese final de las peliculas cliches", time: 159, duration: 12 },
  { text: "Porque ella es, ella es la medicina que no existe pa'l estres porque ella es, ella es, ella es", time: 170, duration: 12 },
];

function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + line.duration
  );

  if (currentLine) {
    var progress = (time - currentLine.time) / currentLine.duration;
    var opacity = Math.min(1, progress * 2);
    var fadeOut = Math.max(0, 1 - (progress - 0.5) * 2);
    
    lyrics.style.opacity = Math.min(opacity, fadeOut);
    lyrics.innerHTML = currentLine.text;
    
    if (currentLine.color) {
      lyrics.style.color = currentLine.color;
    } else {
      lyrics.style.color = "";
    }
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

audio.addEventListener('timeupdate', updateLyrics);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000);
}

setTimeout(ocultarTitulo, 216000);