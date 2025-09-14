import { Link } from 'react-router-dom';

const MainHeader = () => {

    return (
        <header className="main-header">
            <div className="logo">
                <div className="container">
                    <span className="logo-text">
                        <a href="">Logo</a>
                    </span>
                </div>
            </div>
            <nav>
                <div className="nav-bar">
                    <div className="container">
                        <ul className="nav-menu">
                            <li className="nav-menu__item">
                                <a href="" title="О нас">О нас</a>
                            </li>
                            <li className="nav-menu__item">
                                <a href="" title="Как это работает">Как это
                                    работает</a>
                            </li>
                            <li className="nav-menu__item">
                                <a href="" title="Отзывы">Отзывы</a>
                            </li>
                            <li className="nav-menu__item">
                                <a href="" title="Контакты">Контакты</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container">
                <form className="form-search-ticket">

                    <div className="form-search-headers">
                        <div className="header-search-ticket-way">Направление</div>
                        <div className="header-search-ticket-date">Дата</div>
                    </div>


                    <div className="form-search-inputs">
                        <input className="way-input" type="text" placeholder="Откуда" />
                        <img className="reload-way" src="./images/reload-form-way.svg" alt="" />
                        <input className="way-input" type="text" placeholder="Куда" />
                        <input className="date-input" type="date" placeholder="дд/мм/гг" oncCick="this.showPicker()" />
                        <input className="date-input" type="date" placeholder="дд/мм/гг" onClick="this.showPicker()" />
                    </div>


                    <div className="form-serch-button">
                        <button className="serach-ticket-btn">найти билеты</button>
                    </div>
                </form>
            </div>
        </header>

    );
}

export default MainHeader;