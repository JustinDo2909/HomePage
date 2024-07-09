import React, { memo } from "react";
import videoSrc from "./image/main.mp4";
import DiamondAppraisal from "./image/icon1.jpg";
import JewelryAppraisal from "./image/icon2.jpg";
import Certification from "./image/icon3.jpg";
import Consultation from "./image/icon4.jpg";
import "./HomePage.scss";
import banner from "./image/bannerHome.jpg";
import { Col, Row } from "antd";
import "./banner.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="bannerStyle">
        <video className="videoStyle" src={videoSrc} autoPlay loop muted />
      </div>

      <div className="body-content">
        <div className="wrapper-text">
          <h1>Company History</h1>
          <p>
            Founded in 2005, Shine has grown to become a premier diamond
            appraisal company, renowned for its expertise and commitment to
            excellence. Initially established as a small family business in New
            York City by John Doe, a diamond expert with over 30 years of
            industry experience, Shine has expanded significantly over the
            years. John’s passion for diamonds and his vision to provide
            accurate, reliable appraisals set the foundation for the company's
            success.
          </p>
          <p>
            At Shine, we pride ourselves on our team of highly qualified diamond
            appraisers who hold advanced certifications from leading gemological
            institutes, including the Gemological Institute of America (GIA) and
            the International Gemological Institute (IGI). Our experts undergo
            rigorous training and continuous education to stay abreast of the
            latest advancements and trends in the diamond industry.
          </p>
        </div>
        <div className="wrapper-banner">
          <img src={banner} alt="banner1" />
        </div>
      </div>
      <div className="body-content-3">
        <h1>Our Vision for the Future</h1>
        <p>
          Looking ahead, Shine aims to continue leading the diamond appraisal
          industry by embracing innovation and expanding our global reach. We
          are committed to maintaining the highest standards of integrity and
          expertise, ensuring our clients receive the best possible service.
        </p>
        <p>
          For more information about our services or to schedule an appraisal,
          please visit our website or contact our customer service team. At
          Shine, we are here to help you discover the true value of your
          diamonds.
        </p>
      </div>
      <div className="body-content-2">
        <Row className="wrapper-content-icon">
          <Col className="col" span={6}>
            <div className="custom-block">
              <div className="wrapper-icon">
                <img src={DiamondAppraisal} alt="icon1" />
              </div>
              <h1>Diamond Appraisal</h1>
              <p>
                Detailed and accurate assessments of diamond value, considering
                factors such as carat weight, color, clarity, and cut.
              </p>
            </div>
          </Col>
          <Col className="col" span={6}>
            <div className="custom-block">
              <div className="wrapper-icon">
                <img src={JewelryAppraisal} alt="icon2" />
              </div>
              <h1>Jewelry Appraisal</h1>
              <p>
                Appraisals for diamond jewelry, ensuring each piece is evaluated
                with precision and expertise.
              </p>
            </div>
          </Col>
          <Col className="col" span={6}>
            <div className="custom-block">
              <div className="wrapper-icon">
                <img src={Certification} alt="icon3" />
              </div>
              <h1>Certification</h1>
              <p>
                Providing certified reports that are recognized globally,
                enhancing the value and authenticity of your diamonds.
              </p>
            </div>
          </Col>
          <Col className="col" span={6}>
            <div className="custom-block">
              <div className="wrapper-icon">
                <img src={Consultation} alt="icon4" />
              </div>
              <h1>Consultation</h1>
              <p>
                Expert advice on diamond investments, purchases, and sales,
                tailored to meet individual client needs.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default memo(HomePage);
