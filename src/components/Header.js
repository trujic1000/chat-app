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
  alignLeft: {
    textAlign: 'left',
    padding: '1.5rem',
    width: '50%',
    display: 'flex',
    alignItems: 'center'
  }
}));

const Header = ({ activeTopic, user, setUser }) => {
  const classes = useStyles();
  const [tempUser, setTempUser] = useState('');
  return (
    <div className={classes.flex}>
      <div className={classes.alignLeft}>
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
      <div>
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
