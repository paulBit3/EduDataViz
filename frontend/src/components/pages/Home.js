import { Box, Typography, useMediaQuery, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ExploreTwoToneIcon from '@material-ui/icons/ExploreTwoTone';







const Home = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <div>
      <Box py={20} textAlign="center">
        <Typography variant="h2">Here is a recent school year Data . </Typography>
      </Box>
      {isMobile ? (
        <Box textAlign="right">
          <Button
            component={Link}
            variant="contained"
            color="primary"
            to="/Explore"
          >
            <ExploreTwoToneIcon style={{ marginRight: 15 }} />
            <Typography variant="button">Explore</Typography>
            <ChevronRightIcon />
          </Button>
        </Box>
      ) : (
        <> </>
      )}
    </div>
  );
};
export default Home;
