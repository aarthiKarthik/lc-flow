import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../components/common'
import AssetToken from '../../components/exporters/assetTokens'
import AssetDetails from '../../components/exporters/assetDetails'

let assets = [
    {
        name: "FFB-1",
        level: 0,
        description: "Some information about the RBDP0-2",
        attributes: {
        },
    },{
        name: "FFB-2",
        level: 0,
        description: "Some information about the RBDP0-2",
        attributes: {
        },
    },{
        name: "FFB-3",
        level: 0,
        description: "Some information about the RBDP0-2",
        attributes: {
        },
    },{
        name: "CPO-1",
        level: 0,
        description: "Some information about the RBDP0-2",
        attributes: {
        },
    },{
        name: "CPO-2",
        level: 0,
        description: "Some information about the RBDP0-2",
        attributes: {
        },
    },{
        name: "CPO-3",
        level: 0,
        description: "Some information about the RBDP0-2",
        attributes: {
        },
    },{
        name: "RBDPO-1",
        level: 0,
        description: "Some information about the RBDP0-2",
        attributes: {
        },
    },{
        name: "RBDPO-2",
        level: 0,
        description: "Some information about the RBDP0-2",
        attributes: {
        },
    },
]


let structure = [
    {
        name: "TENNAMARAM",
        level: 0,
        description: "Some information about the RBDP0-1",
        attributes: {
        },
        assets: assets.slice(0, 3)
    },
    {
        name: "3RD PARTY ESTATE-1",
        level: 0,
        description: "Some information about the RBDP0-1",
        attributes: {
        },
        assets: assets.slice(3, 5)
    },
    {
        name: "3RD PARTY ESTATE-2",
        level: 0,
        description: "Some information about the RBDP0-1",
        attributes: {
        },
        assets: assets.slice(1, 8)
    },
    {
        name: "TENNAMARAM OM",
        level: 0,
        description: "Some information about the RBDP0-1",
        attributes: {
        },
        assets: assets.slice(4, 5)
    },
    {
        name: "JABOR OM",
        level: 0,
        description: "Some information about the RBDP0-1",
        attributes: {
        },
        assets: assets.slice(0, 7)
    },
    {
        name: "FGV MEMPAGA OM",
        level: 0,
        description: "Some information about the RBDP0-1",
        attributes: {
        },
        assets: assets.slice(1, 5)
    },
    {
        name: "PORT KLANG REFINERY",
        level: 0,
        description: "Some information about the RBDP0-2",
        attributes: {
        },
        assets: assets
    },
]

let buttons = [{ title: "VIEW ASSETS INVENTORY", location: "/exportersViewAssets" },
{ title: "VIEW INVOICES", location: "/exportersViewInvoices" },
{ title: "VIEW LETTER OF CREDIT STATUS", location: "/exportersViewLCStatus" }];

let customers = [{title:"VVF India"},{title:"JOCIL LIMITED"},{title:"EMERY OLEOCHEMICAL"},{title:"OIL BASE INDIA"},]
export default function () {

    const [selected, setSelected] = React.useState({})
    console.log(selected);
    return (
        <React.Fragment>
            <Container maxWidth="xl" style={{ padding: 0 }}>
                <AppBar home="/exporters" buttons={buttons} selected={0} />
                <div style={{ marginLeft: "30px", marginRight: "30px" }}>
                    <AssetToken display={selected.assets?"none":"block"} structure={structure} onSelectionChanged={setSelected}/>
                    <AssetDetails display={!selected.assets?"none":"block"} structure={selected.assets ? selected.assets : []} selected={selected} customers={customers} />
                </div>
            </Container>
        </React.Fragment>
    );
}
