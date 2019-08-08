import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Divider } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import LCView from "../common/lcFlow";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: "20px"
    },
    paper: {
        marginTop: "20px",
        padding: "30px",    },
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
let lcSteps = [{name:'LETTERS OF CREDIT IN DRAFT', total:3}, {name:"PENDING MANAGER'S APPROVAL", total:1}, {name:"PENDING BANK'S ISSUANCE", total:3}, {name:"ISSUED BY IMPORTER'S BANK", total:1}, {name:"CONFIRMED BY EXPORTER'S BANK", total:2}];
let docSteps = [{name:"DOCUMENTS RECEIVED BY EXPORTER'S BANK", total:3}, {name:"DOCUMENTS PENDING IMPORTER'S BANK REVIEW", total:1}, {name:"DOCUMENTS ACCEPTED BY IMPORTER'S BANK", total:2}, {name:"DISCPREPANT DOCUMENTS PENDING ACCEPTANCE", total:1}, {name:"DOCUMENTS DISPATCHED", total:2}];

export default function (props) {
    // Declare a new state variable, which we'll call "count"
    const classes = useStyles();

    // selected Pending Request
    // view!
    
    let steps = props.steps || lcSteps;

    return (
        <div className={classes.root}>
            <Typography component="p" variant="body1" color="textSecondary" align="left" paragraph>
                    <b>{props.title ? props.title : "STATUS UPDATES"}</b>
            </Typography>

            <Paper className={classes.paper}>                
                <Typography hidden={props.advising} component="p" variant="body1" color="textSecondary" align="left" >
                    <b>LETTER OF CREDIT ISSUANCE</b>
                </Typography>                
                <LCView steps={steps} numerical/>
                <Divider hidden={props.advising} style={{marginTop:"32px", marginBottom:"32px"}}/>
                <Typography hidden={props.advising} component="p" variant="body1" color="textSecondary" align="left" >
                    <b>DOCUMENTS RECEIVED UNDER LETTER OF CREDIT</b>
                </Typography>
                <LCView hidden={props.advising} steps={docSteps} numerical/>

            </Paper>
        </div>
    );
}