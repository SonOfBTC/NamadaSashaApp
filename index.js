// index.js

const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const targetAddress = req.body.targetAddress;

    const command = `namadac transfer --source Yourwalletallias --target ${targetAddress} --token naan --amount 0.00001 --memo yourpublickey --node http://namadasasharpc.xyz/`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Hata oluştu: ${error.message}`);
            res.send(`Hata oluştu: ${error.message}`);
            return;
        }

        res.send(`Komut çıktısı: ${stdout}`);
    });
});

app.get('/getBondedStake', (req, res) => {
    const command = 'namadac bonded-stake';

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Hata oluştu: ${error.message}`);
            res.send(`Hata oluştu: ${error.message}`);
            return;
        }

        res.send(`Komut çıktısı: ${stdout}`);
    });
});

app.get('/findValidator', (req, res) => {
    const validatorAddress = req.query.validatorAddress;
    const command = `namadac find-validator --validator ${validatorAddress}`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Hata oluştu: ${error.message}`);
            res.send(`Hata oluştu: ${error.message}`);
            return;
        }

        res.send(`Komut çıktısı: ${stdout}`);
    });
});

app.get('/validatorState', (req, res) => {
    const validatorStateAddress = req.query.validatorAddress;
    const command = `namadac validator-state --validator ${validatorStateAddress}`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Hata oluştu: ${error.message}`);
            res.send(`Hata oluştu: ${error.message}`);
            return;
        }

        res.send(`Komut çıktısı: ${stdout}`);
    });
});

app.get('/balance', (req, res) => {
    const owner = req.query.owner;
    const command = `namadac balance --owner ${owner}`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Hata oluştu: ${error.message}`);
            res.send(`Hata oluştu: ${error.message}`);
            return;
        }

        res.send(`Komut çıktısı: ${stdout}`);
    });
});

// Yeni endpoint
app.get('/lastBlock', (req, res) => {
    const command = 'namadac block';

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Hata oluştu: ${error.message}`);
            res.send(`Hata oluştu: ${error.message}`);
            return;
        }

        res.send(`Komut çıktısı: ${stdout}`);
    });
});

app.listen(port, () => {
    console.log(`Server http://localhost:${port} adresinde çalışıyor`);
});
