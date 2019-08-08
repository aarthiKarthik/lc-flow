import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import LCView from "../common/lcFlow";
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

let lcSteps = [{
    name: "DOCUMENTS RECEIVED BY EXPORTER'S BANK", total: 3, docs: [
        { "BENEFICIARY NAME": "Murphy LLC", "LETTER OF CREDIT": "891-2391-184", "SUBMITTED": "18/04/19", "DISCREPANCY": "Different port of shipment, Difference in goods description", "AMOUNT": "$80,000" },
        { "BENEFICIARY NAME": "Seasons LLC", "LETTER OF CREDIT": "891-2391-184", "SUBMITTED": "18/04/19", "DISCREPANCY": "Different port of shipment, Difference in goods description", "AMOUNT": "$80,000" },
        { "BENEFICIARY NAME": "Phasmuc LLC", "LETTER OF CREDIT": "891-2391-184", "SUBMITTED": "18/04/19", "DISCREPANCY": "Different port of shipment, Difference in goods description", "AMOUNT": "$80,000" },
    ]
},
{
    name: "DOCUMENTS PENDING IMPORTER'S BANK REVIEW", total: 1, docs: [
        { "BENEFICIARY NAME": "Phasmuc LLC", "LETTER OF CREDIT": "891-2391-184", "SUBMITTED": "18/04/19", "DISCREPANCY": "Different port of shipment, Difference in goods description", "AMOUNT": "$80,000" },
    ]
},
{
    name: "DOCUMENTS ACCEPTED BY IMPORTER'S BANK", total: 2, docs: [
        { "BENEFICIARY NAME": "Murphy LLC", "LETTER OF CREDIT": "891-2391-184", "SUBMITTED": "18/04/19", "DISCREPANCY": "Different port of shipment, Difference in goods description", "AMOUNT": "$80,000" },
        { "BENEFICIARY NAME": "Seasons LLC", "LETTER OF CREDIT": "891-2391-184", "SUBMITTED": "18/04/19", "DISCREPANCY": "Different port of shipment, Difference in goods description", "AMOUNT": "$80,000" },
    ]
},
{
    name: "DISCPREPANT DOCUMENTS PENDING ACCEPTANCE", total: 1, docs: [
        { "BENEFICIARY NAME": "Murphy LLC", "LETTER OF CREDIT": "891-2391-184", "SUBMITTED": "18/04/19", "DISCREPANCY": "Different port of shipment, Difference in goods description", "AMOUNT": "$80,000" },
    ]
},
{
    name: "DOCUMENTS DISPATCHED", total: 2, docs: [
        { "BENEFICIARY NAME": "Murphy LLC", "LETTER OF CREDIT": "891-2391-184", "SUBMITTED": "18/04/19", "DISCREPANCY": "Different port of shipment, Difference in goods description", "AMOUNT": "$80,000" },
        { "BENEFICIARY NAME": "Seasons LLC", "LETTER OF CREDIT": "891-2391-184", "SUBMITTED": "18/04/19", "DISCREPANCY": "Different port of shipment, Difference in goods description", "AMOUNT": "$80,000" },    
    ]
},
];

export default function (props) {
    // Declare a new state variable, which we'll call "count"
    const classes = useStyles();

    // selected Pending Request
    // view!
    const [selected, setSelected] = React.useState(0);

    let lcs = lcSteps;

    if (props.steps) {
        lcs = props.steps;
    }

    let selectionChanged = x => {
        console.log("Changed", x);
        setSelected(x);
    }

    let margins = props.noHeader ?  {marginTop: "0px"} : {};

    let name = "Select a step for more information";
    if (selected !== null) {
        name = lcs[selected].name;
    }
    if (props.properties) {
        name = lcs[props.properties.lcFlow].name;
    }

    let docs = [];
    if (selected !== null) {
        docs = lcs[selected].docs;
    }
    if (props.properties) {
        docs = props.properties.supportingDocs;
    }    

    return (
        <div className={classes.root} style={margins} hidden={props.properties && props.tabSelected !== 1}>
            <Typography component="p" hidden={props.properties} variant="body1" color="textSecondary" align="left" paragraph>
                <b>DOCUMENT RECEIVED UNDER LETTER OF CREDIT</b>
            </Typography>

            <Paper className={classes.paper} style={margins}>
                <LCView flow={props.properties?props.properties.docFlow : 0} disabled={props.properties} steps={lcs} numerical onSelectionChanged={selectionChanged}/>
                <div style={{ marginTop: "48px" }}>
                    <Typography component="span" variant="body1" color="textSecondary" align="left">
                        <b>DOCUMENTS</b>
                    </Typography>
                    <Typography component="span" variant="body1" color="textSecondary" align="left" paragraph style={{ "marginLeft": "12px", "color": "#289286" }}>
                        <b>{name}</b>
                    </Typography>
                    <TableView rows={docs} details acceptReject={props.properties} onSelectionChanged={e=>{window.location="/" + (props.location ? props.location : "advisingImporterLC") }}/> 
                </div>
            </Paper>
        </div>
    );
}