/* global monogatari */

// Persistent Storage Variable
monogatari.storage ({
	tiempo: {
        inicial:0,
		total: 0,
        actual: 0,
        anterior: 0,
	},
    secciones: {
        tiempos: {
            torico: {},
            catedral: {},
            sanmartin: {},
            salvador: {},
            escalinata: {},
            mausoleo: {},
        },
        orden: [],
        actual: "Start",
        cadenaTiempos: "",
    },
    menuConocidas: {
        torico: false,
        catedral: false,
        sanmartin: false,
        salvador: false,
        escalinata: false,
        mausoleo: false,
        cadena: "", 
    }
});