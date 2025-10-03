import './LastTrips.css';
import IcoRub from "../assets/images/ico-rub.svg";
import Api, { BASE_URL } from '../api/api';
import TripOptions from './TripOptions';

const LastTrips = () => {
    const routeLast = '/routes/last';
    const { data, error, loading } = Api(`${BASE_URL}${routeLast}`, []);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error}</div>;
    if (!data || data.length === 0) return <div>Нет последних поездок</div>;

    console.log(data);    
    return (
        <section className="last-trip">
            <div className="header-last-trip">последние билеты</div>
            <div className="last-trips">
                {data.slice(0, 3).map((item) => (
                    <div className="card-last-trip" key={item.id}>
                        <div className="row-last-trip">
                            <div className="from-last-trip">
                                {item.departure.from.city.name}<br />
                                <span>{item.departure.from.railway_station_name}<br />вокзал</span>
                            </div>
                            <div className="to-last-trip">
                                {item.departure.to.city.name}<br />
                                <span>{item.departure.to.railway_station_name}<br />вокзал</span>
                            </div>
                        </div>
                        <div className="row-last-trip">
                            <div className="icons-option">
                                <TripOptions 
                                    haveWifi={item.departure.have_wifi}
                                    isExpress={item.departure.is_express}

                                />
                            </div>
                            <div className="price-last-trip">
                                от <span>{item.min_price}</span> 
                                <img className="ico-rub-last-trip" src={IcoRub} alt="руб." />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default LastTrips;