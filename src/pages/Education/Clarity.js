import React from 'react';
import { Container, Typography } from '@mui/material';
import './Education.scss';
import data from './Education.json';

const EDUCATION_CLARITY = () => {
  return (
    <Container maxWidth="md" className="education-wrapper">
        {data.Clarity.title && (
          <Typography variant="h4" gutterBottom>
            {data.Clarity.title}
          </Typography>
        )}
        {data.Clarity.author && (
          <Typography variant="subtitle1" color="textSecondary">
            <strong>Author:</strong> {data.Clarity.author}
          </Typography>
        )}
        {data.Clarity.date && (
          <Typography variant="subtitle1" color="textSecondary">
            <strong>Date:</strong> {data.Clarity.date}
          </Typography>
        )}
        {data.Clarity.content &&
          data.Clarity.content.map((section, index) => (
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

export default EDUCATION_CLARITY;
