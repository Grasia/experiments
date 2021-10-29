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
    escalinatamural: "escalinatamural.jpg",
    campanas: "campanas.jpg",
});

// Define the backgrounds for each scene.
monogatari.assets("scenes", {
    panoramica: "panoramica1.jpg",
    panoramica2: "panoramica2.jpg",
    escalinata1: "escalinata1.jpg",
    escalinata2: "escalinata2.jpg",
    escalinata3: "escalinata3.jpg",
    escalinata4: "escalinata4.jpg",
    escalinata5: "escalinata5.jpg",
    escalinataabajo: "escalinata_abajo.jpg",
    escalinataarriba: "escalinata_arriba.jpg",
    escalinataaclaracion: "escalinata_aclaracion.jpg",
    escalinatarampa: "escalinata_modif1.jpg",
    escalinatasalva: "escalinata_modif2.jpg",
    salvador1: "salvador1.jpg",
    salvador2: "salvador2.jpg",
    salvadorcartel: "salvadorcartel.jpg",
    sanmartin1: "sanmartin1.jpg",
    sanmartin3: "sanmartin3.jpg",
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
    sanmartin: { latitude: 40.34411104, longitude: -1.10916616498 },
    salvador: { latitude: 40.342154196, longitude: -1.10785127387 },
    escalinata: { latitude: 40.341280199, longitude: -1.1082558826 },
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

sitio(monogatari, "tercersitio", "sanmartin");
sitio(monogatari, "cuartositio", "salvador");
sitio(monogatari, "quintositio", "escalinata");

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
        "sendaction geoterueltorres " + etiqueta,
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
        "Para ello vamos a visitar varios lugares emblemáticos en la historia de Teruel.",
        "Pero antes, me gustaría que rellenases un cuestionario para saber un poco más de tí.",
        "Tienes que saber que no se van a recoger tus datos personales y que lo que vas a ver a continuación tiene un proposito de investigación.",
        "sendaction geoterueltorres inicio_encuesta_usuario",
        "hide character chomon",
        "call caracterizacion1",
        "show character chomon lookright at left with fadeIn end-fadeOut",
        "Para comenzar necesito que te dirijas al siguiente destino",
        "show scene sanmartin1",
        "sendaction geoterueltorres yendo_sanmartin",
        "call tercersitio",
        "sendaction geoterueltorres llegado_sanmartin",

        // _SanMartin
        "jump SanMartin",
    ],
    SanMartin: [
        "chomon La Torre de San Martín se edificó entre 1315 y 1316.",
        "chomon Está adosada a la iglesia de San Martín, construida en 1706 y que sustituyó a la anterior mudéjar.",
        "chomon A los pies de esta torre discurre, la Cuesta de la Andaquilla, testigo de una de las escenas de la Historia de los Amantes.",
        "chomon Es ejemplo de la tipología de torre alminar almohade.",
        "chomon Siguiendo esta estructura posee dos torres concéntricas, separadas casi un metro, entre las que se desarrollan pasillos y escaleras.",
        "chomon Que llevan a un campanario, cubiertos por bóveda de ladrillo.",
        "chomon De planta cuadrada, da paso a una calle bajo su bóveda de cañón apuntado.",
        "show scene sanmartin3",
        "chomon El exterior, de ladrillo, aparece decorado con cerámica vidriada en verde y blanco y paños horizontales de distintas alturas.",
        "chomon Presenta un gran repertorio decorativo.",
        "chomon El motivo decorativo que predomina es el de estrellas de 8 puntas blancas y con orla verde.",
        "chomon Como en otros lugares de esta provincia esta torre tiene una leyenda sobre su construcción que, como no podía ser menos, es de amor.",
        // _Torre el Salvador
        "chomon Pero te la contaré a continuación, cuando vayamos a ver la torre de El Salvador.",
        "jump Salvador",
    ],
    Salvador: [
        "show scene salvador1",
        "sendaction geoterueltorres yendo_salvador",
        "call cuartositio",
        "sendaction geoterueltorres llegado_salvador",
        "chomon Allá por el siglo XIV los alarifes mudéjares, Omar y Abdalá, constructores de las torres de San Martín y El Salvador respectivamente.",
        "chomon Estaban de paseo por la calle, de pronto, los dos amigos vieron una hermosa joven de la que ambos quedaron prendados, Zoraida se llamaba.",
        "chomon Su amistad se convirtió en odio, y como ninguno quería perder a su amada, fueron por separado a visitar al padre.",
        "chomon Éste, les dio a ambos la misma respuesta: la mano de Zoraida será para el primero que acabe su torre.",
        "chomon Las obras comenzaron a los pocos días, sin apenas descansos.",
        "chomon Cierto día, Omar, arquitecto de la torre de San Martín, anunció que su construcción había finalizado.",
        "chomon Los habitantes de Teruel se reunieron en torno a ella, y, conforme iban retirando los andamios que cubrían la obra.",
        "chomon Las gentes se quedaban maravilladas y su arquitecto se mostraba cada vez más orgulloso.",
        "chomon Sin embargo, cuando quedo totalmente descubierta, Omar soltó un grito de horror. Algo había salido mal, su torre estaba ligeramente torcida.",
        "show scene salvador2",
        "chomon Desesperado subió a lo más alto de la torre y ante las gentes de la ciudad se arrojó al vacío.",
        "chomon Unas semanas después, Abdalá finalizaba su torre, la de El Salvador.",
        "chomon Cuando el andamio fue retirado y los ciudadanos pudieron contemplar la nueva obra, se quedaron totalmente sorprendidos.",
        "chomon Las dos torres, salvo algunos detalles, eran muy parecidas.",
        "chomon Los motivos decorativos son muy parecidos a los que hemos visto antes en la torre de San Martín.",
        "show scene salvador1",
        "show image sanmartin2 center with fadeIn",
        "chomon La torre es usada como campanario de la iglesia a la que está adosada, la Iglesia del Salvador.",
        "chomon Alberga en su interior el Centro de Interpretación de la Arquitectura Mudéjar Turolense.",
        "hide image sanmartin2 with fadeOut",
        "chomon La Torre El Salvador junto con la torre de San Martín, en 1986 fueron declarados Patrimonio de la Humanidad por la Unesco.",
        "show scene salvadorcartel",
        "sendaction geoterueltorres inicio_encuesta_locucion",
        {
            Choice: {
                Dialog: "chomon ¿Crees que la locución de la historia te facilitaría el acceso al contenido de este cartel?",
                Class: "navigationBox",
                locucionSi: {
                    Text: "Sí",
                    Do: "sendaction geoterueltorres locucion_si",
                    Class: "button1",
                },
                locucionNo: {
                    Text: "No",
                    Do: "sendaction geoterueltorres locucion_no",
                    Class: "button2",
                },
            },
        },
        {
            Choice: {
                Dialog: "chomon ¿Dónde te gustaría escuchar la historia?.",
                Class: "navigationBox",
                salvadorMovil: {
                    Text: "En mi móvil",
                    Do: "sendaction geoterueltorres locucion_movil",
                    Class: "button1",
                },
                salvadorAltavoz: {
                    Text: "En un altavoz",
                    Do: "sendaction geoterueltorres locucion_altavoz",
                    Class: "button2",
                },
            },
        },
        "chomon Gracias por tu respuesta.",
        // _Escalinata
        "chomon Cerca de esta torre, vamos a ver uno de los monumentos más emblemáticos de Teruel.",
        "jump Escalinata",
    ],
    Escalinata: [
        "show scene escalinata1",
        "sendaction geoterueltorres yendo_escalinata",
        "call quintositio",
        "sendaction geoterueltorres llegado_escalinata",
        "chomon Ya hemos llegado a la escalinata.",
        "chomon Que bonito se vería desde abajo, dejame que te lo enseñe.",
        "show scene escalinata4",
        "chomon Se construyó a comienzo de los años veinte, para salvar el desnivel existente entre la estación de ferrocarril y el Casco Histórico de la ciudad.",
        "chomon La zona de la escalinata está adaptada con un ascensor para que personas con movilidad reducida superen ese desnivel.",
        "show scene escalinataaclaracion",
        "chomon Para bajar puedes usar las escaleras o el ascensor.",
        "chomon Aquí puedes ver donde se encuentran.",
        "show scene escalinata2",
        "sendaction geoterueltorres inicio_encuesta_bajar",
        {
            Choice: {
                Dialog: "chomon ¿Vas a bajar?.",
                Class: "navigationBox",
                escalinataSi: {
                    Text: "Sí",
                    Do: "sendaction geoterueltorres bajar_si",
                    Class: "button1",
                    onChosen: function() {
                        this.storage().bajar_escalinata = true;
                        this.storage().pregunta_escalinata = "¿Por dónde vas a bajar?";
                    },
                },
                escalinataNo: {
                    Text: "No",
                    Do: "sendaction geoterueltorres bajar_no",
                    Class: "button2",
                    onChosen: function() {
                        this.storage().bajar_escalinata = false;
                        this.storage().pregunta_escalinata = "¿Por dónde bajarías?";
                    },
                },
            },
        },
        {
            Choice: {
                Dialog: "{{pregunta_escalinata}}",
                Class: "navigationBox",
                escalinataEscaleras: {
                    Text: "Escaleras",
                    Do: "sendaction geoterueltorres bajar_escaleras",
                    Class: "button1",
                    onChosen: function() {
                        this.storage().escalinata_donde = "escaleras";
                    },
                },
                escalinataAscensor: {
                    Text: "Ascensor",
                    Do: "sendaction geoterueltorres bajar_ascensor",
                    Class: "button2",
                    onChosen: function() {
                        this.storage().escalinata_donde = "ascensor";
                    },
                },
            },
        },
        {
            Conditional: {
                Condition: function() {
                    return this.storage().bajar_escalinata;
                },
                True: "show scene escalinata4",
                False: "show scene escalinata3",
            },
        },
        "chomon La construcción de la escalinata se inspiró en elementos intrínsecos a la ciudad como la arquitectura mudéjar, el gótico y el modernismo.",
        "chomon Es obra del ingeniero turolense José Torán de la Rad.",
        "chomon Por Decreto del Gobierno de Aragón, la Escalinata de Teruel fue declarada Bien de Interés Cultural, en la categoría de Monumento.",
        "show scene escalinata4",
        "chomon La Escalinata es en definitiva la imagen resumida de Teruel para el viajero que llegaba a la ciudad y en la actualidad constituye la obra clave del neomudéjar turolense.",
        "chomon Su desarrollo es perpendicular al Paseo del Óvalo y salva los 26 metros de desnivel existente.",
        "chomon El recorrido de la Escalinata se estructura en tres partes bien diferenciadas, articuladas entre sí por dos pequeñas plazas.",
        "show image escalinatamural center with fadeIn",
        "chomon Situado en el frontal de la placeta principal, entre el escudo de la ciudad y la fuente se encuentra el altorrelieve de Los Amantes de Teruel obra del escultor segoviano Aniceto Marinas.",
        "show scene escalinata3",
        "hide image escalinatamural with fadeOut",
        "chomon Tras un primer tramo recto, y más o menos a la mitad de su altura, se divide en dos tramos curvos hasta alcanzar la altura máxima, llegando al Paseo del Óvalo",
        "chomon En total habremos subido 140 escalones de una forma suave y agradable.",
        "sendaction geoterueltorres inicio_encuesta_modif_escalinata",
        {
            Choice: {
                Dialog: "chomon Las personas con movilidad reducida no pueden acceder al frontal de los amantes. ¿Cómo crees que se podría adaptar mejor?",
                Class: "navigationBox",
                escalinataRampa: {
                    Text: "Una rampa",
                    Do: "sendaction geoterueltorres modif_rampa",
                    Class: "button1",
                    onChosen: function() {
                        this.storage().modif_escalinata = "rampa";
                    },
                },
                escalinataSalvaescaleras: {
                    Text: "Un salvaescaleras",
                    Do: "sendaction geoterueltorres modif_salvaescaleras",
                    Class: "button2",
                    onChosen: function() {
                        this.storage().modif_escalinata = "salvaescaleras";
                    },
                },
            },
        },
        {
            Conditional: {
                Condition: function() {
                    return this.storage().modif_escalinata == "rampa";
                },
                True: "show scene escalinatarampa",
                False: "show scene escalinatasalva",
            },
        },
        {
            Choice: {
                Dialog: "chomon Esta es una simulación de como quedaría. ¿Todavía crees que estaría bien que se modifique?",
                Class: "navigationBox",
                escalinataRampa: {
                    Text: "Sí",
                    Do: "sendaction geoterueltorres escalinata_modif_si",
                    Class: "button1",
                },
                escalinataSalvaescaleras: {
                    Text: "No",
                    Do: "sendaction geoterueltorres escalinata_modif_no",
                    Class: "button2",
                },
            },
        },
        {
            Choice: {
                Dialog: "chomon De todas formas, te queremos ofrecer otra opción. Reconstruir el mural en otro sitio al que se pueda acceder sin problemas. Elige un sitio.",
                Class: "navigationBox",
                muralArriba: {
                    Text: "Parte de arriba",
                    Do: "sendaction geoterueltorres mural_arriba",
                    Class: "button1",
                    onChosen: function() {
                        this.storage().posicion_cartel = "arriba";
                    },
                },
                muralAbajo: {
                    Text: "Parte de abajo",
                    Do: "sendaction geoterueltorres mural_abajo",
                    Class: "button2",
                    onChosen: function() {
                        this.storage().posicion_cartel = "abajo";
                    },
                },
            },
        },
        {
            Conditional: {
                Condition: function() {
                    return this.storage().posicion_cartel == "arriba";
                },
                True: "show scene escalinataarriba",
                False: "show scene escalinataabajo",
            },
        },
        {
            Choice: {
                Dialog: "chomon ¿Crees que está bien el mural en esta posición?",
                Class: "navigationBox",
                muralSi: {
                    Text: "Sí",
                    Do: "sendaction geoterueltorres mural_si",
                    Class: "button1",
                },
                muralNo: {
                    Text: "No",
                    Do: "sendaction geoterueltorres mural_no",
                    Class: "button2",
                },
            },
        },
        {
            Choice: {
                Dialog: "chomon ¿Te parece mejor opción que la de modificar la escalinata?",
                Class: "navigationBox",
                muralSi: {
                    Text: "Sí",
                    Do: "sendaction geoterueltorres mural_mejor",
                    Class: "button1",
                },
                muralNo: {
                    Text: "No",
                    Do: "sendaction geoterueltorres mural_peor",
                    Class: "button2",
                },
            },
        },
        "chomon Gracias por tus respuestas.",
        //_Final
        "jump Final",
    ],

    Final: [
        "show scene panoramica2",
        "show character chomon normal2 at right with fadeIn end-fadeOut",
        "Este es el final del recorrido",
        "Espero que te haya resultado interesante conocer más de la historia de Teruel",
        "Ahora, te pediría que rellenases un pequeño cuestionario de satisfacción para ayudarnos a mejorar la guía.",
        "sendaction geoterueltorres inicio_encuesta_opinion",
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