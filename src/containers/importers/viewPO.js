import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import AppBar from '../../components/common'
import Invoice from '../../components/importers/invoices'
import PurchseOrders from '../../components/importers/purchaseOrders'
import { Grid } from '@material-ui/core';

let buttons = [{ title: "VIEW ASSET TOKENS", location: "/importersViewAssetTokens" },
{ title: "VIEW POs & INVOICES", location: "/importersViewPOs" },
{ title: "VIEW LETTER OF CREDIT STATUS", location: "/importersViewLC" }]

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

let invoices = [
  { "Invoice ID": 123, "Product Type": "RSO-1", "Incoterms": "DAP", "Port of Origin and Destination": "MYKL - IDJKT" },
  { "Invoice ID": 123, "Product Type": "RSO-1", "Incoterms": "DAP", "Port of Origin and Destination": "MYKL - IDJKT" },
  { "Invoice ID": 123, "Product Type": "RSO-1", "Incoterms": "DAP", "Port of Origin and Destination": "MYKL - IDJKT" }
]

let purchaseOrders = [
  { "SNo": 1, "PO ID": "AB1234", "Quantity": 100, "Quality": "RSPO-MB", "Price": 100, "Status": "INVOICED RXED", invoices: invoices},
  { "SNo": 2, "PO ID": "AB1235", "Quantity": 120, "Quality": "RSPO-MB2", "Price": 90, "Status": "INVOICED RXED", invoices: [invoices[1]]},
  { "SNo": 3, "PO ID": "AB1236", "Quantity": 150, "Quality": "RSPO-MB", "Price": 100, "Status": "INVOICED RXED", invoices: [invoices[2]] },
  { "SNo": 4, "PO ID": "AB1237", "Quantity": 200, "Quality": "RSPO-MB", "Price": 200, "Status": "INVOICED RXED", invoices: [invoices[1], invoices[2]]},
  { "SNo": 5, "PO ID": "AB1238", "Quantity": 140, "Quality": "RSPO-MB2", "Price": 66, "Status": "INVOICED RXED", invoices: invoices },
  { "SNo": 6, "PO ID": "AB1239", "Quantity": 100, "Quality": "RSPO-MB", "Price": 140, "Status": "INVOICED RXED", invoices: invoices },
  { "SNo": 7, "PO ID": "AB1240", "Quantity": 70, "Quality": "RSPO-MB2", "Price": 99, "Status": "INVOICED RXED", invoices: invoices },
  { "SNo": 8, "PO ID": "AB1241", "Quantity": 99, "Quality": "RSPO-MB", "Price": 100, "Status": "INVOICED RXED", invoices: invoices },
];


export default function () {

  const classes = useStyles();
  const [selected, setSelected] = React.useState([]);

  const notifySelected = x=>{
    let lst = [];
    x.forEach(i=>{
      lst = lst.concat(purchaseOrders[i].invoices);
    })

    console.log(lst, x);
    setSelected(lst);
  }

  return (
    <React.Fragment>
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <AppBar buttons={buttons} selected={1} />
        <div style={{ marginLeft: "30px", marginRight: "30px" }}>
          <Grid container className={classes.root} spacing={10}>
            <Grid item xs={6}>
              <PurchseOrders purchaseOrders={purchaseOrders} notifySelected={notifySelected}/>
            </Grid>
            <Grid item xs={6}>
              <Invoice invoices={selected} />
            </Grid>
          </Grid>          
        </div>
      </Container>
    </React.Fragment>
  );
}
