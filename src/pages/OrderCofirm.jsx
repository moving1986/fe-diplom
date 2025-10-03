import { Link } from 'react-router-dom';
import OrderHeader from '../components/Headers/OrderHeader/OrderHeader';
import StepsLine from '../components/StepsLine';
import DetailTrip from '../components/DetailTrip';
import Footer from '../components/Footer/Footer';

import IcoTrain from '../assets/images/ico-train.svg';
import RightTripArrow from '../assets/images/right-trip-arrow.svg';
import LeftTripArrow from '../assets/images/left-trip-arrow.svg';
import IcoRub from '../assets/images/ico-rub.svg';
import IcoSeatsOptions from '../assets/images/ico-seats-options.svg';
import IcoPassenger from '../assets/images/ico-passenger.svg';
import IcoRubTotalPriceEnd from '../assets/images/ico-rub-total-price-end.svg';

const OrderConfirm = () => {

    return (
        <>

            <OrderHeader />
            <StepsLine />
            <div className="light-grey-bg">
                <div className="container">
                    <main className="main-order-tickets">
                        <aside className="detail-trip">
                            <DetailTrip />
                        </aside>
                        <section className="body-order-confirm">

                            <div className="train-card">
                                <div className="header-train-card">
                                    Поезд
                                </div>

                                <div className="card-ticket">
                                    <div className="train-name">
                                        <div className="train-name-content">
                                            <div className="train-name-ico">
                                                <img src={IcoTrain} alt="" />
                                            </div>
                                            <div className="train-name-header">
                                                116С
                                            </div>
                                            <div className="train-name-way">
                                                Адлер &rarr;<br />
                                                Москва &rarr;<br />
                                                Санкт-Петербург
                                            </div>
                                        </div>
                                    </div>
                                    <div className="train-way">
                                        <div className="train-way-inner">
                                            <div className="from-way">
                                                <div className="time-way">0:10</div>
                                                <div className="city-way">Москва</div>
                                                <div className="staition-way">Курский вокзал</div>
                                            </div>
                                            <div className="time-trip-way">
                                                <div className="time-trip">
                                                    9 : 42
                                                </div>
                                                <div className="right-trip-arrow">
                                                    <img src={RightTripArrow} alt="" />
                                                </div>
                                            </div>

                                            <div className="to-way">
                                                <div className="time-way">9:25</div>
                                                <div className="city-way">Санкт-Питербург</div>
                                                <div className="staition-way">Ладожсикй вокзал</div>
                                            </div>
                                        </div>

                                        <div className="train-way-inner">
                                            <div className="from-way">
                                                <div className="time-way">0:10</div>
                                                <div className="city-way">Москва</div>
                                                <div className="staition-way">Курский вокзал</div>
                                            </div>
                                            <div className="time-trip-way">
                                                <div className="time-trip">
                                                    9 : 42
                                                </div>
                                                <div className="trip-arrow">
                                                    <img src={LeftTripArrow} alt="" />
                                                </div>
                                            </div>

                                            <div className="to-way">
                                                <div className="time-way">9:25</div>
                                                <div className="city-way">Санкт-Питербург</div>
                                                <div className="staition-way">Ладожсикй вокзал</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="seat-type">
                                        <div className="seats">
                                            <div className="seat-type-inner">
                                                <div className="type-of-seat">Сидячий</div>
                                                <div className="how-much-seat">88</div>
                                                <div className="price-seat">от <span>1 920</span></div>
                                                <div className="currency">&nbsp;<img src={IcoRub} alt="" /></div>
                                            </div>
                                            <div className="seat-type-inner">
                                                <div className="type-of-seat">Плацкарт</div>
                                                <div className="how-much-seat">52</div>
                                                <div className="price-seat">от <span>2 530</span></div>
                                                <div className="currency">&nbsp;<img src={IcoRub} alt="" /></div>
                                            </div>
                                            <div className="seat-type-inner">
                                                <div className="type-of-seat">Купе</div>
                                                <div className="how-much-seat">24</div>
                                                <div className="price-seat">от <span>3 820</span></div>
                                                <div className="currency">&nbsp;<img src={IcoRub} alt="" /></div>
                                            </div>
                                            <div className="seat-type-inner">
                                                <div className="type-of-seat">Люкс</div>
                                                <div className="how-much-seat">31</div>
                                                <div className="price-seat">от <span>4 950</span></div>
                                                <div className="currency">&nbsp;<img src={IcoRub} alt="" /></div>
                                            </div>
                                        </div>
                                        <div className="seats-options">
                                            <img src={IcoSeatsOptions} alt="" />
                                        </div>
                                        <button className="btn-change">Изменить</button>
                                    </div>
                                </div>

                            </div>

                            <div className="passengers-card">
                                <div className="header-train-card">
                                    Пассажиры
                                </div>

                                <div className="body-passengers-card">
                                    <div className="all-passengers">
                                        <div className="passengers-details">
                                            <div className="ico-passenger">
                                                <img src={IcoPassenger} alt="" />
                                                <div className="ico-passengers-text">Взрослый</div>
                                            </div>
                                            <div className="passengers-data-text">
                                                <div className="header-passengers-data">
                                                    Мартынюк Ирина Эдуардовна
                                                </div>
                                                <div className="gender-passemger">
                                                    Пол женский
                                                </div>
                                                <div className="birthday-passenger">
                                                    Дата рождения 17.02.1985
                                                </div>

                                                <div className="iddocument-passanger">
                                                    Паспорт РФ 4204 380694
                                                </div>
                                            </div>
                                        </div>
                                        <div className="passengers-details">
                                            <div className="ico-passenger">
                                                <img src={IcoPassenger} alt="" />
                                                <div className="ico-passengers-text">Детский</div>
                                            </div>
                                            <div className="passengers-data-text">
                                                <div className="header-passengers-data">
                                                    Мартынюк Кирилл Сергеевич
                                                </div>
                                                <div className="gender-passemger">
                                                    Пол мужской
                                                </div>
                                                <div className="birthday-passenger">
                                                    Дата рождения 25.01.2006
                                                </div>

                                                <div className="iddocument-passanger">
                                                    Свидетельство о рождении VIII УН 256319
                                                </div>
                                            </div>

                                        </div>
                                        <div className="passengers-details">
                                            <div className="ico-passenger">
                                                <img src={IcoPassenger} alt="" />
                                                <div className="ico-passengers-text">Взрослый</div>
                                            </div>
                                            <div className="passengers-data-text">
                                                <div className="header-passengers-data">
                                                    Мартынюк Сергей Петрович
                                                </div>
                                                <div className="gender-passemger">
                                                    Пол мужской
                                                </div>
                                                <div className="birthday-passenger">
                                                    Дата рождения 19.06.1982
                                                </div>

                                                <div className="iddocument-passanger">
                                                    Паспорт РФ 4204 380694
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="totalt-price">

                                        <div className="full-price">
                                            <div className="text-full-price">
                                                Всего
                                            </div>
                                            <div className="full-price-inner">
                                                7760 <img src={IcoRubTotalPriceEnd} alt="" />
                                            </div>
                                        </div>

                                        <button className="btn-change">Изменить</button>
                                    </div>
                                </div>
                            </div>

                            <div className="passengers-card">
                                <div className="header-train-card">
                                    Способ оплаты
                                </div>
                                <div className="type-payment">
                                    <div className="type-payment-inner">Наличными</div>
                                    <div className="change-payment">
                                        <button className="btn-change">Изменить</button>
                                    </div>
                                </div>

                            </div>

                            <Link to="/success-order" title="Успешный заказ">
                                <button className="btn-confirm-order">подтвердить</button>
                            </Link>
                        </section>
                    </main>
                </div >
            </div>
            <Footer />
        </>
    );
}

export default OrderConfirm;