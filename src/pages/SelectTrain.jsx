import { Link } from 'react-router-dom';


const SelectTrain = () => {

    return (

        <>
        <div className="div">Вы попали на страницу выбора поезда</div>
        <p>     <Link to="/select-seat" title="Выбор места">
                Выбор места
            </Link></p>
        </>    
    );
}

export default SelectTrain;