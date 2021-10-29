/* global monogatari */

function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

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
    torico3: "torico3.jpg",
    mausoleointerior: "mausoleo_interior.jpg",
});

// Define the backgrounds for each scene.
monogatari.assets("scenes", {
    panoramica: "panoramica1.jpg",
    panoramica2: "panoramica2.jpg",
    catedral1: "catedral1.jpg",
    catedral2: "catedral2.jpg",
    catedral3: "catedral3.jpg",
    mausoleo1: "mausoleo1.jpg",
    mausoleo2: "mausoleo2.jpg",
    mausoleomodifder: "mausoleo_modif_der.jpg",
    mausoleomodifizq: "mausoleo_modif_izq.jpg",
    mausoleomodifambas: "mausoleo_modif_ambas.jpg",
    torico1: "torico1.jpg",
    torico2: "torico2.jpg",
});
// Define the Characters
monogatari.characters({
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
});

// check google maps to obtain coordinates by right clicking anyplace in the map
// and choosing "what's here"
monogatari.geolocations({
    torico: { latitude: 40.3428712201, longitude: -1.1071107232 },
    catedral: { latitude: 40.3434725, longitude: -1.10762977806 },
    mausoleo: { latitude: 40.342462799, longitude: -1.10644683807 },
});

monogatari.customForms({
    caracterizacion1: {
        schema: {
            description: "¿Qué usuario se te ha asignado?",
            type: "object",
            properties: {
                usuario: {
                    type: "string",
                    title: "Usuario",
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
                    title: "¿Sentiste que la guía era algo que estabas experimentando, en lugar de algo que estabas haciendo?",
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
                    title: "¿Hubo momentos durante la guía en los que solo querías dejarlo?",
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
                interesante: {
                    type: "string",
                    title: "Coméntanos que te ha parecido interesante o lo que más te ha gustado al realizar esta guía.",
                },
                problemas: {
                    type: "string",
                    title: "Coméntanos si has tenido algún problema en el uso de la guía o en la visualización del contenido.",
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
    otra: {
        schema: {
            type: "object",
            properties: {
                comment: {
                    type: "string",
                    title: "Comentanos tu opinión.",
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

monogatari.script({
    randommessage: [{
            Conditional: {
                Condition: function() {
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
                True: "Hemos llegado.",
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
                Condition: "geolocate " + sitio + " 0.5 600 0.01",
                False: "call " + etiqueta,
                True: "Hemos llegado.",
            },
        },
        "return",
    ];
    monogatari.script(elemento);
}

sitio(monogatari, "primersitio", "torico");
sitio(monogatari, "segundositio", "catedral");
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
        "customform " + etiqueta,
        function() {
            monogatari.setContentToSend(monogatari.getFormResult(etiqueta));
            return true;
        },
        "sendaction teruelcentro " + etiqueta,
        "return",
    ];
    monogatari.script(elemento);
}

encuesta(monogatari, "caracterizacion1");

encuesta(monogatari, "opinion1");
encuesta(monogatari, "opinion2");
encuesta(monogatari, "opinion3");
encuesta(monogatari, "opinion4");
encuesta(monogatari, "opinion5");

encuesta(monogatari, "otra");

monogatari.script({
    Start: [
        // _Introducción
        "show scene panoramica",
        "show character chomon normal2 at right with fadeIn end-fadeOut",
        "Hola soy Segundo de Chomón y voy a contarte la historia del casco antiguo de Teruel",
        "Para ello vamos a ver varios lugares emblemáticos en la historia de Teruel.",
        "Pero antes, me gustaría que rellenases un cuestionario para saber un poco más de tí.",
        "Tienes que saber que no se van a recoger tus datos personales y que lo que vas a ver a continuación tiene un proposito de investigación.",
        "sendaction teruelcentro inicio_encuesta_usuario",
        "hide character chomon",
        "call caracterizacion1",
        "show character chomon lookright at left with fadeIn end-fadeOut",
        "show scene torico1",
        "sendaction teruelcentro empezando_torico",

        // _Torico
        "jump Torico",
    ],
    Torico: [
        "chomon La antigua plaza mayor fue siempre el centro neurálgico de la ciudad.",
        "chomon Su morfología responde al terreno donde está ubicada.",
        "chomon Su forma tiene que ver con las pendientes naturales por donde discurría el agua de lluvia",
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
        "chomon El siguiente destino es la Catedral.",
        "jump Catedral",
    ],
    Catedral: [
        "show scene catedral1",
        "sendaction teruelcentro empezando_catedral",
        "chomon La Catedral de Teruel tiene su origen en la iglesia de Santa María de Mediavilla.",
        "chomon Que comenzó a edificarse en estilo románico en 1171 y se concluyó con la construcción de la torre mudéjar en 1257.",
        "chomon En la segunda mitad del siglo XIII, se reestructura la antigua obra románica y se le añaden tres naves mudéjares de mampostería y ladrillo",
        "chomon Que mejoran y elevan la estructura románica del siglo XII.",
        "chomon En el mismo estilo gótico-mudéjar, se van realizando cambios en toda la iglesia.",
        "chomon Ya en estilo plateresco-mudéjar, fue construido en 1538 el cimborrio de la nave central, obra de Martín de Montalbán.",
        "show scene catedral3",
        "chomon Más tarde, en 1587, con la creación de la diócesis de Teruel, fue promovida a Catedral y consagrada como tal.",
        "chomon La torre, techumbre y cimborrio de la Catedral de Teruel fueron declarados Patrimonio de la Humanidad por la Unesco en 1986.",
        //_ Mausoleo
        "chomon Para conocer más de la historia de los amantes, vamos a ver el sitio perfecto.",
        "jump Mausoleo",
    ],
    Mausoleo: [
        "show scene mausoleo1",
        "sendaction teruelcentro empezando_mausoleo",
        "chomon Para acceder a esta ubicación, solo hay una entrada para personas con movilidad reducida. Te vamos a mostrar dos propuestas.",
        "show scene mausoleomodifder",
        "sendaction teruelcentro inicio_encuesta_modif_mausoleo",
        {
            Choice: {
                Dialog: "chomon ¿Crees que está bien adaptada?.",
                Class: "navigationBox",
                mausoleoModif1Si: {
                    Text: "Sí",
                    Do: "sendaction teruelcentro mausoleo_modif1_si",
                    Class: "button1",
                },
                mausoleoModif1No: {
                    Text: "No",
                    Do: "sendaction teruelcentro mausoleo_modif1_no",
                    Class: "button2",
                },
            },
        },
        "show scene mausoleomodifizq",
        {
            Choice: {
                Dialog: "chomon ¿Crees que está bien adaptada?.",
                Class: "navigationBox",
                mausoleoModif2Si: {
                    Text: "Sí",
                    Do: "sendaction teruelcentro mausoleo_modif2_si",
                    Class: "button1",
                },
                mausoleoModif2No: {
                    Text: "No",
                    Do: "sendaction teruelcentro mausoleo_modif2_no",
                    Class: "button2",
                },
            },
        },
        "show scene mausoleomodifambas",
        {
            Choice: {
                Dialog: "chomon ¿Cuál te parece la mejor opción?.",
                Class: "navigationBox",
                mausoleoIzquierda: {
                    Text: "Izquierda",
                    Do: "sendaction teruelcentro mausoleo_modif_izquierda",
                    Class: "button1",
                },
                mausoleoAmbas: {
                    Text: "Ambas",
                    Do: "sendaction teruelcentro mausoleo_modif_ambas",
                    Class: "button2",
                },
                mausoleoDerecha: {
                    Text: "Derecha",
                    Do: "sendaction teruelcentro mausoleo_modif_derecha",
                    Class: "button3",
                },
            },
        },
        "show scene mausoleo1",
        "chomon Gracias por tu respuesta.",
        "chomon En septiembre de 2005 se inaugura el actual Mausoleo de los Amantes. ",
        "chomon El proyecto del edificio, diseñado por el arquitecto Alejandro Cañada.",
        "chomon Dispone de diferentes salas expositivas que pretenden acercar la Historia de los Amantes al visitante.",
        "chomon Desde el punto de vista conceptual, la organización del recorrido expositivo se articula en torno a cuatro sectores:",
        "chomon En el primer sector se explican las características sociales, políticas y culturales.",
        "Que rodearon los acontecimientos en el Teruel de principios del siglo XIII.",
        "show image mausoleointerior center with fadeIn",
        "chomon En el segundo sector se relatan los hechos que ocurrieron en 1217 en Teruel entre Juan Diego Martínez de Marcilla e Isabel de Segura.",
        "chomon También se habla del debate histórico que este relato ha generado a través de los siglos.",
        "hide image mausoleointerior center with fadeOut",
        "chomon El tercer sector está destinado a explicar la influencia de los Amantes en el mundo de las artes a lo largo de la historia.",
        "show scene mausoleo2",
        "chomon Por último, en el cuarto sector se encuentra el Mausoleo de los Amantes, obra del escultor Juan de Ávalo.",
        "chomon En esta zona y a través de una serie de paneles se explica cómo se llevó a cabo el hallazgo de las momias.",
        "chomon Así como el emplazamiento que ha tenido a lo largo del tiempo.",

        //_Final
        "jump Final",
    ],
    Final: [
        "show scene panoramica2",
        "show character chomon normal2 at right with fadeIn end-fadeOut",
        "Este es el final del recorrido",
        "Espero que te haya resultado interesante conocer más de la historia de Teruel",
        "Ahora, te pediría que rellenases un pequeño cuestionario de satisfacción para ayudarnos a mejorar la guía.",
        "sendaction teruelcentro inicio_encuesta_opinion",
        "show scene panoramica2",
        "call opinion1",
        "call opinion2",
        "call opinion3",
        "call opinion4",
        "call opinion5",
        "¡Hasta pronto!",
        "call finalhistoria",
        "end",
    ],
});