import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../components/common';
import ChartHeader from '../../components/common/chartHeader';
import PaymentView from "../../components/bankAdvising/viewPayments";
import PaymentTableView from "../../components/bankAdvising/viewPaymentTableView";

let payments = [
  {"BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT":"128-2192-391", "DUE DATE": "24/01/2019", "RECEIVED":" Yes", "AMOUNT": "$80,000"},
  {"BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT":"128-2192-391", "DUE DATE": "09/05/2019", "RECEIVED":" Yes", "AMOUNT": "$80,000"},
  {"BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT":"128-2192-391", "DUE DATE": "21/05/2019", "RECEIVED":" No", "AMOUNT": "$80,000"},
]

export default function() {
  let buttons = [{title: "LETTER OF CREDIT", location:"/advisingLC"}, 
  {title: "DOCUMENTS & FINANCING", location:"/advisingDocs"}, 
  {title: "PAYMENTS", location:"/advisingPayments"}]

  return (
    <React.Fragment>
      <Container maxWidth="xl"  style={{ padding: 0 }}>
        <AppBar home="/advising" buttons={buttons} hideHeader selected={2} />
        <Container maxWidth="xl">
        <ChartHeader button1Text="REQUEST FINANCE" button2Text="UPLOAD DOCUMENTS"/>        
      </Container>
      <Container maxWidth="xl">      
        <PaymentView flipped noHeader/>
      </Container>
      <Container maxWidth="xl"> 
      <PaymentTableView lcs={payments}/>
      </Container>
      </Container>
    </React.Fragment>
  );
}
