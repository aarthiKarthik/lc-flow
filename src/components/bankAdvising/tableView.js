import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button, Icon } from '@material-ui/core';

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
    
      <div style={{overflowY:"auto", maxHeight:props.maxHeight ? (props.maxHeight*0.6)+"px":"300px"}}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow style={{backgroundColor:"#FFB300"}}>
              {rows.length > 0 && Object.keys(rows[0]).map(x=>{
                  return <StyledTableCell style={{color:"white"}}>{x}</StyledTableCell>
              })}       
              {
                  props.details || props.edit || props.acceptReject ? <StyledTableCell></StyledTableCell>:null
              }   
          </TableRow>
        </TableHead>
        <TableBody style={{overflowY:"scroll"}}>
          {rows.map((row, i) => {return (
              <StyledTableRow key={row.name}>              
              {Object.keys(row).map(x=>{
                  return <StyledTableCell>{row[x]}</StyledTableCell>
              })}            
              {props.details || props.edit || props.acceptReject || props.download ? (<StyledTableCell style={{width:"270px"}}>
                  <div>
                  {props.acceptReject?<Button variant="contained" color="secondary" style={{marginRight: "10px"}} >Accept</Button>:null}
                  {props.acceptReject?<Button variant="outlined" style={{marginRight: "10px"}}  color="secondary">Reject</Button>:null}
                  {props.details?<Button variant="outlined" color="secondary" style={{marginRight: "10px"}} onClick={x=>{props.onSelectionChanged && props.onSelectionChanged(i)}}><Icon>searchoutlined</Icon></Button>:null}                  
                  {props.edit?<Button variant="outlined" color="secondary"><Icon>createoutlined</Icon></Button>:null}
                  {props.download?<Button variant="outlined" style={{marginRight: "10px"}}  color="secondary"><Icon>vertical_align_bottom</Icon></Button>:null}
                  </div>
              </StyledTableCell>):null}
            </StyledTableRow>
          )})}
        </TableBody>
      </Table>
      </div>
  );
}