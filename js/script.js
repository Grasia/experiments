/* global monogatari */

/*function getLocation() {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(showPosition);
} else {
var x = document.getElementById("demo");
x.innerHTML = "Geolocation is not supported by this browser.";
}
}

function showPosition(position) {
var x = document.getElementById("demo");
x.innerHTML = "Latitude: " + position.coords.latitude +
"<br>Longitude: " + position.coords.longitude;
}

function getLocation(positionProcessing) {
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(positionProcessing);
return true;
} else {
return  false;
}
}*/

function getPicture() {
  // get a getPicture
  // confirm
  // do something
}

function randomInt(min, max) {
  return min + Math.floor((max - min) * Math.random());
}

/*monogatari.component ('game-screen').template (function() {
return " <h1>My Awesome Game</h1>antes<p id='demo'></p>despues";
});*/

// Define the messages used in the game.
monogatari.action("message").messages({
  Help: {
    title: "Help",
    subtitle: "Some useful Links",
    body: `
		<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
		<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`,
  },
});

// Define the notifications used in the game
monogatari.action("notification").notifications({
  Welcome: {
    title: "Welcome",
    body: "This is the Monogatari VN Engine1",
    icon: "",
  },
});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration("credits", {});

// Define the Particles JS Configurations used in the game
monogatari.action("particles").particles({});

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {});

// Define the music used in the game.
monogatari.assets("music", {});

// Define the voice files used in the game.
monogatari.assets("voices", {});

// Define the sounds used in the game.
monogatari.assets("sounds", {});

// Define the videos used in the game.
monogatari.assets("videos", {});

// Define the images used in the game.
monogatari.assets("images", {
  escalinata2: "escalinata2.jpg",
  sanmartin2: "sanmartin2.jpg",
  torico3: "torico3.jpg",
});

// Define the backgrounds for each scene.
monogatari.assets("scenes", {
  panoramica: "panoramica1.jpg",
  panoramica2: "panoramica2.jpg",
  catedral1: "catedral1.jpg",
  catedral2: "catedral2.jpg",
  catedral3: "catedral3.jpg",
  escalinata1: "escalinata1.jpg",
  escalinata3: "escalinata3.jpg",
  escalinata4: "escalinata4.jpg",
  escalinata5: "escalinata5.jpg",
  mausoleo1: "mausoleo1.jpg",
  mausoleo2: "mausoleo2.jpg",
  salvador1: "salvador1.jpg",
  salvador2: "salvador2.jpg",
  sanmartin1: "sanmartin1.jpg",
  sanmartin3: "sanmartin3.jpg",
  torico1: "torico1.jpg",
  torico2: "torico2.jpg",
});

// Define the Characters
monogatari.characters({
  clara: {
    name: "clara",
    color: "#00bfff",
    directory: "clara", // Optional*
    sprites: {
      // Images Identifier for the 'Show' statement.
      normal1: "clara normal1.png",
      normal2: "clara normal2.png",
      lookright: "clara lookright.png",
    },
    default_expression: "face.resized.png", // Optional, side image to show every time the character speaks.
    expressions: {
      // Side images identifiers to show on dialogs
      normal1: "clara normal1.png",
      normal2: "clara normal2.png",
      lookright: "clara lookright.png",
    },
  },
  chomon: {
    name: "Segundo de Chomón",
    color: "#00bfff",
    directory: "chomon", // Optional*
    sprites: {
      // Images Identifier for the 'Show' statement.
      normal1: "chomon1.png",
      normal2: "chomon2.png",
    },
    default_expression: "chomon3.png", // Optional, side image to show every time the character speaks.
    expressions: {
      // Side images identifiers to show on dialogs
      normal1: "chomon1.png",
      normal2: "chomon2.png",
    },
  },
  jose: {
    name: "jose",
    color: "#00bfff",
    directory: "jose", // Optional*
    sprites: {
      // Images Identifier for the 'Show' statement.
      normal: "jose full.png",
    },
    default_expression: "face.gif", // Optional, side image to show every time the character speaks.
    expressions: {
      // Side images identifiers to show on dialogs
      normal: "jose full.png",
    },
  },
  sylvie: {
    name: "sylvie",
    color: "#00bfff",
    directory: "sylvie", // Optional*
    sprites: {
      // Images Identifier for the 'Show' statement.
      giggle: "sylvie blue giggle.png",
      normal: "sylvie blue normal.png",
      smile: "sylvie blue smile.png",
      surprised: "sylvie blue surprised.png",
    },
    default_expression: "face.png", // Optional, side image to show every time the character speaks.
    expressions: {
      // Side images identifiers to show on dialogs
      giggle: "sylvie blue giggle.png",
      normal: "sylvie blue normal.png",
      smile: "sylvie blue smile.png",
      surprised: "sylvie blue surprised.png",
    },
  },
});
//https://makitweb.com/how-to-capture-picture-from-webcam-with-webcam-js/

