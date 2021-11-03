/*
const usersOnline = {};

module.exports = (io) => io.on('connection', (socket) => {
    usersOnline[socket.id] = socket.id.slice(0, 16);
    
    socket.on('users', ({ nickname }) => {
        usersOnline[socket.id] = nickname;
        io.emit('listOfUsersOnline', Object.values(usersOnline));
    });

 //   io.emit('listOfUsersOnline', Object.values(usersOnline));

    socket.on('disconnect', () => {
        delete usersOnline[socket.id];
        io.emit('listOfUsersOnline', Object.values(usersOnline));
    });
});
*/