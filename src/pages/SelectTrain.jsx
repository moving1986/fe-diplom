// SelectTrain.jsx
import { Link } from 'react-router-dom';
import OrderHeader from '../components/Headers/OrderHeader/OrderHeader';
import StepsLine from '../components/StepsLine';
import FilterWays from '../components/FilterWays';
import LastTrips from '../components/LastTrips';
import Footer from '../components/Footer/Footer';
import CardSelectTrain from '../components/SelectTrain/CardSelectTrain';
import Loading from '../components/Loading/Loading';
import { BASE_URL } from '../api/api';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Pagination from '../components/SelectTrain/Pagination';

const SelectTrain = () => {
    const tripsSearchState = useSelector(state => state.tripsSearch);
    

    const [fromCityId, setFromCityId] = useState(null);
    const [toCityId, setToCityId] = useState(null);
    const [totalCount, setTotalCount] = useState(null);
    const [routesData, setRoutesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [limit, setLimit] = useState(5);
    const [sort, setSort] = useState('time');
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffset] = useState(0);


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
                const routesResponse = await fetch(
                     `${BASE_URL}/routes?from_city_id=${fromCityId}&to_city_id=${toCityId}&limit=${limit}&offset=${offset}&sort=${sort}`   );

                if (!routesResponse.ok) {
                    throw new Error(`HTTP error! status: ${routesResponse.status}`);
                }

                const responseData = await routesResponse.json();
                setTotalCount(responseData.total_count);
                setRoutesData(responseData.items);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
                setRoutesData([]);
            }
        };

        fetchRoutes();
    }, [fromCityId, toCityId, limit, sort, offset]);

    const handleLimitChange = (newLimit) => {
        setLimit(newLimit);
        setCurrentPage(1); 
        setOffset(0); 
    };
    const handleSortChange = (newSort) => {
        setSort(newSort);
        setCurrentPage(1);
        setOffset(0);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
        setOffset((page - 1) * limit);
    };

    const totalPages = totalCount ? Math.ceil(totalCount / limit) : 0;
    return (
        <>
            <OrderHeader />
            <StepsLine />
            <div className="light-grey-bg">
                
                    {loading ? (
                        <Loading />
                    ) : error ? (
                        <div>Ошибка: {error}</div>
                    ) : (
                    <div className="container">
                        <main className="main-order-tickets">
                            <aside className="detail-trip">
                                <FilterWays 
                                    fromCity={tripsSearchState.from_city}
                                    toCity={tripsSearchState.to_city}
                                    date={tripsSearchState.date}
                                />
                                <LastTrips />
                            </aside>
                            <section className="main-tickets">
                                <CardSelectTrain
                                    routesData={routesData}
                                    totalCount={totalCount}
                                    onLimitChange={handleLimitChange}
                                    onSortChange={handleSortChange}
                                    limit={limit}
                                    sort={sort}
                                />

                                <Pagination 
                                    currentPage={currentPage}
                                    totalPages={totalPages}
                                    onPageChange={handlePageChange}
                                />
                            </section>
                        </main>
                    </div>
                    )}
                </div>
           
            <Footer />
        </>
    );
}

export default SelectTrain;