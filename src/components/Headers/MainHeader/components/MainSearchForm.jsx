import { useState, useEffect, useRef } from 'react';
import './MainSearchForm.css';
import Button from '../../../Buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeTripsSearchInput, selectTripsSearch } from '../../../../slices/tripsSearch';
import { validateSearchForm } from '../../../../utils/searchFormValidator';
import { useCitySuggestions } from '../../../../utils/useCitySuggestions';

const MainSearchForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formSearch = useSelector(selectTripsSearch);

    const [formData, setFormData] = useState({
        from_city: '',
        to_city: '',
        date_start: '',
        date_end: ''
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const fromCitySuggestions = useCitySuggestions();
    const toCitySuggestions = useCitySuggestions();

    const [showFromSuggestions, setShowFromSuggestions] = useState(false);
    const [showToSuggestions, setShowToSuggestions] = useState(false);

  
    const fromRef = useRef(null);
    const toRef = useRef(null);

 
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (fromRef.current && !fromRef.current.contains(event.target)) {
                setShowFromSuggestions(false);
            }
            if (toRef.current && !toRef.current.contains(event.target)) {
                setShowToSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

      useEffect(() => {
        const timer = setTimeout(() => {
            if (formData.from_city.length >= 2) {
                fromCitySuggestions.fetchCities(formData.from_city);
            } else {
                fromCitySuggestions.clearSuggestions();
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [formData.from_city]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (formData.to_city.length >= 2) {
                toCitySuggestions.fetchCities(formData.to_city);
            } else {
                toCitySuggestions.clearSuggestions();
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [formData.to_city]);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));

      
        if (errors[field]) {
            setErrors(prev => ({
                ...prev,
                [field]: ''
            }));
        }
    };

    const handleFromChange = (e) => {
        const value = e.target.value;
        handleInputChange('from_city', value);
        setShowFromSuggestions(true);
    };

    const handleToChange = (e) => {
        const value = e.target.value;
        handleInputChange('to_city', value);
        setShowToSuggestions(true);
    };

    const handleDateChange = (e, type) => {
        const value = e.target.value;
        const field = type === 'start' ? 'date_start' : 'date_end';
        handleInputChange(field, value);
    };

    const handleBlur = (field) => {
        setTouched(prev => ({
            ...prev,
            [field]: true
        }));

        const { errors: newErrors } = validateSearchForm(formData);
        setErrors(newErrors);
    };

    const handleSwapCities = () => {
        setFormData(prev => ({
            ...prev,
            from_city: prev.to_city,
            to_city: prev.from_city
        }));
    };

    const handleCitySelect = (city, field) => {
        handleInputChange(field, city.name);
        if (field === 'from_city') {
            setShowFromSuggestions(false);
        } else {
            setShowToSuggestions(false);
        }
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        const { isValid, errors: validationErrors } = validateSearchForm(formData);
        setErrors(validationErrors);

        if (isValid) {
            dispatch(changeTripsSearchInput({ name: 'from_city', value: formData.from_city }));
            dispatch(changeTripsSearchInput({ name: 'to_city', value: formData.to_city }));
            dispatch(changeTripsSearchInput({ name: 'date_start', value: formData.date_start }));
            dispatch(changeTripsSearchInput({ name: 'date_end', value: formData.date_end }));

            navigate('/select-train');
        }
    };

    const SuggestionsList = ({ suggestions, isLoading, show, onSelect, inputRef }) => {
        if (!show) return null;

        return (
            <ul className="suggestions-list" ref={inputRef}>
                {isLoading && <li className="suggestion-loading">Загрузка...</li>}
                {!isLoading && suggestions.length === 0 && (
                    <li className="suggestion-empty">Городы не найдены</li>
                )}
                {suggestions.map(city => (
                    <li
                        key={city._id}
                        className="suggestion-item"
                        onClick={() => onSelect(city)}
                    >
                        {city.name}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="search-trip">
            <form className="form-search-trip" onSubmit={onFormSubmit}>
                <div className="header-search-trip">Направление</div>
                <div className="search-input-way">
                    <div className="input-with-suggestions" ref={fromRef}>
                        <input
                            className={`way-input ${errors.from_city ? 'error' : ''}`}
                            type="text"
                            placeholder="Откуда"
                            value={formData.from_city}
                            onChange={handleFromChange}
                            onBlur={() => handleBlur('from_city')}
                            onFocus={() => setShowFromSuggestions(true)}
                        />
                        <SuggestionsList
                            suggestions={fromCitySuggestions.suggestions}
                            isLoading={fromCitySuggestions.isLoading}
                            show={showFromSuggestions}
                            onSelect={(city) => handleCitySelect(city, 'from_city')}
                        />
                        {errors.from_city && <span className="error-message">{errors.from_city}</span>}
                    </div>
                    
                    <div className="button-container">
                        <button
                            type="button"
                            className="btn-replace-city"
                            onClick={handleSwapCities}
                        ></button>
                    </div>
                    <div className="input-with-suggestions" ref={toRef}>
                        <input
                            className={`way-input ${errors.to_city ? 'error' : ''}`}
                            type="text"
                            placeholder="Куда"
                            value={formData.to_city}
                            onChange={handleToChange}
                            onBlur={() => handleBlur('to_city')}
                            onFocus={() => setShowToSuggestions(true)}
                        />
                        <SuggestionsList
                            suggestions={toCitySuggestions.suggestions}
                            isLoading={toCitySuggestions.isLoading}
                            show={showToSuggestions}
                            onSelect={(city) => handleCitySelect(city, 'to_city')}
                        />
                        {errors.to_city && <span className="error-message">{errors.to_city}</span>}
                    </div>
                </div>
                
                <div className="header-search-trip">Дата</div>
                <div className="search-input-date">
                    <div className="date-input-container">
                        <input
                            className={`date-input ${errors.date_start ? 'error' : ''}`}
                            type="date"
                            placeholder="дд/мм/гг"
                            value={formData.date_start}
                            onChange={(e) => handleDateChange(e, 'start')}
                            onBlur={() => handleBlur('date_start')}
                            min={new Date().toISOString().split('T')[0]}
                        />
                        {errors.date_start && <span className="error-message">{errors.date_start}</span>}
                    </div>
                    <div className="date-input-container">
                        <input
                            className={`date-input ${errors.date_end ? 'error' : ''}`}
                            type="date"
                            placeholder="дд/мм/гг"
                            value={formData.date_end}
                            onChange={(e) => handleDateChange(e, 'end')}
                            onBlur={() => handleBlur('date_end')}
                            min={formData.date_start || new Date().toISOString().split('T')[0]}
                        />
                        {errors.date_end && <span className="error-message">{errors.date_end}</span>}
                    </div>
                </div>
                
                <div className="form-serch-button">
                    <Button buttonName="search" type="submit" />
                </div>
            </form>
        </div>
    );
};

export default MainSearchForm;