import { memo, useState } from "react"
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import logo from './image/logot.png'
import './Footer.scss'
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
    const [menuContact, setMenuContact] = useState(false);
    const hanlde_Contact_Click = () => {
        setMenuContact(!menuContact)
    }
    const navigate = useNavigate('');
 
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
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`https://maps.app.goo.gl/VzmrqBzBaTGqp3LQ8`}>Address</Link></li>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`https://www.facebook.com/profile.php?id=100012156048080`}>Phone Number</Link></li>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`https://www.facebook.com/profile.php?id=100012156048080`}>Email</Link> </li>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`https://www.facebook.com/profile.php?id=100012156048080`}>Business hours</Link></li>
                        </ul>
                    </div>
                    <div className="footer-prop">
                        <p>Education</p>
                        <ul>
                            <li onClick={e => navigate('/education/carat')}>Carat</li>
                            <li onClick={e => navigate('/education/cut')}>Cut</li>
                            <li onClick={e => navigate('/education/color')}>Color</li>
                            <li onClick={e => navigate('/education/clarity')}>Clarity</li>
                            <li onClick={e => navigate('/education/fluorescence')}>Fluorescence</li>
                        </ul>
                    </div>
                    <div className="footer-prop">
                        <p>Service</p>
                        <ul>
                            <li onClick={e => navigate('/Service/Lookup')}>LookUp</li>
                            <li onClick={e => navigate('/Service/Valuation')}>Calculation</li>
                            <li onClick={e => navigate('/Service/calculator')}>Valuation</li>
                            <li onClick={e => navigate('/Service/Sculpture')}>Sculpture</li>
                        </ul>
                    </div>
                    <div className="footer-prop">
                        <p>Social media links</p>
                        <ul>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`https://www.facebook.com/profile.php?id=100012156048080`}><FacebookOutlinedIcon sx={{ fontSize: '42px' }} /></Link></li>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`https://www.facebook.com/profile.php?id=100012156048080`}><InstagramIcon sx={{ fontSize: '42px' }} /></Link></li>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`https://www.facebook.com/profile.php?id=100012156048080`}><TwitterIcon sx={{ fontSize: '42px' }} /></Link></li>
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