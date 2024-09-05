import React, { useState } from 'react';
import { Container, Typography, Grid, Box, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from '@mui/material';
import family3 from '../assets/family3.jpg'; // Replace with your icons
import family1 from '../assets/family1.jpg'; 

const relativesData = [
  { name: 'Ashish', relation: 'Father', birthDate: '1965-02-15', location: 'New York', gotra: 'Bharadwaj' },
  { name: 'Jane Doe', relation: 'Mother', birthDate: '1970-06-25', location: 'New York', gotra: 'Kashyap' },
  { name: 'Jack Doe', relation: 'Brother', birthDate: '1990-10-10', location: 'California', gotra: 'Bharadwaj' },
];

const Services = () => {
  const [draggedOver, setDraggedOver] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDraggedOver(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDraggedOver(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        Our Services
      </Typography>

      {/* Service Details Section */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Box component="img" sx={{ width: 80, height: 80, mb: 2 }} src={family3} alt="Service 1" />
            <Typography variant="h6" gutterBottom>
              Family Tree Creation
            </Typography>
            <Typography variant="body2">
              Easily create and expand your family tree with our intuitive tools. Connect with relatives and discover your lineage.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Box component="img" sx={{ width: 80, height: 80, mb: 2 }} src={family3} alt="Service 2" />
            <Typography variant="h6" gutterBottom>
              Secure Data Storage
            </Typography>
            <Typography variant="body2">
              Your family data is securely stored with top-notch encryption, ensuring your information is safe and protected.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box sx={{ textAlign: 'center' }}>
            <Box component="img" sx={{ width: 80, height: 80, mb: 2 }} src={family1} alt="Service 3" />
            <Typography variant="h6" gutterBottom>
              Profile Management
            </Typography>
            <Typography variant="body2">
              Manage family member profiles, including photos, birth and death dates, gotra, and location, with our user-friendly interface.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Drop Image Section */}
      <Box sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>
          Upload Family Photo
        </Typography>
        <Box
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          sx={{
            width: '300px',
            height: '200px',
            border: draggedOver ? '2px dashed blue' : '2px dashed grey',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: draggedOver ? '#f0f0f0' : '#fff',
            mt: 2,
          }}
        >
          {uploadedImage ? (
            <Box component="img" src={uploadedImage} alt="Uploaded Family" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          ) : (
            <Typography variant="body2">Drag & Drop or Click to Upload Image</Typography>
          )}
        </Box>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>Upload Photo</Button>
      </Box>

      {/* Table of Relatives */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h5" gutterBottom align="center">
          Relatives Information
        </Typography>
        <Paper sx={{ width: '100%', overflowX: 'auto', mt: 4 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Relation</TableCell>
                <TableCell>Birth Date</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Gotra</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {relativesData.map((relative, index) => (
                <TableRow key={index}>
                  <TableCell>{relative.name}</TableCell>
                  <TableCell>{relative.relation}</TableCell>
                  <TableCell>{relative.birthDate}</TableCell>
                  <TableCell>{relative.location}</TableCell>
                  <TableCell>{relative.gotra}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Box>
    </Container>
  );
};

export default Services;
