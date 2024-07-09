import React, { useEffect, useState } from 'react'
import './BlogContent.scss'
import pic5 from './img/pic5.jpg'
import post5 from '../img/post7.jpg'

import data from './blogData.json'

const Blog5 = () => {
    const [Blog, setBlog] = useState(null);
    useEffect(() => {
        setBlog(data)
    }, []);
    if (!Blog) {
        return (
            <div>
                Loading....
            </div>
        )
    }
    return (
        <div className='wrapperrrrr'>
            <div className='header-blog'>
                <h2>{Blog.Blog5.title}</h2>
                <span>{Blog.Blog5.author} {Blog.Blog5.date}</span>
            </div>
            <div className='wrapper-content-blog'>
                {Blog.Blog5.sections.map((section, index) => {
                    switch (section.type) {
                        case "header":
                            return (
                                <div className='header-blog'>
                                    <h4>{section.content}</h4>
                                </div>
                            );
                        case "paragraph":
                            return (
                                <div className='paragraph'>
                                    <p>{section.content}</p>
                                </div>
                            );
                        case "quote":
                            return (
                                <div className='quote'>
                                    <strong>{section.content}</strong>
                                </div>
                            );

                        case "image":
                            return (
                                <div className='image'>
                                    <img src={section.src === "pic5" ? post5 : pic5} alt={section.alt} />
                                </div>
                            );
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    )
}

export default Blog5