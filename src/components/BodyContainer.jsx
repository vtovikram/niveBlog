import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AboutMe from './AboutMe';
import RecipeReviewCard from './RecipeReviewCard';

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

export default function AutoGrid() {
    const classes = useStyles();

    return (
        (
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Paper className={classes.paper}>
                            <RecipeReviewCard />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper className={classes.paper}>
                            <AboutMe />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    );
}