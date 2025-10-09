import { Link } from 'react-router-dom';
import OrderHeader from '../components/Headers/OrderHeader/OrderHeader';
import StepsLine from '../components/StepsLine';
import FilterWays from '../components/FilterWays/FilterWays';
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
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../api/api';

const SelectSeat = () => {
    const selectedRoute = useSelector(state => state.trips.selectedRoute);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [seatsData, setSeatsData] = useState([]);

    const [have_first_class, setHaveFirstClass] = useState(false);
    const [have_second_class, setHaveSecondClass] = useState(false);
    const [have_third_class, setHaveThirdClass] = useState(false);
    const [have_fourth_class, setHaveFourthClass] = useState(false);
    const [have_wifi, setHaveWiFi] = useState(false);
    const [have_air_conditioning, setHaveAirConditioning] = useState(false);
    const [have_express, setHaveExpress] = useState(false);

    
    const id_route = selectedRoute?.departure?._id;
    const departure = selectedRoute?.departure;

    console.log(id_route);

    useEffect(() => {
        const fetchSeats = async () => {
            if (!id_route) return;

            try {
                setLoading(true);
                
                // Создаем параметры запроса из состояний фильтров
                const params = new URLSearchParams();
                if (have_first_class) params.append('have_first_class', 'true');
                if (have_second_class) params.append('have_second_class', 'true');
                if (have_third_class) params.append('have_third_class', 'true');
                if (have_fourth_class) params.append('have_fourth_class', 'true');
                if (have_wifi) params.append('have_wifi', 'true');
                if (have_air_conditioning) params.append('have_air_conditioning', 'true');
                if (have_express) params.append('have_express', 'true');

                const url = `${BASE_URL}/routes/${id_route}/seats${params.toString() ? `?${params.toString()}` : ''}`;
                
                const seatsResponse = await fetch(url);

                if (!seatsResponse.ok) {
                    throw new Error(`HTTP error! status: ${seatsResponse.status}`);
                }

                const responseData = await seatsResponse.json();
                setSeatsData(responseData.items || responseData);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
                setSeatsData([]);
            }
        };

        fetchSeats();
    }, [
        id_route,
        have_first_class, 
        have_second_class, 
        have_third_class, 
        have_fourth_class, 
        have_wifi, 
        have_air_conditioning, 
        have_express
    ]);

    // Условный рендеринг после ВСЕХ хуков
    if (!selectedRoute) {
        return (
            <div>
                <h2>Маршрут не выбран</h2>
                <p>Пожалуйста, вернитесь назад и выберите маршрут.</p>
            </div>
        );
    }

    console.log(seatsData);

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
                                <SelectSeatCard 
                                    seatsData={seatsData} 
                                    loading={loading} 
                                    error={error}
                                    filters={{
                                        have_first_class,
                                        have_second_class,
                                        have_third_class,
                                        have_fourth_class,
                                        have_wifi,
                                        have_air_conditioning,
                                        have_express
                                    }}
                                    setFilters={{
                                        setHaveFirstClass,
                                        setHaveSecondClass,
                                        setHaveThirdClass,
                                        setHaveFourthClass,
                                        setHaveWiFi,
                                        setHaveAirConditioning,
                                        setHaveExpress
                                    }}
                                />

                                <div className="select-seat">
                                    <div className="select-dif-train-right">
                                        <img src={IcoSelectDifTrainRight} alt="" />
                                        <Link to="/select-train" title="Выбор поезда">
                                            <button className="btn-dif-train active-btn">Выбрать другой поезд</button>
                                        </Link>
                                    </div>

                                    <div className="details-train-way">
                                        <div className="details-train-number">
                                            <div className="ico-details-train">
                                                <img src={IcoDetailsTrain} alt="" />
                                            </div>
                                            <div className="train-way-number">
                                                {/* Используем реальные данные из API */}
                                                <div className="details-train-number">
                                                    {departure?.train?.name || 'Н/Д'}
                                                </div>
                                                <div className="detail-train-way">
                                                    <span>{departure?.from?.city?.name} &rarr;</span><br />
                                                    {departure?.to?.city?.name}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="details-way">
                                            <div className="details-time-way">
                                                <div className="details-time">
                                                    {departure?.from?.datetime ? 
                                                        new Date(departure.from.datetime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) 
                                                        : '00:00'}
                                                </div>
                                                <div className="details-city-way">
                                                    {departure?.from?.city?.name}<br />
                                                    <span>{departure?.from?.railway_station_name}</span>
                                                </div>
                                            </div>
                                            <div className="ico-arrow-details-way">
                                                <img src={RightTripArrow} alt="" />
                                            </div>
                                            <div className="details-time-way">
                                                <div className="details-time">
                                                    {departure?.to?.datetime ? 
                                                        new Date(departure.to.datetime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}) 
                                                        : '00:00'}
                                                </div>
                                                <div className="details-city-way">
                                                    {departure?.to?.city?.name}<br />
                                                    <span>{departure?.to?.railway_station_name}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="details-travel-time-way">
                                            <div>
                                                <img src={IcoTimeWay} alt="" />
                                            </div>
                                            <div className="details-travel-time">
                                                {/* Рассчитываем или используем время в пути из API */}
                                                {departure?.duration || 'Время в пути'}
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
                                            <div className="ticket-count-text"></div>
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
                            <Link to="/passengers" title="Пассажиры">
                                <button className="btn-next-page active-btn">ДАЛЕЕ</button>
                            </Link>
                        </section>
                    </main>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default SelectSeat;