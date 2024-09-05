import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import aboutImage from '../assets/aboutImage.jpg'; // Replace with your image

const About = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        {/* Image Section */}
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{ width: '100%', height: 'auto', borderRadius: 2, boxShadow: 3 }}
            src={aboutImage}
            alt="About Family Portal"
          />
        </Grid>

        {/* Text Section */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            About Family Portal
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Family Portal is a unique platform that allows you to preserve your family history in a digital format.
            Connect with your relatives, explore your family tree, and keep track of your lineage in one secure and easy-to-use
            portal.
          </Typography>
          <Typography variant="body1">
            Our mission is to provide a safe, secure, and user-friendly platform for everyone to record and celebrate their
            family’s legacy. Whether you’re interested in tracing your ancestry or simply want to keep your family’s story
            alive for future generations, Family Portal is the perfect tool for you.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
