import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../components/common'
import NavTable from '../../components/common/table'

import { Grid } from '@material-ui/core';

let buttons = [{ title: "VIEW ASSETS INVENTORY", location: "/exportersViewAssets" },
{ title: "VIEW INVOICES", location: "/exportersViewInvoices" },
{ title: "VIEW LETTER OF CREDIT STATUS", location: "/exportersViewLCStatus" }];

function createData(name, salePrice, dateInitiated, contractStatus, complete, overdue) {
    return { name, salePrice, dateInitiated, contractStatus, complete, overdue };
  }
const rows = [
    createData('EMERY OLEOCHEMICALS', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 0, 0),
    createData('INDO AMINES LTD', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 0, 1),
    createData('OIL BASE INDIA', "$70,000", "01/04/2019 - 05/04/2019", "Confirmed", 1, 0),
    createData('EMERY OLEOCHEMICALS', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 0, 0),
    createData('INDO AMINES LTD', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 0, 1),
    createData('OIL BASE INDIA', "$70,000", "01/04/2019 - 05/04/2019", "Confirmed", 1, 0),
    createData('EMERY OLEOCHEMICALS', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 0, 0),
    createData('INDO AMINES LTD', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 0, 1),
    createData('OIL BASE INDIA', "$70,000", "01/04/2019 - 05/04/2019", "Confirmed", 1, 0),
    createData('EMERY OLEOCHEMICALS', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 0, 0),
    createData('INDO AMINES LTD', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 0, 1),
    createData('OIL BASE INDIA', "$70,000", "01/04/2019 - 05/04/2019", "Confirmed", 1, 0),
    createData('EMERY OLEOCHEMICALS', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 0, 0),
    createData('INDO AMINES LTD', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 0, 1),
    createData('OIL BASE INDIA', "$70,000", "01/04/2019 - 05/04/2019", "Confirmed", 1, 0),
  ];


export default function () {


  return (
    <React.Fragment>
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <AppBar home="/exporters"  buttons={buttons} selected={1} />
        <Container maxWidth="xl">
        <Grid container spacing={3}>  
          <Grid item xs={12}>
            <NavTable title="CUSTOMERS" rows={rows} maxHeight={800} invoicing={true}>xs=12</NavTable>
          </Grid>        
      </Grid>
      </Container>
      </Container>
    </React.Fragment>
  );
}
