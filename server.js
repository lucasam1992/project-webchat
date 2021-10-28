// Faça seu código aqui
const express = require('express');
const cors = require('cors');

const app = express();
const http = require('http').createServer(app);

app.set('view engine', 'ejs');
app.set('views', './views');

// Recaptulando a ideia do cors: - Libera a permissão do back end para o front end
const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000',
    },
});

const chatControlers = require('./controllers/chatController');

app.use(cors());

require('./sockets/chat')(io);

app.get('/', chatControlers.initialPageChat);

http.listen(3000, () => {
    console.log('Conectado na porta 3000');
});