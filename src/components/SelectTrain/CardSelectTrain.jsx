import './CardSelectTrain.css';
import { BASE_URL } from '../../api/api';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import IcoTrain from '../../assets/images/ico-train.svg';
import RightTripArrow from '../../assets/images/right-trip-arrow.svg';
import LeftTripArrow from '../../assets/images/left-trip-arrow.svg';
import IcoRub from '../../assets/images/ico-rub.svg';
import Button from '../Buttons/Button';
import TripOptions from '../TripOptions';
import { getUppercaseFirstLetter } from  '../../utils/utils'
import { setSelectedRoute } from '../../slices/tripSlice';
import { formatTime } from '../../utils/utils';
import { formatDuration } from '../../utils/utils';
import SortSelectTrain from '../SelectTrain/SortSelectTrain'
import Loading from '../Loading/Loading';


const CardSelectTrain = (...props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const tripsSearchState = useSelector(state => state.tripsSearch);


    const [fromCityId, setFromCityId] = useState(null);
    const [toCityId, setToCityId] = useState(null);
    const [totalCount, setTotalCount] = useState(null); 
    const [routesData, setRoutesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(5);
    const [sort, setSort] = useState('time');
    

    useEffect(() => {
        const fetchCityIds = async () => {
            try {
                setLoading(true);
                const fromCityResponse = await fetch(`${BASE_URL}/routes/cities?name=${tripsSearchState.from_city}`);
                const fromCityData = await fromCityResponse.json();
                const fromId = fromCityData.length > 0 ? fromCityData[0]._id : null;
                setFromCityId(fromId);

                const toCityResponse = await fetch(`${BASE_URL}/routes/cities?name=${tripsSearchState.to_city}`);
                const toCityData = await toCityResponse.json();
                const toId = toCityData.length > 0 ? toCityData[0]._id : null;
                setToCityId(toId);

            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchCityIds();
    }, [tripsSearchState.from_city, tripsSearchState.to_city]);
    
    useEffect(() => {
        const fetchRoutes = async () => {
            if (!fromCityId || !toCityId) return;

            try {
                setLoading(true);
                const routesResponse = await fetch(  `${BASE_URL}/routes?from_city_id=${fromCityId}&to_city_id=${toCityId}&limit=${limit}&sort=${sort}`);
                
                if (!routesResponse.ok) {
                    throw new Error(`HTTP error! status: ${routesResponse.status}`);
                }
                
                const responseData = await routesResponse.json();
       
                setTotalCount(responseData.total_count);

                let routesArray = [];
                                              
                routesArray = responseData.items;
                
                setRoutesData(routesArray);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
                setRoutesData([]);
            }
        };

        fetchRoutes();
    }, [fromCityId, toCityId, limit, sort]);

        const handleLimitChange = (newLimit) => {
        setLimit(newLimit);
    };


    const handleSortChange = (newSort) => {
        setSort(newSort);
    };

    const handleBtnClick = (route) => {
         dispatch(setSelectedRoute(route));
         navigate('/select-seat');
    }

    
    const formatPrice = (price) => {
        return price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') || '—';
    };

   
    const getMinPriceForClass = (priceInfo, className) => {
        if (!priceInfo || !priceInfo[className]) return null;
        
          const classPrices = priceInfo[className];
        
        
        if (classPrices.bottom_price) return classPrices.bottom_price;
        if (classPrices.price) return classPrices.price;
        if (classPrices.top_price) return classPrices.top_price;
        if (classPrices.side_price) return classPrices.side_price;
        
        return null;
    };


    if (loading) return <Loading />;
    if (error) return <div>Ошибка: {error}</div>;
    
    if (!Array.isArray(routesData) || routesData.length === 0) {
        return <div>Нет доступных маршрутов</div>;
    }

    

    return (
        <>
         <SortSelectTrain  
            totalCount={totalCount}
            onLimitChange={handleLimitChange}
            onSortChange={handleSortChange}
            defaultLimit={limit}
            defaultSort={sort}
        />
            {routesData.map((route, index) => (
                <div key={route.departure?._id || index} className="card-select-ticket">
                    <div className="train-name">
                        <div className="train-name-content">
                            <div className="train-name-ico">
                                <img src={IcoTrain} alt="Поезд" />
                            </div>
                            <div className="train-name-header">
                               {route.departure?.train?.name}
                            </div>
                            <div className="train-name-way">
                                {getUppercaseFirstLetter(route.departure.from.city.name)} → {getUppercaseFirstLetter(route.departure?.to?.city?.name)}
                            </div>
                        </div>
                    </div>
                    
                    <div className="train-way">
                        <div className="train-way-inner">
                            <div className="from-way">
                                <div className="time-way">
                                    {route.departure?.from?.datetime ? 
                                        formatTime(route.departure.from.datetime) : '--:--'
                                    }
                                </div>
                                <div className="city-way">
                                    {getUppercaseFirstLetter(route.departure.from.city.name)}
                                </div>
                                <div className="staition-way">
                                    {getUppercaseFirstLetter(route.departure.from.railway_station_name)}
                                </div>
                            </div>
                            
                            <div className="time-trip-way">
                                <div className="time-trip">
                                    {formatDuration(route.departure.duration)}
                                </div>
                                <div className="right-trip-arrow">
                                    <img src={RightTripArrow} alt="Время в пути" />
                                </div>
                            </div>

                            <div className="to-way">
                                <div className="time-way">
                                    {formatTime(route.departure.to.datetime)}
                                </div>
                                <div className="city-way">
                                    {getUppercaseFirstLetter(route.departure.to.city.name)}
                                </div>
                                <div className="staition-way">
                                    {route.departure?.to?.railway_station_name}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="seat-type">
                        <div className="seats">
                            {route.departure?.have_fourth_class && (
                                <div className="seat-type-inner">
                                    <div className="type-of-seat">Сидячий</div>
                                    <div className="how-much-seat">
                                        {route.available_seats_info.fourth}
                                    </div>
                                    <div className="price-seat">
                                        от <span>{formatPrice(getMinPriceForClass(route.departure?.price_info, 'fourth'))}</span>
                                    </div>
                                    <div className="currency">
                                        &nbsp;<img src={IcoRub} alt="руб." />
                                    </div>
                                </div>
                            )}
                            
                            {route.departure?.have_third_class && (
                                <div className="seat-type-inner">
                                    <div className="type-of-seat">Плацкарт</div>
                                    <div className="how-much-seat">
                                        {route.available_seats_info?.third || 0}
                                    </div>
                                    <div className="price-seat">
                                        от <span>{formatPrice(getMinPriceForClass(route.departure?.price_info, 'third'))}</span>
                                    </div>
                                    <div className="currency">
                                        &nbsp;<img src={IcoRub} alt="руб." />
                                    </div>
                                </div>
                            )}
                            
                            {route.departure?.have_second_class && (
                                <div className="seat-type-inner">
                                    <div className="type-of-seat">Купе</div>
                                    <div className="how-much-seat">
                                        {route.available_seats_info?.second || 0}
                                    </div>
                                    <div className="price-seat">
                                        от <span>{formatPrice(getMinPriceForClass(route.departure?.price_info, 'second'))}</span>
                                    </div>
                                    <div className="currency">
                                        &nbsp;<img src={IcoRub} alt="руб." />
                                    </div>
                                </div>
                            )}
                            
                            {route.departure?.have_first_class && (
                                <div className="seat-type-inner">
                                    <div className="type-of-seat">Люкс</div>
                                    <div className="how-much-seat">
                                        {route.available_seats_info?.first || 0}
                                    </div>
                                    <div className="price-seat">
                                        от <span>{formatPrice(getMinPriceForClass(route.departure?.price_info, 'first'))}</span>
                                    </div>
                                    <div className="currency">
                                        &nbsp;<img src={IcoRub} alt="руб." />
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        <div className="seats-options">
                                <TripOptions 
                                    haveWifi={route.departure.have_wifi}
                                    isExpress={route.departure.is_express}
                                    
                                />
                        </div>
                        
                        <Button 
                            buttonName="selectSeat" 
                            onClick={(e) => handleBtnClick(route)} 
                        />
                    </div>
                </div>
            ))}
        </>
    )
}

export default CardSelectTrain; 