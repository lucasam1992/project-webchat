const express = require('express');
const cors = require('cors');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000',
    },
});

app.set('view engine', 'ejs');

app.set('views', './views');

const historyController = require('./controllers/historicController');

app.use(express.static(`${__dirname}/views`));

app.use(cors());

require('./sockets/chat')(io);

app.get('/', async (_req, res) => {
    const allDatas = await historyController.getAll();
 //   console.log(allDatas);
    res.status(200).render(`${__dirname}/views/index.ejs`, { allDatas });
});

http.listen(3000, () => {
    console.log('Conectado na porta 3000');
});