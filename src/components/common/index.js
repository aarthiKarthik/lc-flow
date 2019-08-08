import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import {Link as ALink} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    textAlign: "center"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function (props) {
  // Declare a new state variable, which we'll call "count"
  const classes = useStyles();
  console.log(props);

  let buttons = props.buttons? props.buttons : []
  let selected = props.selected;

  return (
    <div className={classes.root}>
    <AppBar position="static" color="default" style={{padding:"10px"}}>
      <Toolbar>
        <ALink href={props.home?props.home:"/"}><img src="images/sdp.png" alt="Sime Darby Plantations"/></ALink>
        {
            buttons.map((x)=>{
              let color = "black";
              if (selected >= 0 && buttons[selected].title !== x.title) {
                color = "lightgray";
              }
            return (<ALink key={x.title} style={{color:color}} className={classes.grow} component="a" href={x.location}>{x.title}</ALink>);
            })
        }
        
        <IconButton aria-label="Search" color="inherit">
            <SearchIcon />
        </IconButton>
        <IconButton aria-label="Show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton edge="end" aria-label="Account of current user" color="inherit">
              <AccountCircle />
            </IconButton>
      </Toolbar>
    </AppBar>
    <img src="images/banner.png" alt="banner" style={{display:props.hideHeader?"none":"block", width:"100%", "height":"150px"}}/>
  </div>
  );
}