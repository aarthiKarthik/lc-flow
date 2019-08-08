import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { TableHead, TableRow, TableBody, Table, TableCell, Paper, Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const StyledTableCell = withStyles(theme => ({
  
    body: {
      fontSize: 14,
      padding: "24px"
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles(theme => ({
    root: {
      
    },
  }))(TableRow);
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

export default function (props) {
    // Declare a new state variable, which we'll call "count"
    const classes = useStyles();

    let po = props.purchaseOrders || null;

    const [selected, setSelected] = React.useState([]);
    
    function handleClick(event, name) {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
        );
        }
        setSelected(newSelected);
    }

    const isSelected = name => selected.indexOf(name) !== -1;


    return (
        <div className={classes.root}>
            <div>
                <Typography component="p" variant="body1" color="textSecondary" paragraph>
                    <b>ACTIVE PURCHASE ORDERS ({selected.length})</b>
                </Typography>

                <Paper style={{ overflowY: "auto", maxHeight: "300px" }}>
                    <Table className={classes.table}>
                        <TableHead style={{backgroundColor:"#F6E4CD"}}>
                            <TableRow>
                                {
                                    po && Object.keys(po[0]).filter(x=>x!=="invoices").map(x=><StyledTableCell><b>{x}</b></StyledTableCell>)
                                }   
                            </TableRow>
                        </TableHead>
                        <TableBody style={{ overflowY: "scroll" }}>
                            {po.map(row =>{ 
                                const isItemSelected = isSelected(row.SNo);
                                return(
                                <StyledTableRow onClick={event => handleClick(event, row.SNo)}
                                    hover
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={row.SNo}
                                    selected={isItemSelected}>
                                    {
                                        Object.keys(row).filter(x=>x!=="invoices").map(x=><StyledTableCell component="th" scope="row">{row[x]}</StyledTableCell>)
                                    }
                                </StyledTableRow>
                            )})}
                        </TableBody>
                    </Table>
                </Paper>
                <div style={{marginTop:"30px", textAlign:"center"}}>
                    <Button disabled={selected.length === 0} variant="contained" color="secondary" className={classes.button} style={{width:"240px", marginRight:"20px"}} onClick={x=>{props.notifySelected && props.notifySelected(selected)}}>VIEW INVOICE</Button>
                    <Button variant="contained" color="secondary" className={classes.button} onClick={x=>window.location="/importersCreateLC"}>DRAFT LETTER OF CREDIT REQUEST</Button>
                </div>
            </div>
        </div>
    );
}