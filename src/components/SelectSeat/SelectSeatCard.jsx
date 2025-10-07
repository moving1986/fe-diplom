import { Link } from 'react-router-dom';
import './SelectSeatCard.css';
import IcoRub from '../../assets/images/ico-rub.svg';
import IcoConditionerOption from '../../assets/images/ico-conditioner-option.svg';
import IcoWifiOption from '../../assets/images/ico-wifi-option.svg';
import IcoUnderwearOptionActive from '../../assets/images/ico-underwear-option-active.svg';
import IcoCupOptionAction from '../../assets/images/ico-cup-option-action.svg';
import ImgTrainVagon from '../../assets/images/img-train-vagon.png';
import IcoCupeVagonActive from '../../assets/images/ico-cupe-vagon-active.svg';
import IcoSelectDifTrain from '../../assets/images/ico-select-dif-train.svg';
import IcoDetailsTrain from '../../assets/images/ico-details-train.svg';
import RightTripArrow from '../../assets/images/right-trip-arrow.svg';
import IcoTimeWay from '../../assets/images/ico-time-way.svg';
import IcoSeatVagon from '../../assets/images/ico-seat-vagon.svg';
import IcoPlackartVagon from '../../assets/images/ico-plackart-vagon.svg';
import IcoLuxVagon from '../../assets/images/ico-lux-vagon.svg';
import { useSelector } from 'react-redux';

const SelectSeatCard = () => {

   const selectedRoute = useSelector(state => state.trips.selectedRoute);

    if (!selectedRoute) {
        return (
            <div>
                <h2>Маршрут не выбран</h2>
                <p>Пожалуйста, вернитесь назад и выберите маршрут.</p>
            </div>
        );
    }

    const { departure } = selectedRoute;
    const id_route = departure._id;
    console.log(id_route);

    return (   
         <div className="select-seat">
            <div className="select-dif-train">
                <img src={IcoSelectDifTrain} alt="" />
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
                <div className="ticket-block-hover">
                    <div className="ticket-count-inner">
                        Детских — 1
                    </div>
                    <div className="ticket-count-text">
                        Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле
                        в среднем на 50-65%
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
                <div className="type-vagon type-vagon-active">
                    <img src={IcoCupeVagonActive} alt="" />
                    <p>Купе</p>
                </div>
                <div className="type-vagon">
                    <img src={IcoLuxVagon} alt="" />
                    <p>Люкс</p>
                </div>
            </div>

            <div className="head-line-vagon-options">
                <div className="vagon-numbers">
                    Вагоны <span className="vagon-number-active">07</span><span> 09</span>
                </div>
                <div className="live-vagon-options-inner">
                    Нумерация вагонов начинается с головы поезда
                </div>
            </div>

            <div className="vagon-options">
                <div className="number-vagon-options">
                    <div>07</div>
                    <div className="number-vagon-option-inner">вагон</div>
                </div>

                <div className="selected-seats">
                    <div className="number-of-seats">
                        Места <span>11</span>
                    </div>
                    <div className="location-of-seats">
                        Верхние <span>3</span>
                    </div>
                    <div className="location-of-seats">
                        Нижние <span>8</span>
                    </div>
                </div>

                <div className="price-selected-seats">
                    <div className="header-price-selected-seats">
                        Стоимость
                    </div>
                    <div className="price-selected-seats-inner">
                        2 920 <img className="ico-rub-price-selected-seats" src={IcoRub} alt="" />
                    </div>
                    <div className="price-selected-seats-inner">
                        3 530 <img className="ico-rub-price-selected-seats" src={IcoRub} alt="" />
                    </div>

                </div>

                <div className="options-selected-seats">
                    <div className="service-option-selected-seats">
                        <div className="service-header">
                            Обслуживание
                        </div>
                        <div className="fpk-header">
                            фпк
                        </div>
                    </div>


                    <div className="service-option-select-icons">
                        <div className="service-option-item"><img src={IcoConditionerOption} alt="" />
                            <div className="service-conditoin-pop">кондиционер</div>
                        </div>
                        <div className="service-option-item">
                            <img src={IcoWifiOption} alt="" />
                        </div>
                        <div className="service-option-item">
                            <img src={IcoUnderwearOptionActive} alt="" />
                        </div>
                        <div className="service-option-item">
                            <img src={IcoCupOptionAction} alt="" />
                        </div>
                    </div>
                    <div className="people-in-this-train">
                        11 человек выбирают места в этом поезде
                    </div>
                </div>
            </div>
            <div className="img-train-vagon">
                <img src={ImgTrainVagon} alt="" />
            </div>
        </div>
                           
    )
}

export default SelectSeatCard;
