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
            Torico: {},
            Catedral: {},
            SanMartin: {},
            Salvador: {},
            Escalinata: {},
            Mausoleo: {},
        },
        orden: [
            "Salvador",
            "SanMartin",
            "Mausoleo",
            "Torico",
            "Escalinata",
            "Catedral"
        ],
        aburrimientoDetectado: {
            Torico: [],
            Catedral: [],
            SanMartin: [],
            Salvador: [],
            Escalinata: [],
            Mausoleo: [],
        },
        aburrimientoConfirmado: {
            Torico: [],
            Catedral: [],
            SanMartin: [],
            Salvador: [],
            Escalinata: [],
            Mausoleo: [],
        },
        conocidas: {
            Torico: [],
            Catedral: [],
            SanMartin: [],
            Salvador: [],
            Escalinata: [],
            Mausoleo: [],
        },
        actual: "Start",
        siguiente: "",
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
    }, 
    aburrido:false,
    totalAburrido: 0,
    totalDetectado: 0,
});