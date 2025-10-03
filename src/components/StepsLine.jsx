import "./StepsLine.css";
import { useLocation } from 'react-router-dom';
const StepsLine = () => {

    const location = useLocation();
    if(location.pathname = '/passangers') {
        
    }

    return (
        <>
            <div className="covers-steps-line">
                <div className="left-cover"></div>
                <div className="steps-line">
                    <div className="steps-line-item active-load-line-hover">
                        <div className="circle">1</div>
                        <span className="steps-line-inner__text ">Начало</span>
                    </div>
                    <div className="steps-line-item-passengers active-load-line">
                        <div className="circle">2</div>
                        <span className="steps-line-inner__text">Пассажиры</span>
                    </div>
                    <div className="steps-line-item">
                        <div className="circle">3</div>
                        <span className="steps-line-inner__text">Оплата</span>
                    </div>
                    <div className="steps-line-item">
                        <div className="circle">4</div>
                        <span className="steps-line-inner__text">Проверка</span>
                    </div>
                </div>
                <div className="right-cover"></div>
            </div>
        </>
    );
}

export default StepsLine;