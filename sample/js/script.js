function getPicture() {
    // get a getPicture

    // confirm

    // do something

}

function randomInt(min, max) {
    return min + Math.floor((max - min) * Math.random());
};


// Define the messages used in the game.
monogatari.action('message').messages({
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
monogatari.action('notification').notifications({
    'Welcome': {
        title: 'Welcome',
        body: 'This is the Monogatari VN Engine1',
        icon: ''
    }
});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {

});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {

});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {});


// Define the Characters
monogatari.characters({
    'sylvie': {
        name: 'sylvie',
        color: '#00bfff',
        directory: 'sylvie', // Optional*
        sprites: { // Images Identifier for the 'Show' statement.
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


// check google maps to obtain coordinates by right clicking anyplace in the map
// and choosing "what's here"
monogatari.geolocations({
    "pabgob1": {
        latitude: 40.4365193,
        longitude: -3.7196039
    },
    "pabgob2": {
        latitude: 40.4366351,
        longitude: -3.7187586
    },
    "jardinpabgob": {
        latitude: 40.4370379,
        longitude: -3.7192078
    }
});


monogatari.customForms({});

// improved version to handle arrival to location or failure to do so within
// the timeout



monogatari.script({
    "randommessage": [{
        'Conditional': {
            'Condition': function() {
                return randomInt(1, 4) + "";
            },
            '1': 'sylvie Caminante no hay camino, se hace camino al andar, ¡Ya estás tardando!',
            '2': 'sylvie  No me digas que tienes cansancio, si apareciera un toro, ¡verías cómo corres!',
            '3': 'sylvie  ¿Sabías que andar es un ejercicio muy saludable? ¡Andando!',
            '4': 'sylvie  Una vez tuve una piedra de mascota. Se movía más que tú.'
        }
    }, "return"]
});

function sitioaux(monogatari, etiqueta, sitio) {
    elemento = {};
    elemento[etiqueta] = [
        'call randommessage', 'sylvie Viajando al destino, toca o haz click en la pantalla para continuar', {
            'ConditionalGeolocation': {
                'Condition': "geolocate " + sitio + " 0.5 60 0.02",
                'False': "call " + etiqueta,
                'True': 'olé'
            }
        }, "return"
    ];
    monogatari.script(elemento);
}

function walktoplace(monogatari, etiqueta, sitio) {
    elemento = {};
    sitioaux(monogatari, etiqueta + "aux", sitio);
    elemento[etiqueta] = [
        'sylvie Viajando al destino, toca o haz click en la pantalla para continuar', {
            'ConditionalGeolocation': {
                'Condition': "geolocate " + sitio + " 0.5 60 0.02",
                'False': "call " + etiqueta + "aux",
                'True': 'olé'
            }
        }, "return"
    ];
    monogatari.script(elemento);
}


walktoplace(monogatari, "primersitio", "pabgob1");
walktoplace(monogatari, "segundositio", "pabgob2");
walktoplace(monogatari, "tercersitio", "jardinpabgob");

function final(monogatari, etiqueta) {
    elemento = {};
    elemento[etiqueta] = [
        "Nothing left to say, reload to start from scratch", "call " + etiqueta
    ];
    monogatari.script(elemento);
}

final(monogatari, "theend")


monogatari.script({
    'Start': [
        "show scene aereo",
        "sylvie hello",
        "call theend",
        "end"
    ]
});
