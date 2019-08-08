import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../components/common';
import ChartHeader from '../../components/common/chartHeader';
import ViewLC from '../../components/bankAdvising/viewLCTableView';

let lcs = [
  { "BENEFICIARY NAME": "Murphy LLC", "TYPES OF GOOD": "Optical, technical, medical apparatus", "LETTER OF CREDIT": "891-2391-184", "ISSUANCE DATE & SUBMITTED ON": "18/04/19 - 25/04/19", "AMOUNT": "$90,000" },
  { "BENEFICIARY NAME": "Seasons LLC", "TYPES OF GOOD": "Veterinary Medicine", "LETTER OF CREDIT": "812-2138-128", "ISSUANCE DATE & SUBMITTED ON": "23/02/19 - 09/02/19", "AMOUNT": "$100,000" },
  { "BENEFICIARY NAME": "Phasmuc LLC", "TYPES OF GOOD": "Pharmaceutical products", "LETTER OF CREDIT": "982-8932-189", "ISSUANCE DATE & SUBMITTED ON": "03/04/19 - 10/04/19", "AMOUNT": "$60,000" },
  { "BENEFICIARY NAME": "Phasmuc LLC", "TYPES OF GOOD": "Pharmaceutical products", "LETTER OF CREDIT": "982-8932-189", "ISSUANCE DATE & SUBMITTED ON": "03/04/19 - 10/04/19", "AMOUNT": "$60,000" },
  { "BENEFICIARY NAME": "Phasmuc LLC", "TYPES OF GOOD": "Pharmaceutical products", "LETTER OF CREDIT": "982-8932-189", "ISSUANCE DATE & SUBMITTED ON": "03/04/19 - 10/04/19", "AMOUNT": "$60,000" },
]

export default function() {
  

  let buttons = [{title: "LETTER OF CREDIT", location:"/advisingLC"}, 
  {title: "DOCUMENTS & FINANCING", location:"/advisingDocs"}, 
  {title: "PAYMENTS", location:"/advisingPayments"}]

  return (
    <React.Fragment>
      <Container maxWidth="xl"  style={{ padding: 0 }}>
        <AppBar home="/advising" buttons={buttons} hideHeader selected={0}/>
        <Container maxWidth="xl">
        <ChartHeader/>        
      </Container>
      <Container maxWidth="xl"> 
        <ViewLC lcs={lcs} noHeader/>
      </Container>
      
      </Container>
    </React.Fragment>
  );
}
