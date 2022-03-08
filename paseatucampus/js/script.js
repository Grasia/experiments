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

function getPicture(){
	// get a getPicture

	// confirm

	// do something

}

function randomInt(min, max) {
	return min + Math.floor((max - min) * Math.random());
};

/*monogatari.component ('game-screen').template (function() {
return " <h1>My Awesome Game</h1>antes<p id='demo'></p>despues";
});*/

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

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
"abeto":"abeto.png",
"aereo":"aereo.jpg",
"arbol2":"arbol2.png",
"flor1":"flor1.jpg",
"flor2":"flor2.png",
"flor3":"flor3.png",
"flor4":"flor4.png",
"hojatilos":"hojatilos.png",
"paraninfo":"paraninfo.jpg",
"paseotilos":"paseotilos.png",
"prytoparaninfo":"prytoparaninfo.jpg",
"railesmoncloa":"railesmoncloa.png",
"tranviaviejo1":"tranviaviejo1.jpg",
"tranviaviejo1":"tranviaviejo1.png",
"tranviaviejo2":"tranviaviejo2.png",
"tranviaviejo4":"tranviaviejo4.png",
"tranviejo3":"tranviejo3.png",
"tranviejo5":"tranviejo5.png"
});


// Define the Characters
monogatari.characters ({
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
	'sylvie': {
		name: 'sylvie',
		color: '#00bfff',
		directory: 'sylvie', // Optional*
		sprites :{ // Images Identifier for the 'Show' statement.
			giggle: 'sylvie blue giggle.png',
			normal: 'sylvie blue normal.png',
			smile: 'sylvie blue smile.png',
			surprised: 'sylvie blue surprised.png'
		},
		default_expression: 'face.png', // Optional, side image to show every time the character speaks.
		expressions: { // Side images identifiers to show on dialogs
			giggle: 'sylvie blue giggle.png',
			normal: 'sylvie blue normal.png',
			smile: 'sylvie blue smile.png',
			surprised: 'sylvie blue surprised.png'
		}
	}
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
	"tranvia":{latitude:40.43853, longitude:-3.72412}
});



