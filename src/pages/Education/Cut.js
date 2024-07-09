import React from 'react';
import './Education.scss';
import data from './Education.json';
import cutImg from '../Home/image/diamond_cuts.png';


const EDUCATION_CUT = () => {
  return (

    <div className="education-wrapper">
      <div className='education-content'>
        {data.Cut.title && <h1>{data.Cut.title}</h1>}
        {data.Cut.content && data.Cut.content.map((section, index) => (
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

      <img src={cutImg} />

    </div>
  );
}

export default EDUCATION_CUT;
