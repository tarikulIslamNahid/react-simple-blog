import "./assets/style/main.css"
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import Theme from "./config/Theme";
import { ThemeProvider } from '@mui/material/styles';
function App() {
  return (
    <ThemeProvider theme={Theme}>
    <BrowserRouter> 
                <Router/>
    </BrowserRouter>
  </ThemeProvider>

  );
}

export default App;
