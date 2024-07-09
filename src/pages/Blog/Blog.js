import React, { useState } from 'react'
import './Blog.scss'
import posts1 from './img/post1.jpg'
import posts2 from './img/post2.png'
import posts3 from './img/post3.jpg'
import posts6 from './img/post6.jpg'
import posts7 from './img/post7.jpg'


const Blog = () => {
  const [seeMore , setSeeMore] = useState(false);

  const handleSeeMoreBlog = () => {
    setSeeMore(true)
  }
  return (
    <div className='wrapperrrrr'>
      <div className='container page'>
        <section className='col-main-content'>
          <h1 className='blog-title'>Latest Posts</h1>
          <div className='ajax-posts'>
            <div className='alignContent'>
              <div className='image-wrapper'>
                <a href='Blog/ask-certification-importance'>
                  <img src={posts1} alt='post1' />
                </a>
              </div>
              <div className='content-wrapper'>
                <h2>
                  <a href='Blog/ask-certification-importance'>Ask A Shine: Certified vs. Non-certified Diamonds</a>
                </h2>
                <span>May 31, 2024 | 4:00pm</span>
                <div>
                  <p>
                    Choosing the perfect engagement ring is an important and often stressful decision,
                    and the journey of one of our readers highlights several points that many buyers face.
                    Their detailed email mentioned the questions about the advantages and disadvantages of
                    buying diamonds and settings from different sources, the significance of diamond certification,
                    and the choice between … </p>
                </div>
              </div>
            </div>
            <div className='alignContent'>
              <div className='image-wrapper'>
                <a href='Blog/ask-fancy-yellow-diamond-below20k'>
                  <img src={posts2} alt='post2' />
                </a>
              </div>
              <div className='content-wrapper'>
                <h2>
                  <a href='Blog/ask-fancy-yellow-diamond-below20k'>Ask A Shine: Fancy Yellow Cushion Diamond Within a $15k – $20k Budget</a>
                </h2>
                <span>May 16, 2024 | 2:00pm</span>
                <div>
                  <p>
                    Exploring the dazzling world of yellow diamonds, we encounter a reader’s inquiry that’s as specific as it is exciting.
                    Our reader was on the hunt for the perfect yellow diamond engagement ring within a budget of $15,000 to $20,000.
                    With a preference for a cushion cut diamond, a size between 1.50 to 2 carats, and …
                  </p>
                </div>
              </div>
            </div>
            <div className='alignContent'>
              <div className='image-wrapper'>
                <a href='Blog/ask-k-color-diamond-in-pave-ring'>
                  <img src={posts3} alt='post3' />
                </a>
              </div>
              <div className='content-wrapper'>
                <h2>
                  <a href='Blog/ask-k-color-diamond-in-pave-ring'>Ask A Shine: Advice on 0.81 Carat Round K Color Diamond</a>
                </h2>
                <span>May 10, 2024 | 8:17pm</span>
                <div>
                  <p>
                    Welcome to our blog, where we’re dedicated to providing unbiased and invaluable information to empower your
                    diamond-buying journey. Recently, we received an insightful email from a reader who spent hours exploring our website.
                    They’re on a budget of $2,000 and seeking guidance on two intriguing options, both K color diamonds from James Allen.
                    Our reader …
                  </p>
                </div>
              </div>
            </div>
           
          {seeMore && (
            <>
            
            <div className='alignContent'>
            <div className='image-wrapper'>
              <a href='Blog/ask-13k-budget-emerald-cut'>
                <img src={posts6} alt='post6' />
              </a>
            </div>
            <div className='content-wrapper'>
              <h2>
                <a href='Blog/ask-13k-budget-emerald-cut'>Ask A Shine: $13K Budget on Emerald Cut</a>
              </h2>
              <span>April 12, 2024 | 5:59pm</span>
              <div>
                <p>
                In the world of diamond shopping, the emerald cut stands out as a symbol of elegance and sophistication,
                 captivating the hearts of many. Its elongated shape forms a timeless charm, 
                 making it a popular choice among buyers worldwide. However, when it comes to selecting the perfect emerald cut 
                 diamond—one that appears as large as possible …
                </p>
              </div>
            </div>
          </div>
            <div className='alignContent'>
            <div className='image-wrapper'>
              <a href='Blog/ask-engagement-ring-purchase'>
                <img src={posts7} alt='post7' />
              </a>
            </div>
            <div className='content-wrapper'>
              <h2>
                <a href='Blog/ask-engagement-ring-purchase'>Ask A Shine: Making the Right Choice in Selecting an Engagement Ring</a>
              </h2>
              <span>March 28, 2024 | 2:00pm</span>
              <div>
                <p>
                In love stories, few things compare to the thrill of choosing an engagement ring. It represents love, 
                loyalty, and the hope of a shared future. When someone starts this journey, they have certain likes and needs in mind. 
                It’s not just about finding any ring; it’s about finding a special symbol that captures the essence …
                </p>
              </div>
            </div>
          </div>
            
            </>
          )}
          </div>
        </section>
        <div className='btn-blog'>
        <button onClick={handleSeeMoreBlog}>SEE MORE STORY</button>
        </div>
      </div>
    </div>
  )
}

export default Blog