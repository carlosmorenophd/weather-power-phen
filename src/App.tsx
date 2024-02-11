import { Box, Container, Grid, Paper, ThemeProvider, createTheme } from '@mui/material';
import { green, yellow } from '@mui/material/colors';
import React from 'react';

function App() {

  const outerTheme = createTheme({
    palette: {
      primary: {
        main: green[500],
      },
      secondary: {
        main: yellow[500],
      },
    },
  });

  return (
    <ThemeProvider theme={outerTheme}>
      <Container sx={{ minWidth: 1 }} id='app.contianer' component={'div'}>
        <Paper sx={{ minWidth: 1 }} id='app.paper'>
          <Box sx={{ width: 1 / 4 }} id='app.paper.box.select'>
            Select position
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
