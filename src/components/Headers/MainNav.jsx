import './MainNav.css';
import { HashLink as Link } from 'react-router-hash-link';
import { useNavigate, useLocation } from 'react-router-dom'; 

const MainNav = () => {
    const links = [
        { to: '/#aboutUs', title: 'О нас', text: 'О нас' },
        { to: '/#how-it-work', title: 'Как это работает', text: 'Как это работает' },
        { to: '/#reviews', title: 'Отзывы', text: 'Отзывы' },
        { to: '/#contacts', title: 'Контакты', text: 'Контакты' },
    ];
   
    const location = useLocation();
    const navigate = useNavigate();
    const isHomePage = location.pathname === '/';

    const handleNavigation = (hash) => {
        if (isHomePage) {
               const element = document.querySelector(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
              navigate('/');
               setTimeout(() => {
                const element = document.querySelector(hash);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    return (
        <nav>
            <div className="nav-bar-main">
                <div className="container">
                    <ul className="nav-menu">
                        {links.map(link => {
                            const hash = '#' + link.to.split('#')[1];
                            
                            return (
                                <li className="nav-menu__item" key={link.to}>
                                    {isHomePage ? (
                                        <Link
                                            to={link.to}
                                            smooth
                                            title={link.title}
                                            className="nav-link"
                                        >
                                            {link.text}
                                        </Link>
                                    ) : (
                                        <button
                                            onClick={() => handleNavigation(hash)}
                                            title={link.title}
                                            className="nav-link-button"
                                            style={{
                                                background: 'none',
                                                border: 'none',
                                                color: 'inherit',
                                                cursor: 'pointer',
                                                fontSize: 'inherit',
                                                fontFamily: 'inherit'
                                            }}
                                        >
                                            {link.text}
                                        </button>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default MainNav;