import React from 'react';
import './Education.scss';
import data from './Education.json';
import clarityImg from '../Home/image/Clarity-Chart_c619f0b2-7bfd-444f-bbc0-c3ad384e1cce.png'


const EDUCATION_CLARITY = () => {
  return (
    <div className="education-wrapper">
      <div className='education-content'>
        {data.Clarity.title && <h1>{data.Clarity.title}</h1>}
        {data.Clarity.content && data.Clarity.content.map((section, index) => (
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

      <img src={clarityImg} />

    </div>

  );
}

export default EDUCATION_CLARITY;
