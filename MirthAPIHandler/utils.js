const { v4: uuidv4 } = require('uuid');

const generateChannel = (channel_name, channel_port) => {
    const uniqueId = uuidv4();

    const channel_data = JSON.stringify({
        "channel": {
            "@version": "4.3.0",
            "id": uniqueId,
            "nextMetaDataId": 7,
            "name": channel_name,
            "description": null,
            "revision": 55,
            "sourceConnector": {
                "@version": "4.3.0",
                "metaDataId": 0,
                "name": "sourceConnector",
                "properties": {
                    "@class": "com.mirth.connect.connectors.tcp.TcpReceiverProperties",
                    "@version": "4.3.0",
                    "pluginProperties": null,
                    "listenerConnectorProperties": {
                        "@version": "4.3.0",
                        "host": "0.0.0.0",
                        "port": channel_port
                    },
                    "sourceConnectorProperties": {
                        "@version": "4.3.0",
                        "responseVariable": "Auto-generate (After source transformer)",
                        "respondAfterProcessing": true,
                        "processBatch": false,
                        "firstResponse": true,
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
                    "transmissionModeProperties": {
                        "@class": "com.mirth.connect.plugins.mllpmode.MLLPModeProperties",
                        "pluginPointName": "MLLP",
                        "startOfMessageBytes": "0B",
                        "endOfMessageBytes": "1C0D",
                        "useMLLPv2": false,
                        "ackBytes": "06",
                        "nackBytes": 15,
                        "maxRetries": 2
                    },
                    "serverMode": true,
                    "remoteAddress": null,
                    "remotePort": null,
                    "overrideLocalBinding": false,
                    "reconnectInterval": 5000,
                    "receiveTimeout": 0,
                    "bufferSize": 65536,
                    "maxConnections": 10,
                    "keepConnectionOpen": true,
                    "dataTypeBinary": false,
                    "charsetEncoding": "DEFAULT_ENCODING",
                    "respondOnNewConnection": 0,
                    "responseAddress": null,
                    "responsePort": null
                },
                "transformer": {
                    "@version": "4.3.0",
                    "elements": {
                        "com.mirth.connect.plugins.mapper.MapperStep": [
                            {
                                "@version": "4.3.0",
                                "name": "Message Code",
                                "sequenceNumber": 0,
                                "enabled": true,
                                "variable": "Message Code",
                                "mapping": "msg['MSH']['MSH.9']['MSH.9.1'].toString().trim()",
                                "defaultValue": null,
                                "replacements": null,
                                "scope": "CHANNEL"
                            },
                            {
                                "@version": "4.3.0",
                                "name": "Patient First Name",
                                "sequenceNumber": 1,
                                "enabled": true,
                                "variable": "Patient First Name",
                                "mapping": "msg['PID']['PID.5']['PID.5.1'].toString().trim()",
                                "defaultValue": null,
                                "replacements": null,
                                "scope": "CHANNEL"
                            }
                        ]
                    },
                    "inboundTemplate": {
                        "@encoding": "base64",
                        "$": "TVNIfF5+XCZ8QWNjTWdyfDF8fHwyMDA1MDExMDA0NTUwNHx8QURUXkEwMXw1OTkxMDJ8UHwyLjN8fHwKRVZOfEEwMXwyMDA1MDExMDA0NTUwMnx8fHx8ClBJRHwxfHwxMDAwNjU3OV5eXjFeTVJOXjF8fERVQ0teRE9OQUxEXkR8fDE5MjQxMDEwfE18fDF8MTExIERVQ0sgU1ReXkZPV0xeQ0FeOTk5OTkwMDAwXl5NfDF8ODg4NTU1MTIxMnw4ODg1NTUxMjEyfDF8Mnx8NDAwMDc3MTZeXl5BY2NNZ3JeVk5eMXwxMjMxMjEyMzR8fHx8fHx8fHx8fE5PIE5LMXwxfERVQ0teSFVFWXxTT3wzNTgzIERVQ0sgUkReXkZPV0xeQ0FeOTk5OTkwMDAwfDg4ODU1NTIyMjJ8fFl8fHx8fHx8fHx8fHx8fApQVjF8MXxJfFBSRU9QXjEwMV4xXjFeXl5TfDN8fHwzN15ESVNORVleV0FMVF5eXl5eXkFjY01ncl5eXl5DSXx8fDAxfHx8fDF8fHwzN15ESVNORVleV0FMVF5eXl5eXkFjY01ncl5eXl5DSXwyfDQwMDA3NzE2Xl5eQWNjTWdyXlZOfDR8fHx8fHx8fHx8fHx8fHx8fHx8MXx8R3x8fDIwMDUwMTEwMDQ1MjUzfHx8fHx8CkdUMXwxfDgyOTF8RFVDS15ET05BTEReRHx8MTExXkRVQ0tTVF5eRk9XTF5DQV45OTk5OTAwMDB8ODg4NTU1MTIxMnx8MTkyNDEwMTB8TXx8MXwxMjMxMjEyMzR8fHx8I0NhcnRvb24gRHVja3MgSW5jfDExMV5EVUNLIFNUXl5GT1dMXkNBXjk5OTk5MDAwMHw4ODg1NTUxMjEyfHxQVHwKREcxfDF8STl8NzE1OTZeT1NURU9BUlRIUk9TIE5PUy1ML0xFRyBeSTl8T1NURU9BUlRIUk9TIE5PUy1ML0xFRyB8fEF8IElOMXwxfE1FRElDQVJFfDN8TUVESUNBUkV8fHx8fHx8Q2FydG9vbiBEdWNrcyBJbmN8MTk4OTEwMDF8fHw0fERVQ0teRE9OQUxEXkR8MXwxOTI0MTAxMHwxMTFeRFVDSyBTVF5eRk9XTF5DQV45OTk5OTAwMDB8fHx8fHx8fHx8fHx8fHx8fDEyMzEyMTIzNEF8fHx8fHxQVHxNfDExMSBEVUNLIFNUXl5GT1dMXkNBXjk5OTk5MDAwMHx8fHx8ODI5MQpJTjJ8MXx8MTIzMTIxMjM0fENhcnRvb24gRHVja3MgSW5jfHx8MTIzMTIxMjM0QXx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fDg4ODU1NTEyMTIKSU4xfDJ8Tk9OLVBSSU1BUll8OXxNRURJQ0FMIE1VVFVBTCBDQUxJRi58UE8gQk9YIDk0Nzc2Xl5IT0xMWVdPT0ReQ0FeNDQxNDE0Nzc2fHw4MDAzNjIxMjc5fFBVQlNVTUJ8fHxDYXJ0b29uIER1Y2tzIEluY3x8fHw3fERVQ0teRE9OQUxEXkR8MXwxOTI0MTAxMHwxMTEgRFVDSyBTVF5eRk9XTF5DQV45OTk5OTAwMDB8fHx8fHx8fHx8fHx8fHx8fDA1NjI2OTc3MHx8fHx8fFBUfE18MTExXkRVQ0sgU1ReXkZPV0xeQ0FeOTk5OTkwMDAwfHx8fHw4MjkxCklOMnwyfHwxMjMxMjEyMzR8Q2FydG9vbiBEdWNrcyBJbmN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHw4ODg1NTUxMjEyCklOMXwzfFNFTEYgUEFZfDF8U0VMRiBQQVl8fHx8fHx8fHx8fDV8fDE="
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
                "transportName": "TCP Listener",
                "mode": "SOURCE",
                "enabled": true,
                "waitForPrevious": true
            },
            "destinationConnectors": {
                "connector": [
                    {
                        "@version": "4.3.0",
                        "metaDataId": 6,
                        "name": "Fetch Client ID",
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
                            "script": "var dbConn;\n\ntry {\n\tdbConn = DatabaseConnectionFactory.createDatabaseConnection('com.mysql.cj.jdbc.Driver','jdbc:mysql://mysql-db:3306/abi-metadata','admin','admin');\n\n\tvar result = dbConn.executeCachedQuery(\"SELECT clients.client_id AS client_id FROM clients WHERE name = '\" + $('client_name') + \"'\");\n\tvar metaData = result.getMetaData()\n\tlogger.info(\"READ FROM DATABASE\")\n\n\t\n\tvar client_id\n\tif (result.next()) {client_id = result.getString(1)}\n\n\tif (!client_id) {\n    // Return an error response\n    responseMap.put('error', 'client not registered');\n    responseMap.put('success', false);\n  } else {\n    logger.info(client_id);\n    // Store the client_id in the channel map\n    channelMap.put('client_id', client_id);\n    responseMap.put('success', true)\n  }\n\n} finally {\n\tif (dbConn) { \n\t\tdbConn.close();\n\t}\n}"
                        },
                        "transformer": {
                            "@version": "4.3.0",
                            "elements": {
                                "com.mirth.connect.plugins.mapper.MapperStep": [
                                    {
                                        "@version": "4.3.0",
                                        "name": "client_name",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "variable": "client_name",
                                        "mapping": "msg['MSH']['MSH.4']['MSH.4.1'].toString().trim()",
                                        "defaultValue": null,
                                        "replacements": null,
                                        "scope": "CHANNEL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "client_id",
                                        "sequenceNumber": 1,
                                        "enabled": true,
                                        "variable": "client_id",
                                        "mapping": null,
                                        "defaultValue": 0,
                                        "replacements": null,
                                        "scope": "CHANNEL"
                                    }
                                ]
                            },
                            "inboundTemplate": {
                                "@encoding": "base64",
                                "$": "TVNIfF5+XCZ8U2VuZGluZ0FwcHxTZW5kaW5nRmFjaWxpdHl8UmVjZWl2aW5nQXBwfFJlY2VpdmluZ0ZhY2lsaXR5fDIwMjMwNDA4MDkwMDAwfHxBRFReQTA0fE1TRzAwMDAzfFB8Mi4zfApFVk58QTA0fDIwMjMwNDA4MDkwMDAwfHx8ClBJRHx8fDI0NjgxMDFeXl5TZW5kaW5nRmFjaWxpdHl8fEdhcmNpYV5Tb2ZpYXx8MTk5NjAxMzB8Rnx8fDc4OSBFbG0gU3ReXkFueXRvd25eVFheMTIzNDVeVVNBfGNvbmNlbGhvXzN8KDExMSk1NTUtMjQ2OHx8fHx8fHx8fHx8fHx8fHx8ClBWMXx8SXxvbGFeXl5TZW5kaW5nRmFjaWxpdHl8fHwzfHx8RXx8MjAyMzA0MDgwODMwMDB8fHx8fHx8fHxjbGFzc2VfM3x8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fDIwMjMyMzAzXjEyMzB8fHx8fHx8fApERzF8MXx8SUNELTEwLUNNfE0yNS41MTFeUGFpbiBpbiByaWdodCBzaG91bGRlcl5NfHx8fHx8fHx8fHx8fHx8Ck9CWHx8fFExfHxXaGF0IGJyaW5ncyB5b3UgaW4gdG9kYXk/fHx8fApPQlh8MXxDRXxWaWFWZXJkZUNvZGVeVmlhIFZlcmRlIENvZGVeTE58fDEzNTdeVmlhIFZlcmRlIENvZGUgMTM1N15ITDcwMzk2fA=="
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
                            "elements": {
                                "com.mirth.connect.plugins.mapper.MapperStep": {
                                    "@version": "4.3.0",
                                    "name": "success",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "variable": "success",
                                    "mapping": null,
                                    "defaultValue": true,
                                    "replacements": null,
                                    "scope": "RESPONSE"
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
                        "metaDataId": 5,
                        "name": "Propagate Request to Database",
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
                            "query": "var dbConn;\n\nconst new_request = [\n\t$('cod_perg'),\n\t$('cod_causa'),\n\t$('data_admissao'),\n\t$('hora_admissao'),\n\t$('cod_prov'),\n\t$('cod_prioridade'),\n\t$('idade'),\n\t$('cod_via_verde'),\n\t$('sexo'),\n\t$('cod_concelho'),\n\t$('afluencia')\n]\n\ntry {\n\tdbConn = DatabaseConnectionFactory.createDatabaseConnection('com.mysql.cj.jdbc.Driver','jdbc:mysql://mysql-container:3306/abi-metadata','admin','admin');\n\t\n\tconst insert_result = dbConn.executeUpdateAndGetGeneratedKeys(\"INSERT INTO model_1_data (cod_perg, cod_causa, data_admissao, hora_admissao, cod_prov, cod_prioridade, idade, cod_via_verde, sexo, cod_concelho, afluencia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)\",new_request);\n\n\tvar request_id\n\tif (insert_result.next()) {request_id = insert_result.getString(1)}\n\tinsert_result.close()\n\n\t\n\tconst client_request = dbConn.executeUpdateAndGetGeneratedKeys(\"INSERT INTO client_requests (model_data_id, answered, answer, request_type, client_id) VALUES (?, ?, ?, ?, ?)\", [request_id, 0, 'none', 'model_1_data', $('client_id')]);\n\n\tchannelMap.put('generated_request_mysql_id', request_id)\n\t\n\n} finally {\n\tif (dbConn) { \n\t\tdbConn.close();\n\t}\n}",
                            "useScript": true
                        },
                        "transformer": {
                            "@version": "4.3.0",
                            "elements": {
                                "com.mirth.connect.plugins.mapper.MapperStep": [
                                    {
                                        "@version": "4.3.0",
                                        "name": "cod_perg",
                                        "sequenceNumber": 0,
                                        "enabled": true,
                                        "variable": "cod_perg",
                                        "mapping": "msg['OBX'][0]['OBX.5']['OBX.5.1'].toString().trim()",
                                        "defaultValue": null,
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "cod_causa",
                                        "sequenceNumber": 1,
                                        "enabled": true,
                                        "variable": "cod_causa",
                                        "mapping": "msg['DG1']['DG1.3']['DG1.3.1'].toString().trim()",
                                        "defaultValue": null,
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "hora_admissao",
                                        "sequenceNumber": 2,
                                        "enabled": true,
                                        "variable": "hora_admissao",
                                        "mapping": "msg['PV1']['PV1.44']['PV1.44.2'].toString().trim()",
                                        "defaultValue": null,
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "data_admissao",
                                        "sequenceNumber": 3,
                                        "enabled": true,
                                        "variable": "data_admissao",
                                        "mapping": "msg['PV1']['PV1.44']['PV1.44.1'].toString().trim()",
                                        "defaultValue": null,
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "cod_proveniencia",
                                        "sequenceNumber": 4,
                                        "enabled": true,
                                        "variable": "cod_proveniencia",
                                        "mapping": "msg['PV1']['PV1.3']['PV1.3.1'].toString().trim()",
                                        "defaultValue": null,
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "cod_prioridade",
                                        "sequenceNumber": 5,
                                        "enabled": true,
                                        "variable": "cod_prioridade",
                                        "mapping": "msg['PV1']['PV1.2']['PV1.2.1'].toString().trim()",
                                        "defaultValue": null,
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "idade",
                                        "sequenceNumber": 6,
                                        "enabled": true,
                                        "variable": "idade",
                                        "mapping": "msg['PID']['PID.7']['PID.7.1'].toString().trim()",
                                        "defaultValue": null,
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "cod_via_verde",
                                        "sequenceNumber": 7,
                                        "enabled": true,
                                        "variable": "cod_via_verde",
                                        "mapping": "msg['OBX'][1]['OBX.5']['OBX.5.1'].toString().trim()",
                                        "defaultValue": null,
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "sexo",
                                        "sequenceNumber": 8,
                                        "enabled": true,
                                        "variable": "sexo",
                                        "mapping": "msg['PID']['PID.8']['PID.8.1'].toString().trim()",
                                        "defaultValue": null,
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "cod_concelho",
                                        "sequenceNumber": 9,
                                        "enabled": true,
                                        "variable": "cod_concelho",
                                        "mapping": "msg['PID']['PID.12']['PID.12.1'].toString().trim()",
                                        "defaultValue": null,
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "afluencia",
                                        "sequenceNumber": 10,
                                        "enabled": true,
                                        "variable": "afluencia",
                                        "mapping": "msg['PV1']['PV1.20']['PV1.20.1'].toString().trim()",
                                        "defaultValue": null,
                                        "replacements": null,
                                        "scope": "GLOBAL"
                                    },
                                    {
                                        "@version": "4.3.0",
                                        "name": "generated_request_mysql_id",
                                        "sequenceNumber": 11,
                                        "enabled": true,
                                        "variable": "generated_request_mysql_id",
                                        "mapping": null,
                                        "defaultValue": 0,
                                        "replacements": null,
                                        "scope": "CHANNEL"
                                    }
                                ]
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
                            "elements": {
                                "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": {
                                    "@version": "4.3.0",
                                    "name": "Accept message if \"$('success')\" does not equal false",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "field": "$('success')",
                                    "condition": "NOT_EQUAL",
                                    "values": {
                                        "string": false
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
                        "metaDataId": 2,
                        "name": "Send Request to MQ Microservice",
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
                            "content": "{\n\"cod_perg\": \"${cod_perg}\",\n\"cod_causa\": \"${cod_causa}\",\n\"data_admissao\": \"${data_admissao}\",\n\"hora_admissao\": \"${hora_admissao}\",\n\"cod_prov\": \"${cod_prov}\",\n\"cod_prioridade\": \"${cod_prioridade}\",\n\"idade\": \"${idade}\",\n\"cod_via_verde\": \"${cod_via_verde}\",\n\"sexo\": \"${sexo}\",\n\"cod_concelho\": \"${cod_concelho}\",\n\"afluencia\": \"${afluencia}\",\n\"req_id\": \"${generated_request_mysql_id}\"\n}",
                            "contentType": "application/json",
                            "dataTypeBinary": false,
                            "charset": "UTF-8",
                            "socketTimeout": 30000
                        },
                        "transformer": {
                            "@version": "4.3.0",
                            "elements": null,
                            "inboundTemplate": {
                                "@encoding": "base64",
                                "$": "TVNIfF5+XCZ8U2VuZGluZ0FwcHxTZW5kaW5nRmFjaWxpdHl8UmVjZWl2aW5nQXBwfFJlY2VpdmluZ0ZhY2lsaXR5fDIwMjIwMzI5MTIwMDAwfHxBRFReQTA0fE1TRzAwMDAxfFB8Mi4zfApFVk58QTA0fDIwMjIwMzI5MTIwMDAwfHx8ClBJRHx8fDEyMzQ1NjdeXl5TZW5kaW5nRmFjaWxpdHl8fERvZV5Kb2hufHwxOTc4MTIxNXxNfHx8MTIzIE1haW4gU3ReXkFueXRvd25eVFheMTIzNDVeVVNBfGNvbmNlbGhvXzF8KDExMSk1NTUtMTIzNHx8fHx8fHx8fHx8fHx8fHx8ClBWMXx8SXxvbGFeXl5TZW5kaW5nRmFjaWxpdHl8fHwzfHx8RXx8MjAyMjAzMjkxMDMwMDB8fHx8fHx8fHxjbGFzc2VfMXx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fDIwMjMyMzAzXjEyMzB8fHx8fHx8fApERzF8MXx8SUNELTEwLUNNfFM3Mi4wWFhBXkZyYWN0dXJlIG9mIG5lY2sgb2YgcmlnaHQgZmVtdXIsIGluaXRpYWwgZW5jb3VudGVyIGZvciBjbG9zZWQgZnJhY3R1cmVeTXx8fHx8fHx8fHx8fHx8fApPQlh8fHxRMXx8V2hhdCBpcyB5b3VyIG1haW4gcmVhc29uIGZvciBzZWVraW5nIGNhcmUgdG9kYXk/fHx8fApPQlh8MXxDRXxWaWFWZXJkZUNvZGVeVmlhIFZlcmRlIENvZGVeTE58fDEyMzReVmlhIFZlcmRlIENvZGUgMTIzNF5ITDcwMzk2fA=="
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
                            "elements": {
                                "com.mirth.connect.plugins.rulebuilder.RuleBuilderRule": {
                                    "@version": "4.3.0",
                                    "name": "Accept message if \"$('success')\" does not equal false",
                                    "sequenceNumber": 0,
                                    "enabled": true,
                                    "field": "$('success')",
                                    "condition": "NOT_EQUAL",
                                    "values": {
                                        "string": false
                                    }
                                }
                            }
                        },
                        "transportName": "HTTP Sender",
                        "mode": "DESTINATION",
                        "enabled": true,
                        "waitForPrevious": true
                    }
                ]
            },
            "preprocessingScript": "// Modify the message variable below to pre process data\nreturn message;",
            "postprocessingScript": "// This script executes once after a message has been processed\n// Responses returned from here will be stored as \"Postprocessor\" in the response map\nreturn;",
            "deployScript": "// This script executes once when the channel is deployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;",
            "undeployScript": "// This script executes once when the channel is undeployed\n// You only have access to the globalMap and globalChannelMap here to persist data\nreturn;",
            "properties": {
                "@version": "4.3.0",
                "clearGlobalChannelMap": true,
                "messageStorageMode": "PRODUCTION",
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
                        "time": 1681060439186,
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

    });

    return channel_data
}

module.exports = {
    generateChannel: generateChannel
}