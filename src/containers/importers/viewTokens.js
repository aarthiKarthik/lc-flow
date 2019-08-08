import React from 'react';
import Container from '@material-ui/core/Container';
import AppBar from '../../components/common'
import AssetToken from '../../components/importers/assetTokens'

let structure = [
  {
      name: "RBDPO-1",
      level: 0,
      description: "Some information about the RBDP0-1",
      attributes: {
      },
      children: [
          {
              name: 'CPO-1',
              level: 1,
              attributes: {
              },
              children: [
                  {
                      name: "FFB-1",
                      level: 2,
                      attributes: {
                          "Manufacturer": "SIME DARBY PLANTATION",
                          "Quantity": 100,
                          "UOM": "mt",
                          "Commodity": "Palm Oil",
                          "Certified": "Y",
                          "Class": "FFB-1"
                      }
                  },
                  { name: "FFB-2", level: 2, }
              ]
          },
          {
              name: 'CPO-2',
              level: 1,
              attributes: {
              }
          },
          {
              name: 'CPO-3',
              level: 1,
              attributes: {
              }
          }

      ]
  },
  {
      name: "RBDPO-2",
      level: 0,
      description: "Some information about the RBDP0-2",
      attributes: {
      },
      children: [
          {
              name: 'CPO-1',
              level: 1,
              attributes: {
              },
              children: [
                  {
                      name: "FFB-1",
                      level: 2,
                      attributes: {
                          "Manufacturer": "SIME DARBY PLANTATION",
                          "Quantity": 100,
                          "UOM": "mt",
                          "Commodity": "Palm Oil",
                          "Certified": "Y",
                          "Class": "FFB-1"
                      }
                  },
                  { name: "FFB-2", level: 2, }
              ]
          },
          {
              name: 'CPO-2',
              level: 1,
              attributes: {
              }
          },
          {
              name: 'CPO-3',
              level: 1,
              attributes: {
              }
          }

      ]
  },
  {
      name: "CPO-1",
      level: 0,
      description: "Some information about the CPO-1",
      attributes: {
      },
      children: [
          {
              name: 'CPO-1',
              level: 1,
              attributes: {
              },
              children: [
                  {
                      name: "FFB-1",
                      level: 2,
                      attributes: {
                          "Manufacturer": "SIME DARBY PLANTATION",
                          "Quantity": 100,
                          "UOM": "mt",
                          "Commodity": "Palm Oil",
                          "Certified": "Y",
                          "Class": "FFB-1"
                      }
                  },
                  { name: "FFB-2", level: 2, }
              ]
          },
          {
              name: 'CPO-2',
              level: 1,
              attributes: {
              }
          },
          {
              name: 'CPO-3',
              level: 1,
              attributes: {
              }
          }

      ]
  },
  {
      name: "CPO-2",
      level: 0,
      description: "Some information about the CPO-2",
      attributes: {
      },
      children: [
          {
              name: 'CPO-1',
              level: 1,
              attributes: {
              },
              children: [
                  {
                      name: "FFB-1",
                      attributes: {
                          "Manufacturer": "SIME DARBY PLANTATION",
                          "Quantity": 100,
                          "UOM": "mt",
                          "Commodity": "Palm Oil",
                          "Certified": "Y",
                          "Class": "FFB-1"
                      }
                  },
                  { name: "FFB-2" }
              ]
          },
          {
              name: 'CPO-2',
              level: 1,
              attributes: {
              }
          },
          {
              name: 'CPO-3',
              level: 1,
              attributes: {
              }
          }

      ]
  }
]

export default function() {
  let buttons = [{title: "VIEW ASSET TOKENS", location:"/importersViewAssetTokens"}, 
  {title: "VIEW POs & INVOICES", location:"/importersViewPOs"}, 
  {title: "VIEW LETTER OF CREDIT STATUS", location:"/importersViewLC"}]


  return (
    <React.Fragment>
      <Container maxWidth="xl"  style={{ padding: 0 }}>
        <AppBar buttons={buttons} selected={0}/>
        <div style={{marginLeft:"30px", marginRight: "30px"}}>
          <AssetToken structure={structure}/>
        </div>
      </Container>
    </React.Fragment>
  );
}
