import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  chatWindow: {
    width: '70%',
    height: '300px',
    padding: '20px'
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

const ChatArea = ({ state, activeTopic }) => {
  const classes = useStyles();
  return (
    <div className={classes.chatWindow}>
      {state[activeTopic].map((chat, i) => (
        <div key={i} className={classes.flex}>
          <Chip label={chat.from} className={classes.chip} />
          <Typography varient="body1" gutterBottom className={classes.chip}>
            {chat.msg}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default ChatArea;
