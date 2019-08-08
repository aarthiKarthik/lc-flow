import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../components/common';
import { Grid } from '@material-ui/core';
import ChartHeader from '../../components/common/chartHeader';
import NotificationList from '../../components/common/notificationLists';
import StatusUpdates from '../../components/bankAdvising/viewStatusUpdates';
import PaymentView from "../../components/bankAdvising/viewPayments";

let updates = [
  {name:"Letter of Credit Issued", action:"Murphy LLC", date:"29th April 2019", amount:"$80,000"},
  {name:"Documents Received by Bank (Pending Review)", action:"8123-298-1923", date:"29th April 2019", amount:"$72,000"},
  {name:"Letter of Credit Paid", action:"8123-293-1923", date:"29th April 2019", amount:"$50,000"},
]

let actionsPending = [
  {name:"Letter of Credit Pending Bank's Issuance", action:"Request for Insurance cover", date:"29th April 2019", amount:"$90,000"},
  {name:"Discrepent Documents Pending Acceptance", action:"Descrption of goods do not match LC", date:"29th April 2019", amount:"$70,000"},
  {name:"Letter of Credit in Draft", action:"Last Updated 7 weeks ago", date:"29th April 2019", amount:"$50,000"},
]

export default function() {
  

  let buttons = [{title: "LETTER OF CREDIT", location:"/issuingLC"}, 
  {title: "DOCUMENTS", location:"/issuingDocs"}, 
  {title: "PAYMENTS", location:"/issuingPayments"}]

  return (
    <React.Fragment>
      <Container maxWidth="xl"  style={{ padding: 0 }}>
        <AppBar home="/issuing" buttons={buttons} hideHeader />
        <Container maxWidth="xl">
        <ChartHeader/>        
      </Container>
      <Container maxWidth="xl">
        <Grid container spacing={3}>        
          <Grid item xs={6}>
            <NotificationList updates={updates} viewAllTop={true} nohighlight>xs=6</NotificationList>            
          </Grid>
          <Grid item xs={6}>
          <NotificationList title="PENDING ACTIONS" viewAllTop={true} updates={actionsPending} nohighlight>xs=6</NotificationList>            
          </Grid>    
      </Grid>
      </Container>
      <Container maxWidth="xl">      
        <StatusUpdates/>
      </Container>
      <Container maxWidth="xl">      
        <PaymentView/>
      </Container>
      
      </Container>
    </React.Fragment>
  );
}
