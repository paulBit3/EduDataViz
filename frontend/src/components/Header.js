/* Our menu component will function as  a navigation bar at the frontend app */
import React, { useState } from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import StorageIcon from '@material-ui/icons/Storage';
import ExploreTwoToneIcon from '@material-ui/icons/ExploreTwoTone';
import ContactPhoneTwoToneIcon from '@material-ui/icons/ContactPhoneTwoTone';
import InfoTwoToneIcon from '@material-ui/icons/InfoTwoTone';
import Badge from '@material-ui/core/Badge';
import Slide from '@material-ui/core/Slide'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { Link } from 'react-router-dom';
import { Block } from '@material-ui/icons';



/* Style declaration to define css styles(CSS-in-JS) for the component.
    makeStyles is a custom React hook API */

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        backgroundColor: '#7fc7d9',
        backgroundImage: 'linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)',
        height: 50,
    },
    menu: {
        backgroundColor: '#ec8c69!important',
        '&:hover': {
            backgroundColor: '#ff3366',
            color: '#707070!important',
          },
        height: 30,
        lineHeight: 10,
        padding: '0.525rem 0',
          '&:after':{
            transform: 'scale(0)',
            transition: 'transform 0.2s ease',
          },
          '&:hover:after': {
              transform: 'scale(1)',
            },
        
        transition: 'all 0.5s ease',

        // marginRight: theme.spacing(2),
        // marginBottom: theme.spacing(2),
    },
    buttonText: {
        color: theme.palette.primary.contrastText,
    },
    btnOutlineSM: {
        marginTop: '2px',
        marginBottom: '0',
        marginLeft: '0.5rem',
        // padding: '0.875rem 1.5rem 0.875rem 1.5rem',
        borderStyle: '0.125rem solid #FFF',
        //borderRadius: '2rem',
        color: '#FFF',
        transition: 'all 0.2s',
        '&:hover fieldset': {
            borderColor: '#ff3366',
            backgroundColor: '#5f4dee',
          },
    }
}));


//handling scrolling page
function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    return (
        <Slide appear ={false} direction={ "down" } in={!trigger}>
          {children}
        </Slide>
    );
}


const Header = (props) => {
    const classes = useStyles();
    const [anchor, setAnchor] = useState(null);
    //const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchor);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    // const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = (event) => {
      setAnchor(event.currentTarget);
      //setAnchorEl(event.currentTarget);
      //setMenuOpen(true);
    };

    /*const handleClose = () => {
        setMenuOpen(false);
    };*/

        return (
          <div className={classes.root}>
            <HideOnScroll {...props}>
                <AppBar className={classes.appBar} position='fixed'>
                    <Toolbar>
                        <Typography 
                          variant="h6"
                          component="p"
                          color="textSecondary"
                          className = {classes.title}
                          noWrap>
                            EduDataViz
                        </Typography>
                        {isMobile ? (
                            <>
                              <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenu}
                              >
                               <MenuIcon />
                              </IconButton>
                              <Menu
                                id= "menu-appbar"
                                anchorEl={anchor}
                                anchorOrigin={{
                                  vertical: "top",
                                  horizontal: "right"
                                }}
                                KeepMounted
                                transformOrigin={{ 
                                  vertical: "top",
                                  horizontal: "right" 
                                }}
                                open = {open}                                  
                              >
                                <MenuItem 
                                 onClick={() => setAnchor(null)}
                                 component = {Link}
                                 to="/"
                                >
                                  <IconButton aria-label="Home">
                                    <HomeIcon />
                                  </IconButton>
                                  <Typography variant="h6"> Home</Typography>
                                </MenuItem>

                                <MenuItem
                                  onClick={() => setAnchor(null)}
                                  component={Link}
                                  to="/Explore"
                                >
                                  <IconButton>
                                    <ExploreTwoToneIcon />
                                  </IconButton>
                                  <Typography variant="h6"> Explore </Typography>
                                </MenuItem>

                                <MenuItem
                                  onClick={() => setAnchor(null)}
                                  component={Link}
                                  to="/DataFlow"
                                >
                                  <IconButton>
                                    <StorageIcon />
                                  </IconButton>
                                  <Typography variant="h6"> DataFlow </Typography>
                                </MenuItem>

                                <MenuItem
                                  onClick={() => setAnchor(null)}
                                  component={Link}
                                  to="/About"
                                >
                                  <IconButton>
                                     <InfoTwoToneIcon />
                                  </IconButton>
                                  <Typography variant="h6"> About </Typography>
                                </MenuItem>

                                <MenuItem
                                  onClick={() => setAnchor(null)}
                                  component={Link}
                                  to="/Contact"
                                >
                                  <IconButton>
                                     <ContactPhoneTwoToneIcon />
                                  </IconButton>
                                  <Typography variant="h6"> Contact </Typography>
                                </MenuItem>

                              </Menu>
                            </>
                           ):(
                            <div style={{ marginRight: "2rem" }}>
                              <Button
                                variant="text"
                                component={Link}
                                to="/"
                                color="default"
                                className={classes.menu}
                              >
                                <HomeIcon />
                              </Button>
                              <Button
                                variant="text"
                                component={Link}
                                to="/Explore"
                                color="default"
                              >
                                <ExploreTwoToneIcon />
                                Explore
                              </Button>
                              <Button
                                variant="text"
                                component={Link}
                                to="/DataFlow"
                                color="default"
                              >
                                <StorageIcon />
                                DataFlow
                              </Button>
                              <Button
                                variant="text"
                                component={Link}
                                to="/About"
                                color="default"
                              >
                                <InfoTwoToneIcon />
                                About
                              </Button>
                              <Button
                                variant="text"
                                component={Link}
                                to="/Contact"
                                color="default"
                              >
                                <ContactPhoneTwoToneIcon />
                                Contact
                              </Button>
                            </div>
                        )}
                        
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
          </div>
        );
        
};
export default Header;