import { useState } from 'react';
import Api, { BASE_URL } from '../../../../api/api';
import './MainSearchForm.css'
import Button from '../../../Buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeTripsSearchInput, selectTripsSearch } from '../../../../slices/tripsSearch';


const MainSearchForm = (...props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formSearch = useSelector(selectTripsSearch);

    const [data, setData] = useState([]);
    const [from_city, setFromCity] = useState('');
    const [to_city, setToCity] = useState('');
    const [date_start, setDateStart] = useState('');
    const [date_end, setDateEnd] = useState('');


    // const Api = Api(BASE_URL);

    const handleFromChange = (e) => {
        const value = e.target.value;
        setFromCity(value);
        console.log(value);
    }

    const handleToChange = (e) => {
        const value = e.target.value;
        setToCity(value);
      
    }

    const handleDateChange = (e, type) => {
        const value = e.target.value;
        if (type === 'start') {
            setDateStart(value);
        } else {
            setDateEnd(value);
        }
 
    }

    const handleSwapCities = () => {
        const temp = from_city;
        setFromCity(to_city);
        setToCity(temp);
    }


    const onFormSubmit =  (event) => {
        event.preventDefault();

        dispatch(changeTripsSearchInput({ name: 'from_city', value: from_city }));
        dispatch(changeTripsSearchInput({ name: 'to_city', value: to_city }));
        dispatch(changeTripsSearchInput({ name: 'date_start', value: date_start }));
        dispatch(changeTripsSearchInput({ name: 'date_end', value: date_end }));

        if(from_city && to_city) {

            navigate('/select-train');
        } else {
            console.log('Ошибка диспатча стейта');
        }


    };

    return (
        <div className="search-trip">
            <form className="form-search-trip" onSubmit={onFormSubmit}>
                <div className="header-search-trip">Направление</div>
                <div className="search-input-way">
                    <input
                        className="way-input"
                        type="text"
                        placeholder="Откуда"
                        value={from_city}
                        onChange={handleFromChange}
                    />
                    <button
                        type="button"
                        className="btn-replace-city"
                        onClick={handleSwapCities}
                    ></button>
                    <input
                        className="way-input"
                        type="text"
                        placeholder="Куда"
                        value={to_city}
                        onChange={handleToChange}
                    />
                </div>
                <div className="header-search-trip">Дата</div>
                <div className="search-input-date">
                    <input
                        className="date-input"
                        type="date"
                        placeholder="дд/мм/гг"
                        value={date_start}
                        onChange={(e) => handleDateChange(e, 'start')}
                    />
                    <input
                        className="date-input"
                        type="date"
                        placeholder="дд/мм/гг"
                        value={date_end}
                        onChange={(e) => handleDateChange(e, 'end')}
                    />
                </div>
                <div className="form-serch-button">
                 <Button buttonName="search" />
                </div>
            </form>
        </div>
    )
}

export default MainSearchForm;