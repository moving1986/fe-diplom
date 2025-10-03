import './DetailTrip.css';
import IcoRightArrowAside from '../assets/images/ico-right-arrow-aside.svg';
import IcoRollUpWayTrip from '../assets/images/ico-roll-up-way-trip.svg';
import RightTripArrow from '../assets/images/right-trip-arrow.svg';
import IcoLeftArrowAside from '../assets/images/ico-left-arrow-aside.svg';
import LeftTripArrow from '../assets/images/left-trip-arrow.svg';
import IcoPassengersInTrip from '../assets/images/ico-passengers-in-trip.svg';
import IcoRub from '../assets/images/ico-rub.svg';
import IcoRubTotalPrice from '../assets/images/ico-rub-total-price.svg';


const DetailTrip = () => {

    return (
        <div className="details-trip-cover">
            <div className="header-detail-trip">
                Детали поездки
            </div>
            <section className="way-to-trip">
                <div className="way-here">
                    <div className="ico-arrow-way-trip">
                        <img src={IcoRightArrowAside} alt="" />
                    </div>
                    <div className="way-trip-here-text">Туда</div>
                    <div className="way-trip-here-date">30.08.2018</div>
                    <div className="ico-roll-up-trip">
                        <img src={IcoRollUpWayTrip} alt="" />
                    </div>
                </div>

                <div className="number-train">
                    <div className="text-train-inner">№ Поезда</div>
                    <div className="number-train-inner">116С</div>
                </div>

                <div className="name-train">
                    <div className="text-train-inner">Название</div>
                    <div className="name-train-inner">Адлер<br />Санкт-Петербург</div>
                </div>

                <div className="time-in-way">9 : 42</div>

                <div className="all-times-in-way">
                    <div className="time-start-end">00:10<br />
                        <span>30.08.2018</span>
                    </div>
                    <img src={RightTripArrow} alt="" />
                        <div className="time-start-end right">09:52<br />
                            <span>31.08.2018</span>
                        </div>
                </div>

                <div className="places-on-the-way">
                    <div className="start-place">Москва<br />
                        <span>Курский<br />
                            вокзал</span>
                    </div>
                    <div className="finish-place right">
                        Санкт-Петербург<br />
                            <span>Ладожский<br />
                                вокзал</span>
                    </div>
                </div>
            </section>

            <section className="way-back-trip">
                <div className="way-back">
                    <div className="ico-arrow-way-trip">
                        <img src={IcoLeftArrowAside} alt="" />
                    </div>
                    <div className="way-trip-here-text">Обратно</div>
                    <div className="way-trip-here-date">09.09.2018</div>
                    <div className="ico-roll-up-trip">
                        <img src={IcoRollUpWayTrip} alt="" />

                    </div>
                </div>

                <div className="number-train">
                    <div className="text-train-inner">№ Поезда</div>
                    <div className="number-train-inner">116С</div>
                </div>

                <div className="name-train">
                    <div className="text-train-inner">Название</div>
                    <div className="name-train-inner">Адлер<br />Санкт-Петербург</div>
                </div>

                <div className="time-in-way">9 : 42</div>

                <div className="all-times-in-way">
                    <div className="time-start-end">00:10<br />
                        <span>30.08.2018</span>
                    </div>
                    <img src={LeftTripArrow} alt="" />
                        <div className="time-start-end right">09:52<br />
                            <span>31.08.2018</span>
                        </div>
                </div>

                <div className="places-on-the-way">
                    <div className="start-place">Москва<br />
                        <span>Курский<br />
                            вокзал</span>
                    </div>
                    <div className="finish-place right">
                        Санкт-Петербург<br />
                            <span>Ладожский<br />
                                вокзал</span>
                    </div>
                </div>    
            </section>

            <section className="passengers-in-trip">
                <div className="way-passengers">
                    <div className="ico-passengers-in-trip">
                        <img src={IcoPassengersInTrip} alt="" />
                    </div>
                    <div className="passengers-in-trip-text">Пассажиры</div>
                    <div className="ico-roll-up-trip">
                        <img src={IcoRollUpWayTrip} alt="" />
                    </div>
                </div>

                <div className="number-of-passengers">
                    <div className="row-of-passengers">
                        <div className="number-passengers">2 Взрослых</div>
                        <div className="total-trice-by-passengers">5 840 &nbsp;<img src={IcoRub} alt="" />
                        </div>
                    </div>

                    <div className="row-of-passengers">
                        <div className="number-passengers"> 1 Ребенок</div>
                        <div className="total-trice-by-passengers">1 920 <img src={IcoRub} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <div className="total-price-all-trip">
                <div className="total-price-text">Итог</div>
                <div className="total-price">7 760&nbsp;
                    <img src={IcoRubTotalPrice} alt="" />
                </div>
            </div>

        </div>
    );
};

export default DetailTrip;