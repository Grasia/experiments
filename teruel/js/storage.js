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
        ordenSeguido: [],
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
    },
    menuConocidas: {
        torico: false,
        catedral: false,
        sanmartin: false,
        salvador: false,
        escalinata: false,
        mausoleo: false,
    }, 
    aburrido:false,
    totalAburrido: 0,
    totalDetectado: 0,
    cadenaTiempos: "",
    cadenaConocidas: "", 
    cadenaOrden: "",  
    cadenaAburrimientoDetectados: "",
    cadenaAburrimientoConfirmados: "",
    cadenaAburrimientoConocidas: "",
    cadenaTotales: "",
});