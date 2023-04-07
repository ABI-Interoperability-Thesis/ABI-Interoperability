const axios = require('axios')
const express = require('express')
const app = express()
const https = require('https')
const { generateChannel } = require('./utils')

//disable ssl
const agent = new https.Agent({
    rejectUnauthorized: false,
})

app.use(express.json())

app.get('/', (req, res) => {
    const url = "https://mirth-connect:8443/api/users";
    const username = "admin";
    const password = "123";

    const b64_creds = Buffer.from(`${username}:${password}`).toString('base64')

    const headers = {
        'X-Requested-With': 'OpenAPI',
        'Accept': 'application/json',
        "Authorization": "Basic " + b64_creds
    };

    const config = {
        method: 'get',
        url: url,
        headers: headers,
        httpsAgent: agent
    }

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            return res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
})

app.post('/channel', (req, res) => {
    const {channel_name, channel_port} = req.body
    const url = "https://mirth-connect:8443/api/channels";
    const username = "admin";
    const password = "123";
    const b64_creds = Buffer.from(`${username}:${password}`).toString('base64')

    const headers = {
        'X-Requested-With': 'OpenAPI',
        'Accept': 'application/json',
        "Authorization": "Basic " + b64_creds,
        'Content-Type': 'application/json'
    };

    const data = generateChannel(channel_name, channel_port)

    const config = {
        method: 'post',
        url: url,
        headers: headers,
        httpsAgent: agent,
        data:data
    }

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
            return res.send(response.data)
        })
        .catch(function (error) {
            console.log(error);
            return res.send(error)
        });

})
app.listen(3000, ()=>{
    console.log('-- Mirth Connect API Webservice --')
    console.log('App listening on port 3000')
})