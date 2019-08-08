import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import { StepLabel, Icon, Fab } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop:"48px",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  icons: {
    color: "red",
    padding:"12px"
  }
}));

function getSteps() {
  return ['LETTERS OF CREDIT REQUEST SUBMITTED', "PENDING MANAGER'S APPROVAL", 'PENDING ISSUANCE', 'LETTER OF CREDIT SUBMITTED TO ADVISING BANK', 'LETTER OF CREDIT SUBMITTED TO SELLER'];
}

export default function HorizontalNonLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = props.steps || getSteps();

  React.useEffect(() => {
    setActiveStep(props.flow);

    setCompleted(Array.from(Array(props.flow).keys()));
}, [props.flow])

  return (
    <div className={classes.root} hidden={props.hidden}>
      <Stepper activeStep={activeStep}  alternativeLabel>
        {steps.map((label, index) => {
          let button = <Icon  style={{ fontSize: activeStep === index ? 50 : 30, color: (activeStep >= index ? "#FF6210" : "lightgray")}}>{activeStep === index ? "check_circle" : "brightness_1"}</Icon>;
          if (props.numerical){
            button = (<Fab onClick={x=>{if (props.disabled) return ;setActiveStep(index); props.onSelectionChanged && props.onSelectionChanged(index)}} color="primary" aria-label="Add" size={activeStep === index ? "large":"small"}className={classes.fab} style={{backgroundColor: (activeStep >= index ? "#FF6210" : "lightgray"), color:"white"}}>{props.disabled ? "" : label.total}</Fab>)
          }
          return(
          <Step key={props.numerical?label.name : label} error>
            <StepLabel completed={completed[index]} icon={button} className={{active:classes.icons}}>
              {props.numerical ? label.name : label}
            </StepLabel>            
          </Step>
        )})}
      </Stepper>      
    </div>
  );
}