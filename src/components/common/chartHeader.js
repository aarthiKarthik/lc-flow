import React from 'react';
import Container from '@material-ui/core/Container';
import { Grid, Button, Typography } from '@material-ui/core';
import ImpossibleChart from './charting/impossibleLine/app'

export default function (props) {

    return (
        <React.Fragment>
            <Container maxWidth="xl" style={{ padding: 0, marginTop:"48px" }}>
                <Container maxWidth="xl">
                    <Grid container spacing={3}>
                        <Grid item xs={8}>
                            <div style={{position:"relative"}}>
                            <ImpossibleChart>                                
                            </ImpossibleChart>
                                <div style={{position:"absolute", top:"30px"}}>
                                        <Typography component="p" variant="h6" color="textSecondary" paragraph>
                                            AVAILABLE CREDIT LIMIT
                                        </Typography>
                                        <Typography component="p" variant="h4" color="textPrimary" paragraph>
                                            $520,900
                                        </Typography>
                                        <Typography component="p" variant="caption" color="textSecondary" paragraph>
                                            Last 7 Days
                                        </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4} style={{ "padding": "30px" }}>
                            <Button fullWidth style={{ backgroundColor: "#FFB300", color: "white", marginBottom: "20px" }} size="large">{props.button1Text ? props.button1Text : "REQUEST FOR NEW LOAN"}</Button>
                            <Button fullWidth style={{ backgroundColor: "#FFB300", color: "white" }} size="large">{props.button2Text ? props.button2Text : "ISSUE LETTER OF CREDIT"}</Button>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        </React.Fragment>
    );
}
