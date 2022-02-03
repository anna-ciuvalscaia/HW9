import React from 'react';
import RecipeReviewCard from './components/Card';
import ResponsiveAppBar from './components/Navbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
//import Item from '@mui/material/Item';
import product from './domain/DetailProduct';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const App: React.FC = () => {
  
  return (
    <>
    <ResponsiveAppBar/>
    
    <Container>
      <h1>Product Page</h1>



     
           <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
       
          
            
            {product.productDetail.map((item, index)=>{
                      return (
                    <Grid item xs={8} sm={4} md={4} >
                      <Item>
                         <RecipeReviewCard name={item.name} img={item.img} price={item.price} desc={item.desc} benefice={item.benefice} key={index}/> 
                      </Item>
                     </Grid>
                      )
                })}
              
         
       
      </Grid>
    </Box>
        
     
      
     
    </Container>
    
    </>
 
  );
}


export default App;
