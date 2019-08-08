import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import TableView from "./tableView";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: "20px"
    },
    paper: {
        marginTop: "20px",
        padding: "30px",
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
    let lcs = props.lcs || [];
    let margins = props.noHeader ?  {marginTop: "0px"} : {};

    return (
        <div className={classes.root} style={margins} hidden={props.properties && props.tabSelected !== 0}>            
            <Paper className={classes.paper} style={margins}>
                <div>
                    <Typography component="span" variant="body1" color="textSecondary" align="left">
                        <b>LETTER OF CREDIT</b>
                    </Typography>
                    <Typography component="span" variant="body1" color="textSecondary" align="left" paragraph style={{ "marginLeft": "12px", "color": "#289286" }}>
                        <b>ADVISED</b>
                    </Typography>
                    <TableView rows={lcs} details download onSelectionChanged={x=>window.location="/" + (props.location ? props.location : "advisingImporterLC") }/>
                </div>
            </Paper>
        </div>
    );
}