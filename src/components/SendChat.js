import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  chatBox: {
    width: '85%'
  },
  button: {
    width: '15%'
  }
}));

const SendChat = ({ sendChatAction, user, activeTopic }) => {
  const classes = useStyles();
  const [textValue, changeTextValue] = useState('');
  const sendChat = () => {
    sendChatAction({
      from: user,
      msg: textValue,
      topic: activeTopic
    });
    changeTextValue('');
  };
  return (
    <div className={classes.flex}>
      <TextField
        label="Send a chat"
        className={classes.chatBox}
        value={textValue}
        onChange={e => changeTextValue(e.target.value)}
        onKeyPress={e => {
          if (e.key === 'Enter') sendChat();
        }}
      />
      <Button
        onClick={() => sendChat()}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Send
      </Button>
    </div>
  );
};

export default SendChat;
