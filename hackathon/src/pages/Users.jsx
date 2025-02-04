import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';



const Users = () => {
  return (

<>
<div   style={{
        backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN5XaPknTWTxdBcdC3r0_9blSi_8n3rD_2Xg&s")`, // Leave this empty; replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}    >

   
    





    <Grid container spacing={3} style={{ padding: '20px' }}>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6">Left Column</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6">Right Column    



                  













          </Typography>





 









        </Paper>
      </Grid>
    </Grid>
    </div>
    </>
  );
};

export default Users;
