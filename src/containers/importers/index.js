import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../components/common'
import { Grid } from '@material-ui/core';
import NotificationList from '../../components/common/notificationLists'
import OffersList from '../../components/common/offersList'
import NavTable from '../../components/common/table'

export default function() {
  let updates = [
    {name:"SIME DARBY PLANTATION", action:"Requesting an Letter of Credit", date:"29th April 2019"},
    {name:"EXPORTER A", action:"Shipment in Progress", date:"29th April 2019"},
    {name:"EXPORTER D", action:"Needs to Submit Documentation", date:"29th April 2019"}
  ]

  let offers = ["EXPORTER D", "EXPORTER E", "EXPORTER F", "EXPORTER G"];


  function createData(name, salePrice, dateInitiated, contractStatus, alerts, overdue) {
    return { name, salePrice, dateInitiated, contractStatus, alerts, overdue };
  }

  const rows = [
    createData('Exporter A', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 0),
    createData('Exporter B', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 1),
    createData('Exporter C', "$70,000", "01/04/2019 - 05/04/2019", "Confirmed", 0, 0),
    createData('Exporter A', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 0),
    createData('Exporter B', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 1),
    createData('Exporter C', "$70,000", "01/04/2019 - 05/04/2019", "Confirmed", 0, 0),
    createData('Exporter A', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 0),
    createData('Exporter B', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 1),
    createData('Exporter C', "$70,000", "01/04/2019 - 05/04/2019", "Confirmed", 0, 0),
    createData('Exporter A', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 0),
    createData('Exporter B', "$90,000", "01/04/2019 - 05/04/2019", "Pending", 1, 1),
    createData('Exporter C', "$70,000", "01/04/2019 - 05/04/2019", "Confirmed", 0, 0),
  ];

  let buttons = [{title: "VIEW ASSET TOKENS", location:"/importersViewAssetTokens"}, 
  {title: "VIEW POs & INVOICES", location:"/importersViewPOs"}, 
  {title: "VIEW LETTER OF CREDIT STATUS", location:"/importersViewLC"}]

  return (
    <React.Fragment>
      <Container maxWidth="xl"  style={{ padding: 0 }}>
        <AppBar buttons={buttons}/>
        <Container maxWidth="xl">
        <Grid container spacing={3}>        
          <Grid item xs={6}>
            <NotificationList updates={updates}>xs=6</NotificationList>            
          </Grid>
          <Grid item xs={6}>
            <OffersList offers={offers}>xs=6</OffersList>
          </Grid>
          <Grid item xs={12}>
            <NavTable rows={rows}>xs=12</NavTable>
          </Grid>        
      </Grid>
      </Container>
      </Container>
    </React.Fragment>
  );
}
