import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../components/common';
import ChartHeader from '../../components/common/chartHeader';
import ViewDocs from '../../components/bankAdvising/viewDocContainer';

let lcSteps = [
  {
    name: 'LETTER OF CREDIT PENDING DOCUMENTS SUBMISSION', total: 3, actions: { "upload": true, "text": true },
    docs: [{ "BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT": "128-2192-391", "ISSUANCE DATE": "18/04/19", "DOCUMENTS": "Packing List, Invoice Copy, Bill of Lading, Certificate ...", "AMOUNT": "$80,000" },
    { "BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT": "128-2192-391", "ISSUANCE DATE": "18/04/19", "DOCUMENTS": "Packing List, Invoice Copy, Bill of Lading, Certificate ...", "AMOUNT": "$80,000" },
    { "BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT": "128-2192-391", "ISSUANCE DATE": "18/04/19", "DOCUMENTS": "Packing List, Invoice Copy, Bill of Lading, Certificate ...", "AMOUNT": "$80,000" }]
  },
  {
    name: "DOCUMENTS SUBMITTED", total: 1, actions: { "details": true },
    docs: [{ "BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT": "128-2192-391", "ISSUANCE DATE": "18/04/19", "DOCUMENTS": "Packing List, Invoice Copy, Bill of Lading, Certificate ...", "AMOUNT": "$80,000" }]
  },
  {
    name: "FINANCING REQUESTED", total: 2, actions: { "details": true },
    docs: [{ "BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT": "128-2192-391", "ISSUANCE DATE": "18/04/19", "DOCUMENTS": "Packing List, Invoice Copy, Bill of Lading, Certificate ...", "AMOUNT": "$80,000" },
    { "BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT": "128-2192-391", "ISSUANCE DATE": "18/04/19", "DOCUMENTS": "Packing List, Invoice Copy, Bill of Lading, Certificate ...", "AMOUNT": "$80,000" }]
  },
  {
    name: "PENDING ACCEPTANCE FROM IMPORTER'S BANK", total: 1, actions: { "details": true },
    docs: [{ "BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT": "128-2192-391", "ISSUANCE DATE": "18/04/19", "DOCUMENTS": "Packing List, Invoice Copy, Bill of Lading, Certificate ...", "AMOUNT": "$80,000" },
    { "BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT": "128-2192-391", "ISSUANCE DATE": "18/04/19", "DOCUMENTS": "Packing List, Invoice Copy, Bill of Lading, Certificate ...", "AMOUNT": "$80,000" },
    { "BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT": "128-2192-391", "ISSUANCE DATE": "18/04/19", "DOCUMENTS": "Packing List, Invoice Copy, Bill of Lading, Certificate ...", "AMOUNT": "$80,000" }]
  },
  {
    name: "ACCEPTED BY EXPORTER'S BANK", total: 2, action: { "details": true },
    docs: [{ "BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT": "128-2192-391", "ISSUANCE DATE": "18/04/19", "DOCUMENTS": "Packing List, Invoice Copy, Bill of Lading, Certificate ...", "AMOUNT": "$80,000" },
    { "BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT": "128-2192-391", "ISSUANCE DATE": "18/04/19", "DOCUMENTS": "Packing List, Invoice Copy, Bill of Lading, Certificate ...", "AMOUNT": "$80,000" }]
  },
  { name: "ACCEPTED BY IMPORTER'S BANK", total: 2, action: { "details": true },
  docs: [{ "BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT": "128-2192-391", "AMOUNT": "$80,000", "FINANCING RATE": "2.65%", "TENOR": "90 days", "DUE DATE": "14/05/2019" },
  { "BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT": "128-2192-391", "AMOUNT": "$80,000", "FINANCING RATE": "2.65%", "TENOR": "90 days", "DUE DATE": "14/05/2019" },
  ]},
  {
    name: "LETTER OF CREDIT & DOCUMENTS FINANCED", total: 2, action: { "details": true },
    docs: [{ "BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT": "128-2192-391", "AMOUNT": "$80,000", "FINANCING RATE": "2.65%", "TENOR": "90 days", "DUE DATE": "14/05/2019" },
    { "BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT": "128-2192-391", "AMOUNT": "$80,000", "FINANCING RATE": "2.65%", "TENOR": "90 days", "DUE DATE": "14/05/2019" },
    { "BENEFICIARY NAME": "Murphy LCC", "LETTER OF CREDIT": "128-2192-391", "AMOUNT": "$80,000", "FINANCING RATE": "2.65%", "TENOR": "90 days", "DUE DATE": "14/05/2019" },
    ]
  }
];

export default function () {


  let buttons = [{ title: "LETTER OF CREDIT", location: "/advisingLC" },
  { title: "DOCUMENTS & FINANCING", location: "/advisingDocs" },
  { title: "PAYMENTS", location: "/advisingPayments" }]

  return (
    <React.Fragment>
      <Container maxWidth="xl" style={{ padding: 0 }}>
        <AppBar home="/advising" buttons={buttons} hideHeader selected={1} />
        <Container maxWidth="xl">
          <ChartHeader />
        </Container>
        <Container maxWidth="xl">
          <ViewDocs steps={lcSteps}/>
        </Container>

      </Container>
    </React.Fragment>
  );
}
