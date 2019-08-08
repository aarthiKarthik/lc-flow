import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../components/common';
import ChartHeader from '../../components/common/chartHeader';
import ViewLC from '../../components/bankAdvising/viewLCContainer';

export default function() {
  

  let buttons = [{title: "LETTER OF CREDIT", location:"/issuingLC"}, 
  {title: "DOCUMENTS", location:"/issuingDocs"}, 
  {title: "PAYMENTS", location:"/issuingPayments"}]

  return (
    <React.Fragment>
      <Container maxWidth="xl"  style={{ padding: 0 }}>
        <AppBar home="/issuing" buttons={buttons} hideHeader selected={0}/>
        <Container maxWidth="xl">
        <ChartHeader/>        
      </Container>
      <Container maxWidth="xl"> 
        <ViewLC location="issuingImporterLC" />
      </Container>
      
      </Container>
    </React.Fragment>
  );
}
