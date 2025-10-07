import './SocSubscribe.css';
import { useState } from 'react';
import IcoYoutube from "../../../assets/images/IcoYoutube";
import IcoInSoc from "../../../assets/images/IcoInSoc";
import IcoSocGoogle from "../../../assets/images/IcoSocGoogle";
import IcoFacebook from "../../../assets/images/IcoFacebook";
import IcoTwitter from "../../../assets/images/IcoTwitter";

const SocSubscribe = () => {
    const soc = [
        {
            href: "https://www.youtube.com/",
            icon: IcoYoutube,
            name: 'youtube',
            title: 'YouTube'
        },
        {
            href: "https://ru.linkedin.com/",
            icon: IcoInSoc,
            name: 'linkedin',
            title: 'LinkedIn'
        },
        {
            href: "https://plus.google.com/",
            icon: IcoSocGoogle,
            name: 'google',
            title: 'Google'
        },
        {
            href: "https://www.facebook.com/",
            icon: IcoFacebook,
            name: 'facebook',
            title: 'Facebook'
        },
        {
            href: "https://twitter.com/",
            icon: IcoTwitter,
            name: 'twitter',
            title: 'Twitter'
        },
    ];

    const [activeStates, setActiveStates] = useState({
        youtube: false,
        linkedin: false,
        google: false,
        facebook: false,
        twitter: false
    });

    const handleMouseDown = (iconName) => {
        setActiveStates(prev => ({ ...prev, [iconName]: true }));
    };

    const handleMouseUp = (iconName) => {
        setActiveStates(prev => ({ ...prev, [iconName]: false }));
    };

    const handleMouseLeave = (iconName) => {
        setActiveStates(prev => ({ ...prev, [iconName]: false }));
    };

    return (
        <>
            <div className="footer-social-subscribe-header">
                Подписывайтесь на нас
            </div>
            <div className="footer-social-subscribe">
                {soc.map((social, index) => {
                    const IconComponent = social.icon;

                    return (
                        <div
                            className={`ico-social ${social.name}`}
                            key={index}
                            onMouseDown={() => handleMouseDown(social.name)}
                            onMouseUp={() => handleMouseUp(social.name)}
                            onMouseLeave={() => handleMouseLeave(social.name)}
                        >
                            <a href={social.href} title={social.title} target="_blank" rel="noopener noreferrer">
                                {typeof IconComponent === 'function' ? (
                                    <IconComponent isActive={activeStates[social.name]} />
                                ) : (
                                    <img src={IconComponent} alt={social.title} />
                                )}
                            </a>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SocSubscribe;