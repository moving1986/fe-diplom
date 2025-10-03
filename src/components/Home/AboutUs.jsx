import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="container">
            <article className="about-us" id="aboutUs">
                <h2>О нас</h2>
                <div className="about-us-text">
                    <div className="about-us-text-left__line"></div>
                    <div className="about-us-text__inner">
                        <p>Мы рады видеть вас! Мы рботаем для Вас с
                            2003 года. 14 лет мы наблюдаем, как с
                            каждым
                            днем<br />
                            все больше людей заказывают жд билеты
                            через интернет.</p>
                        <p>Cегодня можно заказать железнодорожные
                            билеты онлайн всего в 2 клика, но стоит
                            ли это
                            делать?<br />
                            Мы расскажем о преимуществах заказа
                            через интернет.</p>
                        <p><span>Покупать жд билеты дешево можно за
                            90 суток до отправления поезда.<br />
                            Благодаря динамическому
                            ценообразованию цена на билеты в это
                            время самая низкая.</span>
                        </p>

                    </div>
                </div>
            </article>
        </div>
    )
}

export default AboutUs;