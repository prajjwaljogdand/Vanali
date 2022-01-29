import "./Statics/scss/App.scss";
import "./Statics/scss/App.scss";
import "./Statics/scss/progressLoader.scss";
import Homepage from "./Webpages/Homepage";
import Navbar from "./Components/Navbar";
import { Paper } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getColorTheme from "./Components/getColorTheme";

function App() {
  const darkModeTheme = createTheme(getColorTheme("dark"));
  return (
    <div className="App">
      <ThemeProvider theme={darkModeTheme}>
        <Paper elevation={0}>
          <Navbar />
          <Homepage />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
