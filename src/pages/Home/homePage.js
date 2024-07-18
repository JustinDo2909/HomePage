import React, { memo } from "react";
import bannerHome from "./image/diamondbanner.png";
import aboutimg from "./image/checkdiamond.jpg"
import './HomePage.scss';
import './banner.scss'


const HomePage = () => {


    return (

        <div className="home-page">
            <div className="banner">
                <div className="filter-banner" />
                {/* <p>Welcome to Shine, your trusted partner in diamond valuation</p> */}
                <img
                    className="img-banner"
                    src={bannerHome}
                    alt="banner1"
                />
            </div>
            <div className="body-content">
                <div className="wrapper-text">
                    <h1>Company History</h1>
                    <p>
                        Founded in 2005, Shine has grown to become a premier diamond appraisal company, renowned for its expertise and commitment to excellence. Initially established as a small family business in New York City by John Doe, a diamond expert with over 30 years of industry experience, Shine has expanded significantly over the years. John’s passion for diamonds and his vision to provide accurate, reliable appraisals set the foundation for the company's success.
                    </p>
                    <p>
                        At Shine, we pride ourselves on our team of highly qualified diamond appraisers who hold advanced certifications from leading gemological institutes, including the Gemological Institute of America (GIA) and the International Gemological Institute (IGI). Our experts undergo rigorous training and continuous education to stay abreast of the latest advancements and trends in the diamond industry.
                    </p>
                </div>
            </div>
            <div className="body-content-2">
                <div className="bc2-props">
                    <img src={aboutimg} />
                    <div className="prop-content">
                        <h2>About Shine</h2>
                        <p>Shine is a premier company dedicated to providing accurate and reliable diamond valuations. With years of experience in the diamond industry, we combine advanced technology with expert analysis to deliver precise valuations for your precious gems.</p>
                    </div>
                </div>
            </div>
            <div className="body-content-3">
                <h1>Our Vision for the Future</h1>
                <p>
                    Looking ahead, Shine aims to continue leading the diamond appraisal industry by embracing innovation and expanding our global reach. We are committed to maintaining the highest standards of integrity and expertise, ensuring our clients receive the best possible service.
                </p>
                <p>
                    For more information about our services or to schedule an appraisal, please visit our website or contact our customer service team. At Shine, we are here to help you discover the true value of your diamonds.
                </p>
            </div>

            <div className="body-content-4">
                <section className="bc4">
                    <h2>
                        Discovering the True Worth
                    </h2>
                    <h3>Unveiling the Value of Your Diamonds</h3>
                    <p>
                        In every diamond lies a story of transformation,
                        revealing beauty through time and pressure.
                        A diamond's brilliance is a testament to its journey;
                        beauty forged through nature's forces.
                        <i>
                            “The soul is placed in the body like a rough diamond,
                            and must be polished, or the luster of it will never appear.”
                            – Daniel Defoe
                        </i>
                    </p>
                </section>
                <div className="frame-diamond" />
                <div className="frame-diamond-shadow" />
            </div>

            <section id="what-we-offer">
                <div className="container">
                    <h2 className="section-title">What We Offer</h2>

                    <div className="offerings">
                        <div className="offering-item">
                            <h3 className="offering-title">Precision Technology</h3>
                            <p className="offering-description">Cutting-Edge Tools and Software</p>
                            <p className="offering-detail">We utilize the latest advancements in gemological technology to ensure each diamond is meticulously evaluated. Our state-of-the-art equipment measures every facet of your diamond, providing precise data on its cut, clarity, color, and carat weight.</p>
                        </div>

                        <div className="offering-item">
                            <h3 className="offering-title">Expert Insights</h3>
                            <p className="offering-description">Certified Gemologist Analysis</p>
                            <p className="offering-detail">Our team of certified gemologists brings a wealth of knowledge and experience to every valuation. They analyze the data collected from our advanced tools and provide comprehensive, insightful reports that highlight the true value of your diamonds.</p>
                        </div>

                        <div className="offering-item">
                            <h3 className="offering-title">Seamless Experience</h3>
                            <p className="offering-description">User-Friendly Platform</p>
                            <p className="offering-detail">Submitting your diamonds for valuation has never been easier. Our intuitive platform guides you through the process, allowing you to submit your diamonds and receive detailed reports swiftly. We prioritize ease of use, so you can focus on what matters most.</p>
                        </div>

                        <div className="offering-item">
                            <h3 className="offering-title">Confidential and Secure</h3>
                            <p className="offering-description">Top-Level Security Measures</p>
                            <p className="offering-detail">We understand the importance of privacy and security. Your diamond information is handled with the highest level of confidentiality, safeguarded by our robust security protocols. Trust us to protect your valuable data throughout the valuation process.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>


    );
};

export default memo(HomePage);


