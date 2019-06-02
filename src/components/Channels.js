import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  topicsWindow: {
    width: '30%',
    height: '300px',
    borderRight: '1px solid grey'
  }
}));

const Channels = ({ topics, activeTopic, changeActiveTopic }) => {
  const classes = useStyles();
  return (
    <div className={classes.topicsWindow}>
      <Typography variant="h5" component="h5">
        Channels
      </Typography>
      <List>
        {topics.map(topic => (
          <ListItem
            // Because topic is of form # topic
            onClick={e => changeActiveTopic(e.target.innerText.split(' ')[1])}
            key={topic}
            button
            selected={topic === activeTopic}
          >
            <ListItemText primary={`# ${topic}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Channels;
