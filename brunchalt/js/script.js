
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
				default_expression: 'cameliasmile-sm.png',
		expressions: { // Side images identifiers to show on dialogs
			bigsmile: 'cameliabigsmile-sm.png',
			serious: 'cameliaserious-sm.png',
			smile: 'cameliasmile-sm.png'
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
	default_expression: 'rosadefault.png',
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
					"required":true,
					"default":"NSNC",
					"title":"Esta guía me ha gustado",
					"enum":['poco','regular','mucho','una barbaridad','NSNC']
				},
				"estudios": {
					"type":"string",
					"required":true,
					"default":"NSNC",
					"title":"¿Qué quieres estudiar?",
					"enum":['humanidades','ciencias sociales','ciencias experimentales', 'ingenierías', 'ciencias de la salud','NSNC']
				},
				"opinionucm1": {
					"type":"string",
					"required":true,
					"default":"NSNC",
					"title":"Sobre la Complutense, ¿qué opinas?",
					"enum":['No me gusta como universidad','No tiene lo que busco', 'Ojalá que pueda ser admitido',"Me encanta y voy a entrar",'NSNC']
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
"rosa Mientras realizas esta guía, recogeremos datos anónimos sobre cómo la usas (el tiempo que tardas en pulsar la pantalla, cuestionarios y decisiones que tomas) que se usarán para investigar y para hacer estadísticas",
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
"sendaction brunchalt inicio",
"show scene rectorado",
"show character rosa normal1 at right with fadeIn end-fadeOut",
"Soy Rosa, la vicerrectora de estudiantes y voy a hablarte de la Universidad Complutense",
"hide character rosa",
"rosa La Universidad Complutense es la universidad presencial más grande de españa",
"show character rosa normal1 at right with fadeIn end-fadeOut",
"show image bula center with fadeIn",
"Fue creada en 1499 por el Cardenal Cisneros como consecuencia de la Carta Bulada 'Inter cetera'",
"hide image bula center with fadeOut",
"show character rosa normal1 at right with fadeIn end-fadeOut",
"show scene aularioeduc",
"Tiene 26 facultades en las que encontrarás lo que buscas",
"show scene plazasalud",
"Sólo con pasearte por nuestros campus podrás conocer más personas que en ningún sitio",
"sendaction brunchalt parte1",
"show scene casa",
"rosa La Casa del Estudiante está para ayudarte en tu estancia y será centro de tu vida universitaria",
"show character rosa normal1 at left with fadeIn end-fadeOut",
"show scene hiperaula",
"Disponemos de muchas instalaciones novedosas, como la hiperaula, donde profesores de toda la comunidad de madrid vienen a aprender nuevos métodos docentes",
"show scene rugby",
"rosa Estamos muy orgullosos de nuestras ligas de deportes",
"show scene inclusividad",
"rosa En las que nada nos para porque somos una universidad inclusiva",

"sendaction brunchalt parte2",
"show scene ciencia",
"show character rosa normal1 at left with fadeIn end-fadeOut",
"En la Complutense podrás desarrollar tu potencial",
"hide character rosa",
"show scene labotech",
"rosa No importa de donde vengas o qué quieras hacer",
"show scene zambrano",
"show character rosa normal1 at right with fadeIn end-fadeOut",
"Tendras acceso a la biblioteca más grande de Madrid, entre otras",
"hide character rosa",
"rosa Será un lugar donde podrás estudiar, aprender y encontrarte con tus compañeros",

"sendaction brunchalt parte3",
"show scene huertos",
"show character rosa normal1 at right with fadeIn end-fadeOut",
"También podrás crecer como persona",
"show scene cooperacion",
"show character rosa normal at left with fadeIn end-fadeOut",
"y aprender qué significa ser un ciudadano del mundo",

"sendaction brunchalt parte4",
"show scene erasmusplus",
"rosa y si quieres desarrollar tu talento internacional, tenemos el programa erasmus más potente",
"show scene rchc",
"rosa podrás optar incluso a becas en la Universidad de Harvard con nuestro Real Colegio Harvard-Complutense",

"sendaction brunchalt parte5",
"show scene cambiaelmundo",
"rosa Queremos cambiar el mundo, ¿te apuntas?",

"sendaction brunchalt finished",
"rosa Ahora, te pediría que rellenases un pequeño cuestionario de satisfacción para ayudarnos a mejorar la guía.",
"customform opinion",
function(){
monogatari.setContentToSend(monogatari.getFormResult("opinion"));
return true;
},
"sendaction brunchalt rellenada",
"rosa Gracias por rellenar la encuesta",
"rosa ¡Hasta pronto!",

"call finalhistoria",
"end"]});
