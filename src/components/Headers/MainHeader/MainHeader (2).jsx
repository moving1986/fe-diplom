import { Link } from 'react-router-dom';
import './MainHeader.css';


const MainHeader = () => {

    return (
        <header className="header">
            <div className="logo">
                <div className="container">
                    <span className="logo-text">
                        <a href="">Logo</a>
                    </span>
                </div>
            </div>     
            <nav>
                <div className="nav-bar-main">
                    <div className="container">
                        <ul className="nav-menu">
                            <li className="nav-menu__item">
                                <a href="./#aboutUs" title="Выбор поезда">О нас</a>
                            </li>
                            <li className="nav-menu__item">
                                <a href="#how-ot-worck" title="Как это работает">Как это
                                    работает</a>
                            </li>
                            <li className="nav-menu__item">
                                <a href="#reviews" title="Отзывы">Отзывы</a>
                            </li>
                            <li className="nav-menu__item">
                                <a href="#contacts" title="Контакты">Контакты</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div className="container relative">
            <div className="header-title">
                <h1>Вся жизнь -<br /><span>путешествие</span></h1>
            </div>
            <div className="search-ticket">
                <form className="form-search-ticket">
                    <div className="header-search-ticket">Направление</div>
                    <div className="search-input-way">
                        <input className="way-input" type="text" placeholder="Откуда" />
                        <img className="reload-way" src="../assets/images/reload-form-way.svg" alt="" />
                        <input className="way-input" type="text" placeholder="Куда" />
                    </div>
                    <div className="header-search-ticket">Дата</div>
                    <div className="search-input-date">
                        <input className="date-input" type="text" placeholder="дд/мм/гг" onclick="this.showPicker()" />
                        <input className="date-input" type="text" placeholder="дд/мм/гг" onclick="this.showPicker()" />
                    </div>
                    <div className="form-serch-button">
                        <Link to="/select-train" title="Выбор поезда"><button className="serach-ticket-btn">найти билеты</button></Link>
                    </div>
                </form>
            </div>
        </div>
        </header>

    );
}

export default MainHeader;