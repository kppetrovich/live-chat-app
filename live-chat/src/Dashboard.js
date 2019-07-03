import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {CTX} from "./Store";

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
        height: '300px',
        borderRight: '1px solid grey'
    }
    ,
    chatWindow:{
        width: '70%',
        height: '300px',
        padding: '20px'
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

    const [allChats] = React.useContext(CTX);
    const classes = useStyles();
    const [textValue, changeTextValue] = React.useState('');

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
                    <div className={classes.roomsWindow}>
                        <List>
                            {
                                ['room'].map(rooms => (
                                    <ListItem key={rooms} button>
                                        <ListItemText primary={rooms} />
                                    </ListItem>
                                ))
                            }
                        </List>
                    </div>

                    <div className={classes.chatWindow}>
                            {
                                [{from: 'user', msg: 'hello'}].map((chat, i) => (
                                   <div className={classes.flex} key={i}>
                                       <Chip label={chat.from} className={classes.chip} />
                                       <Typography>
                                           {chat.msg}
                                       </Typography>
                                   </div>
                                ))
                            }
                    </div>
                </div>
                <div className={classes.flex}>
                    <TextField
                        label="Send a message"
                        className={classes.chatBox}
                        value={textValue}
                        onChange={e => changeTextValue(e.target.value)}
                    />
                    <Button variant="contained" color="primary" className={classes.button}>
                        SEND
                    </Button>

                </div>
            </Paper>
        </div>

    )
}
