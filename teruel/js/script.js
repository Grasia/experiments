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
monogatari.assets("music", {
    mainTheme: "main_theme.mp3"
});

// Define the voice files used in the game.
monogatari.assets("voices", {
    despedida: "despedida.mp3",
});

// Define the sounds used in the game.
monogatari.assets("sounds", {});

// Define the videos used in the game.
monogatari.assets("videos", {});

// Define the images used in the game.
monogatari.assets("images", {
    escalinatamural: "escalinatamural.jpg",
    campanas: "campanas.jpg",
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
    mausoleo1: "mausoleo1.jpg",
    mausoleo2: "mausoleo2.jpg",
    mausoleomodifder: "mausoleo_modif_der.jpg",
    mausoleomodifizq: "mausoleo_modif_izq.jpg",
    mausoleomodifambas: "mausoleo_modif_ambas.jpg",
    salvador1: "salvador1.jpg",
    salvador2: "salvador2.jpg",
    salvadorcartel: "salvadorcartel.jpg",
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
        "sendaction teruel " + etiqueta,
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

function changeOption(monogatari, etiqueta) {
    elemento = {};
    elemento[etiqueta] = [
        function() {
            switch (etiqueta) {
                case "optionTorico":
                    monogatari.storage().menuConocidas.torico = !monogatari.storage().menuConocidas.torico;                    
                    break;
                case "optionCatedral":
                    monogatari.storage().menuConocidas.catedral = !monogatari.storage().menuConocidas.catedral;
                    break;
                case "optionSanMartin":
                    monogatari.storage().menuConocidas.sanmartin = !monogatari.storage().menuConocidas.sanmartin;
                    break;
                case "optionSalvador":
                    monogatari.storage().menuConocidas.salvador = !monogatari.storage().menuConocidas.salvador;
                    break;
                case "optionEscalinata":
                    monogatari.storage().menuConocidas.escalinata = !monogatari.storage().menuConocidas.escalinata;
                    break;
                case "optionMausoleo":
                    monogatari.storage().menuConocidas.mausoleo = !monogatari.storage().menuConocidas.mausoleo;
                    break;
                default:
                    break;
            }
            return true;
        },
        "call menuConocidas",
    ];
    monogatari.script(elemento);
}

changeOption(monogatari, "optionTorico");
changeOption(monogatari, "optionCatedral");
changeOption(monogatari, "optionSanMartin");
changeOption(monogatari, "optionSalvador");
changeOption(monogatari, "optionEscalinata");
changeOption(monogatari, "optionMausoleo");

function menuConocidas(monogatari, etiqueta) {
    elemento ={};
    elemento[etiqueta] = [
        {
            "Choice":{
                Class: "wrapMenu",
                "text":{
                    "Text": "¿Marca las partes que conocías?",
                    Class: "text",
                    "Clickable": function() {return},
                },
                "cancelar":{
                    "Text": "Aceptar",
                    "Do": "jump Final",
                    Class: "buttonAceptar",
                },
                "torico":{
                    "Text": "Torico",
                    "Do": "call optionTorico",
                    Class: "buttonTorico",
                },
                "catedral":{
                    "Text": "Catedral",
                    "Do": "call optionCatedral",
                    Class: "buttonCatedral",
                },
                "sanMartin":{
                    "Text": "San Martín",
                    "Do": "call optionSanMartin",
                    Class: "buttonSanMartin",
                },
                "salvador":{
                    "Text": "Salvador",
                    "Do": "call optionSalvador",
                    Class: "buttonSalvador",
                },
                "escalinata":{
                    "Text": "Escalinata",
                    "Do": "call optionEscalinata",
                    Class: "buttonEscalinata",
                },
                "mausoleo":{
                    "Text": "Mausoleo",
                    "Do": "call optionMausoleo",
                    Class: "buttonMausoleo",
                },
                "checkTorico": {
                    "Text": "",
                    Class: "buttonCheckTorico",
                    Clickable: function() {return},
                    Condition: function () {
                        return monogatari.storage().menuConocidas.torico; // The 'Player' option will only be shown if this returns true.
                    },
                },
                "checkCatedral": {
                    "Text": "",
                    Class: "buttonCheckCatedral",
                    Clickable: function() {return},
                    Condition: function () {
                        return monogatari.storage().menuConocidas.catedral; // The 'Player' option will only be shown if this returns true.
                    }
                },
                "checkSanMartin": {
                    "Text": "",
                    Class: "buttonCheckSanMartin",
                    Clickable: function() {return},
                    Condition: function () {
                        return monogatari.storage().menuConocidas.sanmartin; // The 'Player' option will only be shown if this returns true.
                    }
                },
                "checkSalvador": {
                    "Text": "",
                    Class: "buttonCheckSalvador",
                    Clickable: function() {return},
                    Condition: function () {
                        return monogatari.storage().menuConocidas.salvador; // The 'Player' option will only be shown if this returns true.
                    }
                },
                "checkEscalinata": {
                    "Text": "",
                    Class: "buttonCheckEscalinata",
                    Clickable: function() {return},
                    Condition: function () {
                        return monogatari.storage().menuConocidas.escalinata; // The 'Player' option will only be shown if this returns true.
                    }
                },
                "checkMausoleo": {
                    "Text": "",
                    Class: "buttonCheckMausoleo",
                    Clickable: function() {return},
                    Condition: function () {
                        return monogatari.storage().menuConocidas.mausoleo; // The 'Player' option will only be shown if this returns true.
                    }
                }
            }
        },
        "return"
    ]
    monogatari.script(elemento);
}

menuConocidas(monogatari, "menuConocidas");

/**
 * Pasar de milisegundos a min:seg
 * !Si al final solo se quiere guardar en segundos cambiar
 */
function millisToMinutesAndSeconds(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

/**
 * Esta función sirve para calcular el tiempo que tarda un usuario en
 * avanzar entre dos puntos, pueden ser dentro de una misma sección.
 */
function calcularTiempo() {
    //Obtenemos la sección en la que nos encontramos
    var seccion = this.storage().secciones.actual;
    // Hacemos un contador según la sección en la que estemos
    var cont = Object.keys(this.storage().secciones.tiempos[seccion]).length;
    // Guardamos el tiempo actual y al anterior le ponemos el actual si no es la primera vez
    if(cont > 0) {
        this.storage().tiempo.anterior = this.storage().tiempo.actual;
    }
    this.storage().tiempo.actual = Date.now();
    // En el index guardaremos el id que será la sección + el número que le toque (cont)
    var index = 0;
    var orden = this.storage().secciones.orden;
    if(cont == undefined) {
        index = seccion + 0;
    } else {
        index = seccion + cont;
    }
    // Se calcula la diferencia y se pasa a min:seg
    var runTime = this.storage ().tiempo.actual - this.storage().tiempo.anterior;
    this.storage().secciones.tiempos[seccion][index] = millisToMinutesAndSeconds(runTime);
    
    // Controlamos el orden en el que el usuario va viendo las secciones
    // ? Repetir secciones
    if(orden != undefined) {
        if(orden.pop() != seccion || orden.lenght != 0) {
            this.storage().secciones.orden.push(seccion);
        }
    } else {
        this.storage().secciones.orden.push(seccion);
    }
    return true;
}

function calcularAburrimiento () {
    // En que sección estoy
    var seccion = this.storage().secciones.actual;
    // Ver los tres últimos tiempos
    var tiempos = this.storage().secciones.tiempos[seccion];
    // Compararlos y guardar varaiable para mostrar menu de aburrimiento
    console.log(tiempos);
}
/**
 * Se guarda el tiempo inicial
 */
function setTiempoInicial() {
    this.storage().tiempo.inicial = Date.now();
    return true;
}

/**
 * Se guarda el tiempo anterior para tener un primer tiempo al que restar 
 * el actual en la función calcularTiempo()
 * También puede usarse para reiniciar el contador del tiempo, cuando 
 * queremos medir una parte concreta
 */
function setTiempo() {
    this.storage().tiempo.anterior = Date.now();
    return true;
}

/**
 * Se elige la siguiente sección a la que irá el usuario
 */
function changeSection() {
    // Cuando no hay más secciones va al final
    if(this.storage().secciones.orden.length == 0) {
        this.storage().secciones.siguiente = "Final";
    } else {
        // Se obtiene el primer sitio y se elimina de la lista, asignandolo a siguienete sección
        this.storage().secciones.siguiente = this.storage().secciones.orden.shift();
    }
    return true;
}

/**
  * Ejemplo de una función asyncrona con un Promise
  * _Por ahora no se usa
  */
function asyncFunction () {
    return new Promise ((resolve, reject) => {
            // All your code should be here
            setTimeout (function (){
                // You need to resolve the promise once your task is done
                resolve ('Success!'); 
            }, 2150);
        }).then ((successMessage) => {
            alert (successMessage);
            return true;
        });
}

monogatari.script({
    Start: [
        // _Introducción
        "play music mainTheme with loop volume 10",
        "show scene panoramica",
        setTiempoInicial,
        "show character chomon normal2 at right with fadeIn end-fadeOut",
        "Hola soy Segundo de Chomón y voy a contarte la historia del casco antiguo de Teruel!",
        "Para ello vamos a ver varios lugares emblemáticos en la historia de Teruel.",
        "Pero antes, me gustaría que rellenases un cuestionario para saber un poco más de tí.",
        "Tienes que saber que no se van a recoger tus datos personales y que lo que vas a ver a continuación tiene un proposito de investigación.",
        // "sendaction teruel inicio_encuesta_usuario",
        "hide character chomon",
        // "call caracterizacion1",
        "show character chomon lookright at left with fadeIn end-fadeOut",
        // "Para comenzar necesito que te dirijas al siguiente destino",
        // "sendaction teruel empezando_torico",
        // "call primersitio",
        // "sendaction teruel llegado_torico",
        changeSection,
        "jump {{secciones.siguiente}}",
    ],
    Torico: [
        "show scene torico1",
        function () {
            monogatari.storage ({
                secciones: {
                    actual: "Torico"
                }
            });
            return true;
        },
        "play voice despedida with volume 85",
        setTiempo,
        "chomon La antigua plaza mayor fue siempre el centro neurálgico de la ciudad.",
        calcularTiempo,
        "chomon Su morfología responde al terreno donde está ubicada.",
        calcularTiempo,
        "chomon Su forma tiene que ver con las pendientes naturales por donde discurría el agua de lluvia",
        calcularTiempo,
        // calcularAburrimiento,
        "chomon En el año 1858 tiene lugar un hecho significativo.",
        calcularTiempo,
        "chomon Se levanta la nueva fuente del Torico situada en una zona más céntrica que no entorpecía el tránsito de los carros por la plaza.",
        calcularTiempo,
        "show scene torico2",
        "chomon Es una fuente circular con una columna de piedra anillada en la que se ven incrustadas cuatro cabezas de toro por las que mana el agua.",
        calcularTiempo,        
        "show image torico3 center with fadeIn",
        "chomon En la parte alta del pedestal, a siete metros de altura, descansa la figura de El Torico.",
        calcularTiempo,        
        "chomon Es el icono más representativo de Teruel.",
        calcularTiempo,        
        "chomon Esta pequeña escultura de bronce fundido es maciza y pesa nada menos que 54,5 kilos.",
        calcularTiempo,
        "chomon Se emplaza sobre una base rectangular de piedra.",
        calcularTiempo,
        "chomon Tiene una altura de 37 centímetros.",
        "hide image torico3 with fadeOut",
        "show scene torico1",
        calcularTiempo,        
        "chomon Desde el año 1858 en que fue colocado sólo dos veces ha sido bajado de su emplazamiento.",
        calcularTiempo,        
        "chomon La primera vez los propios vecinos lo quitaron para guardarlo en un lugar seguro y protegerlo durante la Guerra Civil.",
        calcularTiempo,
        "chomon La segunda vez en 2003 se volvió a bajar para una restauración.",
        calcularTiempo,
        changeSection,
        "jump {{secciones.siguiente}}",
    ],
    Catedral: [
        function () {
            monogatari.storage ({
                secciones: {
                    actual: "Catedral"
                }
            });
            return true;
        },
        "show scene catedral1",
        // "sendaction teruel empezando_catedral",
        // "call segundositio",
        // "sendaction teruel llegado_catedral",
        setTiempo,
        "chomon La Catedral de Teruel tiene su origen en la iglesia de Santa María de Mediavilla.",
        calcularTiempo,
        "chomon Que comenzó a edificarse en estilo románico en 1171 y se concluyó con la construcción de la torre mudéjar en 1257.",
        calcularTiempo,
        "chomon En la segunda mitad del siglo XIII, se reestructura la antigua obra románica y se le añaden tres naves mudéjares de mampostería y ladrillo",
        calcularTiempo,
        "chomon Que mejoran y elevan la estructura románica del siglo XII.",
        calcularTiempo,
        "chomon En el mismo estilo gótico-mudéjar, se van realizando cambios en toda la iglesia.",
        calcularTiempo,
        "chomon Ya en estilo plateresco-mudéjar, fue construido en 1538 el cimborrio de la nave central, obra de Martín de Montalbán.",
        calcularTiempo,
        "show scene catedral3",
        calcularTiempo,
        "chomon Más tarde, en 1587, con la creación de la diócesis de Teruel, fue promovida a Catedral y consagrada como tal.",
        calcularTiempo,
        "chomon La torre, techumbre y cimborrio de la Catedral de Teruel fueron declarados Patrimonio de la Humanidad por la Unesco en 1986.",
        calcularTiempo,
        changeSection,
        "jump {{secciones.siguiente}}",
    ],
    SanMartin: [
        function () {
            monogatari.storage ({
                secciones: {
                    actual: "SanMartin"
                }
            });
            return true;
        },
        "show scene sanmartin1",
        // "sendaction teruel empezando_sanmartin",
        // "call tercersitio",
        // "sendaction teruel llegado_sanmartin",
        setTiempo,
        "chomon La Torre de San Martín se edificó entre 1315 y 1316.",
        calcularTiempo,
        "chomon Está adosada a la iglesia de San Martín, construida en 1706 y que sustituyó a la anterior mudéjar.",
        calcularTiempo,
        "chomon A los pies de esta torre discurre, la Cuesta de la Andaquilla, testigo de una de las escenas de la Historia de los Amantes.",
        calcularTiempo,
        "chomon Es ejemplo de la tipología de torre alminar almohade.",
        calcularTiempo,
        "chomon Siguiendo esta estructura posee dos torres concéntricas, separadas casi un metro, entre las que se desarrollan pasillos y escaleras.",
        calcularTiempo,
        "chomon Que llevan a un campanario, cubiertos por bóveda de ladrillo.",
        calcularTiempo,
        "chomon De planta cuadrada, da paso a una calle bajo su bóveda de cañón apuntado.",
        calcularTiempo,
        "show scene sanmartin3",
        calcularTiempo,
        "chomon El exterior, de ladrillo, aparece decorado con cerámica vidriada en verde y blanco y paños horizontales de distintas alturas.",
        calcularTiempo,
        "chomon Presenta un gran repertorio decorativo.",
        calcularTiempo,
        "chomon El motivo decorativo que predomina es el de estrellas de 8 puntas blancas y con orla verde.",
        calcularTiempo,
        "chomon Como en otros lugares de esta provincia esta torre tiene una leyenda sobre su construcción que, como no podía ser menos, es de amor.",
        changeSection,
        "jump {{secciones.siguiente}}",
    ],
    Salvador: [
        function () {
            monogatari.storage ({
                secciones: {
                    actual: "Salvador"
                }
            });
            return true;
        },
        "show scene salvador1",
        // "sendaction teruel empezando_salvador",
        // "call cuartositio",
        // "sendaction teruel llegado_salvador",
        "chomon Allá por el siglo XIV los alarifes mudéjares, Omar y Abdalá, constructores de las torres de San Martín y El Salvador respectivamente.",
        calcularTiempo,
        "chomon Estaban de paseo por la calle, de pronto, los dos amigos vieron una hermosa joven de la que ambos quedaron prendados, Zoraida se llamaba.",
        calcularTiempo,
        "chomon Su amistad se convirtió en odio, y como ninguno quería perder a su amada, fueron por separado a visitar al padre.",
        calcularTiempo,
        "chomon Éste, les dio a ambos la misma respuesta: la mano de Zoraida será para el primero que acabe su torre.",
        calcularTiempo,
        "chomon Las obras comenzaron a los pocos días, sin apenas descansos.",
        calcularTiempo,
        "chomon Cierto día, Omar, arquitecto de la torre de San Martín, anunció que su construcción había finalizado.",
        calcularTiempo,
        "chomon Los habitantes de Teruel se reunieron en torno a ella, y, conforme iban retirando los andamios que cubrían la obra.",
        calcularTiempo,
        "chomon Las gentes se quedaban maravilladas y su arquitecto se mostraba cada vez más orgulloso.",
        calcularTiempo,
        "chomon Sin embargo, cuando quedo totalmente descubierta, Omar soltó un grito de horror. Algo había salido mal, su torre estaba ligeramente torcida.",
        "show scene salvador2",
        calcularTiempo,
        "chomon Desesperado subió a lo más alto de la torre y ante las gentes de la ciudad se arrojó al vacío.",
        calcularTiempo,
        "chomon Unas semanas después, Abdalá finalizaba su torre, la de El Salvador.",
        calcularTiempo,
        "chomon Cuando el andamio fue retirado y los ciudadanos pudieron contemplar la nueva obra, se quedaron totalmente sorprendidos.",
        calcularTiempo,
        "chomon Las dos torres, salvo algunos detalles, eran muy parecidas.",
        calcularTiempo,
        "chomon Los motivos decorativos son muy parecidos a los que hemos visto antes en la torre de San Martín.",
        "show scene salvador1",
        "show image sanmartin2 center with fadeIn",
        calcularTiempo,
        "chomon La torre es usada como campanario de la iglesia a la que está adosada, la Iglesia del Salvador.",
        calcularTiempo,
        "chomon Alberga en su interior el Centro de Interpretación de la Arquitectura Mudéjar Turolense.",
        "hide image sanmartin2 with fadeOut",
        calcularTiempo,
        "chomon La Torre El Salvador junto con la torre de San Martín, en 1986 fueron declarados Patrimonio de la Humanidad por la Unesco.",
        calcularTiempo,
        "show scene salvadorcartel",
        // "sendaction teruel inicio_encuesta_locucion",
        // {
        //     Choice: {
        //         Dialog: "chomon ¿Crees que la locución de la historia te facilitaría el acceso al contenido de este cartel?",
        //         Class: "navigationBox",
        //         locucionSi: {
        //             Text: "Sí",
        //             Do: "sendaction teruel locucion_si",
        //             Class: "button1",
        //         },
        //         locucionNo: {
        //             Text: "No",
        //             Do: "sendaction teruel locucion_no",
        //             Class: "button2",
        //         },
        //     },
        // },
        // {
        //     Choice: {
        //         Dialog: "chomon ¿Dónde te gustaría escuchar la historia?.",
        //         Class: "navigationBox",
        //         salvadorMovil: {
        //             Text: "En mi móvil",
        //             Do: "sendaction teruel locucion_movil",
        //             Class: "button1",
        //         },
        //         salvadorAltavoz: {
        //             Text: "En un altavoz",
        //             Do: "sendaction teruel locucion_altavoz",
        //             Class: "button2",
        //         },
        //     },
        // },
        "chomon Gracias por tu respuesta.",
        changeSection,
        "jump {{secciones.siguiente}}",
    ],
    Escalinata: [
        function () {
            monogatari.storage ({
                secciones: {
                    actual: "Escalinata"
                }
            });
            return true;
        },
        "chomon Ahora conoceremos uno de los monumentos más emblemáticos de Teruel.",
        "show scene escalinata1",
        calcularTiempo,
        // "sendaction teruel empezando_escalinata",
        // "call quintositio",
        // "sendaction teruel llegado_escalinata",
        "chomon Desde donde mejor se ve la escalinata es desde abajo, dejame que te lo enseñe.",
        calcularTiempo,
        "show scene escalinata4",
        "chomon Se construyó a comienzo de los años veinte, para salvar el desnivel existente entre la estación de ferrocarril y el Casco Histórico de la ciudad.",
        calcularTiempo,
        "chomon La zona de la escalinata está adaptada con un ascensor para que personas con movilidad reducida superen ese desnivel.",
        calcularTiempo,
        "show scene escalinataaclaracion",
        "chomon Para bajar se pueden usar las escaleras o el ascensor.",
        calcularTiempo,
        "chomon Aquí puedes ver donde se encuentran.",
        calcularTiempo,
        "show scene escalinata2",
        "chomon La construcción de la escalinata se inspiró en elementos intrínsecos a la ciudad como la arquitectura mudéjar, el gótico y el modernismo.",
        calcularTiempo,
        "chomon Es obra del ingeniero turolense José Torán de la Rad.",
        calcularTiempo,
        "chomon Por Decreto del Gobierno de Aragón, la Escalinata de Teruel fue declara da Bien de Interés Cultural, en la categoría de Monumento.",
        calcularTiempo,
        "show scene escalinata1",
        "chomon La Escalinata es en definitiva la imagen resumida de Teruel para el viajero que llegaba a la ciudad.",
        calcularTiempo,
        "chomon En la actualidad constituye la obra clave del neomudéjar turolense.",
        calcularTiempo,
        "chomon Su desarrollo es perpendicular al Paseo del Óvalo y salva los 26 metros de desnivel existente.",
        calcularTiempo,
        "chomon El recorrido de la Escalinata se estructura en tres partes bien diferenciadas, articuladas entre sí por dos pequeñas plazas.",
        calcularTiempo,
        "show image escalinata2 center with fadeIn",
        "chomon Situado en el frontal de la placeta principal, entre el escudo de la ciudad y la fuente se encuentra el altorrelieve de Los Amantes de Teruel obra del escultor segoviano Aniceto Marinas.",
        calcularTiempo,
        "show scene escalinata3",
        "hide image escalinata2 with fadeOut",
        "chomon Tras un primer tramo recto, y más o menos a la mitad de su altura, se divide en dos tramos curvos hasta alcanzar la altura máxima, llegando al Paseo del Óvalo",
        calcularTiempo,
        "chomon En total habremos subido 140 escalones de una forma suave y agradable.",
        calcularTiempo,
        // "sendaction teruel inicio_encuesta_modif_escalinata",
        // {
        //     Choice: {
        //         Dialog: "chomon Las personas con movilidad reducida no pueden acceder al frontal de los amantes. ¿Cómo crees que se podría adaptar mejor?",
        //         Class: "navigationBox",
        //         escalinataRampa: {
        //             Text: "Una rampa",
        //             Do: "sendaction teruel modif_rampa",
        //             Class: "button1",
        //             onChosen: function() {
        //                 this.storage().modif_escalinata = "rampa";
        //             },
        //         },
        //         escalinataSalvaescaleras: {
        //             Text: "Un salvaescaleras",
        //             Do: "sendaction teruel modif_salvaescaleras",
        //             Class: "button2",
        //             onChosen: function() {
        //                 this.storage().modif_escalinata = "salvaescaleras";
        //             },
        //         },
        //     },
        // },
        // {
        //     Conditional: {
        //         Condition: function() {
        //             return this.storage().modif_escalinata == "rampa";
        //         },
        //         True: "show scene escalinatarampa",
        //         False: "show scene escalinatasalva",
        //     },
        // },
        // {
        //     Choice: {
        //         Dialog: "chomon Esta es una simulación de como quedaría. ¿Todavía crees que estaría bien que se modifique?",
        //         Class: "navigationBox",
        //         escalinataRampa: {
        //             Text: "Sí",
        //             Do: "sendaction teruel escalinata_modif_si",
        //             Class: "button1",
        //         },
        //         escalinataSalvaescaleras: {
        //             Text: "No",
        //             Do: "sendaction teruel escalinata_modif_no",
        //             Class: "button2",
        //         },
        //     },
        // },
        // {
        //     Choice: {
        //         Dialog: "chomon De todas formas, te queremos ofrecer otra opción. Reconstruir el mural en otro sitio al que se pueda acceder sin problemas. Elige un sitio.",
        //         Class: "navigationBox",
        //         muralArriba: {
        //             Text: "Parte de arriba",
        //             Do: "sendaction teruel mural_arriba",
        //             Class: "button1",
        //             onChosen: function() {
        //                 this.storage().posicion_cartel = "arriba";
        //             },
        //         },
        //         muralAbajo: {
        //             Text: "Parte de abajo",
        //             Do: "sendaction teruel mural_abajo",
        //             Class: "button2",
        //             onChosen: function() {
        //                 this.storage().posicion_cartel = "abajo";
        //             },
        //         },
        //     },
        // },
        // {
        //     Conditional: {
        //         Condition: function() {
        //             return this.storage().posicion_cartel == "arriba";
        //         },
        //         True: "show scene escalinataarriba",
        //         False: "show scene escalinataabajo",
        //     },
        // },
        // {
        //     Choice: {
        //         Dialog: "chomon ¿Crees que está bien el mural en esta posición?",
        //         Class: "navigationBox",
        //         muralSi: {
        //             Text: "Sí",
        //             Do: "sendaction teruel mural_si",
        //             Class: "button1",
        //         },
        //         muralNo: {
        //             Text: "No",
        //             Do: "sendaction teruel mural_no",
        //             Class: "button2",
        //         },
        //     },
        // },
        // {
        //     Choice: {
        //         Dialog: "chomon ¿Te parece mejor opción que la de modificar la escalinata?",
        //         Class: "navigationBox",
        //         muralSi: {
        //             Text: "Sí",
        //             Do: "sendaction teruel mural_mejor",
        //             Class: "button1",
        //         },
        //         muralNo: {
        //             Text: "No",
        //             Do: "sendaction teruel mural_peor",
        //             Class: "button2",
        //         },
        //     },
        // },
        "chomon Gracias por tu respuesta.",
        changeSection,
        "jump {{secciones.siguiente}}",
    ],
    Mausoleo: [
        function () {
            monogatari.storage ({
                secciones: {
                    actual: "Mausoleo"
                }
            });
            return true;
        },
        "chomon Para conocer más de la historia de los amantes, vamos a ver el sitio perfecto.",
        calcularTiempo,
        "show scene mausoleo1",
        // "sendaction teruel empezando_mausoleo",
        // "call sextositio",
        // "sendaction teruel llegado_mausoleo",
        "chomon Para acceder a esta ubicación, solo hay una entrada para personas con movilidad reducida. Te vamos a mostrar dos propuestas.",
        calcularTiempo,
        "show scene mausoleomodifder",
        // "sendaction teruel inicio_encuesta_modif_mausoleo",
        // {
        //     Choice: {
        //         Dialog: "chomon ¿Crees que está bien adaptada?.",
        //         Class: "navigationBox",
        //         mausoleoModif1Si: {
        //             Text: "Sí",
        //             Do: "sendaction teruel mausoleo_modif1_si",
        //             Class: "button1",
        //         },
        //         mausoleoModif1No: {
        //             Text: "No",
        //             Do: "sendaction teruel mausoleo_modif1_no",
        //             Class: "button2",
        //         },
        //     },
        // },
        // "show scene mausoleomodifizq",
        // {
        //     Choice: {
        //         Dialog: "chomon ¿Crees que está bien adaptada?.",
        //         Class: "navigationBox",
        //         mausoleoModif2Si: {
        //             Text: "Sí",
        //             Do: "sendaction teruel mausoleo_modif2_si",
        //             Class: "button1",
        //         },
        //         mausoleoModif2No: {
        //             Text: "No",
        //             Do: "sendaction teruel mausoleo_modif2_no",
        //             Class: "button2",
        //         },
        //     },
        // },
        "show scene mausoleomodifambas",
        // {
        //     Choice: {
        //         Dialog: "chomon ¿Cuál te parece la mejor opción?.",
        //         Class: "navigationBox",
        //         mausoleoIzquierda: {
        //             Text: "Izquierda",
        //             Do: "sendaction teruel mausoleo_modif_izquierda",
        //             Class: "button1",
        //         },
        //         mausoleoAmbas: {
        //             Text: "Ambas",
        //             Do: "sendaction teruel mausoleo_modif_ambas",
        //             Class: "button2",
        //         },
        //         mausoleoDerecha: {
        //             Text: "Derecha",
        //             Do: "sendaction teruel mausoleo_modif_derecha",
        //             Class: "button3",
        //         },
        //     },
        // },
        "show scene mausoleo1",
        "chomon Gracias por tu respuesta.",
        calcularTiempo,
        "chomon En septiembre de 2005 se inaugura el actual Mausoleo de los Amantes. ",
        calcularTiempo,
        "chomon El proyecto del edificio, diseñado por el arquitecto Alejandro Cañada.",
        calcularTiempo,
        "chomon Dispone de diferentes salas expositivas que pretenden acercar la Historia de los Amantes al visitante.",
        calcularTiempo,
        "chomon Desde el punto de vista conceptual, la organización del recorrido expositivo se articula en torno a cuatro sectores:",
        calcularTiempo,
        "chomon En el primer sector se explican las características sociales, políticas y culturales.",
        calcularTiempo,
        "chomon Que rodearon los acontecimientos en el Teruel de principios del siglo XIII.",
        calcularTiempo,
        "show image mausoleointerior center with fadeIn",
        "chomon En el segundo sector se relatan los hechos que ocurrieron en 1217 en Teruel entre Juan Diego Martínez de Marcilla e Isabel de Segura.",
        calcularTiempo,
        "chomon También se habla del debate histórico que este relato ha generado a través de los siglos.",
        "hide image mausoleointerior center with fadeOut",
        calcularTiempo,
        "chomon El tercer sector está destinado a explicar la influencia de los Amantes en el mundo de las artes a lo largo de la historia.",
        "show scene mausoleo2",
        calcularTiempo,
        "chomon Por último, en el cuarto sector se encuentra el Mausoleo de los Amantes, obra del escultor Juan de Ávalo.",
        calcularTiempo,
        "chomon En esta zona y a través de una serie de paneles se explica cómo se llevó a cabo el hallazgo de las momias.",
        calcularTiempo,
        "chomon Así como el emplazamiento que ha tenido a lo largo del tiempo.",
        calcularTiempo,
        changeSection,
        "jump {{secciones.siguiente}}",
    ],
    Final: [
        "show scene panoramica2",
        "show character chomon normal2 at right with fadeIn end-fadeOut",
        "Este es el final del recorrido",
        function () {
            monogatari.storage ({
                menuConocidas: {
                    cadena: JSON.stringify(monogatari.storage().menuConocidas)
                },
                secciones: {
                    cadenaTiempos: JSON.stringify(monogatari.storage().secciones.tiempos)
                }
            });
            return true;
        },
        // "sendaction prueba {{menuConocidas.cadena}}",
        // "sendaction prueba {{secciones.cadenaTiempos}}",
        "Espero que te haya resultado interesante conocer más de la historia de Teruel",
        "Ahora, te pediría que rellenases un pequeño cuestionario de satisfacción para ayudarnos a mejorar la guía.",
        // "sendaction teruel inicio_encuesta_opinion",
        "show scene panoramica2",
        // "call opinion1",
        // "call opinion2",
        // "call opinion3",
        // "call opinion4",
        // "call opinion5",
        "¡Hasta pronto!",
        "call finalhistoria",
        "end",
    ],
});