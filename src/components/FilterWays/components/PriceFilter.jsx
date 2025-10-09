import './PriceFilter.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectTripsSearch } from "../../../slices/tripsSearch";
import { changeTripsSearchInput } from '../../../slices/tripsSearch';
import { useState, useEffect } from 'react';

const PriceFilter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(selectTripsSearch);
    
    const minPrice = 1920;
    const maxPrice = 7000;
    
    const [minVal, setMinVal] = useState(filter.price_from || minPrice);
    const [maxVal, setMaxVal] = useState(filter.price_to || maxPrice);

    useEffect(() => {
        if (filter.price_from !== undefined) {
            setMinVal(filter.price_from);
        }
        if (filter.price_to !== undefined) {
            setMaxVal(filter.price_to);
        }
    }, [filter.price_from, filter.price_to]);

    const displayMinValue = () => {
        return minVal === minPrice ? `${minPrice} ₽` : `${minVal} ₽`;
    };

    const displayMaxValue = () => {
        return maxVal === maxPrice ? `${maxPrice} ₽` : `${maxVal} ₽`;
    };

    const getTrackStyle = () => {
        const minPercent = ((minVal - minPrice) / (maxPrice - minPrice)) * 100;
        const maxPercent = ((maxVal - minPrice) / (maxPrice - minPrice)) * 100;
        
        return {
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`
        };
    };

    const getValuePosition = (value) => {
        return ((value - minPrice) / (maxPrice - minPrice)) * 100;
    };

    const trackStyle = getTrackStyle();
    const minPosition = getValuePosition(minVal);
    const maxPosition = getValuePosition(maxVal);

    const handleMinChange = (e) => {
        const value = Math.min(Number(e.target.value), maxVal - 100);
        setMinVal(value);
    };

    const handleMaxChange = (e) => {
        const value = Math.max(Number(e.target.value), minVal + 100);
        setMaxVal(value);
    };

    const handleMouseUp = (type) => {
        if (type === 'min') {
            dispatch(changeTripsSearchInput({ name: 'price_from', value: minVal }));
        } else {
            dispatch(changeTripsSearchInput({ name: 'price_to', value: maxVal }));
        }
    };

    return (
        <div className="price-range">
            <div className="aside-header">
                Стоимость
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
                <div className="slider-price-container">
                    <div className="slider-track" style={trackStyle}></div>
                    <input
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        value={minVal}
                        step="100"
                        onChange={handleMinChange}
                        onMouseUp={() => handleMouseUp('min')}
                        className="price-range-min"
                    />
                    <input
                        type="range"
                        min={minPrice}
                        max={maxPrice}
                        value={maxVal}
                        step="100"
                        onChange={handleMaxChange}
                        onMouseUp={() => handleMouseUp('max')}
                        className="price-range-max"
                    />
                </div>

              
                <div className="slider-values">
                    <div 
                        className="slider-value" 
                        style={{ 
                            left: `${minPosition}%`,
                            opacity: 1,
                            visibility: 'visible',
                            display: 'block'
                        }}
                    >
                        {displayMinValue()}
                    </div>
                    <div 
                        className="slider-value-second" 
                        style={{ 
                            left: `${maxPosition}%`,
                            opacity: 1,
                            visibility: 'visible',
                            display: 'block'
                        }}
                    >
                        {displayMaxValue()}
                    </div>
                    <div className="slider-value-end">
                       {maxPrice} ₽
                    </div>
                </div>
            </div>

  
        </div>
    );
}

export default PriceFilter;