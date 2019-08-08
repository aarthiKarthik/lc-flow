import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import TableView from "./tableView";
import BarChartView from "../common/charting/BarChart"


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

let lcSteps = [{ name: 'Murphy LLC', date: "20th April 2019", total: "$80,000" },{ name: 'Murphy LLC', date: "20th April 2019", total: "$80,000" },{ name: 'Murphy LLC', date: "20th April 2019", total: "$80,000" },{ name: 'Murphy LLC', date: "20th April 2019", total: "$80,000" },];

export default function (props) {
    // Declare a new state variable, which we'll call "count"
    const classes = useStyles();

    let items = [(<Grid item xs={6} key="tx-asset-container">
        <Paper className={classes.paper}>
        <Typography component="p" variant="body1" color="textSecondary" align="left" >
            <b>Recent Completed Payments</b>
        </Typography>
        <TableView rows={lcSteps}/>
        </Paper>
        </Grid>),                    
            (<Grid item xs={6} key="tx-asset-2" >
        <Paper className={classes.paper}>
        <Typography component="p" variant="body1" color="textSecondary" align="left" >
            <b>Pending Payments</b>
        </Typography>
        <BarChartView/>
        </Paper>
        </Grid>)]

    if (props.flipped) {
        items = items.reverse()
    }

    return (
        <div className={classes.root}>
            <Typography hidden={props.noHeader} component="p" variant="body1" color="textSecondary" align="left" paragraph>
                <b>PAYMENTS</b>
            </Typography>

            <Grid container spacing={6}>
                {items.map(x=>x)}
            </Grid>
        </div>
    );
}