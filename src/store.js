import React, { createContext, useState, useContext } from 'react';
import io from 'socket.io-client';

const ChatContext = createContext();

export const useStore = () => {
  return useContext(ChatContext);
};

let socket;

const sendChatAction = value => {
  socket.emit('chat message', value);
};

export const Store = ({ children }) => {
  const [chats, setChats] = useState({
    general: [],
    announcements: []
  });
  const [user, setUser] = useState('Guest');

  if (!socket) {
    if (process.env.NODE_ENV === 'production') {
      socket = io('/');
    } else {
      socket = io(':8000');
    }
    socket.on('chat message', ({ from, msg, topic }) => {
      setChats(chats => ({
        ...chats,
        [topic]: [...chats[topic], { from, msg }]
      }));
    });
  }
  return (
    <ChatContext.Provider value={{ chats, user, setUser, sendChatAction }}>
      {children}
    </ChatContext.Provider>
  );
};
