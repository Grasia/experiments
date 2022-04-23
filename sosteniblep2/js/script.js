
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
"sendaction sostenibilidadp2 inicio",
"show scene aereo",
"camelia Soy Camelia y voy a hablarte de la sostenibilidad en la Universidad Complutense",

"sendaction sostenibilidadp2 parte1",
"show scene renovable",
"camelia:bigsmile Vamos a hablar de energía, porque la Complutense necesita mucha electricidad",
"camelia:bigsmile Necesitamos 49 GWh al año. Esto es lo que consumen 4.900 pisos en un año."
"camelia:bigsmile Pero esta energía es 100% energía renovable certificada en origen. ",
"camelia:bigsmile Significa que viene de placas solares o de aerogeneradores o de turbinas. ",
"show scene florsolar",
"camelia:bigsmile En la UCM ahora mismo sólo tenemos la flor solar inteligente. ",
"camelia:bigsmile Proporciona unos 4000 kWh al año y es inteligente porque se orienta hacia el sol",
"show scene movilidad",
"camelia:bigsmile La electricidad renovable alimenta también el servicio de bicicletas eléctricas",
"camelia:bigsmile y cuando no es posible usar transporte público ni bicicletas, recomendamos usar el coche compartido",
"show scene huella",
"camelia:bigsmile Pero nuestra actividad no deja de tener impacto. "
"camelia:bigsmile Tenemos registrada nuestra huella de carbono en el Ministerio de Transición Ecológica",
"camelia:bigsmile Es decreciente desde 2018, hasta 2020, pero es alta",

"sendaction sostenibilidadp2 parte2",
"show scene botanico",
"camelia:smile La gestión del agua nos preocupa. El jardín botánico recicla su agua.",
"show scene depuradora",
"camelia:smile Y tenemos una planta depuradora de agua en el campus de Somosaguas",
"show scene residuos",
"camelia:serious Intentamos no generar residuos de más. Tenemos una norma de eliminación de plásticos de un sólo uso desde 2020",
"show scene reciclar",
"camelia:serious Y cuando aparecen envases, pedimos que usen los contenedores apropiados que hay ",
"camelia:serious por todos los edificios. Aparte, tenemos 7 máquinas de reciclaje digital",
"camelia:serious Si falla todo, podemos contar con los voluntarios. En 2018 recogieron 50kg en 2018 y 89 kg en 2019",
"show scene 4r",
"camelia:bigsmile Es necesario aplicar el 4R: Recoger, Reducir, Reciclar, Reusar"
"camelia:bigsmile El 4R se realiza en colaboración con el Foro de Empresas del Ayuntamiento de Madrid",
"camelia:bigsmile Al igual que el proyecto FoodWave que persigue una alimentación más justa y de proximidad",

"sendaction sostenibilidadp2 parte3",
"show scene biodiversidad",
"camelia:smile La biodiversidad también se trabaja. Hay más de 50 cajas nido para pájaros y unos 40 hoteles de insectos"
"show scene mariposario",
"camelia:smile También tenemos un mariposario y un refugio de fauna pequeña",
"camelia:smile instalados en colaboración con el Consorcio de Ciudad Universitaria",
"show scene huertos",
"camelia:smile Dos huertos urbanos para aprendizaje servicio, el huerto de Cantarranas en el campus de Moncloa y ",
"camelia:smile el huerto Sabia Bruta - Javier Garrido en el campus de Somosaguas. Se complementan con ",
"camelia:smile iniciativas de compostaje en ambos campus anexas a los huertos y en el Edificio Pluridisciplinar",
"camelia:smile En estos huertos se realizan proyectos de Aprendizaje Servicio",
"show scene jardines",
"camelia:smile Buscando llevar esta biodiversidad dentro de los edificios, ",
"camelia:smile hemos iniciado un piloto de dos jardines verticales instalados en el Edificio de Estudiantes, ",
"camelia:smile plantados de forma colaborativa por todo el personal del edificio",

"sendaction sostenibilidadp2 parte4",
"show scene greenmetric",
"camelia:bigsmile Gracias a estas cosas, hemos llegado a ser "
"camelia:bigsmile la universidad número 38 del mundo en el Ranking GreenMetric, que mide la sostenibilidad",


"sendaction sostenibilidadp2 finished",
"camelia Ahora, te pediría que rellenases un pequeño cuestionario de satisfacción para ayudarnos a mejorar la guía.",
"customform opinion",
function(){
monogatari.setContentToSend(monogatari.getFormResult("opinion"));
return true;
},
"sendaction sostenibilidadp2 rellenada",
"camelia Gracias por rellenar la encuesta",
"camelia ¡Hasta pronto!",

"call finalhistoria",
"end"]});