monogatari.customForms({
	"opinion":{
		"schema": {
			"title":"Opinión",
			"description":"¿Qué opinas de la guía?",
			"type":"object",
			"properties": {
				"satisfaccion": {
					"type":"string",
					"title":"Me ha gustado",
					"enum":['poco','regular','mucho','una barbaridad']
				},
				"andar": {
					"type":"string",
					"title":"El andar me ha resultado",
					"enum":['desagradable','lo aguanto','no me importa','ayuda a entender la guía']
				}
				,
				"hacerotra": {
					"type":"string",
					"title":"¿Harías más guías como esta?",
					"enum":['ni muerto','si me obligan, vale','ok, si insistes','deseando estoy']
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
monogatari.script({"NorthArea":[
	{'ConditionalGeolocation':{
		'Condition':"geolocate berlin 1000 100000 0.001",
		'False':'nope, dude',
		'True':'alright, you got there'
	}
},"Things that happen in the north area","end"]});

monogatari.script({"SouthArea":['geolocate southarea 10000 100 1',
"Things that happen in the south area"]});



monogatari.script({"randommessage":[
	{'Conditional': {
		'Condition': function(){
			return randomInt(1,4)+"";
		},
		'1': 'clara Caminante no hay camino, se hace camino al andar, ¡Ya estás tardando!',
		'2': 'clara  No me digas que tienes cansancio, si apareciera un toro, ¡verías cómo corres!',
		'3': 'clara  ¿Sabías que andar es un ejercicio muy saludable? ¡Andando!',
		'4': 'clara  Una vez tuve una piedra de mascota. Se movía más que tú.'
	}},"return"]});

	function sitioaux(monogatari,etiqueta,sitio){
		elemento= {};
		elemento[etiqueta]=[
			'call randommessage','clara Viajando al destino, toca o haz click en la pantalla para continuar', {'ConditionalGeolocation':{
				'Condition':"geolocate "+sitio+" 0.5 60 0.01",
				'False':"call "+etiqueta,
				'True':'olé'}
			},"return"];
			monogatari.script(elemento);
		}

	function sitio(monogatari,etiqueta,sitio){
		elemento= {};
		sitioaux(monogatari,etiqueta+"aux",sitio);
		elemento[etiqueta]=[
			'clara Viajando al destino, toca o haz click en la pantalla para continuar', {'ConditionalGeolocation':{
				'Condition':"geolocate "+sitio+" 0.5 60 0.01",
				'False':"call "+etiqueta+"aux",
				'True':'olé'}
			},"return"];
			monogatari.script(elemento);
		}


		sitio(monogatari,"primersitio","tranvia");


		function final(monogatari, etiqueta){
			elemento= {};
			elemento[etiqueta]=[
				"Ya no hay nada más que decir, querido complutense. Puedes descargar otras guías o recargar para empezar de cero"
				,"call "+etiqueta];
				monogatari.script(elemento);
			}

			final (monogatari,"finalhistoria")

		/*
		monogatari.script({"primersitio":[

		{'ConditionalGeolocation':{
		'Condition':"geolocate rectorado1 1 60 0.01",
		'False':"call randommessage",
		'True':'olé'}
	},"call primersitio"]});

	monogatari.script({"segundositio":[

	{'ConditionalGeolocation':{
	'Condition':"geolocate rectorado1 1 60 0.01",
	'False':"call randommessage",
	'True':'olé'}
},"call primersitio"]});
*/

monogatari.script ({	'Start': [
"show scene aereo",
"show character clara normal2 at right with fadeIn end-fadeOut",
"Hola",
"clara Soy Clara Campoamor y quiero enseñarte los espacios verdes que tenemos en la Complutense",
"show character clara normal1 at left with fadeIn end-fadeOut",
"hemos preparado una serie de puntos estratégicos que puedes seleccionar en el mapa y preparar tu paseo por el campus.",
"show character clara lookright at left with fadeIn end-fadeOut",
"¿Estás listo? ¡Que empezamos!",
"show scene tranviejo3",
"El recorrido comienza en el Pabellón de Gobierno. El edificio fue construido en 1931, a cargo de Manuel Sanchéz Arcas, para albergar a la Junta Constructora. Más tarde se convertiría en el Pabellón de Gobierno de la UCM. ",
"show scene abeto",
"En el recorrido destacan los grandes cedros del Himalaya o cedros del Líbano (Cedrus deodara). Son árboles muy longevos, que pueden llegar al milenio. Su madera es muy apreciada desde la antigüedad. De ella se extrae un agradable aroma que reconforta y tranquiliza.",
"show scene railesmoncloa",
"Si avanzas un poco, puedes ver las vías del antiguo tranvía en Moncloa.", "Esta vía la recorría el tranvía que unía Moncloa con la Ciudad Universitaria, que desde 1945 hasta 1967 han sido diariamente utilizados por la comunidad universitaria. La prensa de la época decía que a estos trenes se les llamaba pepes, pacos o miles.",
//"call primersitio",
//"¡Ya hemos llegado!",

"show scene paseotilos",
"En primavera o verano puedes pasear bajo la sombra los tilos (Tilia platyphyllos). El tilo es un árbol caducifolio con hojas anchas y redondeadas que proporciona una buena sombra. Bien son conocidas las propiedades de la tila como sedante que se obtiene de sus flores.", 
"show scene hojatilos",
"El tilo es un árbol caducifolio con grandes hojas que proporciona una buena sombra en verano. Tiene unas hojas anchas y redondeadas",
" Bien son conocidas las propiedades de la tila como sedante que se obtiene de sus flores. ",

"show scene tranviaviejo1",
"Esta vía la recorría el tranvía que unía Moncloa con la Ciudad Universitaria, que desde 1945 hasta 1967 han sido diariamente utilizados por la comunidad universitaria",

"show scene tranviaviejo2",
"La prensa de la época decía que a estos trenes se les llamaba pepes, pacos o miles",
"show scene flor2",
"En la parada de Farmacia, descubrimos la plaza de Ramón y Cajal, coronada por la estatua de los portadores de la antorcha, rodeada del ciruelo japonés o ciruelo rojo (Prunus cerasifera).",
"show scene flor1",

"Esté árbol destaca por su temprana floración y sus hojas de color púrpura, ofreciendo una explosión de color a finales del invierno. Sus frutos son comestibles, maduran en verano y tienen muy buen sabor. Se emplea para la elaboración de mermeladas y jaleas.",

"show scene tranviejo5",

"y este es un tranvía viejo",

"show scene tranviaviejo4",
"y otro",

"show scene arbol2",

"Este espacio, también conocido como la pradera de paraninfo, está presidido por la estatua de Alfonso XIII, regente que a principios del siglo XVIII impulsó el proyecto de construcción de la Ciudad Universitaria", 

"Recibe su nombre gracias al proyecto inicial de la junta constructora, donde quedaba prevista la construcción del edificio Paraninfo en esta localización, coronando la avenida Complutense. ",

"show scene flor3",

"La pradera está formada por césped (Lolium perenne) con trébol blanco (Trifolium repens) y margaritas (Bellis perennis), con una serie de árboles significativos, entre los que destacamos en el centro de la superficie, un pequeño bosquete de castaños de indias (Aesculus hippocastanum).",

"show scene flor4",
"El castaño es una frondosa caducifolia de copa redondeada que, en primavera, despliega sus grandes inflorescencias blancas. También, son característicos sus frutos, una falsa castaña no comestible con envoltura espinosa.",

"show scene paraninfo",
"La plaza del Paraninfo debe su nombre al planeamiento inicial de la Ciudad Universitaria a principios de siglo, cuando la junta de Ciudad Universitaria comenzó con la construcción de las instalaciones de la Universidad en los terrenos cedidos por el monarca Alfonso XIII.",

"show scene prytoparaninfo",
"Se presentaron diferentes proyectos, claro está que no llegaron a consolidar, los cuales situaban el Paraninfo en esta localización, ocupando este jardín y el área ocupada por el complejo deportivo Paraninfo Norte).",

"Actualmente, el Paraninfo se sitúa, junto con la Biblioteca Histórica “Marqués de Valdecilla”, en la calle San Bernardo",


"clara Y este es el final del recorrido.",
"clara Espero que te haya resultado interesante conocer más de la historia de la UCM.",
"clara Ahora, te pediría que rellenases un pequeño cuestionario de satisfacción para ayudarnos a mejorar la guía.",
"clara ¡Hasta pronto!",
"customform opinion",
"sendaction pabgob rellenada",
function(){
monogatari.setContentToSend(monogatari.getFormResult("opinion"));
return true;
},
"sendaction pabgob opinion",
"call finalhistoria",
"end"]});
