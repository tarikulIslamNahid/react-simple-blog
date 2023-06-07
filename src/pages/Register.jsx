import { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import BaseLayout from '../Layouts/BaseLayout';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../UserContext';
const Register = () => {
  const [FirstName, SetFirstName ] = useState('');
  const [LastName, SetLastName ] = useState('');
  const [password, SetPassword ] = useState('');
  const [email, SetEmail ] = useState('');
  const [agree, SetAgree] = useState(false);
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);
  
  useEffect(() => {
    checkAuth();
   
  });
  const checkAuth = async () => {
    if (await userInfo != null) {
      navigate("/");
      
    }
  }
  const handleSubmit =async (event) => {
    event.preventDefault();
    await fetch('http://localhost:8082/register', {
      method: "POST",
      headers:{'Content-Type':"application/json"},
      body: JSON.stringify({FirstName,LastName,email,password,agree})
    })
      .then((res) => {
        console.log(res)
        if (res.status === 200) {
          toast.success('registration successful!');
          navigate("/login");
        } else {
          toast.error('registration failed!');
        }
      })
      .catch((err) => {
        console.log(err)
        toast.error('registration failed!');
    })
    
  };
  const handleAgree = (event) => {
    SetAgree(event.target.checked)
  };
  return (
    <BaseLayout>
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
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={FirstName}
                  onChange={e=>SetFirstName(e.target.value)}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={LastName}
                  onChange={e=>SetLastName(e.target.value)}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={email}
                  onChange={e=>SetEmail(e.target.value)}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={password}
                  onChange={e=>SetPassword(e.target.value)}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox  checked={agree[0] && agree[1]}
                  indeterminate={agree[0] !== agree[1]} onChange={e=>handleAgree(e)} name='agree' color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
</BaseLayout>
      
  );
}

export default Register