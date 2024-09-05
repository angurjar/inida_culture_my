import React from 'react';
import { Container, Typography, Box, Grid, Button, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import familyTreeImage from '../assets/family_tree.jpg'; // Example image path
import secureDataImage from '../assets/secure_data.jpg'; // Example image path
import connectRelativesImage from '../assets/connect_relatives.jpg'; // Example image path

const Home = () => {
  return (
    <Container>
      {/* Welcome Section */}
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>
          Welcome to Family Portal
        </Typography>
        <Typography variant="h5" sx={{ mb: 4 }}>
          Preserve your family history, connect with relatives, and explore your family tree.
        </Typography>
        <Button variant="contained" color="primary" size="large" component={Link} to="/register">
          Get Started
        </Button>
      </Box>

      {/* Services Section */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={familyTreeImage}
                alt="Family Tree"
              />
              <CardContent>
                <Typography variant="h6">
                  Build Your Family Tree
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Easily create and expand your family tree by adding relatives, photos, and important details.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={connectRelativesImage}
                alt="Connect with Relatives"
              />
              <CardContent>
                <Typography variant="h6">
                  Connect with Relatives
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Discover and connect with relatives you may not know, and strengthen family bonds.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={secureDataImage}
                alt="Secure and Private"
              />
              <CardContent>
                <Typography variant="h6">
                  Secure and Private
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Your data is encrypted and stored securely, ensuring your family history remains private.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Why Choose Us Section */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Why Choose Family Portal?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Family Portal is designed with your privacy and security in mind. Our platform provides a safe space for you to store and manage your family's history. Here's why you should trust us:
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">
              Easy to Use
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Our user-friendly interface allows you to quickly add, edit, and manage your family's details.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">
              Safe and Secure
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We use advanced encryption to protect your data, so you can rest assured that your information is safe.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6">
              Trusted by Thousands
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Join a growing community of users who trust Family Portal to preserve their family's legacy.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Call to Action */}
      <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Ready to Get Started?
        </Typography>
        <Button variant="contained" color="primary" size="large" component={Link} to="/register">
          Create Your Profile Now
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
