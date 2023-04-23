const { v4: uuidv4 } = require('uuid');

const generateTransformerMappings = (mappings) => {
    let mappings_array = []
    for (let i = 0; i < mappings.length; i++) {
        const mapping = mappings[i];

        const new_mapping = {
            "@version": "4.3.0",
            "name": mapping.name,
            "sequenceNumber": i,
            "enabled": true,
            "variable": "cod_proveniencia",
            "mapping": `msg${mapping.map_to}.toString().trim()`,
            "defaultValue": null,
            "replacements": null,
            "scope": "GLOBAL"
        }

        mappings_array.push(new_mapping)
    }

    const constant_mappings = {
        "@version": "4.3.0",
        "name": "generated_request_mysql_id",
        "sequenceNumber": mappings.length,
        "enabled": true,
        "variable": "generated_request_mysql_id",
        "mapping": null,
        "defaultValue": 0,
        "replacements": null,
        "scope": "CHANNEL"
    }

    mappings_array.push(constant_mappings)

    return mappings_array
}

const generateChannel = (channel_name, channel_port, mappings) => {
    const uniqueId = uuidv4();

    const channel_data = JSON.stringify(
        {
            "channel": {
                "@version": "4.3.0",
                "id": uniqueId,
                "nextMetaDataId": 7,
                "name": channel_name,
                "description": null,
                "revision": 87,
                "sourceConnector": {
                    "@version": "4.3.0",
                    "metaDataId": 0,
                    "name": "sourceConnector",
                    "properties": {
                        "@class": "com.mirth.connect.connectors.http.HttpReceiverProperties",
                        "@version": "4.3.0",
                        "pluginProperties": {
                            "com.mirth.connect.plugins.httpauth.NoneHttpAuthProperties": {
                                "@version": "4.3.0",
                                "authType": "NONE"
                            }
                        },
                        "listenerConnectorProperties": {
                            "@version": "4.3.0",
                            "host": "0.0.0.0",
                            "port": channel_port
                        },
                        "sourceConnectorProperties": {
                            "@version": "4.3.0",
                            "responseVariable": "d6",
                            "respondAfterProcessing": true,
                            "processBatch": true,
                            "firstResponse": false,
                            "processingThreads": 1,
                            "resourceIds": {
                                "@class": "linked-hash-map",
                                "entry": {
                                    "string": [
                                        "Default Resource",
                                        "[Default Resource]"
                                    ]
                                }
                            },
                            "queueBufferSize": 1000
                        },
                        "xmlBody": false,
                        "parseMultipart": true,
                        "includeMetadata": true,
                        "binaryMimeTypes": "application/.*(?<!json|xml)$|image/.*|video/.*|audio/.*",
                        "binaryMimeTypesRegex": true,
                        "responseContentType": "apllication/json",
                        "responseDataTypeBinary": false,
                        "responseStatusCode": null,
                        "responseHeaders": {
                            "@class": "linked-hash-map"
                        },
                        "responseHeadersVariable": null,
                        "useResponseHeadersVariable": false,
                        "charset": "UTF-8",
                        "contextPath": null,
                        "timeout": 30000,
                        "staticResources": null
                    },
                    "transformer": {
                        "@version": "4.3.0",
                        "elements": null,
                        "inboundTemplate": {
                            "@encoding": "base64"
                        },
                        "outboundTemplate": {
                            "@encoding": "base64"
                        },
                        "inboundDataType": "HL7V2",
                        "outboundDataType": "HL7V2",
                        "inboundProperties": {
                            "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                            "@version": "4.3.0",
                            "serializationProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                "@version": "4.3.0",
                                "handleRepetitions": true,
                                "handleSubcomponents": true,
                                "useStrictParser": false,
                                "useStrictValidation": false,
                                "stripNamespaces": false,
                                "segmentDelimiter": "\\r",
                                "convertLineBreaks": true
                            },
                            "deserializationProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                "@version": "4.3.0",
                                "useStrictParser": false,
                                "useStrictValidation": false,
                                "segmentDelimiter": "\\r"
                            },
                            "batchProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                "@version": "4.3.0",
                                "splitType": "MSH_Segment",
                                "batchScript": null
                            },
                            "responseGenerationProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                "@version": "4.3.0",
                                "segmentDelimiter": "\\r",
                                "successfulACKCode": "AA",
                                "successfulACKMessage": null,
                                "errorACKCode": "AE",
                                "errorACKMessage": "An Error Occurred Processing Message.",
                                "rejectedACKCode": "AR",
                                "rejectedACKMessage": "Message Rejected.",
                                "msh15ACKAccept": false,
                                "dateFormat": "yyyyMMddHHmmss.SSS"
                            },
                            "responseValidationProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                "@version": "4.3.0",
                                "successfulACKCode": "AA,CA",
                                "errorACKCode": "AE,CE",
                                "rejectedACKCode": "AR,CR",
                                "validateMessageControlId": true,
                                "originalMessageControlId": "Destination_Encoded",
                                "originalIdMapVariable": null
                            }
                        },
                        "outboundProperties": {
                            "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                            "@version": "4.3.0",
                            "serializationProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                "@version": "4.3.0",
                                "handleRepetitions": true,
                                "handleSubcomponents": true,
                                "useStrictParser": false,
                                "useStrictValidation": false,
                                "stripNamespaces": false,
                                "segmentDelimiter": "\\r",
                                "convertLineBreaks": true
                            },
                            "deserializationProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                "@version": "4.3.0",
                                "useStrictParser": false,
                                "useStrictValidation": false,
                                "segmentDelimiter": "\\r"
                            },
                            "batchProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                "@version": "4.3.0",
                                "splitType": "MSH_Segment",
                                "batchScript": null
                            },
                            "responseGenerationProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                "@version": "4.3.0",
                                "segmentDelimiter": "\\r",
                                "successfulACKCode": "AA",
                                "successfulACKMessage": null,
                                "errorACKCode": "AE",
                                "errorACKMessage": "An Error Occurred Processing Message.",
                                "rejectedACKCode": "AR",
                                "rejectedACKMessage": "Message Rejected.",
                                "msh15ACKAccept": false,
                                "dateFormat": "yyyyMMddHHmmss.SSS"
                            },
                            "responseValidationProperties": {
                                "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                "@version": "4.3.0",
                                "successfulACKCode": "AA,CA",
                                "errorACKCode": "AE,CE",
                                "rejectedACKCode": "AR,CR",
                                "validateMessageControlId": true,
                                "originalMessageControlId": "Destination_Encoded",
                                "originalIdMapVariable": null
                            }
                        }
                    },
                    "filter": {
                        "@version": "4.3.0",
                        "elements": null
                    },
                    "transportName": "HTTP Listener",
                    "mode": "SOURCE",
                    "enabled": true,
                    "waitForPrevious": true
                },
                "destinationConnectors": {
                    "connector": [
                        {
                            "@version": "4.3.0",
                            "metaDataId": 1,
                            "name": "HL7 Field Extraction",
                            "properties": {
                                "@class": "com.mirth.connect.connectors.js.JavaScriptDispatcherProperties",
                                "@version": "4.3.0",
                                "pluginProperties": null,
                                "destinationConnectorProperties": {
                                    "@version": "4.3.0",
                                    "queueEnabled": false,
                                    "sendFirst": false,
                                    "retryIntervalMillis": 10000,
                                    "regenerateTemplate": false,
                                    "retryCount": 0,
                                    "rotate": false,
                                    "includeFilterTransformer": false,
                                    "threadCount": 1,
                                    "threadAssignmentVariable": null,
                                    "validateResponse": false,
                                    "resourceIds": {
                                        "@class": "linked-hash-map",
                                        "entry": {
                                            "string": [
                                                "Default Resource",
                                                "[Default Resource]"
                                            ]
                                        }
                                    },
                                    "queueBufferSize": 1000,
                                    "reattachAttachments": true
                                },
                                "script": "// Loading global variable\nvar global_obj_string = globalMap.get('model_1_info')\nvar global_obj_json = JSON.parse(global_obj_string)\n\n\n// Loading current message mappings \nvar urg_episodio = $('urg_episodio')\nvar hora_admissao = $('hora_admissao')\nvar cod_causa = $('cod_causa')\nvar cod_proveniencia = $('cod_proveniencia')\nvar cod_prioridade = $('cod_prioridade')\nvar idade = $('idade')\nvar cod_via_verde = $('cod_via_verde')\nvar sexo = $('sexo')\nvar cod_concelho = $('cod_concelho')\nvar afluencia = $('afluencia')\nvar hora_discharge = $('los')\n\n// Populating the global object with successful mappings\nif(urg_episodio) {global_obj_json['urg_episodio'] = channelMap.get('urg_episodio')}\nif(hora_admissao) {global_obj_json['hora_admissao'] = channelMap.get('hora_admissao')} \nif(cod_causa) {global_obj_json['cod_causa'] = channelMap.get('cod_causa')} \nif(cod_proveniencia) {global_obj_json['cod_proveniencia'] = channelMap.get('cod_proveniencia')}\nif(cod_prioridade) {global_obj_json['cod_prioridade'] = channelMap.get('cod_prioridade')} \nif(idade) {global_obj_json['idade'] = channelMap.get('idade')} \nif(cod_via_verde) {global_obj_json['cod_via_verde'] = cod_via_verde}\nif(sexo) {global_obj_json['sexo'] = channelMap.get('sexo')} \nif(cod_concelho) {global_obj_json['cod_concelho'] = channelMap.get('cod_concelho')} \nif(afluencia) {global_obj_json['afluencia'] = afluencia} \nif(hora_discharge) {global_obj_json['los'] = channelMap.get('los')}\n\nlogger.info(afluencia)\nlogger.info(cod_via_verde)\n\n\n// Updating global variable\nglobalMap.put('model_1_info', JSON.stringify(global_obj_json))\n"
                            },
                            "transformer": {
                                "@version": "4.3.0",
                                "elements": {
                                    "com.mirth.connect.plugins.javascriptstep.JavaScriptStep": [
                                        {
                                            "@version": "4.3.0",
                                            "name": "urg_episodio",
                                            "sequenceNumber": 0,
                                            "enabled": true,
                                            "script": "var mapping;\nvar msg_type;\n\nvar trigger_events = ['A01', 'A02', 'A03']\n\ntry {\n    mapping = msg['PV1']['PV1.19']['PV1.19.1'].toString()\n    msg_type = msg['MSH']['MSH.9']['MSH.9.1'].toString()\n    msg_trigger = msg['MSH']['MSH.9']['MSH.9.2'].toString()\n} catch (e) {\n    mapping = 'error';\n}\n\nif(mapping !== null && msg_type === 'ADT' && trigger_events.includes(msg_trigger)){\n\tchannelMap.put('urg_episodio', validate(mapping, '', new Array()));\n\t}"
                                        },
                                        {
                                            "@version": "4.3.0",
                                            "name": "hora_admissao",
                                            "sequenceNumber": 1,
                                            "enabled": true,
                                            "script": "var mapping;\nvar msg_type;\nvar trigger_events = ['A01', 'A02', 'A03']\n\ntry {\n    mapping = msg['PV1']['PV1.44']['PV1.44.1'].toString()\n    msg_type = msg['MSH']['MSH.9']['MSH.9.1'].toString()\n    msg_trigger = msg['MSH']['MSH.9']['MSH.9.2'].toString()\n} catch (e) {\n    mapping = 'error';\n}\n\nif(mapping !== null && msg_type === 'ADT' && trigger_events.includes(msg_trigger)){\n\tchannelMap.put('hora_admissao', validate(mapping, '', new Array()));\n\t}"
                                        },
                                        {
                                            "@version": "4.3.0",
                                            "name": "cod_causa",
                                            "sequenceNumber": 2,
                                            "enabled": true,
                                            "script": "var mapping;\nvar msg_type;\nvar trigger_events = ['A01', 'A02', 'A03']\ntry {\n    mapping = msg['DG1']['DG1.3']['DG1.3.1'].toString()\n    msg_type = msg['MSH']['MSH.9']['MSH.9.1'].toString()\n    msg_trigger = msg['MSH']['MSH.9']['MSH.9.2'].toString()\n} catch (e) {\n    mapping = 'error';\n}\n\nif(mapping !== null && msg_type === 'ADT' && trigger_events.includes(msg_trigger)){\n\tchannelMap.put('cod_causa', validate(mapping, '', new Array()));\n\t}"
                                        },
                                        {
                                            "@version": "4.3.0",
                                            "name": "cod_proveniencia",
                                            "sequenceNumber": 3,
                                            "enabled": true,
                                            "script": "var mapping;\nvar msg_type;\nvar trigger_events = ['A01', 'A02', 'A03']\ntry {\n    mapping = msg['PV1']['PV1.8']['PV1.8.1'].toString()\n    msg_type = msg['MSH']['MSH.9']['MSH.9.1'].toString()\n    msg_trigger = msg['MSH']['MSH.9']['MSH.9.2'].toString()\n} catch (e) {\n    mapping = 'error';\n}\n\nif(mapping !== null && msg_type === 'ADT' && trigger_events.includes(msg_trigger)){\n\tchannelMap.put('cod_proveniencia', validate(mapping, '', new Array()));\n\t}"
                                        },
                                        {
                                            "@version": "4.3.0",
                                            "name": "cod_prioridade",
                                            "sequenceNumber": 4,
                                            "enabled": true,
                                            "script": "var mapping;\nvar msg_type;\nvar trigger_events = ['A01', 'A02', 'A03']\ntry {\n    mapping = msg['PV1']['PV1.2']['PV1.2.1'].toString()\n    msg_type = msg['MSH']['MSH.9']['MSH.9.1'].toString()\n    msg_trigger = msg['MSH']['MSH.9']['MSH.9.2'].toString()\n} catch (e) {\n    mapping = 'error';\n}\n\nif(mapping !== null && msg_type === 'ADT' && trigger_events.includes(msg_trigger)){\n\tchannelMap.put('cod_prioridade', validate(mapping, '', new Array()));\n\t}"
                                        },
                                        {
                                            "@version": "4.3.0",
                                            "name": "idade",
                                            "sequenceNumber": 5,
                                            "enabled": true,
                                            "script": "var mapping;\nvar msg_type;\nvar trigger_events = ['A01', 'A02', 'A03']\ntry {\n    mapping = msg['PID']['PID.7']['PID.7.1'].toString()\n    msg_type = msg['MSH']['MSH.9']['MSH.9.1'].toString()\n    msg_trigger = msg['MSH']['MSH.9']['MSH.9.2'].toString()\n} catch (e) {\n    mapping = 'error';\n}\n\nif(mapping !== null && msg_type === 'ADT' && trigger_events.includes(msg_trigger)){\n\tchannelMap.put('idade', validate(mapping, '', new Array()));\n\t}"
                                        },
                                        {
                                            "@version": "4.3.0",
                                            "name": "cod_via_verde",
                                            "sequenceNumber": 6,
                                            "enabled": true,
                                            "script": "var mapping;\nvar msg_type;\nvar trigger_events = ['R01', 'R03']\ntry {\n    mapping = msg['OBX']['OBX.5']['OBX.5.1'].toString()\n    mapping_id = msg['OBX']['OBX.3']['OBX.3.1'].toString()\n    msg_type = msg['MSH']['MSH.9']['MSH.9.1'].toString()\n    msg_trigger = msg['MSH']['MSH.9']['MSH.9.2'].toString()\n} catch (e) {\n    mapping = 'error';\n}\n\nif(mapping !== null && msg_type === 'ORU' && mapping_id === '01' && trigger_events.includes(msg_trigger)){\n\tchannelMap.put('cod_via_verde', mapping);\n\t}"
                                        },
                                        {
                                            "@version": "4.3.0",
                                            "name": "sexo",
                                            "sequenceNumber": 7,
                                            "enabled": true,
                                            "script": "var mapping;\nvar msg_type;\nvar trigger_events = ['A01', 'A02', 'A03']\ntry {\n    mapping = msg['PID']['PID.8']['PID.8.1'].toString()\n    msg_type = msg['MSH']['MSH.9']['MSH.9.1'].toString()\n    msg_trigger = msg['MSH']['MSH.9']['MSH.9.2'].toString()\n} catch (e) {\n    mapping = 'error';\n}\n\nif(mapping !== null && msg_type === 'ADT' && trigger_events.includes(msg_trigger)){\n\tchannelMap.put('sexo', validate(mapping, '', new Array()));\n\t}"
                                        },
                                        {
                                            "@version": "4.3.0",
                                            "name": "cod_concelho",
                                            "sequenceNumber": 8,
                                            "enabled": true,
                                            "script": "var mapping;\nvar msg_type;\nvar trigger_events = ['A01', 'A02', 'A03']\ntry {\n    mapping = msg['PID']['PID.11']['PID.11.9'].toString()\n    msg_type = msg['MSH']['MSH.9']['MSH.9.1'].toString()\n    msg_trigger = msg['MSH']['MSH.9']['MSH.9.2'].toString()\n} catch (e) {\n    mapping = 'error';\n}\n\nif(mapping !== null && msg_type === 'ADT' && trigger_events.includes(msg_trigger)){\n\tchannelMap.put('cod_concelho', validate(mapping, '', new Array()));\n\t}"
                                        },
                                        {
                                            "@version": "4.3.0",
                                            "name": "afluencia",
                                            "sequenceNumber": 9,
                                            "enabled": true,
                                            "script": "var mapping;\nvar msg_type;\nvar trigger_events = ['R01', 'R03']\ntry {\n    mapping = msg['OBX']['OBX.5']['OBX.5.1'].toString()\n    mapping_id = msg['OBX']['OBX.3']['OBX.3.1'].toString()\n    msg_type = msg['MSH']['MSH.9']['MSH.9.1'].toString()\n    msg_trigger = msg['MSH']['MSH.9']['MSH.9.2'].toString()\n} catch (e) {\n    mapping = 'error';\n}\n\nif(mapping !== null && msg_type === 'ORU' && mapping_id === '02' && trigger_events.includes(msg_trigger)){\n\tchannelMap.put('afluencia', mapping);\n\t}"
                                        },
                                        {
                                            "@version": "4.3.0",
                                            "name": "los",
                                            "sequenceNumber": 10,
                                            "enabled": true,
                                            "script": "var mapping;\nvar msg_type;\nvar trigger_events = ['A01', 'A02', 'A03']\ntry {\n    mapping = msg['PV2']['PV2.10']['PV2.10.1']\n    msg_type = msg['MSH']['MSH.9']['MSH.9.1'].toString()\n    msg_trigger = msg['MSH']['MSH.9']['MSH.9.2'].toString()\n} catch (e) {\n    mapping = 'error';\n}\n\nif(mapping !== null && msg_type === 'ADT' && trigger_events.includes(msg_trigger)){\n\tchannelMap.put('los', validate(mapping, '', new Array()));\n\t}"
                                        }
                                    ]
                                },
                                "inboundTemplate": {
                                    "@encoding": "base64",
                                    "$": "TVNIfF5+XCZ8SE9TUElUQUx8QURUfEhMN0xBQnxBRFR8MjAxOTA0MDIxMjAwfHxBRFReQTAxfDU2Nzg5fFB8Mi41CkVWTnx8MjAxOTA0MDIxMjAwfHx8ClBJRHx8fDk4NzY1NDMyMXx8U21pdGheQWxpY2V8fDE5NzUwMTAxfEZ8fHw0NTYgT2FrIFN0Xl5Mb3MgQW5nZWxlc15DQV45MDAwMV5eXl5icmdefEJyYWdhfDU1NS01Njc4fHx8U3x8OTg3NjU0MzJ8MTIzNDU2Nzh8fHx8fHx8fHx8fHx8fHx8fHx8fApQVjF8fE98Xl5eU1VSR0VSWXxVfHx8XlNtaXRoXkJvYnxkci5qb25hczJ8fHx8fHx8fHx8fDk4NzY1NDMyfDEyMzQ1Njc4fHx8Mnx8fHx8fHx8fHx8fHx8fHx8fHx8fGRhdGFfYWRtaXNzYW98ZGF0YV9kaXNjaGFyZ2V8fHwyMDE5MDQwMjEyMDB8ClBWMnx8fHx8fHx8fHwxMHx8fHx8fHx8fHx8fHx8fHx8fApERzF8fHxjb2RlXzF8fHx8fHx8fHx8fHx8fHx8fHw="
                                },
                                "outboundTemplate": {
                                    "@encoding": "base64"
                                },
                                "inboundDataType": "HL7V2",
                                "outboundDataType": "HL7V2",
                                "inboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                },
                                "outboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                }
                            },
                            "responseTransformer": {
                                "@version": "4.3.0",
                                "elements": null,
                                "inboundTemplate": {
                                    "@encoding": "base64"
                                },
                                "outboundTemplate": {
                                    "@encoding": "base64"
                                },
                                "inboundDataType": "HL7V2",
                                "outboundDataType": "HL7V2",
                                "inboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                },
                                "outboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                }
                            },
                            "filter": {
                                "@version": "4.3.0",
                                "elements": null
                            },
                            "transportName": "JavaScript Writer",
                            "mode": "DESTINATION",
                            "enabled": true,
                            "waitForPrevious": true
                        },
                        {
                            "@version": "4.3.0",
                            "metaDataId": 3,
                            "name": "Batch Validation",
                            "properties": {
                                "@class": "com.mirth.connect.connectors.js.JavaScriptDispatcherProperties",
                                "@version": "4.3.0",
                                "pluginProperties": null,
                                "destinationConnectorProperties": {
                                    "@version": "4.3.0",
                                    "queueEnabled": false,
                                    "sendFirst": false,
                                    "retryIntervalMillis": 10000,
                                    "regenerateTemplate": false,
                                    "retryCount": 0,
                                    "rotate": false,
                                    "includeFilterTransformer": false,
                                    "threadCount": 1,
                                    "threadAssignmentVariable": null,
                                    "validateResponse": false,
                                    "resourceIds": {
                                        "@class": "linked-hash-map",
                                        "entry": {
                                            "string": [
                                                "Default Resource",
                                                "[Default Resource]"
                                            ]
                                        }
                                    },
                                    "queueBufferSize": 1000,
                                    "reattachAttachments": true
                                },
                                "script": "logger.info('All messages Processed. Validating the request object')\n\n// Fetching the parsed data\nconst global_obj = JSON.parse(globalMap.get('model_1_info'))\nvar validated = true\n\n// Creating the response template\nvar final_res = {\n\trequest_features: {\n\t\t\n\t\t},\n\tstatus: 200,\n\tmessage: 'Request created successfully'\n\t}\n\nif(global_obj.urg_episodio) {final_res['request_features']['urg_episodio'] = {status: 'ok', value: global_obj.urg_episodio}}else{ final_res['request_features']['urg_episodio'] = {status: 'fail', mapping: \"['PV1']['PV1.19']['PV1.19.1']\", trigger_events: ['A01', 'A02', 'A03']}; validated = false}\nif(global_obj.hora_admissao) {final_res['request_features']['hora_admissao'] = {status: 'ok', value: global_obj.hora_admissao} }else{ final_res['request_features']['hora_admissao'] = {status: 'fail', mapping: \"['PV1']['PV1.19']['PV1.19.1']\"}; validated = false}\nif(global_obj.cod_causa) {final_res['request_features']['cod_causa'] = {status: 'ok', value: global_obj.cod_causa} }else{ final_res['request_features']['cod_causa'] = {status: 'fail', mapping: \"['PV1']['PV1.19']['PV1.19.1']\"}; validated = false}\nif(global_obj.cod_proveniencia) {final_res['request_features']['cod_proveniencia'] = {status: 'ok', value: global_obj.cod_proveniencia} }else{ final_res['request_features']['cod_proveniencia'] = {status: 'fail', mapping: \"['PV1']['PV1.19']['PV1.19.1']\"}; validated = false}\nif(global_obj.cod_prioridade) {final_res['request_features']['cod_prioridade'] = {status: 'ok', value: global_obj.cod_prioridade} }else{ final_res['request_features']['cod_prioridade'] = {status: 'fail', mapping: \"['PV1']['PV1.19']['PV1.19.1']\"}; validated = false}\nif(global_obj.idade) {final_res['request_features']['idade'] = {status: 'ok', value: global_obj.idade} }else{ final_res['request_features']['idade'] = {status: 'fail', mapping: \"['PV1']['PV1.19']['PV1.19.1']\"}; validated = false}\nif(global_obj.cod_via_verde) {final_res['request_features']['cod_via_verde'] = {status: 'ok', value: global_obj.cod_via_verde} }else{ final_res['request_features']['cod_via_verde'] = {status: 'fail', mapping: \"['PV1']['PV1.19']['PV1.19.1']\"}; validated = false}\nif(global_obj.sexo) {final_res['request_features']['sexo'] = {status: 'ok', value: global_obj.sexo} }else{ final_res['request_features']['sexo'] = {status: 'fail', mapping: \"['PV1']['PV1.19']['PV1.19.1']\"}; validated = false}\nif(global_obj.cod_concelho) {final_res['request_features']['cod_concelho'] = {status: 'ok', value: global_obj.cod_concelho} }else{ final_res['request_features']['cod_concelho'] = {status: 'fail', mapping: \"['PV1']['PV1.19']['PV1.19.1']\"}; validated = false}\nif(global_obj.afluencia) {final_res['request_features']['afluencia'] = {status: 'ok', value: global_obj.afluencia} }else{ final_res['request_features']['afluencia'] = {status: 'fail', mapping: \"['PV1']['PV1.19']['PV1.19.1']\"}; validated = false}\nif(global_obj.los) {final_res['request_features']['los'] = {status: 'ok', value: global_obj.los} }else{ final_res['request_features']['los'] = {status: 'fail', mapping: \"['PV1']['PV1.19']['PV1.19.1']\"}; validated = false}\n\n// Setting the flag for the rest of the channel to proceed\nchannelMap.put('req_obj_valid', validated)\n\n\nif(!validated){\n\tfinal_res['status'] = 500\n\tfinal_res['message'] = 'Request was not created'\n}else{\n\tfinal_res['status'] = 200\n\tfinal_res['message'] = 'Request created successfully'\n}\n\n// Setting the final_res channel var\nchannelMap.put('final_res', JSON.stringify(final_res))"
                            },
                            "transformer": {
                                "@version": "4.3.0",
                                "elements": {
                                    "com.mirth.connect.plugins.mapper.MapperStep": {
                                        "@version": "4.3.0",
                                        "name": "req_obj_valid",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "variable": "req_obj_valid",
                                        "mapping": null,
                                        "defaultValue": false,
                                        "replacements": null,
                                        "scope": "CHANNEL"
                                    }
                                },
                                "inboundTemplate": {
                                    "@encoding": "base64"
                                },
                                "outboundTemplate": {
                                    "@encoding": "base64"
                                },
                                "inboundDataType": "HL7V2",
                                "outboundDataType": "HL7V2",
                                "inboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                },
                                "outboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                }
                            },
                            "responseTransformer": {
                                "@version": "4.3.0",
                                "elements": null,
                                "inboundDataType": "HL7V2",
                                "outboundDataType": "HL7V2",
                                "inboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                },
                                "outboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                }
                            },
                            "filter": {
                                "@version": "4.3.0",
                                "elements": {
                                    "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('batchComplete')\" equals true",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "field": "$('batchComplete')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    }
                                }
                            },
                            "transportName": "JavaScript Writer",
                            "mode": "DESTINATION",
                            "enabled": true,
                            "waitForPrevious": true
                        },
                        {
                            "@version": "4.3.0",
                            "metaDataId": 5,
                            "name": "Sending Data to DB",
                            "properties": {
                                "@class": "com.mirth.connect.connectors.jdbc.DatabaseDispatcherProperties",
                                "@version": "4.3.0",
                                "pluginProperties": null,
                                "destinationConnectorProperties": {
                                    "@version": "4.3.0",
                                    "queueEnabled": false,
                                    "sendFirst": false,
                                    "retryIntervalMillis": 10000,
                                    "regenerateTemplate": false,
                                    "retryCount": 0,
                                    "rotate": false,
                                    "includeFilterTransformer": false,
                                    "threadCount": 1,
                                    "threadAssignmentVariable": null,
                                    "validateResponse": false,
                                    "resourceIds": {
                                        "@class": "linked-hash-map",
                                        "entry": {
                                            "string": [
                                                "Default Resource",
                                                "[Default Resource]"
                                            ]
                                        }
                                    },
                                    "queueBufferSize": 1000,
                                    "reattachAttachments": true
                                },
                                "driver": "com.mysql.cj.jdbc.Driver",
                                "url": "jdbc:mysql://mysql-container:3306/abi-metadata",
                                "username": "admin",
                                "password": "admin",
                                "query": "var dbConn;\nconst req_obj = JSON.parse(globalMap.get('model_1_info'))\n\n// Generating unique ID\nconst uuid = UUIDGenerator.getUUID();\n\n// Building array for DB insertion\nconst req_obj_array = [\nuuid,\nreq_obj.urg_episodio,\nreq_obj.hora_admissao,\nreq_obj.cod_causa,\nreq_obj.cod_proveniencia,\nreq_obj.cod_prioridade,\nreq_obj.idade,\nreq_obj.cod_via_verde,\nreq_obj.sexo,\nreq_obj.cod_concelho,\nreq_obj.afluencia,\nreq_obj.los\n]\n\ntry {\n\n\t// Database Connection\n\tdbConn = DatabaseConnectionFactory.createDatabaseConnection('com.mysql.cj.jdbc.Driver','jdbc:mysql://mysql-container:3306/abi-metadata','admin','admin');\n\n\t// Inserting new record in model_1_data table\n\tvar result_model_table = dbConn.executeUpdate(\"INSERT INTO model_1_data (data_id, urg_episodio, hora_admissao, cod_causa, cod_proveniencia, cod_prioridade, idade, cod_via_verde, sexo, cod_concelho, afluencia, hora_discharge) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)\", req_obj_array);\n\n\t// Linking new model_1_data request to a state\n\tvar result_req_table = dbConn.executeUpdate(\"INSERT INTO client_requests (model_data_id, request_type, client_id) VALUES (?,?,?)\", [uuid, 'model_1_data', 123]);\n\n\t// Updating global data object with uuid for request identification\n\treq_obj['req_id'] = uuid\n\tglobalMap.put('model_1_info', JSON.stringify(req_obj))\n\n\n} finally {\n\tif (dbConn) { \n\t\tdbConn.close();\n\t}\n}\n\n",
                                "useScript": true
                            },
                            "transformer": {
                                "@version": "4.3.0",
                                "elements": null,
                                "inboundTemplate": {
                                    "@encoding": "base64"
                                },
                                "inboundDataType": "HL7V2",
                                "outboundDataType": "HL7V2",
                                "inboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                },
                                "outboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                }
                            },
                            "responseTransformer": {
                                "@version": "4.3.0",
                                "elements": null,
                                "inboundDataType": "HL7V2",
                                "outboundDataType": "HL7V2",
                                "inboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                },
                                "outboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                }
                            },
                            "filter": {
                                "@version": "4.3.0",
                                "elements": {
                                    "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('req_obj_valid')\" equals true",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "field": "$('req_obj_valid')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    }
                                }
                            },
                            "transportName": "Database Writer",
                            "mode": "DESTINATION",
                            "enabled": true,
                            "waitForPrevious": true
                        },
                        {
                            "@version": "4.3.0",
                            "metaDataId": 4,
                            "name": "Sending Data to MQ",
                            "properties": {
                                "@class": "com.mirth.connect.connectors.http.HttpDispatcherProperties",
                                "@version": "4.3.0",
                                "pluginProperties": null,
                                "destinationConnectorProperties": {
                                    "@version": "4.3.0",
                                    "queueEnabled": false,
                                    "sendFirst": false,
                                    "retryIntervalMillis": 10000,
                                    "regenerateTemplate": false,
                                    "retryCount": 0,
                                    "rotate": false,
                                    "includeFilterTransformer": false,
                                    "threadCount": 1,
                                    "threadAssignmentVariable": null,
                                    "validateResponse": false,
                                    "resourceIds": {
                                        "@class": "linked-hash-map",
                                        "entry": {
                                            "string": [
                                                "Default Resource",
                                                "[Default Resource]"
                                            ]
                                        }
                                    },
                                    "queueBufferSize": 1000,
                                    "reattachAttachments": true
                                },
                                "host": "http://message-queue-webservice:3000/data",
                                "useProxyServer": false,
                                "proxyAddress": null,
                                "proxyPort": null,
                                "method": "post",
                                "headers": {
                                    "@class": "linked-hash-map"
                                },
                                "parameters": {
                                    "@class": "linked-hash-map"
                                },
                                "useHeadersVariable": false,
                                "headersVariable": null,
                                "useParametersVariable": false,
                                "parametersVariable": null,
                                "responseXmlBody": false,
                                "responseParseMultipart": true,
                                "responseIncludeMetadata": false,
                                "responseBinaryMimeTypes": "application/.*(?<!json|xml)$|image/.*|video/.*|audio/.*",
                                "responseBinaryMimeTypesRegex": true,
                                "multipart": false,
                                "useAuthentication": false,
                                "authenticationType": "Basic",
                                "usePreemptiveAuthentication": false,
                                "username": null,
                                "password": null,
                                "content": "${model_1_info}",
                                "contentType": "application/json",
                                "dataTypeBinary": false,
                                "charset": "UTF-8",
                                "socketTimeout": 30000
                            },
                            "transformer": {
                                "@version": "4.3.0",
                                "elements": null,
                                "inboundTemplate": {
                                    "@encoding": "base64"
                                },
                                "outboundTemplate": {
                                    "@encoding": "base64"
                                },
                                "inboundDataType": "HL7V2",
                                "outboundDataType": "HL7V2",
                                "inboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                },
                                "outboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                }
                            },
                            "responseTransformer": {
                                "@version": "4.3.0",
                                "elements": null,
                                "inboundDataType": "HL7V2",
                                "outboundDataType": "HL7V2",
                                "inboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                },
                                "outboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                }
                            },
                            "filter": {
                                "@version": "4.3.0",
                                "elements": {
                                    "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('req_obj_valid')\" equals true",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "field": "$('req_obj_valid')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    }
                                }
                            },
                            "transportName": "HTTP Sender",
                            "mode": "DESTINATION",
                            "enabled": true,
                            "waitForPrevious": true
                        },
                        {
                            "@version": "4.3.0",
                            "metaDataId": 6,
                            "name": "Send Response",
                            "properties": {
                                "@class": "com.mirth.connect.connectors.js.JavaScriptDispatcherProperties",
                                "@version": "4.3.0",
                                "pluginProperties": null,
                                "destinationConnectorProperties": {
                                    "@version": "4.3.0",
                                    "queueEnabled": false,
                                    "sendFirst": false,
                                    "retryIntervalMillis": 10000,
                                    "regenerateTemplate": false,
                                    "retryCount": 0,
                                    "rotate": false,
                                    "includeFilterTransformer": false,
                                    "threadCount": 1,
                                    "threadAssignmentVariable": null,
                                    "validateResponse": false,
                                    "resourceIds": {
                                        "@class": "linked-hash-map",
                                        "entry": {
                                            "string": [
                                                "Default Resource",
                                                "[Default Resource]"
                                            ]
                                        }
                                    },
                                    "queueBufferSize": 1000,
                                    "reattachAttachments": true
                                },
                                "script": "globalMap.put('model_1_info', JSON.stringify({}))\nreturn channelMap.get('final_res')"
                            },
                            "transformer": {
                                "@version": "4.3.0",
                                "elements": null,
                                "inboundTemplate": {
                                    "@encoding": "base64"
                                },
                                "inboundDataType": "HL7V2",
                                "outboundDataType": "HL7V2",
                                "inboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                },
                                "outboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                }
                            },
                            "responseTransformer": {
                                "@version": "4.3.0",
                                "elements": null,
                                "inboundDataType": "HL7V2",
                                "outboundDataType": "HL7V2",
                                "inboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                },
                                "outboundProperties": {
                                    "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DataTypeProperties",
                                    "@version": "4.3.0",
                                    "serializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2SerializationProperties",
                                        "@version": "4.3.0",
                                        "handleRepetitions": true,
                                        "handleSubcomponents": true,
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "stripNamespaces": false,
                                        "segmentDelimiter": "\\r",
                                        "convertLineBreaks": true
                                    },
                                    "deserializationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2DeserializationProperties",
                                        "@version": "4.3.0",
                                        "useStrictParser": false,
                                        "useStrictValidation": false,
                                        "segmentDelimiter": "\\r"
                                    },
                                    "batchProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2BatchProperties",
                                        "@version": "4.3.0",
                                        "splitType": "MSH_Segment",
                                        "batchScript": null
                                    },
                                    "responseGenerationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseGenerationProperties",
                                        "@version": "4.3.0",
                                        "segmentDelimiter": "\\r",
                                        "successfulACKCode": "AA",
                                        "successfulACKMessage": null,
                                        "errorACKCode": "AE",
                                        "errorACKMessage": "An Error Occurred Processing Message.",
                                        "rejectedACKCode": "AR",
                                        "rejectedACKMessage": "Message Rejected.",
                                        "msh15ACKAccept": false,
                                        "dateFormat": "yyyyMMddHHmmss.SSS"
                                    },
                                    "responseValidationProperties": {
                                        "@class": "com.mirth.connect.plugins.datatypes.hl7v2.HL7v2ResponseValidationProperties",
                                        "@version": "4.3.0",
                                        "successfulACKCode": "AA,CA",
                                        "errorACKCode": "AE,CE",
                                        "rejectedACKCode": "AR,CR",
                                        "validateMessageControlId": true,
                                        "originalMessageControlId": "Destination_Encoded",
                                        "originalIdMapVariable": null
                                    }
                                }
                            },
                            "filter": {
                                "@version": "4.3.0",
                                "elements": {
                                    "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": {
                                        "@version": "4.3.0",
                                        "name": "Accept message if \"$('batchComplete')\" equals true",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "field": "$('batchComplete')",
                                        "condition": "EQUALS",
                                        "values": {
                                            "string": true
                                        }
                                    }
                                }
                            },
                            "transportName": "JavaScript Writer",
                            "mode": "DESTINATION",
                            "enabled": true,
                            "waitForPrevious": true
                        }
                    ]
                },
                "preprocessingScript": "return message;",
                "postprocessingScript": "// This script executes once after a message has been processed\n// Responses returned from here will be stored as \"Postprocessor\" in the response map\nreturn;",
                "deployScript": "// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\n\nvar global_obj = {}\nglobalMap.put('model_1_info', JSON.stringify(global_obj))\nreturn;",
                "undeployScript": "// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;",
                "properties": {
                    "@version": "4.3.0",
                    "clearGlobalChannelMap": true,
                    "messageStorageMode": "DEVELOPMENT",
                    "encryptData": false,
                    "encryptAttachments": false,
                    "encryptCustomMetaData": false,
                    "removeContentOnCompletion": false,
                    "removeOnlyFilteredOnCompletion": false,
                    "removeAttachmentsOnCompletion": false,
                    "initialState": "STARTED",
                    "storeAttachments": true,
                    "metaDataColumns": {
                        "metaDataColumn": [
                            {
                                "name": "SOURCE",
                                "type": "STRING",
                                "mappingName": "mirth_source"
                            },
                            {
                                "name": "TYPE",
                                "type": "STRING",
                                "mappingName": "mirth_type"
                            }
                        ]
                    },
                    "attachmentProperties": {
                        "@version": "4.3.0",
                        "type": "None",
                        "properties": null
                    },
                    "resourceIds": {
                        "@class": "linked-hash-map",
                        "entry": {
                            "string": [
                                "Default Resource",
                                "[Default Resource]"
                            ]
                        }
                    }
                },
                "exportData": {
                    "metadata": {
                        "enabled": true,
                        "lastModified": {
                            "time": 1681858373304,
                            "timezone": "Europe/London"
                        },
                        "pruningSettings": {
                            "archiveEnabled": true,
                            "pruneErroredMessages": false
                        },
                        "userId": 1
                    },
                    "dependentIds": null,
                    "dependencyIds": null,
                    "channelTags": null
                }
            }
        }
    )

    return channel_data
}

module.exports = {
    generateChannel: generateChannel
}