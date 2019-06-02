import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  alignLeft: {
    textAlign: 'left',
    width: '50%'
  }
}));

const Header = ({ activeTopic }) => {
  const classes = useStyles();
  return (
    <div className={classes.flex}>
      <div className={classes.alignLeft}>
        <Typography variant="h5" component="h5">
          User
        </Typography>
      </div>
      <div>
        <Typography variant="h4" component="h4">
          Chat app
        </Typography>
        <Typography variant="h5" component="h5">
          {activeTopic}
        </Typography>
      </div>
    </div>
  );
};

export default Header;
