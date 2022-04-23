
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
"sendaction sostenibilidad inicio",
"show scene aereo",
"camelia Soy Camelia y voy a hablarte de la sostenibilidad en la Universidad Complutense",

"sendaction sostenibilidad parte1",
"show scene verde",
"camelia:bigsmile La Complutense tiene 705.050 m2 de bosque y 668.474 m2 de área cubierta por vegetación",
"show scene areanoasfaltada",
"camelia:smile 1.373.524 m2 de area no asfaltada o construida",
"show scene edificios",
"camelia:bigsmile 2.284.687 m2 construidos en edificios que ocupan 839.242 m2",
"show scene campuses",
"camelia:smile 5.220.461 m2 de campus: Somosaguas, Moncloa y Chamberi",
"show scene aparcamiento",
"camelia:smile 29230 m2 de aparcamiento en los tres campuses",

"sendaction sostenibilidad parte2",
"show scene estudiantesytrabajadores",
"camelia:smile 72061 estudiantes, 10.799 trabajadores",
"show scene asociaciones",
"camelia:smile 103 asociaciones de estudiantes, más de 10 relacionadas con la sostenibilidad",

"sendaction sostenibilidad parte3",
"show scene segura",
"camelia:bigsmile La Universidad Complutense es un lugar seguro",
"camelia:bigsmile Tenemos personal propio de seguridad, vigilancia y alarmas",


"sendaction sostenibilidad parte4",
"show scene hospitalvet",
"camelia:smile Hospital veterinario completo",
"show scene clinicas",
"camelia:smile Clínica para análisis sanitarios, odontología, optometría, podología, psicología, logopedia",
"show scene hospitales",
"camelia:smile 7 hospitales para prácticas, médicas, destacando el Clínico, San Carlos situado en el campus de Moncloa",


"sendaction sostenibilidad parte5",
"show scene renovable",
"camelia:bigsmile 49 GWh consumidos al año. 100% energía renovable certificada en origen. 591 kWh por persona consumidos cada año",
"show scene florsolar",
"camelia:bigsmile 1 girasol fotovoltáico inteligente que proporciona unos 4000 kWh al año",
"show scene movilidad",
"camelia:bigsmile Servicio de bicicletas eléctricas y coche compartido",
"show scene huella",
"camelia:bigsmile Huella de carbono decreciente desde 2018, hasta 2020. Registrado en el MITECO",

"sendaction sostenibilidad parte6",
"show scene botanico",
"camelia:smile El jardín botánico recicla su agua",
"show scene depuradora",
"camelia:smile Planta depuradora de agua en campus de Somosaguas",
"show scene residuos",
"camelia:serious Política de eliminación de plásticos de un sólo uso",
"show scene reciclar",
"camelia:serious 7 máquinas de reciclaje digital, recogida voluntaria de residuos con cantidades de 50kg en 2018 y de 89 kg en 2019",
"show scene 4r",
"camelia:bigsmile Colaboración con el Ayuntamiento en iniciativas como 4R y proyecto FoodWave",



"sendaction sostenibilidad parte7",
"show scene investigacion",
"camelia:smile 23M€ en investigación al año de media, 1M€ en investigación en sostenibilidad",
"show scene emprendimiento",
"camelia:smile Más de 15 empresas de nueva creación relacionadas con el emprendimiento sostenible",

"sendaction sostenibilidad parte8",
"show scene formacion",
"camelia:bigsmile 10240 cursos ofrecidos en la UCM 247 cursos donde la sostenibilidad es tratada",
"camelia:bigsmile 11 cursos de formación específicos en sostenibilidad en 2022 desde la unidad de campus y medioambiente",
"show scene cursos",
"camelia:bigsmile jornadas organizadas en centros sobre medioambiente, comunicación medioambiental y exposiciones sobre ODS",

"sendaction sostenibilidad parte9",
"show scene biodiversidad",
"camelia:smile Más de 50 cajas nido para pájaros y unos 40 hoteles de insectos instalados en colaboración con el Consorcio de Ciudad Universitaria",
"show scene huertos",
"camelia:smile Dos huertos urbanos para aprendizaje servicio, el huerto de Cantarranas en el campus de Moncloa y ",
"camelia:smile el huerto Javier Garrido en el campus de Somosaguas. Se complementan con ",
"camelia:smile iniciativas de compostaje en ambos campus anexas a los huertos y en el Edificio Pluridisciplinar",
"show scene jardines",
"camelia:smile Piloto de dos jardines verticales instalados en el Edificio de Estudiantes, ",
"camelia:smile plantados de forma colaborativa por todo el personal del edificio",
"show scene mariposario",
"camelia:smile Restauración del mariposario y refugio de fauna pequeña financiado por el Consorcio de Ciudad Universitaria",

"sendaction sostenibilidad parte10",
"show scene adaptadaeinclusiva",
"camelia:bigsmile Adaptada e inclusiva",

"show scene greenmetric",
"camelia:bigsmile No 38 del mundo en el Ranking GreenMetric",

"sendaction brunch finished",
"camelia Ahora, te pediría que rellenases un pequeño cuestionario de satisfacción para ayudarnos a mejorar la guía.",
"customform opinion",
function(){
monogatari.setContentToSend(monogatari.getFormResult("opinion"));
return true;
},
"sendaction sostenibilidad rellenada",
"camelia Gracias por rellenar la encuesta",
"camelia ¡Hasta pronto!",

"call finalhistoria",
"end"]});
