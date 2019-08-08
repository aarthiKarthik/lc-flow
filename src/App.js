import React from 'react';
import Importer from './containers/importers';
import ImporterViewTokens from './containers/importers/viewTokens';
import ImporterViewPO from './containers/importers/viewPO';
import ImporterViewLC from './containers/importers/viewLC';
import ImporterCreateLC from './containers/importers/createLC';
import Exporter from './containers/exporters';
import ExporterViewAssets from './containers/exporters/viewAssets';
import ExporterViewAInvoices from './containers/exporters/viewInvoices';
import ExporterViewLCStatus from './containers/exporters/viewLCStatus';

import Advising from './containers/bankAdvising';
import AdvisingLC from './containers/bankAdvising/letterOfCredit';
import AdvisingImporterLC from './containers/bankAdvising/importerLCView';
import AdvisingPayment from './containers/bankAdvising/payments';

import Issuing from './containers/bankIssuing';
import IssuingLC from './containers/bankIssuing/letterOfCredit';
import IssuingDoc from './containers/bankIssuing/documentView'
import IssuingImporterLC from './containers/bankIssuing/importerLCView';

import Login from './containers/login';

import { BrowserRouter as Router, Route } from "react-router-dom";

export default function FixedContainer() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/importers" component={Importer} />
        <Route path="/importersViewAssetTokens" component={ImporterViewTokens} />
        <Route path="/importersViewPOs" component={ImporterViewPO} />
        <Route path="/importersViewLC" component={ImporterViewLC} />
        <Route path="/importersCreateLC" component={ImporterCreateLC} />

        <Route path="/exporters" component={Exporter} />
        <Route path="/exportersViewAssets" component={ExporterViewAssets} />
        <Route path="/exportersViewInvoices" component={ExporterViewAInvoices} />
        <Route path="/exportersViewLCStatus" component={ExporterViewLCStatus} />

        <Route path="/advising" component={Advising} />
        <Route path="/advisingLC" component={AdvisingLC} />
        <Route path="/advisingDocs" component={AdvisingPayment} />
        <Route path="/advisingPayments" component={Advising} />
        <Route path="/advisingImporterLC" component={AdvisingImporterLC} />
        <Route path="/advisingImporterDoc" component={AdvisingImporterLC} />
        
        <Route path="/issuing" component={Issuing} />
        <Route path="/issuingLC" component={IssuingLC} />
        <Route path="/issuingDocs" component={IssuingDoc} />
        <Route path="/issuingPayments" component={Issuing} />
        <Route path="/issuingImporterLC" component={IssuingImporterLC} />
        <Route path="/issuingImporterDoc" component={IssuingImporterLC} />
      </div>
    </Router>
  );
}
