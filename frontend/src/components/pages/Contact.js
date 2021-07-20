import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Box, Typography, useMediaQuery, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import StorageIcon from '@material-ui/icons/Storage';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

// import FacebookIcon from '@material-ui/icons/Facebook';
// import YouTubeIcon from '@material-ui/icons/YouTube';
// import InstagramIcon from '@material-ui/icons/Instagram';







const useStyles = makeStyles(theme => ({
  title: {
    color: theme.palette.primary.main,
    fontSize: '25px',
    fontWeight: '40px',
  },
  email: {
    padding: `${theme.spacing(1)}px`,
    color: theme.palette.secondary.main,
    fontSize: '18px',
    fontWeight: '50px',
  },
}));




const Contact = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <div>
      <Box py={20} textAlign="center">
        <Typography variant="h2">Let's data together !</Typography> <br/>
        <Typography variant="h5" className={classes.title}>Edu Data Viz </Typography> <Typography> wants to work better to present reliable school data .</Typography> <br/>
        <Typography variant="h5">Get in touch with us at </Typography>
        <Typography variant="h5" className={classes.email}> paultechnologie@gmail.com</Typography> <br/>
        <Typography variant="h5">Follows us on <TwitterIcon /> <LinkedInIcon />.</Typography>
      </Box>
      {isMobile ? (
        <Grid container justify="space-between">
          <Grid item>
            <Button variant="contained" color="primary" component={Link} to="DataFlow">
              <ChevronLeftIcon />
              <Typography variant="button">Data Flow</Typography>
              <StorageIcon style={{ marginLeft: 15 }} />
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/About"
            >
              <InfoTwoToneIcon style={{ marginRight: 15 }} />
              <Typography variant="button">About</Typography>
              <ChevronRightIcon />
            </Button>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Contact;
