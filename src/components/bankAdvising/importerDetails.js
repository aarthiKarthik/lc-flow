import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography, Tabs, Tab } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        padding: "30px",
        maxHeight: "500px",
    },
    table: {
        minWidth: "500px",
        borderCollapse: "separate",
        borderSpacing: "0 20px"
    },
    rootTab: {
        backgroundColor: "#2F2F2F",
        color: "#F5F5F5",
        padding: "32px",
        width:"300px"
    },
    selectedTab: {
        backgroundColor: "#F6E4CD",
        color: "#2F2F2F"
    }
}));

let tt = ["LETTER OF CREDIT ISSUANCE", "DOCUMENTS RECEIVED UNDER LETTER OF CREDIT", "PAYMENTS"]

export default function CustomizedTables(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let properties = props.properties || {};

    let title = props.title || tt;

    function handleChange(event, newValue) {
        setValue(newValue);
        props.onSelectChanged && props.onSelectChanged(newValue);
    }

    return (
        <div style={{ overflowY: "auto", height: "400px", background: "url('images/banner-workers.png')  no-repeat center center fixed", backgroundSize: "cover" }}>
            <div style={{ backgroundColor: "rgba(0,0,0,0.3)", height: "100%", position: "relative" }}>
                <div style={{ padding: "30px", marginBottom: "60px" }}>
                    <Typography component="p" variant="body1" color="textPrimary" align="left" paragraph style={{ color: "#F5F5F5" }}>
                        <b>{properties.name}</b>
                    </Typography>
                    <Typography component="p" variant="h4" color="textPrimary" align="left" paragraph style={{ color: "#F5F5F5" }}>
                        <b>{properties.docID}</b>
                    </Typography>
                    <Typography component="p" variant="subtitle1" color="textSecondary" align="left" style={{ color: "#F5F5F5" }}>
                        <b>{properties.type}</b>
                    </Typography>
                    <Typography component="p" variant="subtitle1" color="textSecondary" align="left" style={{ color: "#F5F5F5" }}>
                        <b>{properties.transport}</b>
                    </Typography>
                </div>
                    <div style={{marginLeft:"auto", marginRight:"auto", width:"900px"}}> 
                        <Paper square style={{display:"inline-block"}}>
                        <Tabs value={value} indicatorColor="primary" textColor="primary" onChange={handleChange}>
                            <Tab classes={{root:classes.rootTab, selected:classes.selectedTab}} label="LETTER OF CREDIT" />
                            <Tab classes={{root:classes.rootTab, selected:classes.selectedTab}} label="DOCUMENTS RECEIVED" />
                            <Tab classes={{root:classes.rootTab, selected:classes.selectedTab}} label="PAYMENT" />
                        </Tabs>
                        </Paper>
                    </div>
                <div style={{ position: "absolute", bottom: "12px", left: "30px" }}>
                    <Typography component="p" variant="subtitle1" color="textSecondary" align="left" style={{ color: "#F5F5F5" }}>
                        <b>{title[value]}</b>
                    </Typography>
                </div>
                <div style={{ position: "absolute", "right": "30px", "top": "90px" }}>
                    <Typography component="p" variant="h4" color="textSecondary" align="left" style={{ color: "#F5F5F5" }} paragraph>
                        <b>{properties.amount}</b>
                    </Typography>
                    <Typography component="p" variant="subtitle1" color="textSecondary" align="left" style={{ color: "#F5F5F5" }}>
                        <b>{properties.bank}</b>
                    </Typography>
                </div>
            </div>
        </div>
    );
}