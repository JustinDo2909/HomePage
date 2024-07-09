import React from 'react';
import { Container, Typography} from '@mui/material';
import './Education.scss';
import data from './Education.json';

const EDUCATION_FLUORESCENCE = () => {
  return (
    <Container maxWidth="md" className="education-wrapper">
        {data.Fluorescence.title && (
          <Typography variant="h4" gutterBottom>
            {data.Fluorescence.title}
          </Typography>
        )}
        {data.Fluorescence.author && (
          <Typography variant="subtitle1" color="textSecondary">
            <strong>Author:</strong> {data.Fluorescence.author}
          </Typography>
        )}
        {data.Fluorescence.date && (
          <Typography variant="subtitle1" color="textSecondary">
            <strong>Date:</strong> {data.Fluorescence.date}
          </Typography>
        )}
        {data.Fluorescence.content &&
          data.Fluorescence.content.map((section, index) => (
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

export default EDUCATION_FLUORESCENCE;
