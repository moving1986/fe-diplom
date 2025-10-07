import React, { useState, useEffect, useRef } from 'react';
import DatePicker from "react-datepicker";
import { ru } from 'date-fns/locale';
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { BASE_URL } from '../../../../api/api';
import './MainSearchForm.css';
import Button from '../../../Buttons/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeTripsSearchInput, selectTripsSearch } from '../../../../slices/tripsSearch';
import { validateSearchForm } from '../../../../utils/searchFormValidator';
import { useCitySuggestions } from '../../../../utils/useCitySuggestions';
import ImgCalendar from '../../../../assets/images/input-date-bg.svg';


registerLocale('ru', ru);

const MainSearchForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const formSearch = useSelector(selectTripsSearch);

    const [formData, setFormData] = useState({
        from_city: '',
        to_city: '',
        date_start: null,
        date_end: null
    });

    const [errors, setErrors] = useState({});
    
    // Хуки для автодополнения
    const fromCitySuggestions = useCitySuggestions();
    const toCitySuggestions = useCitySuggestions();

    // Состояния для отображения подсказок
    const [showFromSuggestions, setShowFromSuggestions] = useState(false);
    const [showToSuggestions, setShowToSuggestions] = useState(false);

    // Рефы для обработки кликов вне области
    const fromRef = useRef(null);
    const toRef = useRef(null);

    // Обработчик кликов вне области автодополнения
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

    // Debounce для запросов к API
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

        // Сбрасываем ошибку при изменении поля
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

    const handleDateChange = (date, field) => {
        handleInputChange(field, date);
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
        
        // Конвертируем даты в строки для валидации
        const formDataForValidation = {
            ...formData,
            date_start: formData.date_start ? formData.date_start.toISOString().split('T')[0] : '',
            date_end: formData.date_end ? formData.date_end.toISOString().split('T')[0] : ''
        };
        
        const { isValid, errors: validationErrors } = validateSearchForm(formDataForValidation);
        setErrors(validationErrors);

        if (isValid) {
            dispatch(changeTripsSearchInput({ 
                name: 'from_city', 
                value: formData.from_city 
            }));
            dispatch(changeTripsSearchInput({ 
                name: 'to_city', 
                value: formData.to_city 
            }));
            dispatch(changeTripsSearchInput({ 
                name: 'date_start', 
                value: formData.date_start ? formData.date_start.toISOString().split('T')[0] : '' 
            }));
            dispatch(changeTripsSearchInput({ 
                name: 'date_end', 
                value: formData.date_end ? formData.date_end.toISOString().split('T')[0] : '' 
            }));

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

  
    const CustomInput = ({ value, onClick, placeholder, error }) => (
        <div className="date-input-wrapper" onClick={onClick}>
            <input
                className={`date-input-custom ${error ? 'error' : ''}`}
                value={value}
                placeholder={placeholder}
                readOnly
            />
            <span className="calendar-icon"><img src={ImgCalendar} alt="" /></span>
        </div>
    );

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
                    
                    <button
                        type="button"
                        className="btn-replace-city"
                        onClick={handleSwapCities}
                    ></button>
                    
                    <div className="input-with-suggestions" ref={toRef}>
                        <input
                            className={`way-input ${errors.to_city ? 'error' : ''}`}
                            type="text"
                            placeholder="Куда"
                            value={formData.to_city}
                            onChange={handleToChange}
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
                        <DatePicker
                            selected={formData.date_start}
                            onChange={(date) => handleDateChange(date, 'date_start')}
                            selectsStart
                            startDate={formData.date_start}
                            endDate={formData.date_end}
                            minDate={new Date()}
                            dateFormat="dd.MM.yyyy"
                            locale="ru"
                            placeholderText="дд.мм.гггг"
                            customInput={<CustomInput error={errors.date_start} />}
                        />
                        {errors.date_start && <span className="error-message">{errors.date_start}</span>}
                    </div>
                    <div className="date-input-container">
                        <DatePicker
                            selected={formData.date_end}
                            onChange={(date) => handleDateChange(date, 'date_end')}
                            selectsEnd
                            startDate={formData.date_start}
                            endDate={formData.date_end}
                            minDate={formData.date_start || new Date()}
                            dateFormat="dd.MM.yyyy"
                            locale="ru"
                            placeholderText="дд.мм.гггг"
                            customInput={<CustomInput error={errors.date_end} />}
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