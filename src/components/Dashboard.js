import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Channels from './Channels';
import ChatArea from './ChatArea';
import SendChat from './SendChat';
import Header from './Header';

import { useStore } from '../store';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '50px',
    padding: theme.spacing(3, 2),
    textAlign: 'center'
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  }
}));

const Dashboard = () => {
  const { chats, user, setUser, sendChatAction } = useStore();
  let topics = Object.keys(chats);
  // Slicing user
  const [activeTopic, changeActiveTopic] = useState(topics[0]);
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Header activeTopic={activeTopic} user={user} setUser={setUser} />
      <div className={classes.flex}>
        <Channels
          topics={topics}
          activeTopic={activeTopic}
          changeActiveTopic={changeActiveTopic}
        />
        <ChatArea chats={chats} activeTopic={activeTopic} />
      </div>
      <SendChat
        sendChatAction={sendChatAction}
        user={user}
        activeTopic={activeTopic}
      />
    </Paper>
  );
};

export default Dashboard;
