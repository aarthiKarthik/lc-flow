import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../components/exporters'
import { Grid } from '@material-ui/core';
import NotificationList from '../../components/common/notificationLists'
import OffersList from '../../components/common/offersList'
import NavTable from '../../components/common/table'


export default function() {
  let updates = [
    {name:"EMERY OLEOCHEMICALS", action:"Letter of Credit Request Raised", info:"Request for Insurance Cover", date:"29th April 2019"},
    {name:"INDO AMINES LTD", action:"Discrepent Documents Pending Acceptance", info:"Description of goods does not match LC", date:"29th April 2019"},
    {name:"OIL BASE INDIA", action:"Letter of Credit Being Drafter", info:"Predicted Completion Time - 10 days", date:"29th April 2019"}
  ]

  let offers = ["EXPORTER D", "EXPORTER E", "EXPORTER F", "EXPORTER G"];


  function createData(name, salePrice, dateInitiated, contractStatus, alerts, overdue) {
    return { name, salePrice, dateInitiated, contractStatus, alerts, overdue };
  }

  const rows = [
    createData('EMERY OLEOCHEMICALS', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 0),
    createData('INDO AMINES LTD', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 1),
    createData('OIL BASE INDIA', "$70,000", "01/04/2019 - 05/04/2019", "Confirmed", 0, 0),
    createData('EMERY OLEOCHEMICALS', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 0),
    createData('INDO AMINES LTD', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 1),
    createData('OIL BASE INDIA', "$70,000", "01/04/2019 - 05/04/2019", "Confirmed", 0, 0),
    createData('EMERY OLEOCHEMICALS', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 0),
    createData('INDO AMINES LTD', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 1),
    createData('OIL BASE INDIA', "$70,000", "01/04/2019 - 05/04/2019", "Confirmed", 0, 0),
    createData('EMERY OLEOCHEMICALS', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 0),
    createData('INDO AMINES LTD', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 1),
    createData('OIL BASE INDIA', "$70,000", "01/04/2019 - 05/04/2019", "Confirmed", 0, 0),
    createData('EMERY OLEOCHEMICALS', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 0),
    createData('INDO AMINES LTD', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 1),
    createData('OIL BASE INDIA', "$70,000", "01/04/2019 - 05/04/2019", "Confirmed", 0, 0),
  ];

  let buttons = [{ title: "VIEW ASSETS INVENTORY", location: "/exportersViewAssets" },
  { title: "VIEW INVOICES", location: "/exportersViewInvoices" },
  { title: "VIEW LETTER OF CREDIT STATUS", location: "/exportersViewLCStatus" }];

  return (
    <React.Fragment>
      <Container maxWidth="xl"  style={{ padding: 0 }}>
        <AppBar home="/exporters" buttons={buttons}/>
        <Container maxWidth="xl">
        <Grid container spacing={3}>        
          <Grid item xs={6}>
            <NotificationList updates={updates}>xs=6</NotificationList>            
          </Grid>
          <Grid item xs={6}>
            <OffersList title="POTENTIAL CUSTOMERS" buttonText="INITIATE SALE" offers={offers}>xs=6</OffersList>
          </Grid>
          <Grid item xs={12}>
            <NavTable title="CUSTOMERS" rows={rows}>xs=12</NavTable>
          </Grid>        
      </Grid>
      </Container>
      </Container>
    </React.Fragment>
  );
}
