import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../components/common';
import { Grid } from '@material-ui/core';
import ChartHeader from '../../components/common/chartHeader';
import NotificationList from '../../components/common/notificationLists';
import StatusUpdates from '../../components/bankAdvising/viewStatusUpdates';
import PaymentView from "../../components/bankAdvising/viewPayments";

let updates = [
  {name:"Payment Received", action:"Murphy LLC", date:"29th April 2019", amount:"$80,000"},
  {name:"Letter of Credit Financed", action:"8123-298-1923", date:"29th April 2019", amount:"$72,000"},
  {name:"Documents Submitted", action:"8123-293-1923", date:"29th April 2019", amount:"$50,000"},
]

let actionsPending = [
  {name:"Letter of Credit Pending Document Submission", action:"8123-293-1923", date:"29th April 2019", amount:"$90,000"},
  {name:"Discrepent Documents", action:"8123-293-1923", date:"29th April 2019", amount:"$70,000"},
  {name:"Letter of Credit Pending Documents Submission", action:"8123-293-1923", date:"29th April 2019", amount:"$50,000"},
]

let lcSteps = [{name:'LETTER OF CREDIT PENDING DOCUMENTS SUBMISSION', total:3}, {name:"DOCUMENTS SUBMITTED", total:1}, {name:"FINANCING REQUESTED", total:2}, {name:"PENDING ACCEPTANCE FROM IMPORTER'S BANK", total:1}, {name:"ACCEPTED BY EXPORTER'S BANK", total:2}, {name:"ACCEPTED BY IMPORTER'S BANK", total:2}, {name:"LETTER OF CREDIT & DOCUMENTS FINANCED", total:2}];

export default function() {
  

  let buttons = [{title: "LETTER OF CREDIT", location:"/advisingLC"}, 
  {title: "DOCUMENTS & FINANCING", location:"/advisingDocs"}, 
  {title: "PAYMENTS", location:"/advisingPayments"}]

  return (
    <React.Fragment>
      <Container maxWidth="xl"  style={{ padding: 0 }}>
        <AppBar home="/advising" buttons={buttons} hideHeader />
        <Container maxWidth="xl">
        <ChartHeader button1Text="REQUEST FINANCE" button2Text="UPLOAD DOCUMENTS"/>        
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
        <StatusUpdates advising title="DOCUMENTS & FINANCING" steps={lcSteps}/>
      </Container>
      <Container maxWidth="xl">      
        <PaymentView/>
      </Container>
      
      </Container>
    </React.Fragment>
  );
}
