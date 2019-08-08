import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, Paper, Icon, Grid, Radio, RadioGroup, FormControlLabel, CircularProgress } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: "20px"
    },
    paper: {
        marginTop: "40px",
        padding: "30px",
        borderTopColor: "red",
        borderTopStyle: "solid",
        borderTopWidth: "3px"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light
    },
    titleBar: {
    },
}));

export default function (props) {
    // Declare a new state variable, which we'll call "count"
    const classes = useStyles();

    let struct = props.structure || [];
    let customer = props.customers || [];
    let index = 0;

    const [selected, setSelected] = React.useState(-1);

    const [selectTransferToken, setSelectedTransferToken] = React.useState(null);

    const [selectCustomer, setSelectedCustomer] = React.useState(null);
    const [sendToken, setSendToken] = React.useState(false);
    const [reset, setReset] = React.useState(false);
        
    const [open, setOpen] = React.useState(false);
    const [minting, setMinting] = React.useState(false);

    React.useEffect(
        ()=>{
            setSelected(-1);
            setSelectedTransferToken(null);
            setSelectedCustomer(null);
            setSendToken(false);
            setOpen(false);
            //setMinting(false)
        },
        [reset]
    )

    React.useEffect(
        ()=>{setSelected(props.selected)},
        [props.selected]
    );

    React.useEffect(
        () => {
          console.log("Timer started...? should on run if minting changes")
          let timer1 = -1;
          if (minting) {
            timer1 = setTimeout(() => setSendToken(true), 2000)
          }

          // this will clear Timeout when component unmont like in willComponentUnmount
          return () => {
            clearTimeout(timer1)
          }
        },
        [minting] //useEffect will run only one time
           //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
      )

    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    function handleCloseMinting() {
        setMinting(false);
    }

    console.log(minting, sendToken);

    return (
        <div className={classes.root} style={{display: props.display}}>
            <div>
                <Typography component="p" variant="body1" color="textSecondary" paragraph>
                    <b>ASSET TOKEN DETAILS</b>
                </Typography>

                <Paper className={classes.paper} style={{ display: selected ? "block" : "none" }}>
                    <Typography component="p" variant="body1" color="primary" align="center" paragraph>
                        <b>{selected ? selected.name : ""}</b>
                    </Typography>
                    <RadioGroup onChange={(e, x)=>{setSelectedTransferToken(x)}}>
                        <Grid container spacing={6}>
                            {struct.map(tile => {
                                let isSelected = selected === -1 || selected === index;
                                
                                return (<Grid item xs={6} disabled={!isSelected} key={tile.name} >
                                    <Card className={classes.block}>

                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2" align="left">
                                                {tile.name}
                                                <FormControlLabel style={{ float: "right" }} value={tile.name} control={<Radio />} />
                                                <div style={{ "clear": "both" }}></div>
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>)
                            })}
                        </Grid>
                    </RadioGroup>
                    <div style={{ marginTop: "30px", textAlign: "center" }}>
                        <Button variant="contained" color="secondary" className={classes.button} style={{ marginRight: "20px" }}>MINT PRIVATE TOKEN</Button>
                        <Button variant="contained" color="secondary" disabled={!selectTransferToken} className={classes.button} style={{ marginRight: "20px" }} onClick={x => handleClickOpen()}>TRANSFER PRIVATE TOKEN</Button>
                        <Button variant="contained" color="secondary" className={classes.button}>JOIN TOKEN</Button>
                    </div>

                    <Dialog maxWidth="lg" fullWidth open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title" align="center">SELECT LOCATION TO TRANSFER</DialogTitle>
                        <DialogContent>
                            <RadioGroup onChange={(e, x)=>{setSelectedCustomer(x)}}>
                                <Grid container spacing={2}>
                                    {customer.map(tile => {
                                        let isSelected = selected === -1 || selected === index;
                                        
                                        return (<Grid item xs={6} disabled={!isSelected} key={tile.title} >
                                            <Card className={classes.block}>

                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2" align="left">
                                                        {tile.title}
                                                        <FormControlLabel style={{ float: "right" }} value={tile.title} control={<Radio />} />
                                                        <div style={{ "clear": "both" }}></div>
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>)
                                    })}
                                </Grid>
                            </RadioGroup>
                            <div style={{ marginTop: "40px", marginBottom: "20px", textAlign: "center" }}>
                                <Button variant="contained" color="secondary" disabled={!selectCustomer} className={classes.button} style={{ marginRight: "20px" }} onClick={x => { setOpen(false); setMinting(true); }}>TRANSFER PRIVATE TOKEN</Button>
                            </div>
                        </DialogContent>
                    </Dialog>

                    <Dialog maxWidth="lg" fullWidth open={minting} onClose={handleCloseMinting} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title" align="center">TRANSFER PRIVATE TOKEN</DialogTitle>
                        <DialogContent style={{margin:"30px"}}>                                                          
                            <Grid container spacing={6}>
                                <Grid item xs={6} key="tx-asset-container">
                                    <Grid container spacing={4}>    
                                        <Grid item xs={12} key="tx-asset-1" >
                                            <Card className={classes.block}>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2" align="left">
                                                        {selectTransferToken}
                                                        <Icon style={{float:"right", color:"green", fontSize:"48px"}} className={classes.progress}>check_circle_outline</Icon>
                                                        <div style={{ "clear": "both" }}></div>
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12} key="tx-asset-3" >
                                            <Card className={classes.block}>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h5" component="h2" align="left">
                                                        {selectCustomer}
                                                        <Icon style={{float:"right", color:"green", fontSize:"48px"}} className={classes.progress}>check_circle_outline</Icon>
                                                        <div style={{ "clear": "both" }}></div>
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={6} key="tx-asset-2" >
                                    <Card className={classes.block} style={{"height": "200px", width:"200px", margin:"auto"}}>
                                        <CardContent style={{marginTop:"20px"}}>
                                            <Typography gutterBottom variant="subtitle1" component="div" align="center">
                                                <CircularProgress style={{display:sendToken?"none":"inline-block"}} className={classes.progress} color="secondary" />      
                                                <Icon style={{display:!sendToken?"none":"inline-block",color:"green", fontSize:"48px"}} className={classes.progress}>check_circle_outline</Icon>
                                                
                                                <br/>                                              
                                                ASSET TRANSFERRED TO {selectCustomer}                                                    
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>                                    
                            </Grid>
                            
                            <div style={{ marginTop: "40px", marginBottom: "20px", textAlign: "center" }}>
                                <Button disabled={!selectCustomer} variant="contained" color="secondary" className={classes.button} style={{ marginRight: "20px" }} onClick={x => { setMinting(false); setReset(!reset); }}>CLOSE</Button>
                            </div>
                        </DialogContent>
                    </Dialog>
                </Paper>
            </div>
        </div>
    );
}

