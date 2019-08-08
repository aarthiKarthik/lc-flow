import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, CardActionArea, CardActions, Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        paddingTop: "20px"
    },
    paper: {
        marginTop: "60px",
        padding: "30px"
    },
    grow: {
        flexGrow: 1,
        padding: "24px",
        marginBottom: "20px"
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
    block: {
        borderTopStyle: "solid",
        borderTopWidth: "5px"
    }
}));

export default function (props) {
    // Declare a new state variable, which we'll call "count"
    const classes = useStyles();

    let struct = props.structure || [];

    let color = ["#E53231", "#E65E5D", "#FA9695", "#F8CCCC", "#FFB300", "#FAC340", "#F8DA91"];
    let index = 0;

    const [selected, setSelected] = React.useState(-1);

    const handleOpen = (x) => {
        setSelected(x);
        props.onSelectionChanged(struct[x]);
    };

    return (
        <div className={classes.root} style={{display: props.display}}>
            <div>
                <Typography component="p" variant="body1" color="textSecondary" paragraph>
                    <b>ASSET</b>
                </Typography>

                <Grid container spacing={4}>  
                    {struct.map(tile => {
                        let isSelected = selected === -1 || selected === index;
                        let myId = index;

                        return (<Grid item xs={3} disabled={!isSelected} key={tile.name} >
                            <Card className={classes.block} style={{ borderTopColor: color[(index++) % color.length] }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2" align="center">
                                            {tile.name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={x=>{handleOpen(myId)}}>
                                        Details
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>)
                    })}
                </Grid>
            </div>
        </div>
    );
}

