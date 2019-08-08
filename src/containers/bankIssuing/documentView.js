import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../components/common';
import ChartHeader from '../../components/common/chartHeader';
import ViewDocs from '../../components/bankAdvising/viewDocContainer';

export default function() {
  

  let buttons = [{title: "LETTER OF CREDIT", location:"/issuingLC"}, 
  {title: "DOCUMENTS", location:"/issuingDocs"}, 
  {title: "PAYMENTS", location:"/issuingPayments"}]

  return (
    <React.Fragment>
      <Container maxWidth="xl"  style={{ padding: 0 }}>
        <AppBar home="/issuing" buttons={buttons} hideHeader selected={1}/>
        <Container maxWidth="xl">
        <ChartHeader/>        
      </Container>
      <Container maxWidth="xl"> 
        <ViewDocs location="issuingImporterLC" />
      </Container>
      
      </Container>
    </React.Fragment>
  );
}
