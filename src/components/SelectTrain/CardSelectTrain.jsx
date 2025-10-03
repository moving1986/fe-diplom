import './CardSelectTrain.css';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IcoTrain from '../../assets/images/ico-train.svg';
import RightTripArrow from '../../assets/images/right-trip-arrow.svg';
import LeftTripArrow from '../../assets/images/left-trip-arrow.svg';
import IcoRub from '../../assets/images/ico-rub.svg';
import IcoSeatsOptions from '../../assets/images/ico-seats-options.svg';
import Button from '../Buttons/Button';
import Api, { BASE_URL } from '../../api/api';
import { useEffect } from 'react';

const CardSelectTrain = (...props) => {

    const navigate = useNavigate();

    const tripsSearchState = useSelector(state => state.tripsSearch);
    console.log(tripsSearchState.from_city);
    console.log(tripsSearchState.to_city);


    // const apiData = Api(`${BASE_URL}/routes/cities?name=`);
    


    const handelBtnClick = (event) => {
        navigate('/select-seat');
    }

    return (
    <div className="card-select-ticket">
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
        </div>
        <div className="seats-options">
            <img src={IcoSeatsOptions} alt="" />
        </div>
      <Button buttonName="selectSeat"  onClick={handelBtnClick} />
    </div>
</div>

    )
}

export default CardSelectTrain;