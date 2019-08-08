import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../components/common'
import CreateLC from '../../components/importers/createLC'

let buttons = [{ title: "VIEW ASSET TOKENS", location: "/importersViewAssetTokens" },
{ title: "VIEW POs & INVOICES", location: "/importersViewPOs" },
{ title: "VIEW LETTER OF CREDIT STATUS", location: "/importersViewLC" }]

let letterOfCredit = [
  {
      section: "CUSTOMER/IMPORTER DETAILS",
      "Name of Company": "VVF (India) Ltd",
      "Address": "XXX, YYY, ZZZ 12345, India",
      "Contact Person": "Mr S. Krishan",
      "Email": "krishan.n@vvf.in",
  },
  {
      section: "LETTER OF CREDIT DETAILS",
      "LC Amount": "USD 10,000/-",
      "Sales Contract ID": "123",
      "Payment Terms": "1/10 NET30",
      "Contract Terms": "TOC-NET30",
  },
  {
      section: "SHIPPING DETAILS",
      "Shipping Company": "Shipping-CO",
      "Shipping Amount": "USD 2,300",
      "Incoterms": "CIF",
      "Port of Origin and Destination": "MYKL-IDJKT",
  },
  {
      section: "BENEFICIARY/EXPORTER DETAILS",
      "Name of Company": "Sime Darby Plantation Bhd(SDP) ",
      "Address": "XXX, YYY, ZZZ 67890, Malaysia",
      "Contact Person": "Ms. Yen Tink Ng",
      "Email": "tink@sdp.com.my",
  },
  {
      section: "BENEFICIARY BANK DETAILS",
      "Bank Name": "HSBC",
      "Bank Number": "123-234-545",
      "Location": "Malaysia",
      "Branch Address": "123, YYY, ZZZ, 67890, Malaysia",
      "SWIFT Code": "AAAAAAAAAAAAA"
  },
]

export default function () {


  return (
    <React.Fragment>
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <AppBar buttons={buttons} selected={2} />
        <div style={{ marginLeft: "30px", marginRight: "30px" }}>
          <CreateLC letterOfCredit={letterOfCredit}/>
        </div>
      </Container>
    </React.Fragment>
  );
}
