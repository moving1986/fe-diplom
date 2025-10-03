import { Link } from 'react-router-dom';
import OrderHeader from '../components/Headers/OrderHeader/OrderHeader';
import StepsLine from '../components/StepsLine';
import DetailTrip from '../components/DetailTrip';
import Footer from '../components/Footer/Footer';

const Payment = () => {

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

                        <section className="body-payment">
                            <div className="payment-card">
                                <div className="payment-header">Персональные данные</div>

                                <div className="inputs-personal-data-payment">
                                    <div>
                                        <div className="inputs-header-payment">
                                            <label for="input-surname">Фамилия</label>
                                        </div>
                                        <input className="input-surname" id="input-surname" type="text" placeholder="Мартынюк" />
                                    </div>
                                    <div className="input-personal-data">
                                        <div className="inputs-header-payment">
                                            <label for="input-name">Имя</label>
                                        </div>
                                        <input className="input-name" id="input-nmae" type="text" placeholder="Ирина" />
                                    </div>
                                    <div className="input-personal-data">
                                        <div className="inputs-header-payment">
                                            <label for="input-patronymic">Отчество</label>
                                        </div>
                                        <input className="input-patronymic" id="input-patronymic" type="text" placeholder="Эдуардовна" />
                                    </div>
                                </div>

                                <div className="input-phone-payment">
                                    <div className="inputs-header-payment">
                                        <label for="input-phone-payment">Контактный телефон</label>
                                    </div>
                                    <input className="input-phone" type="tel" name="input-phone-payment" id="input-phone-payment" placeholder="+7 ___ ___ __ __" />
                                </div>

                                <div className="input-email-payment">
                                    <div className="inputs-header-payment">
                                        <label for="input-email-payment">E-mail </label>
                                    </div>
                                    <input className="input-email" type="email" name="input-email-payment" id="input-email-payment" placeholder="inbox@gmail.ru" />
                                </div>

                                <div className="payment-header">Способ оплаты</div>

                                <div className="payment-method">
                                    <div className="check-payment-method">
                                        <div className="checkbox-online-pay">
                                            <input type="checkbox" id="online-payment" />
                                                <label for="online-payment">Онлайн</label>
                                        </div>
                                    </div>
                                    <div className="payment-options">
                                        <div className="payment-options-inner">Банковской<br />
                                            картой</div>
                                        <div className="payment-options-inner">PayPal</div>
                                        <div className="payment-options-inner">Visa QIWI Wallet</div>
                                        <div className="payment-options-inner"></div>
                                    </div>

                                </div>
                                <div className="cash-payment">
                                    <div className="checkbox-online-pay checked">
                                        <input type="checkbox" id="cash-payment" />
                                            <label for="cash-payment">Наличными</label>
                                    </div>
                                </div>
                            </div>

                            <div className="by-ticket">
                                <Link to="/order-confirm" title="Подтверждение заказа">
                                    <button className="btn-by-ticket">КУПИТЬ БИЛЕТЫ</button>
                                </Link>
                            </div>
                        </section>

                    </main>
                </div >
            </div>
            <Footer />
        </>
    );
}

export default Payment;

