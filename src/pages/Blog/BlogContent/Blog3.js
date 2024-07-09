import React, { useEffect, useState } from 'react'
import data from './blogData.json'
import post3 from '../img/post3.jpg'
import pic3 from './img/pic3.jpg'
import './BlogContent.scss'
const Blog3 = () => {
    const [blog , setBlog] = useState(null);
    useEffect(() => {
        setBlog(data)
    },[])
    if(!blog){
      return(
        <span>Loading...</span>
    )
    }

        return(
            <div className='wrapperrrrr'>
                <div className='header-blog'>
                <h2>{blog.Blog3.title}  </h2>
                <span>{blog.Blog3.author} {blog.Blog3.date}</span>  
                </div>
                <div className='wrapper-content-blog'>
                    {blog.Blog3.sections.map((section, index) => {
                        switch(section.type){
                          case "paragraph" : 
                          return(
                            <div className='paragraph'>
                                  <p key={index}>{section.content}</p>
                                </div>
                              );
                              case "header" :
                                return(
                                  <div className='header-blog'>
                                    <h4 key={index}>{section.content}</h4>
                                  </div>
                                );
                          case "quote" :
                              return(
                                <div className='quote'>
                                  <strong key={index}>{section.content}</strong>
                                </div>
                              );
                          case "image" :
                              return(
                                <div className='image'>
                                  <img src={section.src === "pic3" ? post3 : pic3} alt={section.alt}/>
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

export default Blog3