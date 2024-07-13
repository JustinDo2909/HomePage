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
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`https://www.facebook.com/fptcorp`}>Phone Number</Link></li>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`https://www.facebook.com/fptcorp`}>Email</Link> </li>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`https://maps.app.goo.gl/VzmrqBzBaTGqp3LQ8`}>Business hours</Link></li>
                        </ul>
                    </div>
                    <div className="footer-prop">
                        <p>Education</p>
                        <ul>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`/education/carat`}>Carat</Link></li> 
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`/education/cut`}>Cut</Link></li> 
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`/education/color`}>Color</Link></li>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`/education/clarity`}>Clarity</Link></li>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`/education/fluorescence`}>Fluorescence</Link></li>
                        </ul>
                    </div>
                    <div className="footer-prop">
                        <p>Service</p>
                        <ul>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`/Service/Lookup`}>Lookup</Link></li> 
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`/Service/Valuation`}>Valuation</Link></li>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`/Service/calculator`}>Calculator</Link></li>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`/Service/Sculpture`}>Sculpture</Link></li>
                        </ul>
                    </div>
                    <div className="footer-prop">
                        <p>Social media links</p>
                        <ul>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`https://www.facebook.com/fptcorp`}><FacebookOutlinedIcon sx={{ fontSize: '42px' }} /></Link></li>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`https://www.instagram.com/daihoc_fpt/`}><InstagramIcon sx={{ fontSize: '42px' }} /></Link></li>
                            <li><Link style={{textDecoration: 'none' , color:'inherit'}} to={`https://x.com/frontpagetech`}><TwitterIcon sx={{ fontSize: '42px' }} /></Link></li>
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