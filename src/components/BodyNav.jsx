
import React from 'react';
import 'antd/dist/antd.css';
import {
    Link
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function BodyNav() {
  const classes = useStyles();

  return (
    (
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
            <Link to="/bowl">
                <img src='/assets/niveBlog1.png' alt='test' style={{ margin: 'auto', height: '25vw'}} />

            </Link>
            </Grid>
            <Grid item xs={3}>
            <Link to="/skillet">
                <img src='/assets/niveBlog2.png' alt='test' style={{ margin: 'auto', height: '25vw'}} />
            </Link>
            </Grid>
            <Grid item xs={3}>
            <Link to="/pan">
                <img src='/assets/niveBlog3.png' alt='test' style={{ margin: 'auto', height: '25vw'}} />

            </Link>
            </Grid>
            <Grid item xs={3}>
            <Link to="/spring">
                <img src='/assets/niveBlog4.png' alt='test' style={{ margin: 'auto', height: '25vw'}} />

            </Link>
            </Grid>
          </Grid>
        </div>
      )
  );
}

