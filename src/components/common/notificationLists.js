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
        padding: "20px",
        marginBottom: "20px"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function (props) {
    // Declare a new state variable, which we'll call "count"
    const classes = useStyles();

    let updates = props.updates || [];

    return (
        <div className={classes.root}>
            <div>
            <Typography component="div" variant="body1" color="textSecondary" paragraph>
                <b>{props.title?props.title:"RECENT UPDATES"}</b>
                <div style={{float:"right", display:!props.viewAllTop?"none":"block"}}><Button style={{color:"gray"}}>VIEW ALL</Button></div>            
                <div style={{"clear":"both"}}></div>
            </Typography>
            
            {
                updates.map(x=>{
                    return (<Paper className={classes.grow} style={{borderLeftStyle:"solid", borderLeftColor:"orange", borderLeftWidth:"6px"}}>
                    <Typography variant="subtitle" component="h5" color={props.nohighlight?"textPrimary":"error"} paragraph={x.info?false:true}>
                    {x.name}
                    </Typography>
                    <Typography style={{float:"left"}} component="div" variant="subtitle1" color="textPrimary">
                    {x.action}
                    </Typography>
                    <Typography style={{display:x.amount?"inline":"none", float:"right"}} component="div" variant="subtitle2" color="textPrimary">
                    {x.amount}
                    </Typography>
                    <div style={{"clear":"both"}}></div>
                    <Typography component="div" variant="subtitle2" color="textSecondary" hidden={!x.info}>
                    {x.info}
                    </Typography>
                    <Typography component="div" variant="subtitle2" color="textSecondary">
                    {x.date}
                    </Typography>
                    
                </Paper>);
                })
            }
            <div style={{textAlign:"right", display:props.viewAllTop?"none":"block"}}><Button style={{color:"gray"}}>VIEW ALL</Button></div>
            </div>
        </div>
    );
}