import React, { createContext, useReducer, useContext } from 'react';
import io from 'socket.io-client';

const ChatContext = createContext();

export const useStore = () => {
  return useContext(ChatContext);
};

const initialState = {
  general: [
    { from: 'John', msg: 'Hello' },
    { from: 'Jane', msg: 'Hello' },
    { from: 'Jenny', msg: 'Hello' }
  ],
  topic: [
    { from: 'Mark', msg: 'Hello' },
    { from: 'Max', msg: 'Hello' },
    { from: 'Aaron', msg: 'Hello' }
  ]
};

const reducer = (state, action) => {
  const {
    type,
    payload: { from, msg, topic }
  } = action;
  switch (type) {
    case 'RECEIVE_MESSAGE':
      return {
        ...state,
        [topic]: [...state[topic], { from, msg }]
      };
    default:
      return state;
  }
};

let socket;

const sendChatAction = value => {
  socket.emit('chat message', value);
};

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  if (!socket) {
    socket = io(':8000');
    socket.on('chat message', msg => {
      dispatch({
        type: 'RECEIVE_MESSAGE',
        payload: msg
      });
    });
  }
  const user = 'John' + Math.random(100).toFixed(2);
  return (
    <ChatContext.Provider value={{ state, sendChatAction, user }}>
      {children}
    </ChatContext.Provider>
  );
};
