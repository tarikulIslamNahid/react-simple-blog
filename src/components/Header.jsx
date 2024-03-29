import React, {useContext, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { toast } from 'react-toastify';
import { Link} from 'react-router-dom';
import { UserContext } from '../UserContext';

const Header = () => {
  const {setUserInfo,userInfo} = useContext(UserContext);
  const UserEmail = userInfo?.email;
   useEffect(() => {
    fetch('http://localhost:8082/profile', {
      credentials:"include"
    })
      .then((res) => {
        res.json().then(info => {
          setUserInfo(info);
     })
   })
   }, []);
  const Logout = () => {
    fetch("http://localhost:8082/logout", {
      credentials: "include",
      method:"POST"
    })
      .then((res) => {
        setUserInfo(null);

        toast.success("logout successfully!");

    })
  }
  
    const pages = [
        {
            title: "Register",
            auth:false,
            link:<Link style={{color:"#2b2b2b",textDecoration:"none"}} color='#fff' to="/register">Register</Link>
        },
        {
            title: "Login",
            auth:false,
            link:<Link style={{color:"#2b2b2b",textDecoration:"none"}} to="/login">Login</Link>
        },
        {
            title: "Create New",
            auth:true,
            link:<Link style={{color:"#2b2b2b",textDecoration:"none"}} to="/blog/create">Create New</Link>
        },
        {
            title: "Logout",
            auth:true,
            link:<Link style={{color:"#2b2b2b",textDecoration:"none"}} onClick={Logout}>Logout</Link>
        },
    ];
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
 
    return (
      <div>
            <AppBar color="transparent" shadow="none" position="static" sx={{ boxShadow: 'none' }} >  
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                  {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.link}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box justifyContent={"end"} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page,index) => {
                  if (UserEmail!= null && page.auth) {
                    return   <Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.link}
                  </Button>
                  } else if(!UserEmail && !page.auth){
                    return   <Button
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page.link}
                  </Button>
                  }
                
                })}
          </Box>
        </Toolbar>
      </Container>
            </AppBar>
      </div>
            
  );
}

export default Header