//$_ready(()=>{

/*
// example of event generation
monogatari.script({"NorthArea":['waitevent northarea 100',
"Things that happen in the north area"]});
monogatari.script({"SouthArea":['waitevent southarea 100',
"Things that happen in the south area"]});
monogatari.script ({	'Start': ["Testing event based choice",
{'Choice': {
'Dialog': 'Choose destination',
'North Area': {
'Text': 'Lets go to the north',
'Do': 'jump NorthArea',
'Condition': function () {
// check something else, such as items the character happens
// or the status of the novel
return true;
}
},
'South Area': {
'Text': 'Lets go to the south',
'Do': 'jump SouthArea',
}
}},"end"]});

// events can be produced like this
setTimeout(function(){monogatari.sendEvent("northarea");alert("Hello!");},10000);
*/

// check google maps to obtain coordinates by right clicking anyplace in the map
// and choosing "what's here"
monogatari.geolocations({
  torico: { latitude: 40.3428712201, longitude: -1.1071107232 },
  catedral: { latitude: 40.3434725, longitude: -1.10762977806 },
  sanmartin: { latitude: 40.34411104, longitude: -1.10916616498 },
  salvador: { latitude: 40.342070164, longitude: -1.10798861773 },
  escalinata: { latitude: 40.341260569, longitude: -1.10847370305 },
  mausoleo: { latitude: 40.342515053, longitude: -1.10642294447 },
});

