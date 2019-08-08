import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, TextField, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: "20px"
    },
    paper: {
        marginTop: "60px",
        padding: "30px"
    },
    grow: {
        flexGrow: 1,
        padding: "24px",
        marginBottom: "20px"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light
    },
    titleBar: {
    },
    block: {
        borderTopStyle: "solid",
        borderTopWidth: "5px"
    }
}));

export default function (props) {
    // Declare a new state variable, which we'll call "count"
    const classes = useStyles();

    let inv = props.invoices || null;

    return (
        <div className={classes.root}>
            <div>
                <Typography component="p" variant="body1" color="textSecondary" paragraph>
                    <b>INVOICE</b>
                </Typography>

                {                    
                    inv && inv.map(x=>{
                        return (<div>
                            <Paper style={{padding:"30px"}}>
                        {
                            Object.keys(x).map(y=>{
                                return (<TextField
                                    id="filled-full-width"
                                    label={y}
                                    value={x[y]}
                                    disabled
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />);
                            })
                        }
                        </Paper>
                        <Divider style={{marginTop:"20px", marginBottom:"20px"}}/>
                        </div>
                        );
                    })
                }
                 
            </div>
        </div>
    );
}