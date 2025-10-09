import './DateFilter.css';
import DatePicker from "react-datepicker";
import { ru } from 'date-fns/locale';
import { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from 'react-redux';
import { selectTripsSearch } from "../../../slices/tripsSearch";
import { changeTripsSearchInput } from '../../../slices/tripsSearch'

registerLocale('ru', ru);
const DateFilter = () => {
    const dispatch = useDispatch();

    const filter = useSelector(selectTripsSearch);


    const handleСhangeTripsSearchInput = (data) => {
        Object.entries(data).forEach(([name, value]) => {
            let processedValue = value;

            if (value instanceof Date) {
                processedValue = value.toISOString().split('T')[0];
            }

            dispatch(changeTripsSearchInput({ name, value: processedValue }));
        });
    };
    return (
        <div className="aside-dates">
            <div className="aside-header">Дата поездки</div>
            <DatePicker
                selected={filter.date_start_arrival}
                onChange={newValue => handleСhangeTripsSearchInput({ date_start_arrival: newValue })}
                dateFormat="dd.MM.yyyy"
                locale="ru"
                placeholderText="дд.мм.гггг"
                className="aside-date-input"
            />
            <div className="aside-header">Дата возвращения</div>
            <DatePicker
                selected={filter.date_end_arrival}
                onChange={newValue => handleСhangeTripsSearchInput({ date_end_arrival: newValue })}
                dateFormat="dd.MM.yyyy"
                locale="ru"
                placeholderText="дд.мм.гггг"
                className="aside-date-input"
            />
        </div>
    )
}

export default DateFilter;