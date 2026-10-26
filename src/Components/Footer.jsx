import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.900',
        color: 'white',
        position: 'relative',
        minHeight: '300px',
        padding: '20px'
      }}
    >
      <Box sx={{ position: 'absolute', top: 20, left: 10 }}>
        <Typography variant="h6">
          <Link
            to="/"
            className="text-decoration-none text-light fw-bold"
          >
            © AI-Resume Builder
          </Link>
        </Typography>

        <Typography
          component="p"
          sx={{
            width: '300px',
            fontSize: '12px',
            padding: '5px',
            color: 'grey.400',
            lineHeight: 1.8     


            
          }}
        >
          Create a professional resume in minutes with AI Resume Builder.
          Highlight your skills, education, and experience to build your
          career with confidence.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;