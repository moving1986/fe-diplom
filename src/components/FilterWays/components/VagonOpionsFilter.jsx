import './VagonOpionsFilter.css'
import IcoCupe from "../../../assets/images/ico-cupe.svg";
import IcoPlackart from "../../../assets/images/ico-plackart.svg";
import IcoSeat from "../../../assets/images/ico-seat.svg";
import IcoLux from "../../../assets/images/ico-lux.svg"
import IcoWifi from "../../../assets/images/ico-wifi.svg";
import IcoExpress from "../../../assets/images/ico-express.svg";
import { useDispatch, useSelector } from 'react-redux';
import { selectTripsSearch } from "../../../slices/tripsSearch";
import { changeTripsSearchInput } from '../../../slices/tripsSearch'

const VagonOpionsFilter = () => {

    const dispatch = useDispatch();

    const filter = useSelector(selectTripsSearch);

    const handleChange = (name, value) => {
        dispatch(changeTripsSearchInput({ name, value }));
    };

const filterOptions = [
    { key: 'have_second_class', label: 'Купе', icon: IcoCupe },
    { key: 'have_third_class', label: 'Плацкарт', icon: IcoPlackart },
    { key: 'have_fourth_class', label: 'Сидячий', icon: IcoSeat },
    { key: 'have_first_class', label: 'Люкс', icon: IcoLux },
    { key: 'have_wifi', label: 'Wi-Fi', icon: IcoWifi },
    { key: 'have_express', label: 'Экспресс', icon: IcoExpress },
];

return (
    <section className="vagon-type">
        <div className="select-panel">
            {filterOptions.map((option) => (
                <div key={option.key} className="select-panel-row">
                    <div className="ico-type">
                        <img src={option.icon} alt={option.label} />
                    </div>
                    <div className="text-type">{option.label}</div>
                    <div className="selector-slide">
                        <label className="settings-switch">
                            <input 
                                type="checkbox"
                                checked={filter[option.key] || false}
                                onChange={(e) => handleChange(option.key, e.target.checked)}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>
                </div>
            ))}
        </div>
    </section>
);
}

export default VagonOpionsFilter;