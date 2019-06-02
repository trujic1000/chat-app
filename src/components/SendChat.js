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
  return (
    <div className={classes.flex}>
      <TextField
        label="Send a message"
        className={classes.chatBox}
        value={textValue}
        onChange={e => changeTextValue(e.target.value)}
      />
      <Button
        onClick={() => {
          sendChatAction({
            from: user,
            msg: textValue,
            topic: activeTopic
          });
          changeTextValue('');
        }}
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
