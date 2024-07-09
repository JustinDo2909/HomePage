import React, { useEffect, useState } from 'react'
import data from './blogData.json'
import post2 from "../img/post2.png"
import pic2 from "./img/pic2.jpg"
import "./BlogContent.scss";
const Blog2 = () => {
    const [blog , setBlog] = useState(null)
    useEffect(() => {
        setBlog(data)
    }, [])
    

    if(!blog){
        return(
            <span>Loading...</span>
        )
    }
  return (
    <div className='wrapperrrrr'>
         <div className='header-blog'>
            <h2>{blog.Blog2.title}</h2>
            <span>{blog.Blog2.author} {blog.Blog2.date}</span>
         </div>
         <div className='wrapper-content-blog'>
            {blog.Blog2.sections.map((section , index) => {
                switch(section.type){
                    case 'paragraph' :
                        return(
                            <div className='paragraph'>
                                <p key={index}>{section.content}</p>
                                </div>
                        );
                    case 'header':
                        return(
                            <div className='header-blog'>
                                <h4 key={index}>{section.content}</h4>
                                </div>
                        );
                    case 'quote': 
                        return(
                            <div className='quote'>
                                <strong key={index}>{section.content}</strong>
                                </div>
                        );
                    case 'image':
                        return(
                            <div className='image'>
                                <img src={section.src === 'pic2' ? pic2 : post2 } alt={section.alt}/>
                            </div>
                        );
                    case 'end':
                        return(
                          
                                <h4> {section.content}</h4>
                           
                        )
                        default:
                            return null;
                }
            })}
         </div>
    </div>
  )
}

export default Blog2