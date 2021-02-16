import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import GithubIcon from 'mdi-material-ui/Github';
import LinkedInIcon from 'mdi-material-ui/Linkedin';

const useStyles = makeStyles({
  list: {
    width: 200,
  },
  fullList: {
    width: 'auto',
  },
});


const mainTabs = [
  {text: 'Home', href: '#home', icon: <HomeIcon />},
  {text: 'Projects', href: '#home', icon: <InboxIcon />},
  {text: 'Contact', href: '#home', icon: <MailIcon />}
]

const exteriorLinks = [
  {text: 'Github', href: 'https://github.com/mph8344', icon: <GithubIcon />},
  {text: 'LinkedIn', href: 'https://www.linkedin.com/in/mattphills/', icon: <LinkedInIcon />}
]


export default function ResponsiveDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {mainTabs.map(tab => (
          <ListItem button component="a" href={tab.href} key={tab.text}>
            <ListItemIcon>{tab.icon}</ListItemIcon>
            <ListItemText primary={tab.text}/>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {exteriorLinks.map(tab => (
          <ListItem button component="a" href={tab.href} key={tab.text}>
            <ListItemIcon>{tab.icon}</ListItemIcon>
            <ListItemText primary={tab.text}/>
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
        <React.Fragment key={'drawer'}>
         
              <a href="#home" onClick={toggleDrawer('left', true)}>Menu</a>


          <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
            {list('left')}
          </Drawer>
        </React.Fragment>
  );
}
