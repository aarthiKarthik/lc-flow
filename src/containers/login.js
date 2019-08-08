import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { InputAdornment, Icon } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url("/images/loginsplash.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'black',

        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'lightgray',
            },
            '&:hover fieldset': {
                borderColor: 'black',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#E82934',
            },
        },
    },
})(TextField);

export default function SignInSide() {
    const classes = useStyles();

    const [error, setError] = React.useState(false);
    // Declare our state variable called values
    // Initialize with our default values

    const [values, setValues] = React.useState("")

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues(value);
        setError(false);
        console.log(name);
    }
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <img src="/images/banner-logo.png" alt="logo" />
                    <form className={classes.form} noValidate style={{ marginLeft: "50%" }}>
                        <CssTextField
                            error={error}
                            onChange={handleInputChange}
                            value={values}
                            style={{ backgroundColor: "white" }}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" style={{ color: "red" }}>
                                        <Icon>email</Icon>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <CssTextField
                            error={error}
                            style={{ backgroundColor: "white" }}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" style={{ color: "red" }}>
                                        <Icon>lock</Icon>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.submit}
                            onClick={x=>{
                                if (values === "exporter") {
                                    window.location = "/exporters";
                                }
                                else if (values === "importer") {
                                    window.location = "/importers";
                                }
                                else if (values === "advising") {
                                    window.location = "/advising";                                    
                                }
                                else if (values === "issuing") {
                                    window.location = "/issuing";
                                }
                                else {
                                    setError(true);
                                }
                            }}
                        >
                            Sign In
                        </Button>
                        <Typography color="textSecondary" variant="subtitle1">
                            Hint: exporter, importer, advising, issuing
            </Typography>
                    </form>
                </div>
            </Grid>
            <Grid item xs={false} sm={4} md={7} className={classes.image} />

        </Grid>
    );
}