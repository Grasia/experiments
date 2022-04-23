
function getPicture(){
	// get a getPicture

	// confirm

	// do something

}

function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
};


// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
		<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
		<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});



// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine1',
		icon: ''
	}
});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {
"bula":"bula.jpg"
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"casa":"casaestudiante.png",
	"puertacasa":"puertacasa.png",
	"aereo":"aereo.jpg",
	"artec":"artec.jpeg",
	"cambiaelmundo":"cambiaelmundo.jpeg",
	"hiperaula":"hiperaula.jpeg",
	"huertos":"huertos.jpeg",
	"ciencia":"ciencia.jpeg",
    "inclusividad":"inclusividad.jpeg",
    "rchc":"rchc.jpg",
    "rugby":"rugby.jpg",
    "plazasalud":"plazasalud.jpeg",
    "rectorado":"rectorado.jpeg",
    "aularioeduc":"aularioeduc.jpg",
    "fmate":"fmate.jpg",
"plazasalud":"plazasalud.jpeg",
"inclusividad":"inclusividad.jpeg",
"ciencia":"ciencia.jpeg",
"labotech":"labotech.jpeg",
"bibinfor":"bibinfor.jpg",
"zambrano":"zambrano.jpg",
"cooperacion":"cooperacion.jpg",
"erasmusplus":"erasmusplus.jpeg"

});


// Define the Characters
monogatari.characters ({
	'camelia': {
		name: 'camelia',
		color: '#00bfff',
		directory: 'camelia', // Optional*
		sprites :{ // Images Identifier for the 'Show' statement.
			bigsmile: 'cameliabigsmile.png',
			serious: 'cameliaserious.png',
			smile: 'cameliasmile.png',

		},
		expressions: { // Side images identifiers to show on dialogs
			bigsmile: 'cameliabigsmile.png',
			serious: 'cameliaserious.png',
			smile: 'cameliasmile.png'
		}
	},
	'clara': {
		name: 'clara',
		color: '#00bfff',
		directory: 'clara', // Optional*
		sprites :{ // Images Identifier for the 'Show' statement.
			normal1: 'clara normal1.png',
			normal2: 'clara normal2.png',
			lookright: 'clara lookright.png',
		},
		default_expression: 'face.resized.png', // Optional, side image to show every time the character speaks.
		expressions: { // Side images identifiers to show on dialogs
			normal1: 'clara normal1.png',
			normal2: 'clara normal2.png',
			lookright: 'clara lookright.png',
		}
	},
	'jose': {
		name: 'jose',
		color: '#00bfff',
		directory: 'jose', // Optional*
		sprites :{ // Images Identifier for the 'Show' statement.
			normal: 'jose full.png'
		},
		default_expression: 'face.gif', // Optional, side image to show every time the character speaks.
		expressions: { // Side images identifiers to show on dialogs
		normal: 'jose full.png'
		}
	},
	'zambrano': {
		name: 'zambrano',
		color: '#00bfff',
		directory: 'zambrano', // Optional*
		sprites :{ // Images Identifier for the 'Show' statement.
			normal: 'zambrano.png'
		},
		default_expression: 'zambrano.png', // Optional, side image to show every time the character speaks.
		expressions: { // Side images identifiers to show on dialogs
		normal: 'zambrano.png'
		}
	},
	'rosa': {
	name: 'rosa',
	color: '#00bfff',
	directory: 'rosa', // Optional*
	sprites :{ // Images Identifier for the 'Show' statement.
		normal1: 'rosa4.png',
		normal2: 'rosa5.png',

	},
	default_expression: 'rosa4.png',
	expressions: { // Side images identifiers to show on dialogs
		normal1: 'rosa4.png',
				normal2: 'rosa5.png'
	}
},


});

// check google maps to obtain coordinates by right clicking anyplace in the map
// and choosing "what's here"
monogatari.geolocations({
});



