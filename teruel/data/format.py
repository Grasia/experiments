import csv
import datetime
import json
import sys

with open(sys.argv[1] + '.json', 'r') as f:
    data = json.load(f)

raw = {}
sessions = {}

# Unirlos por el token, asi tambien se ordenan
for x in data:
    raw.setdefault(x['token'], []).append(
        {'action': x['action'], 'date': x['date'], 'content': x['content'], 'game': x['game']})

# Para cada token obtego lo que se ha guardado anteriormente con action y date
for x in raw.keys():
    fmt_str = r'%Y-%m-%dT%H:%M:%S.%f+0000'
    init_date = ''
    # formatear los datos
    sesion = {}
    for y in raw[x]:
        # game
        sesion['game'] = y['game']
        if y['action'] == 'inicio_encuesta_usuario':
            init_date = datetime.datetime.strptime(y['date'], fmt_str)
        if (y['action'] == 'caracterizacion1'):
            sesion['edad'] = json.loads(y['content'])['edad']
            sesion['genero'] = json.loads(y['content'])['genero']
        if y['action'][0] == '{':
            obj = json.loads(y['action'])
            first_key = next(iter(obj))
            
            if(first_key == 'conocidas'):
                sesion['conocidas_torico'] = obj['conocidas']['torico']
                sesion['conocidas_catedral'] = obj['conocidas']['catedral']
                sesion['conocidas_sanmartin'] = obj['conocidas']['sanmartin']
                sesion['conocidas_salvador'] = obj['conocidas']['salvador']
                sesion['conocidas_escalinata'] = obj['conocidas']['escalinata']
                sesion['conocidas_mausoleo'] = obj['conocidas']['mausoleo']
            
            if(first_key == 'tiempos'):
                for tiempo in obj['tiempos']['Torico']:
                    sesion['tiempos_'+tiempo] = obj['tiempos']['Torico'][tiempo]
                for tiempo in obj['tiempos']['Catedral']:
                    sesion['tiempos_'+tiempo] = obj['tiempos']['Catedral'][tiempo]
                for tiempo in obj['tiempos']['SanMartin']:
                    sesion['tiempos_'+tiempo] = obj['tiempos']['SanMartin'][tiempo]
                for tiempo in obj['tiempos']['Salvador']:
                    sesion['tiempos_'+tiempo] = obj['tiempos']['Salvador'][tiempo]
                for tiempo in obj['tiempos']['Escalinata']:
                    sesion['tiempos_'+tiempo] = obj['tiempos']['Escalinata'][tiempo]
                for tiempo in obj['tiempos']['Mausoleo']:
                    sesion['tiempos_'+tiempo] = obj['tiempos']['Mausoleo'][tiempo]

            if(first_key == 'orden'):
                for i in range(len(obj['orden'])):
                    sesion['orden_'+str(i)] = obj['orden'][i]

            if(first_key == 'detectados'):
                for i in range(len(obj['detectados']['Torico'])):
                    sesion['detectados_' + obj['detectados']['Torico'][i]] = True
                for i in range(len(obj['detectados']['Catedral'])):
                    sesion['detectados_' + obj['detectados']['Catedral'][i]] = True
                for i in range(len(obj['detectados']['SanMartin'])):
                    sesion['detectados_' + obj['detectados']['SanMartin'][i]] = True
                for i in range(len(obj['detectados']['Salvador'])):
                    sesion['detectados_' + obj['detectados']['Salvador'][i]] = True
                for i in range(len(obj['detectados']['Escalinata'])):
                    sesion['detectados_' + obj['detectados']['Escalinata'][i]] = True
                for i in range(len(obj['detectados']['Mausoleo'])):
                    sesion['detectados_' + obj['detectados']['Mausoleo'][i]] = True

            if(first_key == 'confirmados'):
                for i in range(len(obj['confirmados']['Torico'])):
                    sesion['confirmados_' + obj['confirmados']['Torico'][i]] = True
                for i in range(len(obj['confirmados']['Catedral'])):
                    sesion['confirmados_' + obj['confirmados']['Catedral'][i]] = True
                for i in range(len(obj['confirmados']['SanMartin'])):
                    sesion['confirmados_' + obj['confirmados']['SanMartin'][i]] = True
                for i in range(len(obj['confirmados']['Salvador'])):
                    sesion['confirmados_' + obj['confirmados']['Salvador'][i]] = True
                for i in range(len(obj['confirmados']['Escalinata'])):
                    sesion['confirmados_' + obj['confirmados']['Escalinata'][i]] = True
                for i in range(len(obj['confirmados']['Mausoleo'])):
                    sesion['confirmados_' + obj['confirmados']['Mausoleo'][i]] = True

            if(first_key == 'aburrimiento_conocidas'):
                for i in range(len(obj['aburrimiento_conocidas']['Torico'])):
                    sesion['aburrimiento_conocidas_' + obj['aburrimiento_conocidas']['Torico'][i]] = True
                for i in range(len(obj['aburrimiento_conocidas']['Catedral'])):
                    sesion['aburrimiento_conocidas_' + obj['aburrimiento_conocidas']['Catedral'][i]] = True
                for i in range(len(obj['aburrimiento_conocidas']['SanMartin'])):
                    sesion['aburrimiento_conocidas_' + obj['aburrimiento_conocidas']['SanMartin'][i]] = True
                for i in range(len(obj['aburrimiento_conocidas']['Salvador'])):
                    sesion['aburrimiento_conocidas_' + obj['aburrimiento_conocidas']['Salvador'][i]] = True
                for i in range(len(obj['aburrimiento_conocidas']['Escalinata'])):
                    sesion['aburrimiento_conocidas_' + obj['aburrimiento_conocidas']['Escalinata'][i]] = True
                for i in range(len(obj['aburrimiento_conocidas']['Mausoleo'])):
                    sesion['aburrimiento_conocidas_' + obj['aburrimiento_conocidas']['Mausoleo'][i]] = True
            if(first_key == 'totales'):
                sesion['totalAburrido'] = obj['totales']['totalAburrido']
                sesion['totalDetectado'] = obj['totales']['totalDetectado']

        # encuesta_locucion_time, locucion y locucion_donde
        if y['action'] == 'inicio_encuesta_locucion':
            init_date_surveys = datetime.datetime.strptime(y['date'], fmt_str)
        if y['action'] == 'locucion_si' or y['action'] == 'locucion_no' or y['action'] == 'locucion_nsnc':
            sesion['locucion'] = y['action']
        if y['action'] == 'locucion_movil' or y['action'] == 'locucion_altavoz' or y['action'] == 'locucion_donde_nsnc':
            if(init_date_surveys != ''):
                diff = (datetime.datetime.strptime(y['date'], fmt_str) - init_date_surveys).total_seconds()
                sesion['encuesta_locucion_time'] = diff
            sesion['locucion_donde'] = y['action']

        # encuesta_escalinata_modif_time, escalinata_modif, escalinata_modif_ok, escalinata_mural y escalinata_mural_ok
        if y['action'] == 'inicio_encuesta_modif_escalinata':
            init_date_surveys = datetime.datetime.strptime(y['date'], fmt_str)
        if y['action'] == 'modif_rampa' or y['action'] == 'modif_salvaescaleras':
            sesion['escalinata_modif'] = y['action']
        if y['action'] == 'escalinata_modif_si' or y['action'] == 'escalinata_modif_no' or y['action'] == 'escalinata_modif_nsnc':
            sesion['escalinata_modif_ok'] = y['action']
        if y['action'] == 'mural_arriba' or y['action'] == 'mural_abajo':
            sesion['escalinata_mural'] = y['action']
        if y['action'] == 'mural_si' or y['action'] == 'mural_no' or y['action'] == 'mural_nsnc':
            sesion['escalinata_mural_ok'] = y['action']
        if y['action'] == 'mural_mejor' or y['action'] == 'mural_peor':
            if(init_date_surveys != ''):
                diff = (datetime.datetime.strptime(y['date'], fmt_str) - init_date_surveys).total_seconds()
                sesion['encuesta_escalinata_modif_time'] = diff
            sesion['escalinata_mejor_opcion'] = y['action']

        # encuesta_mausoleo_modif_time, escalinata_modif, escalinata_modif_ok, escalinata_mural y escalinata_mural_ok
        if y['action'] == 'inicio_encuesta_modif_mausoleo':
            init_date_surveys = datetime.datetime.strptime(y['date'], fmt_str)
        if y['action'] == 'mausoleo_modif1_si' or y['action'] == 'mausoleo_modif1_no':
            sesion['mausoleo_modif1'] = y['action']
        if y['action'] == 'mausoleo_modif2_si' or y['action'] == 'mausoleo_modif2_no':
            sesion['mausoleo_modif2'] = y['action']
        if y['action'] == 'mausoleo_modif_izquierda' or y['action'] == 'mausoleo_modif_derecha' or y['action'] == 'mausoleo_modif_ambas':
            if(init_date_surveys != ''):
                diff = (datetime.datetime.strptime(y['date'], fmt_str) - init_date_surveys).total_seconds()
                sesion['encuesta_mausoleo_modif_time'] = diff
            sesion['mausoleo_modif_preferida'] = y['action']

        # encuesta_usuario_time
        if y['action'] == 'inicio_encuesta_opinion':
            init_date_surveys = datetime.datetime.strptime(y['date'], fmt_str)
        # encuesta opinion
        # FIXED: Tildes || .encode('utf-8')
        if y['action'] == 'opinion1':
            if y['content'] != None:
                sesion['opinion_atencion'] = json.loads(y['content'])['atencion']
                sesion['opinion_concentrado'] = json.loads(y['content'])['concentrado']
            else:
                sesion['opinion_atencion'] = ''
                sesion['opinion_concentrado'] = ''
        if y['action'] == 'opinion2':
            if y['content'] != None:
                sesion['opinion_consciente'] = json.loads(y['content'])['consciente']
                sesion['opinion_experimentando'] = json.loads(y['content'])['experimentando']
            else:
                sesion['opinion_consciente'] = ''
                sesion['opinion_experimentando'] = ''
        if y['action'] == 'opinion3':
            if y['content'] != None:
                sesion['opinion_dejarlo'] = json.loads(y['content'])['dejarlo']
                sesion['opinion_interesado'] = json.loads(y['content'])['interesado']
            else:
                sesion['opinion_dejarlo'] = ''
                sesion['opinion_interesado'] = ''
        if y['action'] == 'opinion4':
            if y['content'] != None:
                sesion['opinion_disfrutar'] = json.loads(y['content'])['disfrutar']
                sesion['opinion_hacer_otra'] = json.loads(y['content'])['hacerotra']
            else:
                sesion['opinion_disfrutar'] = ''
                sesion['opinion_hacer_otra'] = ''
        if y['action'] == 'opinion5':
            if(init_date_surveys != ''):
                diff = (datetime.datetime.strptime(y['date'], fmt_str) - init_date_surveys).total_seconds()
                sesion['encuesta_opinion_time'] = diff
            if y['content'] != None:
                sesion['opinion_interesante'] = json.loads(y['content'])['interesante']
                sesion['opinion_problemas'] = json.loads(y['content'])['problemas']
            else:
                sesion['opinion_interesante'] = ''
                sesion['opinion_problemas'] = ''
        # Calcular tiempo total de la guia
        if y['action'] == 'finished':
            sesion['finished'] = True
            if(init_date != ''):
                diff = (datetime.datetime.strptime(y['date'], fmt_str) - init_date).total_seconds()
                sesion['app_time'] = diff

    sessions.setdefault(x, []).append(sesion)

dictlist = []
lista = []
# print(sessions)
for key, value in sessions.items():
    for x in value:
        x['token'] = key
        lista.insert(0, x)

# csv header
fieldnames = ['token']
# Obtener las keys de todas las sesiones para buscar la cadena de cada objeto
for key in sessions.keys():
    for strObj in sessions[key]:
        # Pasarlo a objeto JSON para obtener las claves
        obj = json.loads(json.dumps(strObj))
        
        keys = list(obj.keys())
        # Añadir solo si no estan repetidas
        for key in keys:
            if key not in fieldnames:
                fieldnames.append(key)
# Printing the keys of the sesion dictionary.
# print(fieldnames)

# csv data example
# rows = [{'token': 'f4b777c8-0882-48a6-95ed-589c73911970:1634551354023', 'encuesta_usuario_time': 11.585, 'usuario': 'Pruebaaa'}, {'token': 'c87cae5b-38b9-441c-9877-34e387706364:1634551020266', 'encuesta_usuario_time': 25.179, 'usuario': 'Prueba2'}]

with open(sys.argv[1] + '.csv', 'w') as f:
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(lista)
