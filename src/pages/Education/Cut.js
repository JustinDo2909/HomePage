import React from 'react';
import { Container, Typography } from '@mui/material';
import './Education.scss';
import data from './Education.json';

const EDUCATION_CUT = () => {
  return (
    <Container maxWidth="md" className="education-wrapper">
        {data.Cut.title && (
          <Typography variant="h4" gutterBottom>
            {data.Cut.title}
          </Typography>
        )}
        {data.Cut.author && (
          <Typography variant="subtitle1" color="textSecondary">
            <strong>Author:</strong> {data.Cut.author}
          </Typography>
        )}
        {data.Cut.date && (
          <Typography variant="subtitle1" color="textSecondary">
            <strong>Date:</strong> {data.Cut.date}
          </Typography>
        )}
        {data.Cut.content &&
          data.Cut.content.map((section, index) => (
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

export default EDUCATION_CUT;
