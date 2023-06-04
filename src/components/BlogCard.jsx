import { Container,Box,Breadcrumbs,Link,Stack,Avatar } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card'; 
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const BlogCard = () => {
    const breadcrumbs = [
        <Link fontWeight={"100"} color="#596172"  fontSize={"15px"} underline="none" key="1">
          July 26, 2019
        </Link>,
        <Link
          underline="none"
          key="2"
          color="#596172" 
            fontSize={"15px"}
            fontWeight={"100"}
        >
          1 min read
        </Link>,
      ];
  return (
    <Container>
           <Card sx={{ maxWidth: "70%",display: 'flex',padding:"20px",margin:"auto",marginBottom:"70px" }} >
              <CardContent>
                  <Box  sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom:"30px"
      }} >
                  <img width={120} height={120} loading="lazy" src="https://mui.com/static/images/cards/contemplative-reptile.jpg" alt="" />
        <Typography fontFamily={"Josefin Sans"} fontWeight={"500"} pl={"20px"} sx={{transition:"all .5s ease-in-out"}} gutterBottom variant="h4" component="div">
                          <Typography variant="span" sx={{ transition:"all .3s out-in-ease",
        '&:hover': {textDecoration: 'underline',transition:".5s all",
            textDecorationColor: '#65ebe7',textDecorationThickness:'4px'
        },
      }} >
                          Lizards are a widespread group of squamate reptiles
                         </Typography>
            
                          <Breadcrumbs mt={'10px'} separator="-" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>      
        </Typography>  
                  </Box>
    
        <Typography  lineHeight={"30px"} variant="p" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica.Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          </Typography>
          <div style={{display:'flex',justifyContent:'space-between',marginTop:"20px"}} >
          <Stack direction="row" spacing={1}> 
              <Button  sx={{fontSize:"12px",fontFamily:"Josefin Sans",fontWeight:400}} size="small" color="error" variant="contained">#Tech</Button>
              <Button  sx={{fontSize:"12px",fontFamily:"Josefin Sans",fontWeight:400,'&:hover':{color:"#4B4870 !important"}}} size="small" color="white" variant="contained">#Development</Button>
              <Button  sx={{fontSize:"12px",fontFamily:"Josefin Sans",fontWeight:400,'&:hover':{color:"#4B4870 !important"}}} size="small" color="primary" variant="contained">#Latest</Button>
            </Stack>
            <Stack alignItems={"center"} direction="row" spacing={1}>
              <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
              <Typography fontFamily={"Josefin Sans"} variant="span" component="span">
  tarikul Islam.
</Typography>
            </Stack>
          </div>

          <Stack mt={10}
  direction="row"
  justifyContent="center"
  alignItems="flex-end"
  spacing={1}
>
          <Button  sx={{fontFamily:"Josefin Sans",fontWeight:500,margin:"auto"}}  size="large" color="info" variant="contained">Continue Reading</Button>
          </Stack>
      </CardContent> 
    </Card>
    </Container>
  )
}

export default BlogCard
