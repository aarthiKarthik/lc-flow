import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,   
        paddingTop: "20px"    
    },
    grow: {
        flexGrow: 1,
        padding: "24px",
        marginBottom: "20px"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function (props) {
    // Declare a new state variable, which we'll call "count"
    const classes = useStyles();

    let offers = props.offers || [];

    return (
        <div className={classes.root}>
            <div>
            <Typography component="p" variant="body1" color="textSecondary" paragraph>
                <b>{props.title?props.title:"POTENTIAL OFFERS"}</b>
            </Typography>

            {
                offers.map(x=>{
                    return (<Paper className={classes.grow} style={{borderLeftStyle:"solid", borderLeftColor:"orange", borderLeftWidth:"6px"}}>
                    <Typography variant="body1" component="div" color="textPrimary">
                    <b>{x}</b>                
                    <Button variant="outlined" color="secondary" style={{float:"right"}}>{props.buttonText?props.buttonText : "Track Progress"}</Button>
                    <div style={{"clear":"both"}}></div>
                    </Typography>
                </Paper>)
                })
            }

            <div style={{textAlign:"right"}}><Button style={{color:"gray"}}>VIEW ALL</Button></div>
            </div>
        </div>
    );
}