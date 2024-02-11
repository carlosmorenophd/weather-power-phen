import {
  Box,
  Container,
  Paper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { green, yellow } from "@mui/material/colors";
import React from "react";
import GeoPositionPage from "./components/pages/GeoPositionPage";
import { IntlProvider } from "react-intl";

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

  const messagesEs = {
    "GeoPositionPage.title": "Puntos Georeferenciados",
  };

  return (
    <ThemeProvider theme={outerTheme}>
      <IntlProvider messages={messagesEs} locale="es" defaultLocale="en">
        <Container sx={{ minWidth: 1 }} id="app.container" component={"div"}>
          <Paper sx={{ minWidth: 1 }} id="app.paper">
            <Box sx={{ width: 1 / 4 }} id="app.paper.box.select">
              <GeoPositionPage />
            </Box>
          </Paper>
        </Container>
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
