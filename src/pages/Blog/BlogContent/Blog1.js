import React, { useEffect, useState } from 'react';
import post1 from '../img/post1.jpg';
import pic from './img/PicPost1.png';
import "./BlogContent.scss";
import data from './blogData.json'

const Blog1 = () => {
    const [blogData, setBlogData] = useState(null);

    useEffect(() => {
        setBlogData(data);
    }, []);

    if (!blogData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='wrapperrrrr'>
            <div className='header-blog'>
                <h2>{blogData.Blog1.title}</h2>
                <span>By {blogData.Blog1.author}, {blogData.Blog1.date}</span>
            </div>
            <div className='wrapper-content-blog'>
                {blogData.Blog1.sections.map((section, index) => {
                    switch (section.type) {
                        case 'paragraph':
                            return <div className='paragraph'><p key={index}>{section.content}</p> </div>
                        case 'header':
                            return <div className='header-blog'><h4 key={index}>{section.content}</h4></div>
                        case 'quote':
                            return <div className='quote'><strong key={index}>{section.content}</strong></div>
                        case 'blockquote':
                            return (
                                <blockquote className='blockquote' key={index}>
                                    <p>{section.content}</p>
                                </blockquote>
                            );
                        case 'image':
                            return (
                                <div className='image' key={index}>
                                    <img src={section.src === 'path/to/post1.jpg' ? post1 : pic} alt={section.alt}></img>
                                </div>
                            );
                        case 'end':
                            return(
                                <h4 key={index}> {section.content}</h4>
                            )
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
};

export default Blog1;
