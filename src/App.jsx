import "./assets/style/main.css"
import { BrowserRouter } from "react-router-dom";
import Router from "./pages/router";
import Theme from "./config/Theme";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@mui/material/styles';
import { UserContextProvider } from "./UserContext";

function App() {
  return (
    <UserContextProvider>
    <ThemeProvider theme={Theme}>
      <BrowserRouter> 
        <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
                <Router/>
    </BrowserRouter>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
