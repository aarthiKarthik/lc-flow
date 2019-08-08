import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,   
        paddingTop: "20px"    
    },
    grow: {
        flexGrow: 1,
        padding: "24px",
        
    },
    flex: {
        flexGrow: 1,
        width:"100%"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function (props) {
    // Declare a new state variable, which we'll call "count"
    const classes = useStyles();

    const [selected, setSelected] = React.useState(null);

    let offers = props.offers || [];

    return (
        <div className={classes.root}>
            <div>
            <Typography component="p" variant="body1" color="textSecondary" paragraph>
                <b>PENDING PURCHASES - LETTER OF CREDIT STATUSES</b>
            </Typography>
            <Grid container spacing={2}>  
                {
                    offers.map(x=>{
                        return (<Grid item xs={6}>
                        <Paper onClick={e=>{setSelected(x); props.selectionChanged(x)}} className={classes.grow} style={{borderLeftStyle:"solid", borderLeftColor:x.highlight?"red":"rgba(240,153,37,0.4)", borderLeftWidth:"6px"}}>
                        
                        <Typography variant="body1" component="div" color="textPrimary">
                        <b>{x.title}</b>
                        {
                            selected && selected.title === x.title ? <Typography style={{float: "right", color:"green"}}>{x.status}</Typography> : null
                        }                                        
                        </Typography>
                        
                        <div style={{"clear":"both"}}></div>
                        </Paper>                                                
                        </Grid>)
                    })
                }         
            </Grid>
            </div>
        </div>
    );
}