import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../components/common'
import ViewLCStatus from '../../components/importers/viewLCStatus'

let buttons = [{ title: "VIEW ASSET TOKENS", location: "/importersViewAssetTokens" },
{ title: "VIEW POs & INVOICES", location: "/importersViewPOs" },
{ title: "VIEW LETTER OF CREDIT STATUS", location: "/importersViewLC" }]

let letterOfCredit = [{  
  "SNo": 1,
  "LC ID": "BK-WQR",
  "PO ID": "AB1234",
  "Amount": 10000,
  "Terms":"",
  "Incoterms":"CIF",
  "Status":"LC REQUEST SUBMITTED"
}];

let offers = [{title:"SIME DARBY - 1", status:"Pending Issuance", flow: 0, lc: [{  
  "SNo": 2,
  "LC ID": "BK-WQR",
  "PO ID": "AB1234",
  "Amount": 10000,
  "Terms":"",
  "Incoterms":"CIF",
  "Status":"LC REQUEST SUBMITTED"
}]},
{title:"SIME DARBY - 2", status:"Pending Issuance", flow: 0, lc: [{  
  "SNo": 3,
  "LC ID": "BK-WQR2",
  "PO ID": "AB12342",
  "Amount": 10760,
  "Terms":"",
  "Incoterms":"CIF",
  "Status":"LC REQUEST SUBMITTED"
}]},
{title:"SIME DARBY - 3", status:"Pending Approval", flow: 1, lc: [{  
  "SNo": 4,
  "LC ID": "BK-WQR3",
  "PO ID": "AB12343",
  "Amount": 10880,
  "Terms":"",
  "Incoterms":"CIF",
  "Status":"LC PENDING APPROVAL"
}]},
{title:"SIME DARBY - 4", status:"Pending Issuance", flow: 3, lc: [{  
  "SNo": 5,
  "LC ID": "BK-WQR4",
  "PO ID": "AB12344",
  "Amount": 100087,
  "Terms":"",
  "Incoterms":"CIF",
  "Status":"PENDING ISSUANCE"
}]},
{title:"SIME DARBY - 5", status:"Pending Issuance", flow: 0, lc: [{  
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
        <AppBar buttons={buttons} selected={2} />
        <div style={{ marginLeft: "30px", marginRight: "30px" }}>
          <ViewLCStatus offers={offers} letterOfCredit={letterOfCredit}/>
        </div>
      </Container>
    </React.Fragment>
  );
}
