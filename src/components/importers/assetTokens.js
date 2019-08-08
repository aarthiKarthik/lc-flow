import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, Button, Card, CardContent, CardActionArea, CardActions, Paper, Icon, Modal } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import OrgChart from 'react-orgchart';
import 'react-orgchart/index.css';

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

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
};

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        padding:"0px"
    };
}

const useStylesModal = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4),
        outline: 'none',
    },
}));

const MyNodeComponent = ({ node }) => {
    let alpha = 0.7;
    if (node.level > 0) {
        alpha = 1 - 0.45 * node.level;
    }
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const classes = useStylesModal();

    let attributes = node.attributes || null

    return (
        <div>
            <button className="initechNode" style={{
                textAlign: "center",
                borderStyle: "solid",
                borderRadius: "5px",
                borderColor: "orange",
                display: "inline-block",
                padding: "5px",
                backgroundColor: "rgba(245, 171, 53, " + alpha + ")",
                height: "70px",
                width: "120px"
            }} onClick={handleOpen}>
                <Icon>{node.icon || "table"}</Icon>
                <br />
                {node.name}
            </button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={getModalStyle()} className={classes.paper}>
                    <Typography variant="h6" id="modal-title" style={{padding:"10px", color:"white", backgroundColor:"red"}}>
                        {node.name}
                    </Typography>
                    <Paper className={classes.root} style={{margin:"15px"}}>
                        <Table className={classes.table}>
                            <TableHead style={{backgroundColor:"#F6E4CD"}}>
                            <TableRow>
                                <TableCell style={{fontWeight:"bold"}}>Property</TableCell>
                                <TableCell style={{fontWeight:"bold"}}>Value</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {attributes && Object.keys(attributes).map(k => (
                                <TableRow key={k}>
                                <TableCell component="th" scope="row">
                                    {k}
                                </TableCell>
                                <TableCell>{attributes[k]}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </Modal>
        </div>
    );
};

export default function (props) {
    // Declare a new state variable, which we'll call "count"
    const classes = useStyles();

    let struct = props.structure || [];

    let color = ["orange", "salmon", "cyan", "red"];
    let index = 0;

    const [selected, setSelected] = React.useState(-1);

    return (
        <div className={classes.root}>
            <div>
                <Typography component="p" variant="body1" color="textSecondary" paragraph>
                    <b>ASSET TOKENS</b>
                </Typography>
                <List style={flexContainer}>
                    {struct.map(tile => {
                        let isSelected = selected === -1 || selected === index;
                        let myId = index;

                        return (<ListItem disabled={!isSelected} key={tile.name} style={{ padding: "0px" }}>
                            <Card className={classes.block} style={{ padding: "30px", borderTopColor: color[(index++) % color.length] }}>
                                <CardActionArea>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {tile.name}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            {tile.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary" onClick={x=>{setSelected(myId)}}>
                                        Details
                                    </Button>
                                </CardActions>
                            </Card>
                        </ListItem>)
                    })}
                </List>
            </div>
            <Paper className={classes.paper} style={{display:selected !== -1 ? "block" : "none"}}>
                <Typography component="p" variant="body1" color="textSecondary" paragraph align="center">
                    <b>ASSET STRUCTURE</b>
                </Typography>
                <OrgChart tree={struct[selected >= 0 ? selected : 0]} NodeComponent={MyNodeComponent} />
            </Paper>
        </div>
    );
}

