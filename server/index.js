import express from 'express';
import bodyParser from 'body-parser';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/containers/Home';
const app = express();
app.use('/', express.static('dist/client'));
app.use(bodyParser.json());
app.listen(3000, (req, res) => {
    console.log('app is listening on 3000');
});
app.get('/', (req, res) => {
    const homeCont = renderToString(<Home/>);
    res.send(`
        <!DOCTYPE HTML>
        <html>
            <head>
                <link rel="stylesheet" type="text/css" href="/client.css">
            </head>
            <body>
                <div id = "root_app">${homeCont}</div>
                <script src = "/client.js"></script>
            </body>
        </html>
    `);
});