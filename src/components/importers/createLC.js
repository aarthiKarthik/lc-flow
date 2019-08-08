import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, TextField, Fab } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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


const renderer = (x, y) => {
    console.log(x, y)
    if (y === "section") {
        return (<Typography component="p" variant="body1" color="textSecondary" paragraph style={{ backgroundColor: "#F6E4CD", padding: "18px" }}>
            <b>{x[y]}</b>
        </Typography>);
    }

    return (<div style={{ paddingLeft: "18px", paddingRight: "18px", marginBottom: "12px" }}><TextField
        id="filled-full-width"
        label={y}
        value={x[y]}
        fullWidth
        margin="dense"
        InputLabelProps={{
            shrink: true,
        }}
    /></div>);
};

export default function (props) {
    // Declare a new state variable, which we'll call "count"
    const classes = useStyles();

    let letterOfCredit = props.letterOfCredit || []

    return (
        <div className={classes.root}>
            <div>
                <Typography component="p" variant="body1" color="textSecondary" paragraph>
                    <b>REQUEST FOR LETTER OF CREDIT</b>
                </Typography>

                <Grid container className={classes.root} spacing={10}>
                    <Grid item xs={6}>
                        <Paper style={{ paddingBottom: "18px" }}>
                            {
                                letterOfCredit.slice(0, 3).map(x => {
                                    return Object.keys(x).map(renderer.bind(null, x))
                                })
                            }
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper style={{ paddingBottom: "18px" }}>
                            {
                                letterOfCredit.slice(3, letterOfCredit.length).map(x => {
                                    return Object.keys(x).map(renderer.bind(null, x))
                                })
                            }
                            <div style={{ marginTop: "80px", paddingLeft: "18px", paddingRight: "18px" }}>
                                <b>Upload PO</b>
                                <Fab
                                    variant="extended"
                                    size="small"
                                    color="primary"
                                    aria-label="Add"
                                    className={classes.margin}
                                    style={{float:"right", backgroundColor:"#F9A330"}}
                                >
                                    <CloudUploadIcon className={classes.extendedIcon} style={{paddingRight:"8px"}}/>
                                    Upload
                                </Fab>
                                <div style={{"clear":"both"}}></div>

                                <br />
                                <b>Upload Invoice:</b>
                                <Fab
                                    variant="extended"
                                    size="small"
                                    color="primary"
                                    aria-label="Add"
                                    className={classes.margin}
                                    style={{float:"right", backgroundColor:"#F9A330"}}
                                >
                                    <CloudUploadIcon className={classes.extendedIcon} style={{paddingRight:"8px"}}/>
                                    Upload
                                </Fab>
                                <div style={{"clear":"both"}}></div>


                            </div>
                        </Paper>
                        <div style={{ marginTop: "30px", textAlign: "center" }}>
                            <Button variant="contained" color="secondary" className={classes.button} style={{ marginRight: "20px" }}>REQUEST LC</Button>
                            <Button variant="contained" color="secondary" className={classes.button} onClick={x=>window.location="/importersViewLC"}>VIEW LC STATUS</Button>
                        </div>
                    </Grid>
                </Grid>

            </div>
        </div>
    );
}