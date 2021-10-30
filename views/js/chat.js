  const socket = window.io();
  let nickname = ''; 

  // Requisito 1
        
  const form = document.querySelector('form');
  const inputMessage = document.querySelector('#messageIn');
  const inputNickname = document.querySelector('#name');
  const btnNickname = document.querySelector('#btn-nickname');
        
  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const chatMessage = inputMessage.value;
      socket.emit('message', { nickname, chatMessage });
      inputMessage.value = '';
      return false;
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
    socket.emit('users', nameUser);
    inputNickname.value = '';
    nickname = nameUser;
    return false;
  });

  const createNickname = (nicknames) => {
    const userField = document.querySelector('#id-user');
    const userLi = document.createElement('li');
    userLi.innerText = nicknames;
    userLi.dataset.testid = 'online-user';
    userField.appendChild(userLi); 
  };
 
socket.on('message', (message) => createMessage(message));
socket.on('users', (user) => createNickname(user));