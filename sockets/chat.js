// Links que ajudaram a resolver a questão da data e hora
// https://www.devmedia.com.br/date-javascript-trabalhando-com-data-e-hora-em-js/37222
// https://blog.betrybe.com/javascript/javascript-date-format/#1

const historicController = require('../controllers/historicController');

const data = new Date();

const usersOnline = {};
const currentDate = `${data.getDate()}-${data.getMonth() + 1}-${data.getFullYear()}`;

const currentHour = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;

module.exports = (io) => io.on('connection', (socket) => {
  usersOnline[socket.id] = socket.id.slice(0, 16);
  io.emit('users', Object.values(usersOnline));
 //  io.emit('listOfUsersOnline', Object.values(usersOnline));

 // console.log(usersOnline);
  socket.on('users', (nickname) => {
    usersOnline[socket.id] = nickname;
    io.emit('listOfUsersOnline', Object.values(usersOnline));
  });

  socket.on('message', async ({ nickname, chatMessage }) => {
    const dataAux = `${currentDate} ${currentHour}`;
    const nicknameAux = `${!nickname ? socket.id.slice(0, 16) : nickname}`;
      io.emit('message', `${dataAux} - ${nicknameAux}: ${chatMessage}`); // joga a mensgaeem pro front  
      await historicController.increaseHistoric({ 
         timestamp: dataAux, nickname: nicknameAux, message: chatMessage,
      });       
  });

  socket.on('disconnect', () => {
    delete usersOnline[socket.id];
    io.emit('listOfUsersOnline', Object.values(usersOnline));
  });
});
