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
    name: 'LETTERS OF CREDIT IN DRAFT', total: 3, lcs: [
        { "BENEFICIARY NAME": "Murphy LLC", "TYPES OF GOOD": "Optical, technical, medical apparatus", "LETTER OF CREDIT": "891-2391-184", "ISSUANCE DATE & SUBMITTED ON": "18/04/19 - 25/04/19", "STATUS": "Bank requires Insurance Cover", "AMOUNT": "$90,000" },
        { "BENEFICIARY NAME": "Seasons LLC", "TYPES OF GOOD": "Veterinary Medicine", "LETTER OF CREDIT": "812-2138-128", "ISSUANCE DATE & SUBMITTED ON": "23/02/19 - 09/02/19", "STATUS": "Bank requires Purchase Order", "AMOUNT": "$100,000" },
        { "BENEFICIARY NAME": "Phasmuc LLC", "TYPES OF GOOD": "Pharmaceutical products", "LETTER OF CREDIT": "982-8932-189", "ISSUANCE DATE & SUBMITTED ON": "03/04/19 - 10/04/19", "STATUS": "Pending Bank's Issuance", "AMOUNT": "$60,000" }
    ]
},
{
    name: "PENDING MANAGER'S APPROVAL", total: 1, lcs: [
        { "BENEFICIARY NAME": "Murphy LLC", "TYPES OF GOOD": "Optical, technical, medical apparatus", "LETTER OF CREDIT": "891-2391-184", "ISSUANCE DATE & SUBMITTED ON": "18/04/19 - 25/04/19", "STATUS": "Bank requires Insurance Cover", "AMOUNT": "$90,000" }
    ]
},
{
    name: "PENDING BANK'S ISSUANCE", total: 3, lcs: [
        { "BENEFICIARY NAME": "Murphy LLC", "TYPES OF GOOD": "Optical, technical, medical apparatus", "LETTER OF CREDIT": "891-2391-184", "ISSUANCE DATE & SUBMITTED ON": "18/04/19 - 25/04/19", "STATUS": "Bank requires Insurance Cover", "AMOUNT": "$90,000" },
        { "BENEFICIARY NAME": "Seasons LLC", "TYPES OF GOOD": "Veterinary Medicine", "LETTER OF CREDIT": "812-2138-128", "ISSUANCE DATE & SUBMITTED ON": "23/02/19 - 09/02/19", "STATUS": "Bank requires Purchase Order", "AMOUNT": "$100,000" },
        { "BENEFICIARY NAME": "Phasmuc LLC", "TYPES OF GOOD": "Pharmaceutical products", "LETTER OF CREDIT": "982-8932-189", "ISSUANCE DATE & SUBMITTED ON": "03/04/19 - 10/04/19", "STATUS": "Pending Bank's Issuance", "AMOUNT": "$60,000" }
    ]
},
{
    name: "ISSUED BY IMPORTER'S BANK", total: 1, lcs: [
        { "BENEFICIARY NAME": "Murphy LLC", "TYPES OF GOOD": "Optical, technical, medical apparatus", "LETTER OF CREDIT": "891-2391-184", "ISSUANCE DATE & SUBMITTED ON": "18/04/19 - 25/04/19", "STATUS": "Bank requires Insurance Cover", "AMOUNT": "$90,000" }
    ]
},
{
    name: "CONFIRMED BY EXPORTER'S BANK", total: 2, lcs: [
        { "BENEFICIARY NAME": "Murphy LLC", "TYPES OF GOOD": "Optical, technical, medical apparatus", "LETTER OF CREDIT": "891-2391-184", "ISSUANCE DATE & SUBMITTED ON": "18/04/19 - 25/04/19", "STATUS": "Bank requires Insurance Cover", "AMOUNT": "$90,000" },
        { "BENEFICIARY NAME": "Seasons LLC", "TYPES OF GOOD": "Veterinary Medicine", "LETTER OF CREDIT": "812-2138-128", "ISSUANCE DATE & SUBMITTED ON": "23/02/19 - 09/02/19", "STATUS": "Bank requires Purchase Order", "AMOUNT": "$100,000" },

    ]
},
];



export default function (props) {
    // Declare a new state variable, which we'll call "count"
    const classes = useStyles();

    // selected Pending Request
    // view!
    const [selected, setSelected] = React.useState(0);

    let selectionChanged = x => {
        console.log("Changed", x);
        setSelected(x);
    }

    console.log(props.location)

    let margins = props.noHeader ?  {marginTop: "0px"} : {};

    let steps = props.steps || lcSteps;

    let lcs = [];
    if (selected !== null) {
        lcs = steps[selected].lcs;
    }
    if (props.properties) {
        lcs = [props.properties.lc];
    }

    let name = "Select a step for more information";
    if (selected !== null) {
        name = steps[selected].name;
    }
    if (props.properties) {
        name = steps[props.properties.lcFlow].name;
    }

    return (
        <div className={classes.root} style={margins} hidden={props.properties && props.tabSelected !== 0}>
            <Typography hidden={props.noHeader} component="p" variant="body1" color="textSecondary" align="left" paragraph>
                <b>LETTER OF CREDIT ISSUANCE</b>
            </Typography>

            <Paper className={classes.paper} style={margins}>
                <LCView flow={props.properties?props.properties.lcFlow : 0} disabled={props.properties} steps={steps} numerical onSelectionChanged={props.properties ? null : selectionChanged}/>
                <div style={{ marginTop: "48px" }}>
                    <Typography component="span" variant="body1" color="textSecondary" align="left">
                        <b>LETTER OF CREDIT</b>
                    </Typography>
                    <Typography component="span" variant="body1" color="textSecondary" align="left" paragraph style={{ "marginLeft": "12px", "color": "#289286" }}>
                        <b>{name}</b>
                    </Typography>
                    <TableView rows={lcs} edit details onSelectionChanged={x=>window.location="/" + (props.location ? props.location : "advisingImporterLC") }/>
                </div>
            </Paper>
        </div>
    );
}