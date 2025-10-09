import './FromWayFilter.css';
import IcoRightArrowAside from "../../../assets/images/ico-right-arrow-aside.svg";
import IcoMoreAside from "../../../assets/images/ico-more-aside.svg";
import IcoCloseHidden from "../../../assets/images/ico-close-hidden.svg";

import { useDispatch, useSelector } from 'react-redux';
import { selectTripsSearch } from "../../../slices/tripsSearch";
import { changeTripsSearchInput } from '../../../slices/tripsSearch';
import { useState, useEffect, useMemo } from 'react';

const FromWayFilter = () => {
    
    const dispatch = useDispatch();
    const filter = useSelector(selectTripsSearch);

    const [isHidden, setIsHidden] = useState(true);

    const minHour = 0;
    const maxHour = 24;
    
    // Исправленная инициализация состояний
    const [departureFrom, setDepartureFrom] = useState(
        filter.start_departure_hour_from !== undefined && filter.start_departure_hour_from !== null 
            ? filter.start_departure_hour_from 
            : minHour
    );
    const [departureTo, setDepartureTo] = useState(
        filter.start_departure_hour_to !== undefined && filter.start_departure_hour_to !== null 
            ? filter.start_departure_hour_to 
            : maxHour
    );
    const [arrivalFrom, setArrivalFrom] = useState(
        filter.start_arrival_hour_from !== undefined && filter.start_arrival_hour_from !== null 
            ? filter.start_arrival_hour_from 
            : minHour
    );
    const [arrivalTo, setArrivalTo] = useState(
        filter.start_arrival_hour_to !== undefined && filter.start_arrival_hour_to !== null 
            ? filter.start_arrival_hour_to 
            : maxHour
    );

    useEffect(() => {
        const validateValue = (value, defaultValue) => {
            if (value === undefined || value === null) return defaultValue;
            return Math.min(Math.max(value, minHour), maxHour);
        };

        setDepartureFrom(validateValue(filter.start_departure_hour_from, minHour));
        setDepartureTo(validateValue(filter.start_departure_hour_to, maxHour));
        setArrivalFrom(validateValue(filter.start_arrival_hour_from, minHour));
        setArrivalTo(validateValue(filter.start_arrival_hour_to, maxHour));
    }, [
        filter.start_departure_hour_from, 
        filter.start_departure_hour_to,
        filter.start_arrival_hour_from,
        filter.start_arrival_hour_to
    ]);

    const handleOnClickHidden = () => {
        setIsHidden(!isHidden);
    }

    const formatHour = (hour) => {
        return hour === 24 ? '24:00' : `${hour.toString().padStart(2, '0')}:00`;
    };

    const displayDepartureFromValue = () => {
        return departureFrom === minHour ? formatHour(minHour) : formatHour(departureFrom);
    };

    const displayDepartureToValue = () => {
        return departureTo === maxHour ? formatHour(maxHour) : formatHour(departureTo);
    };

    const displayArrivalFromValue = () => {
        return arrivalFrom === minHour ? formatHour(minHour) : formatHour(arrivalFrom);
    };

    const displayArrivalToValue = () => {
        return arrivalTo === maxHour ? formatHour(maxHour) : formatHour(arrivalTo);
    };

    const getTrackStyle = (minVal, maxVal) => {
        const minPercent = ((minVal - minHour) / (maxHour - minHour)) * 100;
        const maxPercent = ((maxVal - minHour) / (maxHour - minHour)) * 100;
        
        return {
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`
        };
    };

    const getValuePosition = (value) => {
        const position = ((value - minHour) / (maxHour - minHour)) * 100;
        return Math.min(Math.max(position, 0), 100);
    };

    // Используем useMemo для оптимизации
    const departureTrackStyle = useMemo(() => 
        getTrackStyle(departureFrom, departureTo), 
        [departureFrom, departureTo]
    );

    const arrivalTrackStyle = useMemo(() => 
        getTrackStyle(arrivalFrom, arrivalTo), 
        [arrivalFrom, arrivalTo]
    );

    const departureFromPosition = useMemo(() => 
        getValuePosition(departureFrom), 
        [departureFrom]
    );

    const departureToPosition = useMemo(() => 
        getValuePosition(departureTo), 
        [departureTo]
    );

    const arrivalFromPosition = useMemo(() => 
        getValuePosition(arrivalFrom), 
        [arrivalFrom]
    );

    const arrivalToPosition = useMemo(() => 
        getValuePosition(arrivalTo), 
        [arrivalTo]
    );

    const handleDepartureFromChange = (e) => {
        const value = Math.min(Number(e.target.value), departureTo - 1);
        setDepartureFrom(value);
    };

    const handleDepartureToChange = (e) => {
        const value = Math.max(Number(e.target.value), departureFrom + 1);
        setDepartureTo(value);
    };

    const handleArrivalFromChange = (e) => {
        const value = Math.min(Number(e.target.value), arrivalTo - 1);
        setArrivalFrom(value);
    };

    const handleArrivalToChange = (e) => {
        const value = Math.max(Number(e.target.value), arrivalFrom + 1);
        setArrivalTo(value);
    };

    const handleMouseUp = (type) => {
        switch (type) {
            case 'departure_from':
                console.log(departureFrom);
                dispatch(changeTripsSearchInput({ name: 'start_departure_hour_from', value: departureFrom }));
                break;
            case 'departure_to':
                dispatch(changeTripsSearchInput({ name: 'start_departure_hour_to', value: departureTo }));
                break;
            case 'arrival_from':
                dispatch(changeTripsSearchInput({ name: 'start_arrival_hour_from', value: arrivalFrom }));
                break;
            case 'arrival_to':
                dispatch(changeTripsSearchInput({ name: 'start_arrival_hour_to', value: arrivalTo }));
                break;
            default:
                break;
        }
    };

    const handleTouchEnd = (type) => {
        handleMouseUp(type);
    };

    const hiddenWays = isHidden ? 'hidden' : 'no-hidden';
    const icoHidden = isHidden ? IcoMoreAside : IcoCloseHidden;

    return (
        <>
            <div className="aside-ways">
                <div className="ico-way"><img src={IcoRightArrowAside} alt="" /></div>
                <div className="text-aside-ways">Туда</div>
                <div className="ico-more-aside-ways">
                    <img onClick={handleOnClickHidden} src={icoHidden} alt="" />
                </div>
            </div>
            <div className={`ways-times ${hiddenWays}`}>
                
                <div className="price-range">
                    <div className="aside-heade-departure" >
                        Время отбытия  
                    </div>
                    
                    <div className="price-inputs">
                        <div className="price-input">
                            <div className="price-label">от</div>
                        </div>
                        <div className="price-input">
                            <div className="price-label">до</div>
                        </div>
                    </div>

                    <div className="slider-wrapper">
                        <div className="slider-time-container">
                            <div className="slider-track" style={departureTrackStyle}></div>
                            <input
                                type="range"
                                min={minHour}
                                max={maxHour}
                                value={departureFrom}
                                step="1"
                                onChange={handleDepartureFromChange}
                                onMouseUp={() => handleMouseUp('departure_from')}
                                onTouchEnd={() => handleTouchEnd('departure_from')}
                                className="price-range-min"
                            />
                            <input
                                type="range"
                                min={minHour}
                                max={maxHour}
                                value={departureTo}
                                step="1"
                                onChange={handleDepartureToChange}
                                onMouseUp={() => handleMouseUp('departure_to')}
                                onTouchEnd={() => handleTouchEnd('departure_to')}
                                className="price-range-max"
                            />
                        </div>

                        <div className="slider-values">
                            <div 
                                className="slider-value" 
                                style={{ 
                                    left: `${departureFromPosition}%`,
                                    transform: 'translateX(-50%)'
                                }}
                            >
                                {displayDepartureFromValue()}
                            </div>
                            <div 
                                className="slider-value-second" 
                                style={{ 
                                    left: `${departureToPosition}%`,
                                    transform: 'translateX(-50%)'
                                }}
                            >
                                {displayDepartureToValue()}
                            </div>
                            <div className="slider-value-end">
                                {formatHour(maxHour)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="price-range">
                    <div className="aside-heade-arrival">
                        Время прибытия
                    </div>
                    
                    <div className="price-inputs">
                        <div className="price-input">
                            <div className="price-label">от</div>
                        </div>
                        <div className="price-input">
                            <div className="price-label">до</div>
                        </div>
                    </div>

                    <div className="slider-wrapper">
                        <div className="slider-time-container">
                            <div className="slider-track" style={arrivalTrackStyle}></div>
                            <input
                                type="range"
                                min={minHour}
                                max={maxHour}
                                value={arrivalFrom}
                                step="1"
                                onChange={handleArrivalFromChange}
                                onMouseUp={() => handleMouseUp('arrival_from')}
                                onTouchEnd={() => handleTouchEnd('arrival_from')}
                                className="price-range-min"
                            />
                            <input
                                type="range"
                                min={minHour}
                                max={maxHour}
                                value={arrivalTo}
                                step="1"
                                onChange={handleArrivalToChange}
                                onMouseUp={() => handleMouseUp('arrival_to')}
                                onTouchEnd={() => handleTouchEnd('arrival_to')}
                                className="price-range-max"
                            />
                        </div>

                        <div className="slider-values">
                            <div 
                                className="slider-value" 
                                style={{ 
                                    left: `${arrivalFromPosition}%`,
                                    transform: 'translateX(-50%)'
                                }}
                            >
                                {displayArrivalFromValue()}
                            </div>
                            <div 
                                className="slider-value-second" 
                                style={{ 
                                    left: `${arrivalToPosition}%`,
                                    transform: 'translateX(-50%)'
                                }}
                            >
                                {displayArrivalToValue()}
                            </div>
                            <div className="slider-value-end">
                                {formatHour(maxHour)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FromWayFilter;