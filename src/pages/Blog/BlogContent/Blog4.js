import React, { useEffect, useState } from 'react'
import './BlogContent.scss'
import pic4_1 from './img/pic4_1.jpg'
import pic4_2 from './img/pic4_2.png'
import data from './blogData.json'

const Blog4 = () => {
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
                <h2>{Blog.Blog4.title}</h2>
                <span>{Blog.Blog4.author} {Blog.Blog4.date}</span>
            </div>
            <div className='wrapper-content-blog'>
                {Blog.Blog4.sections.map((section, index) => {
                    switch (section.type) {
                        case "header" : 
                        return(
                            <div className='header-blog'>
                                <h4>{section.content}</h4>
                            </div>
                        );
                        case "paragraph" :
                            return (
                                <div className='paragraph'>
                                    <p>{section.content}</p>
                                </div>
                            );
                        case "quote" : 
                            return (
                                <div className='quote'>
                                    <strong>{section.content}</strong>
                                </div>
                            );
                        case "blockquote" : 
                            return (
                                <div className='blockquote'>
                                    <p>{section.content}</p>
                                </div>
                            );
                        case "image" :
                            return(
                                <div className='image'>
                                    <img src={section.src  === "pic4_1" ? pic4_1 : pic4_2  } alt={section.alt}/>
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

export default Blog4