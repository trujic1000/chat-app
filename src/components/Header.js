import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  button: {
    marginTop: theme.spacing(1)
  },
  userName: {
    textAlign: 'left',
    padding: '1.5rem',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'start'
    }
  },
  channel: {
    textAlign: 'center',
    flex: 2,
    [theme.breakpoints.down('sm')]: {
      flex: 3
    }
  }
}));

const Header = ({ activeTopic, user, setUser }) => {
  const classes = useStyles();
  const [tempUser, setTempUser] = useState('');
  return (
    <div className={classes.flex}>
      <div className={classes.userName}>
        {user === 'Guest' ? (
          <>
            <TextField
              label="Choose a name"
              value={tempUser}
              onChange={e => setTempUser(e.target.value)}
            />
            <Button
              onClick={() => {
                setUser(tempUser);
              }}
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </>
        ) : (
          <Typography variant="h5" component="h5">
            Name: {user}
          </Typography>
        )}
      </div>
      <div className={classes.channel}>
        <Typography variant="h4" component="h4">
          Current channel
        </Typography>
        <Typography variant="h5" component="h5">
          {activeTopic}
        </Typography>
      </div>
    </div>
  );
};

export default Header;
