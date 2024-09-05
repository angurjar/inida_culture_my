import React from 'react';
import { Container, Typography, Box, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, WhatsApp, Home, PhotoLibrary, Chat } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparent dark background
        color: 'white',
        position: 'relative',
        bottom: 0,
        width: '100%',
      }}
    >
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="body1">
          Family Portal © 2024
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Navigation Links */}
          <Link href="/" color="inherit" sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
            <Home />
          </Link>
          <Link href="/gallery" color="inherit" sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
            <PhotoLibrary />
          </Link>
          <Link href="/support" color="inherit" sx={{ display: 'flex', alignItems: 'center', mx: 1 }}>
            <Chat />
          </Link>
          {/* Social Media Icons */}
          <IconButton href="https://www.facebook.com" target="_blank" sx={{ color: 'white', mx: 0.5 }}>
            <Facebook />
          </IconButton>
          <IconButton href="https://www.instagram.com" target="_blank" sx={{ color: 'white', mx: 0.5 }}>
            <Instagram />
          </IconButton>
          <IconButton href="https://wa.me/" target="_blank" sx={{ color: 'white', mx: 0.5 }}>
            <WhatsApp />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
