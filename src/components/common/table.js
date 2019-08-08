import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography, Button } from '@material-ui/core';
import Warning from '@material-ui/icons/Warning'
const StyledTableCell = withStyles(theme => ({
  
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    
  },
}))(TableRow);

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
}));

export default function CustomizedTables(props) {
  const classes = useStyles();
  let rows = props.rows || []
  return (
    <Paper className={classes.root} elevation="3">
      <Typography component="p" variant="body1" color="textSecondary" paragraph>
        <b>{props.title?props.title:"PURCHASE HISTORY"}</b>
      </Typography>
      <div style={{overflowY:"auto", maxHeight:props.maxHeight ? (props.maxHeight*0.6)+"px":"400px"}}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Sales Price</StyledTableCell>
            <StyledTableCell align="right">Date Initiated &nbsp; Last Updated</StyledTableCell>
            <StyledTableCell align="right">Contract Status</StyledTableCell>
            <StyledTableCell align="right">{props.invoicing?"INVOICE":"Alerts"}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{overflowY:"scroll"}}>
          {rows.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row" style={{padding: "20px", 
              borderTopWidth:"1px", borderTopStyle:"solid", 
              borderTopColor:"lightgray", borderLeftStyle:"solid", 
              borderLeftColor:row.overdue ? "red":"orange", borderLeftWidth:"3px"}}>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right" style={{padding: "20px", borderTopStyle:"solid", borderTopWidth:"1px", borderTopColor:"lightgray"}}>{row.salePrice}</StyledTableCell>
              <StyledTableCell align="right" style={{padding: "20px", borderTopStyle:"solid", borderTopWidth:"1px", borderTopColor:"lightgray"}}>{row.dateInitiated}</StyledTableCell>
              <StyledTableCell align="right" style={{padding: "20px", borderTopStyle:"solid", borderTopWidth:"1px", borderTopColor:"lightgray"}}>{row.contractStatus}</StyledTableCell>
              <StyledTableCell align="right" style={{padding: "20px", borderTopStyle:"solid", borderTopWidth:"1px", borderTopColor:"lightgray"}}>{
                  props.invoicing && row.complete ? <Button size="small" style={{backgroundColor:"red", color:"white"}}>View Invoice</Button> : row.alerts ? <div><Warning/><span>Documents<br/>Needed</span></div> : ""
              }</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </Paper>
  );
}