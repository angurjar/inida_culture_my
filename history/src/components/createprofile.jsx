import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

const ProfileCard = ({ name, birthDate, deathDate, gotra, location, photo }) => {
  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
      <CardMedia
        component="img"
        height="200"
        image={photo}
        alt={`${name}'s photo`}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Birth Date: {birthDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Death Date: {deathDate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Gotra: {gotra}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {location}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
