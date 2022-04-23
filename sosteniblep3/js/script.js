
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
	"4r":"4r.png",
"adaptadaeinclusiva":"adaptadaeinclusiva.png",
"aereo":"aereo.jpg",
"aparcamiento":"aparcamiento.png",
"areanoasfaltada":"areanoasfaltada.png",
"asociaciones":"asociaciones.png",
"biodiversidad":"biodiversidad.png",
"botanico":"botanico.png",
"campuses":"campuses.png",
"clinicas":"clinicas.png",
"cursos":"cursos.png",
"depuradora":"depuradora.png",
"edificios":"edificios.png",
"emprendimiento":"emprendimiento.png",
"estudiantesytrabajadores":"estudiantesytrabajadores.png",
"florsolar":"florsolar.png",
"formacion":"formacion.png",
"greenmetric":"greenmetric.png",
"hospitales":"hospitales.png",
"hospitalvet":"hospitalvet.png",
"huella":"huella.png",
"huertos":"huertos.png",
"investigacion":"investigacion.png",
"jardines":"jardines.png",
"mariposario":"mariposario.png",
"movilidad":"movilidad.png",
"reciclar":"reciclar.png",
"renovable":"renovable.png",
"residuos":"residuos.png",
"segura":"segura.png",
"verde":"verde.png"
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
			default_expression: 'cameliasmile.png',
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
					"title":"¿Piensas que la sostenibilidad en una universidad es importante?",
					"enum":["nada importante","poco importante","importante", "muy importante","esencial"]
				},
				"opinionucm1": {
					"type":"string",
					"title":"Sobre la Complutense, ¿qué opinas?",
					"enum":["no me gusta nada","no está mal","me gusta","es genial"]
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
"camelia Mientras realizas esta guía, recogeremos datos anónimos sobre cómo la usas (el tiempo que tardas en pulsar la pantalla, cuestionarios y decisiones que tomas) que se usarán para investigar y para hacer estadísticas",
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
"sendaction sostenibilidadp3 inicio",
"show scene aereo",
"camelia Soy Camelia y voy a hablarte de la sostenibilidad en la Universidad Complutense",

"sendaction sostenibilidadp3 parte1",
"camelia Para que haya sostenibilidad es necesario concienciar e investigar",
"show scene investigacion",
"camelia:smile La UCM dedica cada año 23M€ en investigación,",
"camelia:smile De los cuales 1M€ se emplea en proyectos de sostenibilidad",

"sendaction sostenibilidadp3 parte2",
"show scene formacion",
"camelia:bigsmile No sólo se investiga. También se forma. ",
"camelia:bigsmile De los 10240 cursos ofrecidos en la UCM, la sostenibilidad se trata en 247 de ellos",
"camelia:bigsmile De estos, 11 cursos de formación son absolutamente específicos sobre la sostenibilidad",
"camelia:bigsmile y se imparten desde la unidad de campus y medioambiente",
"show scene cursos",
"camelia:bigsmile Aparte de cursos, hay jornadas organizadas en centros sobre medioambiente,",
"camelia:bigsmile  comunicación medioambiental y exposiciones sobre ODS, por citar algunos",

"sendaction sostenibilidadp3 parte3",
"show scene emprendimiento",
"camelia:smile Investigación y formación da como resultado que los estudiantes y profesores",
"camelia:smile se lancen en el emprendimeinto sostenible. Más de 15 empresas de nueva creación",
"camelia:smile en la UCM están relacionadas con el emprendimiento sostenible",

"sendaction sostenibilidadp3 parte4",
"show scene adaptadaeinclusiva",
"camelia:bigsmile La sostenibilidad también alcanza a las personas.",
"camelia:bigsmile Tener una educación inclusiva y adaptada es algo posible en la UCM",
"camelia:bigsmile Nuestros programas de becas y la unidad de diversidad e inclusión se encargan de ello",

"sendaction sostenibilidadp3 parte5",
"show scene greenmetric",
"camelia:bigsmile Gracias a estas cosas, hemos llegado a ser "
"camelia:bigsmile la universidad número 38 del mundo en el Ranking GreenMetric, que mide la sostenibilidad",

"sendaction sostenibilidadp3 finished",
"camelia Ahora, te pediría que rellenases un pequeño cuestionario de satisfacción para ayudarnos a mejorar la guía.",
"customform opinion",
function(){
monogatari.setContentToSend(monogatari.getFormResult("opinion"));
return true;
},
"sendaction sostenibilidadp3 rellenada",
"camelia Gracias por rellenar la encuesta",
"camelia ¡Hasta pronto!",

"call finalhistoria",
"end"]});
