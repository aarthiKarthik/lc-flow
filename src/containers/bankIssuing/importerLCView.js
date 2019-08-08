import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../components/common';
import ViewLC from '../../components/bankAdvising/viewLCContainer';
import ViewDoc from '../../components/bankAdvising/viewDocContainer';
import ImporterHeader from '../../components/bankAdvising/importerDetails';

let properties = {
  "name": "EMERY OLEOCHEMICAL",
  "docID": "891-2391-184",
  "type": "Optical, Technical & Medical Apparatus",
  "transport": "Air Freight from Singapore to Australia",
  "amount": "$90,000",
  "bank": "Citibank Singapore",
  "pageTitle": "LETTER OF CREDIT ISSUANCE",  
  "lc": { "BENEFICIARY NAME": "Murphy LLC", "TYPES OF GOOD": "Optical, technical, medical apparatus", "LETTER OF CREDIT": "891-2391-184", "ISSUANCE DATE & SUBMITTED ON": "18/04/19 - 25/04/19", "STATUS": "Bank requires Insurance Cover", "AMOUNT": "$90,000" },
  "supportingDocs": [
      {"DOCUMENT": "Bill of Lading", "BENEFICIARY NAME": "Murphy LLC", "SUBMITTED": "18/04/19", "DISCREPENCY": "Different port of shipment"},
      {"DOCUMENT": "Invoice Copy", "BENEFICIARY NAME": "Murphy LLC", "SUBMITTED": "18/04/19", "DISCREPENCY": "Difference in goods description"},
      {"DOCUMENT": "Packing List", "BENEFICIARY NAME": "Murphy LLC", "SUBMITTED": "18/04/19", "DISCREPENCY": "None"}
  ],
  "currentFlow": "PENDING BANK'S ISSUANCE",
  "lcFlow": 2, 
  "currentDocumentFlow": "DISCPREPANT DOCUMENTS PENDING ACCEPTANCE",
  "docFlow": 3,

}

  let buttons = [{title: "LETTER OF CREDIT", location:"/issuingLC"}, 
  {title: "DOCUMENTS", location:"/issuingDocs"}, 
  {title: "PAYMENTS", location:"/issuingPayments"}]
export default function() {
  
  let [tabSelected, setTabSelected] = React.useState(0);
  console.log(tabSelected);  

  return (
    <React.Fragment>
      <Container maxWidth="xl"  style={{ padding: 0 }}>
        <AppBar home="/issuing" buttons={buttons} hideHeader/>
        <ImporterHeader properties={properties} onSelectChanged={x=>{setTabSelected(x)}}/>                               
        <ViewLC tabSelected={tabSelected} noHeader properties={properties} location="issuingImporterLC" />  
        <ViewDoc tabSelected={tabSelected} hideen={tabSelected !== 1} noHeader properties={properties} location="issuingImporterLC" />    
      </Container>
    </React.Fragment>
  );
}
