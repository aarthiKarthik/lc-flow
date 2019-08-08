import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../components/common';
import ViewLC from '../../components/bankAdvising/viewLCContainer';
import ViewDoc from '../../components/bankAdvising/viewDocContainer';
import ImporterHeader from '../../components/bankAdvising/importerDetails';

let properties = {
  "name": "MURPHY LLC",
  "docID": "128-2192-391",
  "type": "Optical, Technical & Medical Apparatus",
  "transport": "Air Freight from Singapore to Australia",
  "amount": "$80,000",
  "bank": "Citibank Singapore",
  "pageTitle": "LETTER OF CREDIT ISSUANCE",  
  "lc": { "BENEFICIARY NAME": "Murphy LLC", "TYPES OF GOOD": "Optical, technical, medical apparatus", "LETTER OF CREDIT": "128-2192-391", "ISSUANCE DATE & SUBMITTED ON": "18/04/19 - 25/04/19", "STATUS": "FINANCED", "AMOUNT": "$80,000" },
  "supportingDocs": [
      {"DOCUMENT": "Bill of Lading", "BENEFICIARY NAME": "Murphy LLC", "SUBMITTED": "18/04/19", "DISCREPENCY": "None"},
      {"DOCUMENT": "Invoice Copy", "BENEFICIARY NAME": "Murphy LLC", "SUBMITTED": "18/04/19", "DISCREPENCY": "None"},
      {"DOCUMENT": "Packing List", "BENEFICIARY NAME": "Murphy LLC", "SUBMITTED": "18/04/19", "DISCREPENCY": "None"}
  ],
  "currentFlow": "LETTER OF CREDIT & DOCUMENTS FINANCED",
  "lcFlow": 6, 
  "currentDocumentFlow": "LETTER OF CREDIT & DOCUMENTS FINANCED",
  "docFlow": 6,
}
let lcSteps = [{name:'LETTER OF CREDIT PENDING DOCUMENTS SUBMISSION', total:3}, {name:"DOCUMENTS SUBMITTED", total:1}, {name:"FINANCING REQUESTED", total:2}, {name:"PENDING ACCEPTANCE FROM IMPORTER'S BANK", total:1}, {name:"ACCEPTED BY EXPORTER'S BANK", total:2}, {name:"ACCEPTED BY IMPORTER'S BANK", total:2}, {name:"LETTER OF CREDIT & DOCUMENTS FINANCED", total:2}];


  let buttons = [{title: "LETTER OF CREDIT", location:"/advisingLC"}, 
  {title: "DOCUMENTS & FINANCING", location:"/advisingDocs"}, 
  {title: "PAYMENTS", location:"/advisingPayments"}]
export default function() {
  
  let [tabSelected, setTabSelected] = React.useState(0);
  console.log(tabSelected);  

  return (
    <React.Fragment>
      <Container maxWidth="xl"  style={{ padding: 0 }}>
        <AppBar home="/advising" buttons={buttons} hideHeader/>
        <ImporterHeader properties={properties} onSelectChanged={x=>{setTabSelected(x)}} title={["LETTER OF CREDIT", "DOCUMENTS & FINANCING", "PAYMENTS"]}/>                               
        <ViewLC tabSelected={tabSelected} noHeader properties={properties} steps={lcSteps}/>  
        <ViewDoc tabSelected={tabSelected} hideen={tabSelected !== 1} noHeader properties={properties} steps={lcSteps}/>    
      </Container>
    </React.Fragment>
  );
}
