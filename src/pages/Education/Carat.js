import React from 'react';
import './Education.scss';
import data from './Education.json';
import caratImg from '../Home/image/1-carat-bang-bao-nhieu-ly-1.jpg'

const EDUCATION_CARAT = () => {
  return (
    <div className="education-wrapper">
      <div className='education-content'>
        {data.Carat.title && <h1>{data.Carat.title}</h1>}
        {data.Carat.content && data.Carat.content.map((section, index) => (
          <div key={index} className="section">
            {section.heading && <h2>{section.heading}</h2>}
            {section.paragraphs && section.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
            {section.listItems && (
              <ul>
                {section.listItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <img src={caratImg} />

    </div>
  );
}

export default EDUCATION_CARAT;
