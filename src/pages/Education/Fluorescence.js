import React from 'react';
import './Education.scss';
import data from './Education.json';
import fluorescenceImg from '../Home/image/Diamond_Fluorescence_1500x.png'


const EDUCATION_FLUORESCENCE = () => {
  return (

    <div className="education-wrapper">
      <div className='education-content'>
        {data.Fluorescence.title && <h1>{data.Fluorescence.title}</h1>}
        {data.Fluorescence.content && data.Fluorescence.content.map((section, index) => (
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

      <img src={fluorescenceImg} />

    </div>
  );
}

export default EDUCATION_FLUORESCENCE;
