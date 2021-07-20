import React from 'react';
import CoreRouter from './CoreRouter';

//enabling frontend routing with react router
import { BrowserRouter as Router } from 'react-router-dom';

//acessing to material-ui theme
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme';
import { Paper, Container } from "@material-ui/core";

//import "fontsource-roboto";

//import logo from './logo.svg';
//import './App.css';

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Paper style={{ height: "200vh" }}>
          <Container>
            <CoreRouter />
          </Container>
        </Paper>
      </ThemeProvider>
    </Router>
  )
};

export default App;