monogatari.customForms({
	"opinion":{
		"schema": {
			"title":"Opinión",
			"description":"¿Qué opinas de la guía?",
			"type":"object",
			"properties": {
				"sobreguia": {
					"type":"string",
					"title":"Esta guía me ha gustado",
					"enum":['poco','regular','mucho','una barbaridad']
				},
				"estudios": {
					"type":"string",
					"title":"¿Qué quieres estudiar?",
					"enum":['humanidades','ciencias sociales','ciencias experimentales', 'ingenierías', 'ciencias de la salud']
				},
				"opinionucm1": {
					"type":"string",
					"title":"Sobre la Complutense, ¿qué opinas?",
					"enum":['No me gusta como universidad','No tiene lo que busco', 'Ojalá que pueda ser admitido',"Me encanta y voy a entrar"]
				}
			}
		},
		"options": {"form":{
			"buttons":{
				"submit":{
					"title": "Enviar"
				}
			}
		}
	},
	"view" : "bootstrap-create"
}
});


		function final(monogatari, etiqueta){
			elemento= {};
			elemento[etiqueta]=[
				"Ya no hay nada más que decir. Puedes descargar otras guías o recargar para empezar de cero"
				,"call "+etiqueta];
				monogatari.script(elemento);
			}

			final (monogatari,"finalhistoria")


monogatari.script ({	'Start': [
"clara Mientras realizas esta guía, recogeremos datos anónimos sobre cómo la usas (el tiempo que tardas en pulsar la pantalla, cuestionarios y decisiones que tomas) que se usarán para investigar y para hacer estadísticas",
{'Choice': {
    'Sí': {
        'Text': 'Acepto y quiero continuar.',
        'Do': 'jump historia'
    },
    'No': {
        'Text': 'No acepto, prefiero no hacer la guía',
        'Do': "call finalhistoria"
    }
}}],
"historia":[
"sendaction brunch inicio",
"show scene rectorado",
"show character clara normal2 at right with fadeIn end-fadeOut",
"Soy Clara Campoamor y voy a hablarte de la Universidad Complutense",
"hide character clara",
"clara La Universidad Complutense es la universidad presencial más grande de españa",
"show character clara lookright at right with fadeIn end-fadeOut",
"show image bula center with fadeIn",
"Fue creada en 1499 por el Cardenal Cisneros como consecuencia de la Carta Bulada 'Inter cetera'",
"hide image bula center with fadeOut",
"show character rosa normal1 at right with fadeIn end-fadeOut",
"show scene aularioeduc",
"Tiene 26 facultades en las que encontrarás lo que buscas",
"show scene plazasalud",
"Sólo con pasearte por nuestros campus podrás conocer más personas que en ningún sitio",

"sendaction brunch parte1",
"show scene casa",
"clara La Casa del Estudiante está para ayudarte en tu estancia y será centro de tu vida universitaria",
"show character clara normal2 at left with fadeIn end-fadeOut",
"show scene hiperaula",
"clara Disponemos de muchas instalaciones novedosas, como la hiperaula, donde profesores de toda la comunidad de madrid vienen a aprender nuevos métodos docentes",
"show scene rugby",
"clara Estamos muy orgullosos de nuestras ligas de deportes",
"show scene inclusividad",
"clara En las que nada nos para porque somos una universidad inclusiva",

"sendaction brunch parte2",
"show scene ciencia",
"show character clara lookright at left with fadeIn end-fadeOut",
"En la Complutense podrás desarrollar tu potencial",
"show scene labotech",
"clara No importa de donde vengas o qué quieras hacer",
"show scene zambrano",
"show character clara normal1 at right with fadeIn end-fadeOut",
"Tendras acceso a la biblioteca más grande de Madrid, entre otras",
"hide character clara",
"clara Será un lugar donde podrás estudiar, aprender y encontrarte con tus compañeros",

"sendaction brunch parte3",
"show scene huertos",
"show character clara normal at right with fadeIn end-fadeOut",
"clara También podrás crecer como persona",
"show scene cooperacion",
"show character clara normal at left with fadeIn end-fadeOut",
"clara y aprender qué significa ser un ciudadano del mundo",

"sendaction brunch parte4",
"show scene erasmusplus",
"clara y si quieres desarrollar tu talento internacional, tenemos el programa erasmus más potente",
"show scene rchc",
"clara podrás optar incluso a becas en la Universidad de Harvard con nuestro Real Colegio Harvard-Complutense",

"sendaction brunch parte5",
"show scene cambiaelmundo",
"clara Queremos cambiar el mundo, ¿te apuntas?",

"sendaction brunch finished",
"clara Ahora, te pediría que rellenases un pequeño cuestionario de satisfacción para ayudarnos a mejorar la guía.",
"customform opinion",
function(){
monogatari.setContentToSend(monogatari.getFormResult("opinion"));
return true;
},
"sendaction brunch rellenada",
"clara Gracias por rellenar la encuesta",
"clara ¡Hasta pronto!",

"call finalhistoria",
"end"]});
