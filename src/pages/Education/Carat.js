import React from 'react';
import { Container, Typography } from '@mui/material';
import './Education.scss';
import data from './Education.json';

const EDUCATION_CARAT = () => {
  return (
    <Container maxWidth="md" className="education-wrapper">
        {data.Carat.title && (
          <Typography variant="h4" gutterBottom>
            {data.Carat.title}
          </Typography>
        )}
        {data.Carat.author && (
          <Typography variant="subtitle1" color="textSecondary">
            <strong>Author:</strong> {data.Carat.author}
          </Typography>
        )}
        {data.Carat.date && (
          <Typography variant="subtitle1" color="textSecondary">
            <strong>Date:</strong> {data.Carat.date}
          </Typography>
        )}
        {data.Carat.content &&
          data.Carat.content.map((section, index) => (
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

export default EDUCATION_CARAT;
