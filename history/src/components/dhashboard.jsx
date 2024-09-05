import React from 'react';
import { Container, Grid, Typography, Box, Button, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import ProfileCard from '../components/createprofile'; // Make sure ProfileCard is correctly imported

const Dashboard = () => {
  // Sample data for statistics
  const statistics = [
    { title: 'Total Users', value: 1250 },
    { title: 'Total Relatives', value: 320 },
    { title: 'Community Members', value: 500 },
    { title: 'Recent Profiles', value: 8 }
  ];

  // Sample profile data
  const profiles = [
    {
      name: 'John Doe',
      birthDate: '01-01-1940',
      deathDate: '01-01-2000',
      gotra: 'Kashyap',
      location: 'Delhi',
      photo: 'https://via.placeholder.com/150',
    },
    {
      name: 'Jane Doe',
      birthDate: '05-12-1950',
      deathDate: '02-15-2015',
      gotra: 'Bhardwaj',
      location: 'Mumbai',
      photo: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <Container sx={{ mt: 5 }}>
      {/* Header Section */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Family Dashboard
        </Typography>
        <Button variant="contained" color="primary">
          Add New Profile
        </Button>
      </Box>

      {/* Statistics Cards */}
      <Grid container spacing={3} mb={5}>
        {statistics.map((stat, index) => (
          <Grid item key={index} xs={12} sm={6} md={3}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
              <CardContent>
                <Typography variant="h6" color="textSecondary" gutterBottom>
                  {stat.title}
                </Typography>
                <Typography variant="h4">
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Profiles Grid */}
      <Typography variant="h5" gutterBottom>
        Recent Profiles
      </Typography>
      <Grid container spacing={3}>
        {profiles.map((profile, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <ProfileCard {...profile} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
