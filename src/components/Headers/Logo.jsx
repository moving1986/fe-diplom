import './Logo.css'
import { Link } from 'react-router-dom';

const Logo = () => {

    return (
        <div className="logo">
        <div className="container">
            <span className="logo-text">
                 <Link to="/" title="Главная страница">Logo</Link>
            </span>
        </div>
    </div>        
    )
}

export default Logo;