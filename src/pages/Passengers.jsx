import { Link } from 'react-router-dom';
import OrderHeader from '../components/Headers/OrderHeader/OrderHeader';
import StepsLine from '../components/StepsLine';
import DetailTrip from '../components/DetailTrip';
import Footer from '../components/Footer/Footer';

import IcoRollUpCard from '../assets/images/ico-roll-up-card.svg';
import IcoWarningError from '../assets/images/ico-warning-error.svg';
import IcoSuccessData from '../assets/images/ico-success-data.svg';
import IcoAddPassengersOrange from '../assets/images/ico-add-passengers-orange.svg';
import IcoAddAnotherPassenger from '../assets/images/ico-add-another-passenger.svg';


const Passengers = () => {

    return (
        <>
            <OrderHeader />
            <StepsLine />
            <div className="light-grey-bg">
                <div className="container">
                    <main className="main-order-tickets">
                        <aside className="detail-trip">
                            <DetailTrip />
                        </aside>

                        <section>
                            <div className="body-passengers-cards">
                                <div className="select-passengers-card">
                                    <div className="header-passengers-card">
                                        <div className="ico-roll-up-card">
                                            <img src={IcoRollUpCard} alt="" />
                                        </div>
                                        <div className="header-text-card-passengers">
                                            Пассажир 1
                                        </div>
                                        <div className="close-passengers-card">&times;</div>
                                    </div>

                                    <div className="select-type-person">
                                        <select name="" id="">
                                            <option value="">Взрослый</option>
                                            <option value="">Ребенок</option>
                                        </select>
                                    </div>

                                    <div className="inputs-personal-data">
                                        <div className="input-personal-data">
                                            <div className="inputs-header">
                                                <label for="input-surname">Фамилия</label>
                                            </div>
                                            <input className="input-surname" id="input-surname" type="text" placeholder="Мартынюк" />
                                        </div>
                                        <div className="input-personal-data">
                                            <div className="inputs-header">
                                                <label for="input-name">Имя</label>
                                            </div>
                                            <input className="input-name" id="input-nmae" type="text" placeholder="Ирина" />
                                        </div>
                                        <div className="input-personal-data">
                                            <div className="inputs-header">
                                                <label for="input-patronymic">Отчество</label>
                                            </div>
                                            <input className="input-patronymic" id="input-patronymic" type="text" placeholder="Эдуардовна" />
                                        </div>
                                    </div>

                                    <div className="more-personal-data">
                                        <div>
                                            <div className="inputs-header">Пол</div>
                                            <div className="check-gender">
                                                <input type="radio" id="gender-men" name="radio-group" className="gender-radio" />
                                                <label for="gender-men" className="radio-label radio-label-right-border">М</label>

                                                <input type="radio" id="gender-women" name="radio-group" className="gender-radio" />
                                                <label for="gender-women" className="radio-label">Ж</label>
                                            </div>
                                        </div>
                                        <div className="input-birthday">
                                            <label className="inputs-header" for="birthday">Дата рождения</label>
                                            <input className="birthday-field" type="date" id="birthday" placeholder="17.02.1985" />
                                        </div>
                                    </div>

                                    <div className="checkbox-peculiarities">
                                        <input type="checkbox" />
                                        <span>ограниченная подвижность</span>
                                    </div>

                                    <div className="personal-id-data">
                                        <div className="type-document">
                                            <div className="inputs-header">
                                                Тип документа
                                            </div>
                                            <select className="passport-input" name="" id="">
                                                <option value="">Паспорт РФ</option>
                                                <option value="">Свидетельство о рождении</option>
                                            </select>
                                        </div>
                                        <div className="serrial-passport">
                                            <div className="inputs-header">
                                                <label for="serrial-passport">Серия</label>
                                            </div>
                                            <div>
                                                <input type="text" id="serrial-passport" placeholder="4 2 0 4" />
                                            </div>
                                        </div>
                                        <div className="passport-number">
                                            <div className="inputs-header">
                                                <label for="number-passport">Номер</label>
                                            </div>
                                            <div>
                                                <input type="text" id="number-passport" placeholder="3 8 0 6 9 4" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="next-passenger-line">
                                        <button className="btn-next-passenger">Следующий пассажир</button>
                                    </div>
                                </div>

                                <div className="select-passengers-card">
                                    <div className="header-passengers-card">
                                        <div className="ico-roll-up-card">
                                            <img src={IcoRollUpCard} alt="" />
                                        </div>
                                        <div className="header-text-card-passengers">
                                            Пассажир 2
                                        </div>
                                        <div className="close-passengers-card">&times;</div>
                                    </div>

                                    <div className="select-type-person">
                                        <select name="" id="">
                                            <option value="">Ребенок</option>
                                            <option value="">Взрослый</option>
                                        </select>
                                    </div>

                                    <div className="inputs-personal-data">
                                        <div className="input-personal-data">
                                            <div className="inputs-header">
                                                <label for="input-surname">Фамилия</label>
                                            </div>
                                            <input className="input-surname" id="input-surname" type="text" placeholder="Мартынюк" />
                                        </div>
                                        <div className="input-personal-data">
                                            <div className="inputs-header">
                                                <label for="input-name">Имя</label>
                                            </div>
                                            <input className="input-name" id="input-nmae" type="text" placeholder="Ирина" />
                                        </div>
                                        <div className="input-personal-data">
                                            <div className="inputs-header">
                                                <label for="input-patronymic">Отчество</label>
                                            </div>
                                            <input className="input-patronymic" id="input-patronymic" type="text" placeholder="Эдуардовна" />
                                        </div>
                                    </div>

                                    <div className="more-personal-data">
                                        <div>
                                            <div className="inputs-header">Пол</div>
                                            <div className="check-gender">
                                                <input type="radio" id="gender-men-children" name="radio-group-children" className="gender-radio" />
                                                <label for="gender-men-children" className="radio-label radio-label-right-border">М</label>

                                                <input type="radio" id="gender-women-children" name="radio-group-children" className="gender-radio" />
                                                <label for="gender-women-children" className="radio-label">Ж</label>
                                            </div>
                                        </div>
                                        <div className="input-birthday">
                                            <label className="inputs-header" for="birthday">Дата рождения</label>
                                            <input className="birthday-field" type="date" id="birthday" placeholder="17.02.1985" />
                                        </div>
                                    </div>

                                    <div className="checkbox-peculiarities">
                                        <input type="checkbox" />
                                        <span>ограниченная подвижность</span>
                                    </div>

                                    <div className="personal-id-data">
                                        <div className="type-document">
                                            <div className="inputs-header">
                                                Тип документа
                                            </div>
                                            <select className="birth-certificate-select" name="" id="">
                                                <option value="">Свидетельство о рождении</option>
                                                <option value="">Паспорт РФ</option>
                                            </select>
                                        </div>

                                        <div className="passport hidden">
                                            <div className="serrial-passport">
                                                <div className="inputs-header">
                                                    <label for="serrial-passport">Серия</label>
                                                </div>
                                                <div>
                                                    <input type="text" id="serrial-passport" placeholder="4 2 0 4" />
                                                </div>
                                            </div>
                                            <div className="passport-number">
                                                <div className="inputs-header">
                                                    <label for="number-passport">Номер</label>
                                                </div>
                                                <div>
                                                    <input type="text" id="number-passport" placeholder="3 8 0 6 9 4" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="birth-certificate">
                                            <div className="inputs-header">
                                                <label for="birth-certificate">Номер</label>
                                            </div>
                                            <div>
                                                <input className="input-number-birth-certificate error-input" type="text" id="birth-certificate" placeholder="0 0 0 0 0 0 " />
                                            </div>
                                        </div>

                                    </div>

                                    <div className="next-passenger-line hidden">
                                        <button className="btn-next-passenger">Следующий пассажир</button>
                                    </div>

                                    <div className="warning-error-line hidden">
                                        <div className="ico-warning">
                                            <img src={IcoWarningError} alt="" />
                                        </div>
                                        <div className="warning-text">
                                            Номер свидетельства о рожденни указан некорректно<br />
                                            Пример: <span>VIII-ЫП-123456</span>
                                        </div>
                                    </div>

                                    <div className="success-verification-data">
                                        <div className="ico-success-data">
                                            <img className="ico-success" src={IcoSuccessData} alt="" />
                                            Готово
                                        </div>
                                        <button className="btn-next-passenger green-bg">Следующий пассажир</button>
                                    </div>
                                </div>

                                <div className="add-passengers-card">
                                    <div className="ico-add-passenger">
                                        <img src={IcoAddPassengersOrange} alt="" />
                                    </div>
                                    <div className="add-passengers-card-text">
                                        Пассажир 3
                                    </div>
                                </div>

                                <div className="add-another-passengers">
                                    <div className="add-passengers-card-text">
                                        Добавить пассажира
                                    </div>
                                    <div className="ico-add-another">
                                        <img src={IcoAddAnotherPassenger} alt="" />
                                    </div>
                                </div>
                            </div>
                            <Link to="/payment" title="Оплата"><button className="btn-next-page active-btn">ДАЛЕЕ</button></Link>
                        </section>

                    </main>
                </div >
            </div>
            <Footer />

        </>
    )
}

export default Passengers;