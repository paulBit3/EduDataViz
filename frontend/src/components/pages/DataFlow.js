import { Box, Typography, useMediaQuery, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExploreTwoToneIcon from "@material-ui/icons/ExploreTwoTone";
import ContactPhoneTwoToneIcon from '@material-ui/icons/ContactPhoneTwoTone';










const DataFlow = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <div>
      <Box py={20} textAlign="center">
        <Typography variant="h2">School data flow.</Typography> <br/>
        <Typography variant="h5">Here is an overview of all the data presented for this school.</Typography>
      </Box>
      {isMobile ? (
        <Grid container justify="space-between">
          <Grid item>
            <Button variant="contained" color="primary" component={Link} to="/Explore">
              <ChevronLeftIcon />
              <Typography variant="button">Explore</Typography>
              <ExploreTwoToneIcon style={{ marginLeft: 15 }} />
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/Contact"
            >
              <ContactPhoneTwoToneIcon style={{ marginRight: 15 }} />
              <Typography variant="button">Contact</Typography>
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
export default DataFlow;
