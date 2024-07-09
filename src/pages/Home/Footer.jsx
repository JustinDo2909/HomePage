import { memo, useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import logo from "./image/logot.png";
import "./Footer.scss";
const Footer = () => {
  const [menuContact, setMenuContact] = useState(false);
  const hanlde_Contact_Click = () => {
    setMenuContact(!menuContact);
  };
  const hanlde_Question_Click = () => {};
  const hanlde_Map_Click = () => {};
  const hanlde_Blog_Click = () => {};
  const hanlde_Education_Click = () => {};
  const hanlde_About_Click = () => {};
  const hanlde_Valuation_Click = () => {};
  const hanlde_History_Click = () => {};
  const hanlde_Diamond_Click = () => {};

  const hanlde_Submit_Email = () => {};

  const hanlde_Facebook_Click = () => {};
  const hanlde_Google_Click = () => {};
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="logo">
          <img src={logo}></img>
          <p>Precision in Every Carat Trusted Diamond Evaluation</p>
        </div>

        <div className="footer-props">
          <div className="footer-prop">
            <p>Contact information</p>
            <ul>
              <li>Address</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Business hours</li>
            </ul>
          </div>
          <div className="footer-prop">
            <p>Company information</p>
            <ul>
              <li>About us</li>
              <li>History</li>
              <li>Mission Statement</li>
            </ul>
          </div>
          <div className="footer-prop">
            <p>Service</p>
            <ul>
              <li>Diamond grading</li>
              <li>Appraisals</li>
              <li>Certification</li>
              <li>Custom Consultation</li>
            </ul>
          </div>
          <div className="footer-prop">
            <p>Social media links</p>
            <ul>
              <li>
                <a>
                  <FacebookIcon sx={{ fontSize: "42px" }} />
                </a>
              </li>
              <li>
                <a>
                  <InstagramIcon sx={{ fontSize: "42px" }} />
                </a>
              </li>
              <li>
                <a>
                  <XIcon sx={{ fontSize: "42px" }} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        © 2024 Shine. All Rights Reserved. Proudly Serving Excellence
      </div>
    </div>
  );
};

export default memo(Footer);
