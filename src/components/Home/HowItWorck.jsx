import IcoAdvantagesSite from "../../assets/images/ico-advantages-site.svg";
import IcoAdvantagesOffice from "../../assets/images/ico-advantages-office.svg";
import IcoAdvantagesWays from "../../assets/images/ico-advantages-ways.svg";

const HowItWorck = () => {

    return (
        <div className="how-it-worck" id="how-it-work"> 
        <div className="container">
            <div className="about-how-it-worck">
                <h3>Как это работает</h3>
                <button className="more-advantages-btn">Узнать
                    больше</button>
            </div>
            <div className="our-advantages">
                <div className="ico-advantages"><img src={IcoAdvantagesSite} alt="" />
                    <p>Удобный заказ на сайте</p>
                </div>
                <div className="ico-advantages"><img src={IcoAdvantagesOffice} alt="" />
                    <p>Нет необходимости ехать в офис</p>
                </div>
                <div className="ico-advantages"><img src={IcoAdvantagesWays} alt="" />
                    <p>Огромный выбор направлений</p>
                </div>
            </div>
        </div>
    </div>
    )    
}

export default HowItWorck;