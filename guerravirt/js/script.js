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
 "planotrincheras":"planotrincheras.png",
 "trinchera1":"trinchera1.png",
 "trinchera2":"trinchera2.png",
});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	"aereo":"aereo.jpg",
	"guerra1":"guerra1.png",
	"guerra2":"guerra2.png",
	"guerra3":"guerra3.jpeg",
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
	"trinchera":{latitude:40.453918, longitude: -3.734095}
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
		'1': 'jose Caminante no hay camino, se hace camino al andar, ¡Ya estás tardando!',
		'2': 'jose  No me digas que tienes cansancio, si apareciera un toro, ¡verías cómo corres!',
		'3': 'jose  ¿Sabías que andar es un ejercicio muy saludable? ¡Andando!',
		'4': 'jose  Una vez tuve una piedra de mascota. Se movía más que tú.'
	}},"return"]});

	function sitioaux(monogatari,etiqueta,sitio){
		elemento= {};
		elemento[etiqueta]=[
			'call randommessage','jose Viajando al destino, toca o haz click en la pantalla para continuar', {'ConditionalGeolocation':{
				'Condition':"geolocate "+sitio+" 0.5 600 0.01",
				'False':"call "+etiqueta,
				'True':'olé'}
			},"return"];
			monogatari.script(elemento);
		}

	function sitio(monogatari,etiqueta,sitio){
		elemento= {};
		sitioaux(monogatari,etiqueta+"aux",sitio);
		elemento[etiqueta]=[
			'jose Viajando al destino, toca o haz click en la pantalla para continuar', {'ConditionalGeolocation':{
				'Condition':"geolocate "+sitio+" 0.5 600 0.01",
				'False':"call "+etiqueta+"aux",
				'True':'olé'}
			},"return"];
			monogatari.script(elemento);
		}


		sitio(monogatari,"primersitio","pabgob1");
		sitio(monogatari,"segundositio","pabgob2");
		sitio(monogatari,"tercersitio","jardinpabgob");
		sitio(monogatari,"trinchera","trinchera");

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
	//"sendaction guerra iniciando",
"show character jose normal at left with fadeIn end-fadeOut",
"Soy el Profesor José García Santesmases. Pulsa en la pantalla para continuar",  
"Voy a contarte algunas cosas de la Facultad de Informática de la UCM que quizás no sabes.",
"La Guerra Civil española tuvo también lugar en la Ciudad Universitaria, hasta el punto en que se destruyeron muchos edificios.",
"show scene guerra1",
"jose Las aulas alojaban nidos de ametralladoras y las explosiones destruían edificios dejándolos irreconocibles",
"show scene guerra3",
"jose La imagen de la Ciudad Universitaria entonces fue desoladora. En la foto podéis ver el Hospital Clínico San Carlos situado en Moncloa",
"jose No es caso aislado. Ahora os enseñaré una composición con fotos del campus de Moncloa",
"sendaction guerra empezando cubo",
"panorama cubemap panorama/cube/guerra jpg -4774.9 474.16 -1375.02 logo.png",
"sendaction guerra terminando cubo",
"show character jose normal at left with fadeIn end-fadeOut",
"show scene aereo",
"show image planotrincheras center with fadeIn",
"jose Podrás encontrar bien documentados muchos restos de la guerra. ",
"jose Del trabajo de Ruibal et al 2010 se ha obtenido este mapa que describe la ubicación de varias trincheras.",
"hide image planotrincheras with fadeOut",
"hide image planotrincheras",
//"jose Ahora te voy a llevar a una de las trincheras. Por favor, ve al lugar que te indico.",
//"sendaction guerra yendo a trinchera",
//"call trinchera",
//"geolocate trinchera 0.5 30 0.02",
"show image trinchera1 center with fadeIn",
"sendaction guerra llegado a trinchera",
"jose Una trinchera podía ser de distintas formas. Amplias como avenidas.",
"hide image trinchera1 with fadeOut",
"hide image trinchera1",
"show image trinchera2 center with fadeIn",
"jose Pero también las había angostas donde apenas cabía una persona. ",
"jose Imaginad lo que pueden ser un día por la noche, con lluvia, frío y esperando que no suceda nada.",
"jose Hay más vestigios en la Ciudad Universitaria y te invitamos a visitarlos.",
"jose  Quienes no conocen la historia están condenados a repetirla.",
"hide image trinchera2 with fadeOut",
"hide image trinchera2",
"jose Y este es el final del recorrido.",
"jose Espero que te haya resultado interesante conocer más de la historia de la UCM.",
"jose Ahora, te pediría que rellenases un pequeño cuestionario de satisfacción para ayudarnos a mejorar la guía.",
"jose ¡Hasta pronto!",
"customform opinion",
"sendaction guerra rellenada",
function(){
monogatari.setContentToSend(monogatari.getFormResult("opinion"));
return true;
},
"sendaction guerra opinion",
"call finalhistoria",
"end"]});
