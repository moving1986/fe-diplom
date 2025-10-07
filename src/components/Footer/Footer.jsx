import './Footer.css';
import IcoFooterContactPhone from "../../assets/images/ico-footer-contact-phone.svg";
import IcoFooterContactEmail from "../../assets/images/ico-footer-contact-email.svg";
import IcoFooterContactSkype from "../../assets/images/ico-footer-contact-skype.svg";
import IcoFooterContactLoc from "../../assets/images/ico-footer-contact-loc.svg";

import Subscribe from './components/Subscribe';
import SocSubscribe from './components/SocSubscribe';


const Footer = () => {

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-contacts">
                        <div className="footer-contact-header" id="contacts">
                            Свяжитесь с нами
                        </div>
                        <div className="footer-contacts-inner">
                            <div>
                                <div><img className="ico-contact" src={IcoFooterContactPhone} alt="" /></div>
                                <div><img className="ico-contact" src={IcoFooterContactEmail} alt="" /></div>
                                <div><img className="ico-contact" src={IcoFooterContactSkype} alt="" /></div>
                                <div><img className="ico-contact" src={IcoFooterContactLoc} alt="" /></div>
                            </div>
                            <div className="footer-conatcts-text">
                                <div className="footer-conatcts-text__inner">8
                                    (800) 000 00 00</div>
                                <div className="footer-conatcts-text__inner">inbox@mail.ru</div>
                                <div className="footer-conatcts-text__inner">tu.train.tickets</div>
                                <div className="footer-conatcts-text__inner">г.
                                    Москва<br />
                                    ул. Московская 27-35<br />
                                    555 555</div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-subscribe">
                        <Subscribe />                            
                        <SocSubscribe />    
                    </div>
                </div>
            </div>
            <div className="footer-end-line">
                <div className="container footer-end-line__inner">
                    <div><span className="logo-text">
                        <a href="">Logo</a>
                    </span></div>
                    <div><img src="./images/ico-footer-arrow-up.svg" alt="" /></div>
                    <div className="footer-copyright">2018 WEB</div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;