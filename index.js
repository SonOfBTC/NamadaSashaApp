// index.js

const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const targetAddress = req.body.targetAddress;

    const command = `namadac transfer --source YourWalletalias --target ${targetAddress} --token naan --amount 0.1 --memo YourPublicKey --node http://namadasasharpc.xyz/`;

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

app.get('/snake', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index2.html'));
});

app.post('/submit-score', (req, res) => {
    const wallet = req.body.wallet;
    const playerScore = req.body.playerScore;

    // Skor ve oyuncu bilgilerini kullanarak transfer işlemini gerçekleştir
    const command = `namadac transfer --amount ${playerScore} --source Yourwalletalias --target ${wallet} --token naan --memo YourPublicKey`;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Hata oluştu: ${error.message}`);
            res.json({ message: `Hata oluştu: ${error.message}` });
            return;
        }

        console.log(`Transfer işlemi başarıyla tamamlandı. Çıktı: ${stdout}`);
        
        // İşlem başarıyla tamamlandıysa, isteği yapan tarayıcıya başarı mesajını gönder
        res.json({ message: 'Transfer completed successfully' });
    });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server http://localhost:${port} adresinde çalışıyor`);
});
