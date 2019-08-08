import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button, Paper, Table, TableRow, TableBody, TableCell, TableHead } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import LCView from "../common/lcFlow";
import LCStatus from "../common/lcList";

const StyledTableCell = withStyles(theme => ({
  
    body: {
      fontSize: 14,
      paddingTop: "48px",
      paddingBottom: "48px",
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      padding:"24px"
    },
  }))(TableRow);

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: "20px"
    },
    paper: {
        marginTop: "40px",
        padding: "30px",
        borderTopColor: "orange",
        borderTopStyle: "solid",
        borderTopWidth: "3px"
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

    // selected Pending Request
    // view!
    const [selected, setSelected] = React.useState(null);

    let selectionChanged = x=>{
        setSelected(x);
    }
    
    let po = selected ? selected.lc : null;
    let offers = props.offers || [];

    return (
        <div className={classes.root}>
            <div style={{ textAlign: "center" }}>                    
                <Button variant="contained" color="secondary" className={classes.button} onClick={x=>window.location="/importersCreateLC"}>REQUEST NEW LETTER OF CREDIT</Button>
            </div>

            <LCStatus offers={offers} selectionChanged={selectionChanged}/>

            <Paper className={classes.paper} style={{display: selected ? "block" : "none"}}>                
                <Typography component="p" variant="body1" color="textSecondary" align="center" paragraph>
                    <b>{selected ? selected.title : ""}</b>
                </Typography>

                <Table className={classes.table}>
                        <TableHead style={{backgroundColor:"#F6E4CD"}}>
                            <TableRow>
                                {
                                    po && Object.keys(po[0]).filter(x=>x!=="invoices").map(x=><StyledTableCell><b>{x}</b></StyledTableCell>)
                                }   
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ overflowY: "scroll" }}>
                            {po && po.map(row =>{ 
                                
                                return(
                                <StyledTableRow
                                    hover
                                    role="checkbox"                                    
                                    tabIndex={-1}
                                    key={row.SNo}>
                                    {
                                        Object.keys(row).filter(x=>x!=="invoices").map(x=><StyledTableCell component="th" scope="row">{row[x]}</StyledTableCell>)
                                    }
                                </StyledTableRow>
                            )})}
                        </TableBody>
                    </Table>
                
                <LCView flow={selected?selected.flow:0}/>

                <div style={{ marginTop: "30px", textAlign: "center" }}>                    
                    <Button variant="contained" color="secondary" className={classes.button}>{props.nextAction ? props.nextAction :"SEND LC TO EXPORTER"}</Button>
                </div>
            </Paper>
        </div>
    );
}