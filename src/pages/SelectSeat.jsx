import { Link } from 'react-router-dom';

const SelectSeat = () => {

    return (
        <>
            <p>This page select seat</p>
            <p><Link to="/passengers" title="Пассажиры">
                Пассажиры
            </Link></p>

            <p><Link to="/" title="На главную">
                На главную
            </Link></p>

        </>
    )
}

export default SelectSeat;