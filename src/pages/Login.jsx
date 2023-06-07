import  {useContext, useState,useEffect} from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BaseLayout from '../Layouts/BaseLayout';
import { Link} from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../UserContext';
 

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Login = () => {
  const [password, SetPassword ] = useState('');
  const [email, SetEmail] = useState('');
  const navigate = useNavigate();
  const {setUserInfo,userInfo} = useContext(UserContext);
  
  useEffect(() => {
    checkAuth();
   
  });
  const checkAuth = async () => {
    if (await userInfo != null) {
      navigate("/");
      
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    await fetch('http://localhost:8082/login', {
      method: "POST",
      body: JSON.stringify({email,password}),
      headers: { 'Content-Type': "application/json" },
      credentials:'include',
    })
      .then((res) => {
        console.log( res)
      
        if (res.ok) {
          res.json().then(info => {
            console.log(info)
          setUserInfo(info?.data);

            toast.success(info);
          })
          navigate("/");
        } else {
          toast.error('login failed!');
        }
      })
      .catch((err) => {
        toast.error('login failed!');

        console.log(err,'err')
    })

  };

  return (
    <BaseLayout>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
                id="email"
                value={email}
                  onChange={e=>SetEmail(e.target.value)}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
                fullWidth
                value={password}
                  onChange={e=>SetPassword(e.target.value)}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
             
              <Grid item>
                <Link to="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      </ThemeProvider>
    </BaseLayout>
      
  );
}

export default Login