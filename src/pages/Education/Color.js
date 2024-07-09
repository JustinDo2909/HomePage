import React from 'react';
import { Container, Typography } from '@mui/material';
import './Education.scss';
import data from './Education.json';

const EDUCATION_COLOR = () => {
  return (
    <Container maxWidth="md" className="education-wrapper">
        {data.Color.title && (
          <Typography variant="h4" gutterBottom>
            {data.Color.title}
          </Typography>
        )}
        {data.Color.author && (
          <Typography variant="subtitle1" color="textSecondary">
            <strong>Author:</strong> {data.Color.author}
          </Typography>
        )}
        {data.Color.date && (
          <Typography variant="subtitle1" color="textSecondary">
            <strong>Date:</strong> {data.Color.date}
          </Typography>
        )}
        {data.Color.content &&
          data.Color.content.map((section, index) => (
            <div key={index} className="section">
              {section.heading && (
                <Typography variant="h5" gutterBottom>
                  {section.heading}
                </Typography>
              )}
              {section.paragraphs &&
                section.paragraphs.map((paragraph, idx) => (
                  <Typography key={idx} variant="body1" paragraph>
                    {paragraph}
                  </Typography>
                ))}
              
            </div>
          ))}
    </Container>
  );
};

export default EDUCATION_COLOR;
