  const socket = window.io();
  let nickname = ''; 

  // Requisito 1
        
  const form = document.querySelector('form');
  const inputMessage = document.querySelector('#messageIn');
  const inputNickname = document.querySelector('#name');
  const btnNickname = document.querySelector('#btn-nickname');
  const userField = document.querySelector('#id-user');
        
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const chatMessage = inputMessage.value;
      socket.emit('message', { nickname, chatMessage });
      inputMessage.value = '';
  });
        
  const createMessage = (message) => {
      const messagesUl = document.querySelector('#message');
      const li = document.createElement('li');
      li.dataset.testid = 'message';
      li.innerText = message;
      messagesUl.appendChild(li);
  };

  // Requisito 2
          
  btnNickname.addEventListener('click', () => {
    const nameUser = inputNickname.value;
    nickname = nameUser;
    socket.emit('users', nameUser);
    inputNickname.value = '';
  });

  const createNickname = (nicknames) => {
    const userLi = document.createElement('li');
    userLi.innerText = nicknames;
    userLi.dataset.testid = 'online-user';
    userField.appendChild(userLi); 
  };

  const listOnlineUsers = (onlineUsers) => {
    userField.innerHTML = '';
    
    if (!nickname) { 
      nickname = onlineUsers[onlineUsers.length - 1];
    }
    createNickname(nickname);
    const userOutOfRange = onlineUsers.filter((onlineUser) => onlineUser !== nickname);
    userOutOfRange.forEach((element) => {
      createNickname(element);
    });
  };

/*
  window.onbeforeunload = () => {
    socket.disconnect();
  };
*/

socket.on('message', (message) => createMessage(message));
socket.on('users', (user) => listOnlineUsers(user));
socket.on('listOfUsersOnline', (onlineUsers) => listOnlineUsers(onlineUsers));
