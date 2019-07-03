import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        margin: '50px',
        padding: theme.spacing(3,2),

    },
    flex: {
        display: 'flex'
    },
    roomsWindow:{
        width: '30%',
        height: '300px'
    }
    ,
    chatWindow:{
        width: '70%',
        height: '300px'
    }
    ,
    chatBox:{
        width: '85%'
    },
    button: {
        width: '15%'
    }

}));

export default function Dashboard() {
    const classes = useStyles();
    return(
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h3">
                    Live chat app
                </Typography>
                <Typography component="h5">
                    Room placeholder
                </Typography>
                <div className={classes.flex}>

                </div>
                <div className={classes.flex}>

                </div>
            </Paper>
        </div>
    )
}
