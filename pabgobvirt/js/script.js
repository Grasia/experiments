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
	"aereo":"aereo.jpg",
	"pabgob1":"pabgob1.png",
	"pabgob2":"pabgob2.png",
	"pabgob3":"pabgob3.png",
	"jardin":"jardin.png",
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
	"pabgob1":{latitude:40.4365193, longitude:-3.7196039},
	"pabgob2":{latitude:40.4366351, longitude:-3.7187586},
	"jardinpabgob":{latitude:40.4370379, longitude:-3.7192078}
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


		sitio(monogatari,"primersitio","pabgob1");
		sitio(monogatari,"segundositio","pabgob2");
		sitio(monogatari,"tercersitio","jardinpabgob");


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
"clara Soy Clara Campoamor y voy a contarte la historia del Pabellón de Gobierno de la Universidad Complutense",
"show character clara normal1 at left with fadeIn end-fadeOut",
"El Pabellón se construyó tras  la Guerra Civil y es uno de los edificios históricos protegidos de la UCM.",
"show character clara lookright at left with fadeIn end-fadeOut",
"Está situado en el barrio de Moncloa, junto al Faro de Moncloa y el Museo de América.",
"show character clara lookright at right with fadeIn end-fadeOut",
"Para que vivas la historia, necesito que vayas a la siguiente ubicación.",
"sendaction pabgob yendo a pabgob1",
//"geolocate pabgob1 0.5 10 0.02",
//"call primersitio",
//"sendaction pabgob llegado a pabgob1",
//"call primersitio",
"show scene pabgob1",
"clara El pabellón de gobierno tiene una historia detrás que empienza en la década de los años cincuenta del siglo XX.",
"clara En aquel tiempo, a la Universidad Complutense se le conocía como la Universidad Central.",
"clara Este Pabellón fue creado por Junta Constructora de la Ciudad Universitaria de Madrid. ",
"clara Esta Junta fue la encargada de varias obras destinadas a reconstruir lo que quedó de la Universidad Central.",
"clara En la década de los cincuenta del siglo XX, el rectorado de la Universidad, la secretaría general y otras dependencias estaban en el edificio de San Bernardo.",
"clara El nuevo edificio, el Pabellón de Gobierno, sería su nueva sede y se situaría en la calle Isaac Peral.",
"clara Fue proyectado por Sánchez Arcas y podrás ver ahora cómo lucía entonces",
"show scene pabgob2",
"clara La ciudad universitaria era y sigue siendo un lugar de referencia para muchos estudiantes.",
"clara Fue creada a partir de finales del reinado de Alfonso XIII, en la década de los años veinte del siglo XX.",
"clara El acceso al pabellón de gobierno ha sufrido cambios también.",
"clara Todo el área de moncloa ha cambiado con el paso de los años.",
"clara En aquel entonces había menos coches y no había edificios en el área. ",
"clara Desplázate ahora a este lugar para que te pueda enseñar cómo era entonces.",
//"geolocate pabgob2 0.5 10 0.02",
//"call segundositio",
"clara Como ves, muchos de los edificios que ves ahora estaban en construcción.",
"clara Los edificios de la Ciudad Universitaria destacaban sobre el resto. ",
"clara El Pabellón de Gobierno especialmente, por su estilo.",
"show scene pabgob3",
"clara Madrid entonces era muy diferente. Acompáñame a ver una recreación",
"panorama cubemap panorama/cube/madrid jpg -4774.9 474.16 -1375.02 logo.png",
"clara A día de hoy, el Pabellón de Gobierno está semi oculto por árboles o por los edificios de alrededor.",
"clara Ocupa una parcela en la que se pueden encontrar de los pocos parques en el distrito Moncloa.",
"clara Este parque no está abierto al público y sólo los Complutenses pueden acceder a él. El jardín rodea las residencias de profesores también.",
"clara Déjame que te lo enseñe.",
//"geolocate jardinpabgob 0.5 10 0.02",
//"call tercersitio",
"show scene jardin",
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