monogatari.customForms({
  caracterizacion1: {
    schema: {
      description: "¿Qué opinas de la guía?",
      type: "object",
      properties: {
        genero: {
          type: "string",
          title: "Género",
          enum: ["Hombre", "Mujer", "No-binario"],
        },
        edad: {
          type: "number",
          title: "Edad",
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Siguiente",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
  caracterizacion2: {
    schema: {
      description: "¿Qué opinas de la guía?",
      type: "object",
      properties: {
        conectarme: {
          type: "string",
          title: "Utilizo la tecnología para conectarme a internet…",
          enum: [
            "Nunca",
            "Una vez al mes",
            "Un día a la semana",
            "Varias veces por semana",
            "Todos los días de la semana",
          ],
        },
        comunicarme: {
          type: "string",
          title: "Utilizo la tecnología para comunicarme…",
          enum: [
            "Nunca",
            "Una vez al mes",
            "Un día a la semana",
            "Varias veces por semana",
            "Todos los días de la semana",
          ],
        },
        jugar: {
          type: "string",
          title: "Utilizo la tecnología para jugar…",
          enum: [
            "Nunca",
            "Una vez al mes",
            "Un día a la semana",
            "Varias veces por semana",
            "Todos los días de la semana",
          ],
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Siguiente",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
  caracterizacion3: {
    schema: {
      description: "¿Qué opinas de la guía?",
      type: "object",
      properties: {
        ver: {
          type: "string",
          title:
            "Mi capacidad para ver lo que aparece en la pantalla de un teléfono móvil es…",
          enum: ["Muy buena", "Buena", "Regular", "Mala", "Muy mala"],
        },
        escuchar: {
          type: "string",
          title:
            "Mi capacidad para escuchar el teléfono móvil a volumen medio es…",
          enum: ["Muy buena", "Buena", "Regular", "Mala", "Muy mala"],
        },
        manipular: {
          type: "string",
          title:
            "Mi capacidad para manipular un teléfono móvil con las manos es…",
          enum: ["Muy buena", "Buena", "Regular", "Mala", "Muy mala"],
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Siguiente",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
  caracterizacion4: {
    schema: {
      description: "¿Qué opinas de la guía?",
      type: "object",
      properties: {
        mobilidad: {
          type: "string",
          title: "Mi capacidad para subir escaleras en la ciudad es...",
          enum: ["Muy buena", "Buena", "Regular", "Mala", "Muy mala"],
        },
        escuchar: {
          type: "string",
          title: "Mi capacidad para escuchar los sonidos de los semáforos es…",
          enum: ["Muy buena", "Buena", "Regular", "Mala", "Muy mala"],
        },
        vista: {
          type: "string",
          title: "Mi capacidad para ver las señales en la calle es…",
          enum: ["Muy buena", "Buena", "Regular", "Mala", "Muy mala"],
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Enviar",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
  opinion1: {
    schema: {
      description: "¿Hasta qué punto te llamó la atención la guía?",
      type: "object",
      properties: {
        atencion: {
          type: "string",
          title: "¿Te llamó la atención la guía?",
          enum: [
            "Totalmente en desacuerdo",
            "En desacuerdo",
            "Neutral",
            "De acuerdo",
            "Totalmente de acuerdo",
          ],
        },
        concentrado: {
          type: "string",
          title: "¿Sentiste que estabas concentrado en la guía?",
          enum: [
            "Totalmente en desacuerdo",
            "En desacuerdo",
            "Neutral",
            "De acuerdo",
            "Totalmente de acuerdo",
          ],
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Siguiente",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
  opinion2: {
    schema: {
      description: "¿Qué opinas de la guía?",
      type: "object",
      properties: {
        consciente: {
          type: "string",
          title: "¿Era consciente de sí mismo en su entorno?",
          enum: [
            "Totalmente en desacuerdo",
            "En desacuerdo",
            "Neutral",
            "De acuerdo",
            "Totalmente de acuerdo",
          ],
        },
        experimentando: {
          type: "string",
          title:
            "¿Sentiste que la guía era algo que estabas experimentando, en lugar de algo que estabas haciendo?",
          enum: [
            "Totalmente en desacuerdo",
            "En desacuerdo",
            "Neutral",
            "De acuerdo",
            "Totalmente de acuerdo",
          ],
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Siguiente",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
  opinion3: {
    schema: {
      description: "¿Qué opinas de la guía?",
      type: "object",
      properties: {
        dejarlo: {
          type: "string",
          title:
            "¿Hubo momentos durante la guía en los que solo querías dejarlo?",
          enum: [
            "Totalmente en desacuerdo",
            "En desacuerdo",
            "Neutral",
            "De acuerdo",
            "Totalmente de acuerdo",
          ],
        },
        interesado: {
          type: "string",
          title: "¿Estaba interesado en ver cómo la guía continuaba?",
          enum: [
            "Totalmente en desacuerdo",
            "En desacuerdo",
            "Neutral",
            "De acuerdo",
            "Totalmente de acuerdo",
          ],
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Siguiente",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
  opinion4: {
    schema: {
      description: "¿Qué opinas de la guía?",
      type: "object",
      properties: {
        disfrutar: {
          type: "string",
          title: "¿Disfrutaste mucho realizándola?",
          enum: [
            "Totalmente en desacuerdo",
            "En desacuerdo",
            "Neutral",
            "De acuerdo",
            "Totalmente de acuerdo",
          ],
        },
        hacerotra: {
          type: "string",
          title: "¿Te gustaría volver a realizar la guía u otra parecida?",
          enum: [
            "Totalmente en desacuerdo",
            "En desacuerdo",
            "Neutral",
            "De acuerdo",
            "Totalmente de acuerdo",
          ],
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Siguiente",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
  opinion5: {
    schema: {
      description: "¿Qué opinas de la guía?",
      type: "object",
      properties: {
        comment: {
          type: "string",
          title:
            "Coméntanos que te ha parecido interesante o lo que más te ha gustado al realizar esta guía.",
        },
        comment: {
          type: "string",
          title:
            "Coméntanos si has tenido algún problema en el uso de la guía o en la visualización del contenido.",
        },
      },
    },
    options: {
      form: {
        buttons: {
          submit: {
            title: "Enviar",
          },
        },
      },
    },
    view: "bootstrap-create",
  },
});

// using geolication with basic fail/success control
/*monogatari.script({"NorthArea":['geolocate berlin 1000 100000 1',
{'Conditional':{
'Condition':function(){return monogatari.checkAndResetIfLastActionFailed()},
'True':'nope, dude',
'False':'alright, you got there'
}
},"Things that happen in the north area"]});*/

// improved version to handle arrival to location or failure to do so within
// the timeout
monogatari.script({
  NorthArea: [
    {
      ConditionalGeolocation: {
        Condition: "geolocate berlin 1000 100000 0.001",
        False: "nope, dude",
        True: "alright, you got there",
      },
    },
    "Things that happen in the north area",
    "end",
  ],
});

monogatari.script({
  SouthArea: [
    "geolocate southarea 10000 100 1",
    "Things that happen in the south area",
  ],
});

monogatari.script({
  randommessage: [
    {
      Conditional: {
        Condition: function () {
          return randomInt(1, 4) + "";
        },
        1: "chomon Caminante no hay camino, se hace camino al andar, ¡Ya estás tardando!",
        2: "chomon No me digas que tienes cansancio, si apareciera un toro, ¡verías cómo corres!",
        3: "chomon ¿Sabías que andar es un ejercicio muy saludable? ¡Andando!",
        4: "chomon Una vez tuve una piedra de mascota. Se movía más que tú.",
      },
    },
    "return",
  ],
});

function sitioaux(monogatari, etiqueta, sitio) {
  elemento = {};
  elemento[etiqueta] = [
    "call randommessage",
    "chomon Viajando al destino, toca o haz click en la pantalla para continuar",
    {
      ConditionalGeolocation: {
        Condition: "geolocate " + sitio + " 0.5 60 0.01",
        False: "call " + etiqueta,
        True: "olé",
      },
    },
    "return",
  ];
  monogatari.script(elemento);
}

function sitio(monogatari, etiqueta, sitio) {
  elemento = {};
  sitioaux(monogatari, etiqueta + "aux", sitio);
  elemento[etiqueta] = [
    "chomon Viajando al destino, toca o haz click en la pantalla para continuar",
    {
      ConditionalGeolocation: {
        Condition: "geolocate " + sitio + " 0.5 60 0.01",
        False: "call " + etiqueta + "aux",
        True: "olé",
      },
    },
    "return",
  ];
  monogatari.script(elemento);
}

sitio(monogatari, "primersitio", "torico");
sitio(monogatari, "segundositio", "catedral");
sitio(monogatari, "tercersitio", "sanmartin");
sitio(monogatari, "cuartositio", "salvador");
sitio(monogatari, "quintositio", "escalinata");
sitio(monogatari, "sextositio", "mausoleo");

function final(monogatari, etiqueta) {
  elemento = {};
  elemento[etiqueta] = [
    "Ya no hay nada más que decir. Puedes descargar otras guías o recargar para empezar de cero",
    "call " + etiqueta,
  ];
  monogatari.script(elemento);
}

final(monogatari, "finalhistoria");

function encuesta(monogatari, etiqueta) {
  elemento = {};
  elemento[etiqueta] = [
    "",
    "customform " + etiqueta,
    function () {
      monogatari.setContentToSend(monogatari.getFormResult(etiqueta));
      return true;
    },
    "sendaction geoteruel " + etiqueta,
    "return",
  ];
  monogatari.script(elemento);
}

encuesta(monogatari, "caracterizacion1");
encuesta(monogatari, "caracterizacion2");
encuesta(monogatari, "caracterizacion3");
encuesta(monogatari, "caracterizacion4");

encuesta(monogatari, "opinion1");
encuesta(monogatari, "opinion2");
encuesta(monogatari, "opinion3");
encuesta(monogatari, "opinion4");
encuesta(monogatari, "opinion5");

monogatari.script({
  Start: [
    // _Introducción
    "show scene panoramica",
    "show character chomon normal2 at right with fadeIn end-fadeOut",
    "Hola soy Segundo de Chomón y voy a contarte la historia del casco antiguo de Teruel",
    "Para ello vamos a visitar varios lugares emblemáticos en la historia de Teruel.",
    "Pero antes, me gustaría que rellenases un cuestionario para saber un poco más de tí.",
    "Tienes que saber que no se van a recoger tus datos personales y que lo que vas a ver a continuación tiene un proposito de investigación.",
    "sendaction geoteruel inicio_encuesta",
    "hide character chomon",
    "call caracterizacion1",
    "call caracterizacion2",
    "call caracterizacion3",
    "call caracterizacion4",
    "show character chomon lookright at left with fadeIn end-fadeOut",
    "Para comenzar necesito que te dirijas al siguiente destino",
    "sendaction geoteruel yendo_torico",
    "call primersitio",
    "sendaction geoteruel llegado_torico",

    // _Torico
    "show scene torico1",
    "chomon La antigua plaza mayor fue siempre el centro neurálgico de la ciudad.",
    "chomon Su morfología responde al terreno donde está ubicada. Su forma tiene que ver con las pendientes naturales por donde discurría el agua de lluvia",
    "chomon En el año 1858 tiene lugar un hecho significativo.",
    "chomon Se levanta la nueva fuente del Torico situada en una zona más céntrica que no entorpecía el tránsito de los carros por la plaza.",
    "show scene torico2",
    "chomon Es una fuente circular con una columna de piedra anillada en la que se ven incrustadas cuatro cabezas de toro por las que mana el agua.",
    "show image torico3 center with fadeIn",
    "chomon En la parte alta del pedestal, a siete metros de altura, descansa la figura de El Torico.",
    "chomon Es el icono más representativo de Teruel.",
    "chomon Esta pequeña escultura de bronce fundido es maciza y pesa nada menos que 54,5 kilos.",
    "chomon Se emplaza sobre una base rectangular de piedra.",
    "chomon Tiene una altura de 37 centímetros.",
    "hide image torico3 with fadeOut",
    "show scene torico1",
    "chomon Desde el año 1858 en que fue colocado sólo dos veces ha sido bajado de su emplazamiento.",
    "chomon La primera vez los propios vecinos lo quitaron para guardarlo en un lugar seguro y protegerlo durante la Guerra Civil.",
    "chomon La segunda vez en 2003 se volvió a bajar para una restauración.",
    // _Catedral
    "chomon El siguiente destino que vamos a visitar es la Catedral.",
    "sendaction geoteruel yendo_catedral",
    "call segundositio",
    "sendaction geoteruel llegado_catedral",
    "show scene catedral1",
    "chomon La Catedral de Teruel tiene su origen en la iglesia de Santa María de Mediavilla, que comenzó a edificarse en estilo románico en 1171 y se concluyó con la construcción de la torre mudéjar en 1257.",
    "chomon En la segunda mitad del siglo XIII, se reestructura la antigua obra románica y se le añaden tres naves mudéjares de mampostería y ladrillo, que mejoran y elevan la estructura románica del siglo XII.",
    "chomon En el mismo estilo gótico-mudéjar, se van realizando cambios en toda la iglesia.",
    "chomon Ya en estilo plateresco-mudéjar, fue construido en 1538 el cimborrio de la nave central, obra de Martín de Montalbán.",
    "show scene catedral3",
    "chomon Más tarde, en 1587, con la creación de la diócesis de Teruel, fue promovida a Catedral y consagrada como tal.",
    "chomon La torre, techumbre y cimborrio de la Catedral de Teruel fueron declarados Patrimonio de la Humanidad por la Unesco en 1986.",
    // _Torre de San Martín
    "chomon A continuación, te mostraré dos torres con una historia conectada, acompáñame.",
    "sendaction geoteruel yendo_sanmartin",
    "call tercersitio",
    "sendaction geoteruel llegado_sanmartin",
    "show scene sanmartin1",
    "chomon La Torre de San Martín se edificó entre 1315 y 1316.",
    "chomon Está adosada a la iglesia de San Martín, construida en 1706 y que sustituyó a la anterior mudéjar.",
    "chomon A los pies de esta torre discurre, la Cuesta de la Andaquilla, testigo de una de las escenas de la Historia de los Amantes.",
    "chomon Es ejemplo de la tipología de torre alminar almohade.",
    "chomon Siguiendo esta estructura posee dos torres concéntricas, separadas casi un metro, entre las que se desarrollan pasillos y escaleras, que llevan a un campanario, cubiertos por bóveda de ladrillo.",
    "chomon De planta cuadrada, da paso a una calle bajo su bóveda de cañón apuntado.",
    "show scene sanmartin3",
    "chomon El exterior, de ladrillo, aparece decorado con cerámica vidriada en verde y blanco y paños horizontales de distintas alturas. Presenta un gran repertorio decorativo.",
    "chomon El motivo decorativo que predomina es el de estrellas de 8 puntas blancas y con orla verde.",
    "chomon Como en otros lugares de esta provincia esta torre tiene una leyenda sobre su construcción que, como no podía ser menos, es de amor.",
    // _Torre el Salvador
    "chomon Pero te la contaré a continuación, cuando vayamos a ver la torre de El Salvador.",
    "sendaction geoteruel yendo_salvador",
    "call cuartositio",
    "sendaction geoteruel llegado_salvador",
    "show scene salvador1",
    "chomon Allá por el siglo XIV los alarifes mudéjares, Omar y Abdalá, constructores de las torres de San Martín y El Salvador respectivamente, estaban de paseo por la calle, de pronto, los dos amigos vieron una hermosa joven de la que ambos quedaron prendados, Zoraida se llamaba.",
    "chomon Su amistad se convirtió en odio, y como ninguno quería perder a su amada, fueron por separado a visitar al padre. Éste, les dio a ambos la misma respuesta: la mano de Zoraida será para el primero que acabe su torre.",
    "chomon Las obras comenzaron a los pocos días, sin apenas descansos.",
    "chomon Cierto día, Omar, arquitecto de la torre de San Martín, anunció que su construcción había finalizado.",
    "chomon Los habitantes de Teruel se reunieron en torno a ella, y, conforme iban retirando los andamios que cubrían la obra, las gentes se quedaban maravilladas y su arquitecto se mostraba cada vez más orgulloso.",
    "chomon Sin embargo, cuando quedo totalmente descubierta, Omar soltó un grito de horror. Algo había salido mal, su torre estaba ligeramente torcida.",
    "show scene salvador2",
    "chomon Desesperado subió a lo más alto de la torre y ante las gentes de la ciudad se arrojó al vacío.",
    "chomon Unas semanas después, Abdalá finalizaba su torre, la de El Salvador.",
    "chomon Cuando el andamio fue retirado y los ciudadanos pudieron contemplar la nueva obra, se quedaron totalmente sorprendidos, las dos torres, salvo algunos detalles, eran muy parecidas.",
    "chomon Los motivos decorativos son muy parecidos a los que hemos visto antes en la torre de San Martín.",
    "show image sanmartin2 center with fadeIn",
    "chomon La torre es usada como campanario de la iglesia a la que está adosada, la Iglesia del Salvador.",
    "chomon Alberga en su interior el Centro de Interpretación de la Arquitectura Mudéjar Turolense.",
    "hide image sanmartin2 with fadeOut",
    "chomon La Torre El Salvador junto con la torre de San Martín, en 1986 fueron declarados Patrimonio de la Humanidad por la Unesco.",
    // _Escalinata
    "chomon Cerca de esta torre, vamos a ver uno de los monumentos más emblemáticos de Teruel.",
    "sendaction geoteruel yendo_escalinata",
    "call quintositio",
    "sendaction geoteruel llegado_escalinata",
    "show scene escalinata4",
    "chomon La construcción de la escalinata se inspiró en elementos intrínsecos a la ciudad como la arquitectura mudéjar, el gótico y el modernismo.",
    "chomon Es obra del ingeniero turolense José Torán de la Rad.",
    "chomon Se construyó a comienzo de los años veinte, para salvar el desnivel existente entre la estación de ferrocarril y el Casco Histórico de la ciudad.",
    "chomon Por Decreto del Gobierno de Aragón, la Escalinata de Teruel fue declarada Bien de Interés Cultural, en la categoría de Monumento.",
    "show scene escalinata1",
    "chomon La Escalinata es en definitiva la imagen resumida de Teruel para el viajero que llegaba a la ciudad y en la actualidad constituye la obra clave del neomudéjar turolense.",
    "chomon Su desarrollo es perpendicular al Paseo del Óvalo y salva los 26 metros de desnivel existente.",
    "chomon El recorrido de la Escalinata se estructura en tres partes bien diferenciadas, articuladas entre sí por dos pequeñas plazas.",
    "show image escalinata2 center with fadeIn",
    "chomon Situado en el frontal de la placeta principal, entre el escudo de la ciudad y la fuente se encuentra el altorrelieve de Los Amantes de Teruel obra del escultor segoviano Aniceto Marinas.",
    "show scene escalinata3",
    "hide image escalinata2 with fadeOut",
    "chomon Tras un primer tramo recto, y más o menos a la mitad de su altura, se divide en dos tramos curvos hasta alcanzar la altura máxima, llegando al Paseo del Óvalo",
    "chomon En total habremos subido 140 escalones de una forma suave y agradable.",
    //_ Mausoleo
    "chomon Para conocer más de la historia de los amantes, vamos a dirigirnos al sitio perfecto, acompáñame a este último destino.",
    "sendaction geoteruel yendo_mausoleo",
    "call sextositio",
    "sendaction geoteruel llegado_mausoleo",
    "show scene mausoleo1",
    "chomon En septiembre de 2005 se inaugura el actual Mausoleo de los Amantes. ",
    "chomon El proyecto del edificio, diseñado por el arquitecto Alejandro Cañada, dispone de diferentes salas expositivas que pretenden acercar la Historia de los Amantes al visitante.",
    "chomon Desde el punto de vista conceptual, la organización del recorrido expositivo se articula en torno a cuatro sectores:",
    "chomon En el primer sector se explican las características sociales, políticas y culturales que rodearon los acontecimientos en el Teruel de principios del siglo XIII.",
    "chomon En el segundo sector se relatan los hechos que ocurrieron en 1217 en Teruel entre Juan Diego Martínez de Marcilla e Isabel de Segura. También se habla del debate histórico que este relato ha generado a través de los siglos.",
    "chomon El tercer sector está destinado a explicar la influencia de los Amantes en el mundo de las artes a lo largo de la historia.",
    "show scene mausoleo2",
    "chomon Por último, en el cuarto sector se encuentra el Mausoleo de los Amantes, obra del escultor Juan de Ávalo.",
    "chomon En esta zona y a través de una serie de paneles se explica cómo se llevó a cabo el hallazgo de las momias, así como el emplazamiento que ha tenido a lo largo del tiempo.",

    //_Final
    "show scene panoramica2",
    "show character chomon normal2 at right with fadeIn end-fadeOut",
    "Este es el final del recorrido",
    "Espero que te haya resultado interesante conocer más de la historia de Teruel",
    "Ahora, te pediría que rellenases un pequeño cuestionario de satisfacción para ayudarnos a mejorar la guía.",
    "sendaction geoteruel inicio_encuesta",
    "¡Hasta pronto!",
    "show scene panoramica2",
    "call opinion1",
    "call opinion2",
    "call opinion3",
    "call opinion4",
    "call opinion5",
    "call finalhistoria",
    "end",
  ],
});
