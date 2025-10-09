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
import SelectedSeatCard from '../components/SelectSeat/SelectedSeatCard';

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

    useEffect(() => {
        const fetchSeats = async () => {
            if (!id_route) {
                console.log('ID маршрута не найден');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);
                
                const params = new URLSearchParams();
                if (have_first_class) params.append('have_first_class', 'true');
                if (have_second_class) params.append('have_second_class', 'true');
                if (have_third_class) params.append('have_third_class', 'true');
                if (have_fourth_class) params.append('have_fourth_class', 'true');
                if (have_wifi) params.append('have_wifi', 'true');
                if (have_air_conditioning) params.append('have_air_conditioning', 'true');
                if (have_express) params.append('have_express', 'true');

                const url = `${BASE_URL}/routes/${id_route}/seats${params.toString() ? `?${params.toString()}` : ''}`;
                console.log('Запрос к URL:', url);
                
                const seatsResponse = await fetch(url);

                if (!seatsResponse.ok) {
                    throw new Error(`HTTP error! status: ${seatsResponse.status}`);
                }

                const responseData = await seatsResponse.json();
                console.log('Полученные данные:', responseData);
                
                setSeatsData(responseData.items || responseData || []);
            } catch (err) {
                console.error('Ошибка при загрузке мест:', err);
                setError(err.message);
                setSeatsData([]);
            } finally {
                setLoading(false);
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

    
    if (!selectedRoute) {
        return (
            <div>
                <h2>Маршрут не выбран</h2>
                <p>Пожалуйста, вернитесь назад и выберите маршрут.</p>
            </div>
        );
    }

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
                                    departure={departure}
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

                                <SelectedSeatCard />
                                
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