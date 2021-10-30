// Links que ajudaram a resolver a questão da data e hora
// https://www.devmedia.com.br/date-javascript-trabalhando-com-data-e-hora-em-js/37222
// https://blog.betrybe.com/javascript/javascript-date-format/#1

const data = new Date();
const currentDate = `${data.getDate()}-${data.getMonth() + 1}-${data.getFullYear()}`;

const currentHour = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`;

module.exports = (io) => io.on('connection', (socket) => {
 //   socket.broadcast.emit('users', `Usuario ${socket.id} acabou de entrar`);

    io.emit('users', `${socket.id.slice(0, 16)}`);

    socket.on('message', ({ nickname, chatMessage }) => {
        console.log(`${currentDate} ${currentHour} ${!nickname 
            ? socket.id.slice(0, 16) : nickname}: ${chatMessage}`);
        io.emit('message', `${currentDate} ${currentHour} - ${!nickname 
            ? socket.id.slice(0, 16) : nickname}: ${chatMessage}`); // joga a mensgaeem pro front        
    });
});