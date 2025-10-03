import './OrderSearchForm.css';
import ReloadFormWay from "../../../../assets/images/reload-form-way.svg";

const OrderSearchForm = () => {

    return (
        <div className="container-search-ticket">
            <form className="form-search-ticket-order">

                <div className="form-search-headers">
                    <div className="header-search-ticket-way">Направление</div>
                    <div className="header-search-ticket-date">Дата</div>
                </div>

                <div className="form-search-inputs">
                    <input className="way-input" type="text" placeholder="Откуда" />
                    <img className="reload-way" src={ReloadFormWay} alt="" />
                    <input className="way-input" type="text" placeholder="Куда" />
                    <input className="date-input date-input-order" type="date" placeholder="дд/мм/гг" />
                    <input className="date-input date-input-order" type="date" placeholder="дд/мм/гг" />
                </div>


                <div className="form-serch-button">
                    <button className="serach-ticket-btn">найти билеты</button>
                </div>
            </form>
        </div>
    )
}

export default OrderSearchForm;