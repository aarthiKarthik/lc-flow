import React from 'react';

import Container from '@material-ui/core/Container';
import AppBar from '../../components/common'
import ViewLCStatus from '../../components/importers/viewLCStatus'

let buttons = [{ title: "VIEW ASSETS INVENTORY", location: "/exportersViewAssets" },
{ title: "VIEW INVOICES", location: "/exportersViewInvoices" },
{ title: "VIEW LETTER OF CREDIT STATUS", location: "/exportersViewLCStatus" }];

let letterOfCredit = [{  
  "SNo": 1,
  "LC ID": "BK-WQR",
  "PO ID": "AB1234",
  "Amount": 10000,
  "Terms":"",
  "Incoterms":"CIF",
  "Status":"LC REQUEST SUBMITTED"
}];

let offers = [{title:"VVF INDIA", status:"Pending Issuance", flow: 0, lc: [{  
  "SNo": 2,
  "LC ID": "BK-WQR",
  "PO ID": "AB1234",
  "Amount": 10000,
  "Terms":"",
  "Incoterms":"CIF",
  "Status":"LC REQUEST SUBMITTED"
}]},
{title:"UNIVERSAL BIOFUELS LTD", status:"Pending Issuance", flow: 0, lc: [{  
  "SNo": 3,
  "LC ID": "BK-WQR2",
  "PO ID": "AB12342",
  "Amount": 10760,
  "Terms":"",
  "Incoterms":"CIF",
  "Status":"LC REQUEST SUBMITTED"
}]},
{title:"JOCIL LIMITED", status:"Pending Approval", flow: 1, lc: [{  
  "SNo": 4,
  "LC ID": "BK-WQR3",
  "PO ID": "AB12343",
  "Amount": 10880,
  "Terms":"",
  "Incoterms":"CIF",
  "Status":"LC PENDING APPROVAL"
}]},
{title:"EMERY OLEOCHEMICALS", status:"LC RECEIVED", highlight: true, flow: 4, lc: [{  
  "SNo": 5,
  "LC ID": "BK-WQR4",
  "PO ID": "AB12344",
  "Amount": 100087,
  "Terms":"",
  "Incoterms":"CIF",
  "Status":"PENDING ISSUANCE"
}]},
{title:"OIL BASE INDIA", status:"Pending Issuance", flow: 0, lc: [{  
  "SNo": 6,
  "LC ID": "BK-WQR5",
  "PO ID": "AB12345",
  "Amount": 10700,
  "Terms":"",
  "Incoterms":"CIF",
  "Status":"LC REQUEST SUBMITTED"
}]},
{title:"INDO AMINES LTD", status:"Pending Issuance", flow: 0, lc: [{  
    "SNo": 6,
    "LC ID": "BK-WQR5",
    "PO ID": "AB12345",
    "Amount": 10700,
    "Terms":"",
    "Incoterms":"CIF",
    "Status":"LC REQUEST SUBMITTED"
  }]}]

export default function () {


  return (
    <React.Fragment>
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <AppBar home="/exporters"  buttons={buttons} selected={2} />
        <div style={{ marginLeft: "30px", marginRight: "30px" }}>
          <ViewLCStatus offers={offers} letterOfCredit={letterOfCredit} nextAction="GENERATE SHIPPING INFORMATION"/>
        </div>
      </Container>
    </React.Fragment>
  );
}
