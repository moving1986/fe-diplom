import { Link } from 'react-router-dom';
import OrderHeader from '../components/Headers/OrderHeader/OrderHeader';
import StepsLine from '../components/StepsLine';
import FilterWays from '../components/FilterWays';
import LastTrips from '../components/LastTrips';
import Footer from '../components/Footer/Footer';


import IcoDetailsTrain from '../assets/images/ico-details-train.svg';
import RightTripArrow from '../assets/images/right-trip-arrow.svg';
import IcoTimeWay from '../assets/images/ico-time-way.svg';
import IcoSeatVagon from '../assets/images/ico-seat-vagon.svg';
import IcoPlackartVagon from '../assets/images/ico-plackart-vagon.svg';

import IcoLuxVagon from '../assets/images/ico-lux-vagon.svg';

import IcoSelectDifTrainRight from '../assets/images/ico-select-dif-train-right.svg';
import IcoCupeVagon from '../assets/images/ico-cupe-vagon.svg';
import SelectSeatCard from '../components/SelectSeat/SelectSeatCard';


const SelectSeat = () => {

    return (
        <>
            <OrderHeader />
            <StepsLine />
            <div className="light-grey-bg">
            <div className="container">
                <main className="main-order-tickets">
                    <aside className="detail-trip">
                        <FilterWays />
                        <LastTrips />
                    </aside>
                    <section>

                        <div className="header-select-seat">Выбор мест</div>

                        <div className="main-select-seat">

                           <SelectSeatCard /> 

                                <div className="select-seat">
                                    <div className="select-dif-train-right">
                                        <img src={IcoSelectDifTrainRight} alt="" />
                                        <Link to="/select-train" title="Выбор поезда"><button className="btn-dif-train active-btn">Выбрать другой поезд</button></Link>
                                    </div>


                                    <div className="details-train-way">
                                        <div className="details-train-number">
                                            <div className="ico-details-train">
                                                <img src={IcoDetailsTrain} alt="" />
                                            </div>
                                            <div className="train-way-number">
                                                <div className="details-train-number">116С</div>
                                                <div className="detail-train-way">
                                                    <span>Адлер &rarr;</span><br />
                                                        Москва &rarr;<br />
                                                            Санкт-Петербург
                                                        </div>
                                                </div>
                                            </div>

                                            <div className="details-way">
                                                <div className="details-time-way">
                                                    <div className="details-time">
                                                        00:10
                                                    </div>
                                                    <div className="details-city-way">
                                                        Москва<br />
                                                            <span>Курский вокзал</span>
                                                    </div>
                                                </div>
                                                <div className="ico-arrow-details-way">
                                                    <img src={RightTripArrow} alt="" />
                                                </div>
                                                <div className="details-time-way">
                                                    <div className="details-time">
                                                        00:10
                                                    </div>
                                                    <div className="details-city-way">
                                                        Москва<br />
                                                            <span>Курский вокзал</span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="details-travel-time-way">
                                                <div>
                                                    <img src={IcoTimeWay} alt="" />
                                                </div>
                                                <div className="details-travel-time">
                                                    9 часов<br />
                                                        42 минуты
                                                </div>
                                            </div>

                                        </div>

                                        <div className="header-count-tickets">
                                            Количество билетов
                                        </div>

                                        <div className="count-tickets">
                                            <div className="ticket-block-active">
                                                <div className="ticket-count-inner">
                                                    Взрослых — 2
                                                </div>
                                                <div className="ticket-count-text">
                                                    Можно добавить еще<br /> 3 пассажиров
                                                </div>
                                            </div>
                                            <div className="ticket-block">
                                                <div className="ticket-count-inner">
                                                    Детских — 0
                                                </div>
                                                <div className="ticket-count-text">

                                                </div>
                                            </div>
                                            <div className="ticket-block">
                                                <div className="ticket-count-inner">
                                                    Детских «без места» — 0
                                                </div>
                                            </div>
                                        </div>

                                        <div className="type-vagon-header">
                                            Тип вагона
                                        </div>

                                        <div className="type-vagon-select">
                                            <div className="type-vagon">
                                                <img src={IcoSeatVagon} alt="" />
                                                    <p>Сидячий</p>
                                            </div>
                                            <div className="type-vagon">
                                                <img src={IcoPlackartVagon} alt="" />
                                                    <p>Плацкарт</p>
                                            </div>
                                            <div className="type-vagon">
                                                <img src={IcoCupeVagon} alt="" />
                                                    <p>Купе</p>
                                            </div>
                                            <div className="type-vagon">
                                                <img src={IcoLuxVagon} alt="" />
                                                    <p>Люкс</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                                <Link to="/passengers" title="Пассажиры"><button class="btn-next-page active-btn">ДАЛЕЕ</button></Link>
                            </section>
                        </main>
                    </div>
                    </div>
                    <Footer />
                </>
                )
}

                export default SelectSeat;